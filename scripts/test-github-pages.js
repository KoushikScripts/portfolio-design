#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Testing GitHub Pages compatibility...\n');

// GitHub Pages compatibility checks
const checks = [
  {
    name: 'Static export directory exists',
    test: () => fs.existsSync('out'),
    fix: 'Run: npm run build'
  },
  {
    name: 'Index.html exists',
    test: () => fs.existsSync('out/index.html'),
    fix: 'Ensure Next.js static export is configured correctly'
  },
  {
    name: '404.html exists',
    test: () => fs.existsSync('out/404.html'),
    fix: 'Next.js should generate this automatically'
  },
  {
    name: 'No server-side features',
    test: () => {
      const nextConfig = fs.readFileSync('next.config.js', 'utf8');
      return nextConfig.includes("output: 'export'");
    },
    fix: 'Add output: "export" to next.config.js'
  },
  {
    name: 'Images are unoptimized',
    test: () => {
      const nextConfig = fs.readFileSync('next.config.js', 'utf8');
      return nextConfig.includes('unoptimized: true');
    },
    fix: 'Add images: { unoptimized: true } to next.config.js'
  },
  {
    name: 'No dynamic routes with getServerSideProps',
    test: () => {
      // Check if any files contain getServerSideProps
      const appDir = 'app';
      if (!fs.existsSync(appDir)) return true;
      
      function checkDirectory(dir) {
        const files = fs.readdirSync(dir);
        for (const file of files) {
          const filePath = path.join(dir, file);
          const stat = fs.statSync(filePath);
          
          if (stat.isDirectory()) {
            if (!checkDirectory(filePath)) return false;
          } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            const content = fs.readFileSync(filePath, 'utf8');
            if (content.includes('getServerSideProps')) {
              return false;
            }
          }
        }
        return true;
      }
      
      return checkDirectory(appDir);
    },
    fix: 'Remove getServerSideProps or use getStaticProps instead'
  },
  {
    name: 'All assets use relative paths',
    test: () => {
      const indexContent = fs.readFileSync('out/index.html', 'utf8');
      // Check for absolute paths that might break on GitHub Pages
      return !indexContent.includes('src="http://') && !indexContent.includes('href="http://');
    },
    fix: 'Ensure all assets use relative paths'
  }
];

console.log('📋 Running compatibility checks:\n');

let allPassed = true;
checks.forEach((check, index) => {
  try {
    const passed = check.test();
    console.log(`${passed ? '✅' : '❌'} ${index + 1}. ${check.name}`);
    if (!passed) {
      console.log(`   💡 Fix: ${check.fix}`);
      allPassed = false;
    }
  } catch (error) {
    console.log(`❌ ${index + 1}. ${check.name} - Error: ${error.message}`);
    console.log(`   💡 Fix: ${check.fix}`);
    allPassed = false;
  }
});

console.log('\n📊 File size analysis:');
const outDir = 'out';
if (fs.existsSync(outDir)) {
  function getDirectorySize(dir) {
    let size = 0;
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        size += getDirectorySize(filePath);
      } else {
        size += stat.size;
      }
    });
    
    return size;
  }
  
  const totalSize = getDirectorySize(outDir);
  const sizeMB = (totalSize / (1024 * 1024)).toFixed(2);
  console.log(`📦 Total build size: ${sizeMB} MB`);
  
  if (totalSize > 100 * 1024 * 1024) { // 100MB
    console.log('⚠️  Warning: Build size is quite large for GitHub Pages');
  }
}

console.log('\n🌐 GitHub Pages deployment checklist:');
console.log('1. ✅ Repository is public (or GitHub Pro for private)');
console.log('2. ✅ Static files are in the out/ directory');
console.log('3. ✅ Configure GitHub Pages to serve from root or docs folder');
console.log('4. ✅ Custom domain (nskr.me) can be configured in repository settings');

console.log('\n🔧 Local testing:');
console.log('To test locally on port 3000, run one of these commands:');
console.log('• npx serve out -p 3000');
console.log('• python3 -m http.server 3000 --directory out');
console.log('• php -S localhost:3000 -t out');

if (allPassed) {
  console.log('\n🎉 All GitHub Pages compatibility checks passed!');
  console.log('Your site is ready for deployment to GitHub Pages.');
} else {
  console.log('\n⚠️  Some compatibility issues found. Please fix them before deploying.');
}

console.log('\n📝 Next steps for GitHub Pages deployment:');
console.log('1. Push the out/ directory contents to your gh-pages branch');
console.log('2. Or configure GitHub Actions to build and deploy automatically');
console.log('3. Set up custom domain (nskr.me) in repository settings');
console.log('4. Enable HTTPS in GitHub Pages settings');