#!/usr/bin/env node

const fs = require('fs');

console.log('🔍 Testing image loading...\n');

// Read the constants to get the image names being used
const constantsContent = fs.readFileSync('constants/index.ts', 'utf8');

// Extract image names from the constants
const imageMatches = constantsContent.match(/image: "([^"]+)"/g);
const imageNames = imageMatches ? imageMatches.map(match => match.match(/"([^"]+)"/)[1]) : [];

console.log('📋 Images referenced in constants:');
imageNames.forEach(name => console.log(`  - ${name}`));

console.log('\n📁 Images available in public/skills:');
const publicImages = fs.readdirSync('public/skills').filter(file => file.endsWith('.png'));
publicImages.forEach(name => console.log(`  - ${name}`));

console.log('\n📦 Images available in out/skills:');
const outImages = fs.readdirSync('out/skills').filter(file => file.endsWith('.png'));
outImages.forEach(name => console.log(`  - ${name}`));

console.log('\n❌ Missing images (referenced but not found):');
const missingImages = imageNames.filter(name => !outImages.includes(name));
if (missingImages.length === 0) {
  console.log('  ✅ All images found!');
} else {
  missingImages.forEach(name => console.log(`  - ${name}`));
}

console.log('\n🔧 Potential issues:');
console.log('1. Case sensitivity: Check if filenames match exactly');
console.log('2. File extensions: Ensure all files are .png');
console.log('3. Special characters: Some filenames have spaces or special chars');

// Check for case sensitivity issues
console.log('\n🔤 Case sensitivity check:');
imageNames.forEach(refName => {
  const exactMatch = outImages.find(outName => outName === refName);
  const caseInsensitiveMatch = outImages.find(outName => outName.toLowerCase() === refName.toLowerCase());
  
  if (!exactMatch && caseInsensitiveMatch) {
    console.log(`  ⚠️  Case mismatch: "${refName}" vs "${caseInsensitiveMatch}"`);
  }
});