#!/usr/bin/env node

/**
 * WebP Image Converter
 * Automatically converts PNG/JPEG images to WebP format
 * Usage: node scripts/convert-images.js
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

// Color codes for console output
const colors = {
    reset: '\x1b[0m',
    bright: '\x1b[1m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m'
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function getFileSize(filePath) {
    try {
        const stats = fs.statSync(filePath);
        return stats.size;
    } catch (error) {
        return 0;
    }
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return (bytes / Math.pow(k, i)).toFixed(2) + ' ' + sizes[i];
}

function calculateReduction(originalSize, newSize) {
    if (originalSize === 0) return 0;
    return (((originalSize - newSize) / originalSize) * 100).toFixed(1);
}

async function checkCwebp() {
    try {
        await execAsync('cwebp -version');
        return true;
    } catch (error) {
        return false;
    }
}

async function convertImage(inputPath, outputPath, quality = 80, method = 6) {
    const inputSize = getFileSize(inputPath);
    
    if (inputSize === 0) {
        log(`✗ Input file not found: ${inputPath}`, 'red');
        return null;
    }

    try {
        const command = `cwebp -q ${quality} -m ${method} "${inputPath}" -o "${outputPath}"`;
        await execAsync(command);
        
        const outputSize = getFileSize(outputPath);
        const reduction = calculateReduction(inputSize, outputSize);
        
        return {
            inputPath,
            outputPath,
            inputSize,
            outputSize,
            reduction,
            success: true
        };
    } catch (error) {
        log(`✗ Error converting ${inputPath}: ${error.message}`, 'red');
        return {
            inputPath,
            outputPath,
            success: false,
            error: error.message
        };
    }
}

async function convertBatch(imageConfigs) {
    const results = [];
    let totalOriginalSize = 0;
    let totalNewSize = 0;
    let successCount = 0;
    let errorCount = 0;

    log('\n' + '='.repeat(70), 'bright');
    log('WebP Image Conversion Report', 'bright');
    log('='.repeat(70) + '\n', 'bright');

    for (const config of imageConfigs) {
        const inputPath = config.source;
        const outputPath = config.output;
        const quality = config.quality || 80;
        const method = config.method || 6;

        if (!fs.existsSync(inputPath)) {
            log(`⊘ Skipping (not found): ${inputPath}`, 'yellow');
            continue;
        }

        log(`→ Converting: ${path.basename(inputPath)}...`, 'cyan');
        
        const result = await convertImage(inputPath, outputPath, quality, method);
        
        if (result && result.success) {
            log(`  ✓ Success`, 'green');
            log(`    Original: ${formatFileSize(result.inputSize)}`);
            log(`    WebP:     ${formatFileSize(result.outputSize)}`);
            log(`    Reduced:  ${result.reduction}%\n`);
            
            results.push(result);
            totalOriginalSize += result.inputSize;
            totalNewSize += result.outputSize;
            successCount++;
        } else if (result) {
            log(`  ✗ Failed: ${result.error}\n`, 'red');
            errorCount++;
        }
    }

    // Summary
    log('='.repeat(70), 'bright');
    log('Summary', 'bright');
    log('='.repeat(70), 'bright');
    log(`✓ Successfully converted: ${successCount}`, 'green');
    log(`✗ Failed: ${errorCount}`, errorCount > 0 ? 'red' : 'green');
    log(`\nTotal original size: ${formatFileSize(totalOriginalSize)}`);
    log(`Total WebP size:    ${formatFileSize(totalNewSize)}`);
    log(`Overall reduction:  ${calculateReduction(totalOriginalSize, totalNewSize)}%`);
    log(`Bandwidth saved:    ${formatFileSize(totalOriginalSize - totalNewSize)}\n`);
    log('='.repeat(70) + '\n', 'bright');

    return { results, successCount, errorCount };
}

async function generateReport(results, outputFile = 'conversion-report.json') {
    const report = {
        timestamp: new Date().toISOString(),
        images: results,
        statistics: {
            totalImages: results.length,
            successfulConversions: results.filter(r => r.success).length,
            totalOriginalSize: results.reduce((sum, r) => sum + r.inputSize, 0),
            totalWebpSize: results.reduce((sum, r) => sum + r.outputSize, 0),
            averageReduction: (results.filter(r => r.success).reduce((sum, r) => sum + parseFloat(r.reduction), 0) / results.filter(r => r.success).length).toFixed(1)
        }
    };

    fs.writeFileSync(outputFile, JSON.stringify(report, null, 2));
    log(`✓ Report saved to: ${outputFile}`, 'green');
}

async function main() {
    log('\nChecking for cwebp installation...', 'cyan');
    
    const cwebpAvailable = await checkCwebp();
    if (!cwebpAvailable) {
        log('✗ cwebp not found. Install it using:', 'red');
        log('  macOS: brew install webp', 'yellow');
        log('  Linux: sudo apt-get install webp', 'yellow');
        log('  Windows: Download from https://developers.google.com/speed/webp/download\n', 'yellow');
        process.exit(1);
    }
    log('✓ cwebp found\n', 'green');

    // Define images to convert
    const imageConfigs = [
        {
            source: 'images/cv.pdf.png',
            output: 'images/cv.webp',
            quality: 80,
            method: 6,
            name: 'CV Preview'
        },
        {
            source: 'images/profile.png',
            output: 'images/profile.webp',
            quality: 85,
            method: 6,
            name: 'Profile Picture'
        }
        // Add more images here as needed
    ];

    // Create output directory if it doesn't exist
    const outputDir = path.dirname(imageConfigs[0].output);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
        log(`✓ Created output directory: ${outputDir}\n`, 'green');
    }

    // Convert images
    const { results, successCount, errorCount } = await convertBatch(imageConfigs);

    // Generate report
    if (results.length > 0) {
        await generateReport(results);
    }

    // Exit with appropriate code
    process.exit(errorCount > 0 ? 1 : 0);
}

// Run the converter
main().catch(error => {
    log(`\n✗ Fatal error: ${error.message}\n`, 'red');
    process.exit(1);
});
