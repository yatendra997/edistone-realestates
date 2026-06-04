const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirmap = path.join(dir, file);
    if (fs.statSync(dirmap).isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        walkSync(dirmap, filelist);
      }
    } else {
      if (dirmap.endsWith('.tsx') || dirmap.endsWith('.ts') || dirmap.endsWith('.css')) {
        filelist.push(dirmap);
      }
    }
  });
  return filelist;
};

try {
  const dir = 'c:\\RIGTEQ-REPO\\newedi';
  const files = walkSync(dir);
  let changedFiles = 0;
  
  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    
    if (/C8A24D/i.test(content)) {
      content = content.replace(/C8A24D/ig, 'FF5C00');
      changed = true;
    }
    if (/b8913d/i.test(content)) {
      content = content.replace(/b8913d/ig, 'cc4a00');
      changed = true;
    }
    // Also increase navbar height globally if it's there
    if (file.includes('Navbar.tsx') && content.includes('h-[72px]')) {
      content = content.replace(/h-\[72px\]/g, 'h-[88px]');
      changed = true;
    }
    
    if (changed) {
      fs.writeFileSync(file, content);
      changedFiles++;
    }
  });
  
  fs.writeFileSync('c:\\RIGTEQ-REPO\\newedi\\replace_output.txt', 'Successfully replaced in ' + changedFiles + ' files.');
} catch (e) {
  fs.writeFileSync('c:\\RIGTEQ-REPO\\newedi\\replace_output.txt', 'Error: ' + e.message);
}
