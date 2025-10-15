#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying static build...\n');

// Check if out directory exists
if (!fs.existsSync('out')) {
  console.error('❌ Error: out directory not found');
  process.exit(1);
}

// Check essential files
const essentialFiles = [
  'out/index.html',
  'out/404.html',
  'out/favicon.ico',
  'out/_next'
];

console.log('📁 Checking essential files:');
essentialFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - MISSING`);
  }
});

// Check asset directories
const assetDirs = [
  'out/projects',
  'out/skills', 
  'out/videos'
];

console.log('\n📂 Checking asset directories:');
assetDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    console.log(`✅ ${dir} (${files.length} files)`);
  } else {
    console.log(`❌ ${dir} - MISSING`);
  }
});

// Check HTML content for basic structure
console.log('\n📄 Checking HTML structure:');
try {
  const indexContent = fs.readFileSync('out/index.html', 'utf8');
  
  const checks = [
    { name: 'DOCTYPE declaration', test: indexContent.includes('<!DOCTYPE html>') },
    { name: 'Title tag', test: indexContent.includes('<title>') },
    { name: 'Meta viewport', test: indexContent.includes('viewport') },
    { name: 'CSS files', test: indexContent.includes('.css') },
    { name: 'JS files', test: indexContent.includes('.js') },
    { name: 'Navigation', test: indexContent.includes('nav') || indexContent.includes('Navigation') },
    { name: 'Main content', test: indexContent.includes('<main') }
  ];
  
  checks.forEach(check => {
    console.log(`${check.test ? '✅' : '❌'} ${check.name}`);
  });
  
} catch (error) {
  console.error('❌ Error reading index.html:', error.message);
}

// Check for Next.js static assets
console.log('\n⚡ Checking Next.js assets:');
const nextDir = 'out/_next';
if (fs.existsSync(nextDir)) {
  const staticDir = path.join(nextDir, 'static');
  if (fs.existsSync(staticDir)) {
    console.log('✅ Static assets directory found');
    
    // Check for chunks
    const chunksDir = path.join(staticDir, 'chunks');
    if (fs.existsSync(chunksDir)) {
      const chunks = fs.readdirSync(chunksDir);
      console.log(`✅ JavaScript chunks (${chunks.length} files)`);
    }
    
    // Check for CSS
    const cssDir = path.join(staticDir, 'css');
    if (fs.existsSync(cssDir)) {
      const cssFiles = fs.readdirSync(cssDir);
      console.log(`✅ CSS files (${cssFiles.length} files)`);
    }
  }
}

console.log('\n🎉 Static build verification complete!');
console.log('\n💡 To test locally, you can serve the out directory with:');
console.log('   npx serve out -p 3000');
console.log('   or');
console.log('   python -m http.server 3000 --directory out');