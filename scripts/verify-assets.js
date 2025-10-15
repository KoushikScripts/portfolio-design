#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Check if all referenced skill icons exist
const skillsDir = path.join(__dirname, '../public/skills');
const projectsDir = path.join(__dirname, '../public/projects');

console.log('Verifying asset paths...');
console.log('Skills dir:', skillsDir);
console.log('Projects dir:', projectsDir);

// Check skills directory
if (fs.existsSync(skillsDir)) {
  const skillFiles = fs.readdirSync(skillsDir);
  console.log('Available skill icons:', skillFiles.length);
  skillFiles.forEach(file => {
    const stats = fs.statSync(path.join(skillsDir, file));
    console.log(`  ${file} (${Math.round(stats.size / 1024)}KB)`);
  });
} else {
  console.error('Skills directory not found!');
}

// Check projects directory
if (fs.existsSync(projectsDir)) {
  const projectFiles = fs.readdirSync(projectsDir);
  console.log('Available project images:', projectFiles.length);
  projectFiles.forEach(file => {
    const stats = fs.statSync(path.join(projectsDir, file));
    console.log(`  ${file} (${Math.round(stats.size / 1024)}KB)`);
  });
} else {
  console.error('Projects directory not found!');
}

console.log('Asset verification complete.');