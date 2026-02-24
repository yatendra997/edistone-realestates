const fs = require('fs');
const path = require('path');

const DIR = 'c:\\Users\\rigteq2026\\Desktop\\RIGTEQ-REPO\\newedi';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

function processFile(file) {
    if (!file.endsWith('.tsx') && !file.endsWith('.svg') && !file.endsWith('.ts')) return;

    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Direct string replacements for the hex codes without #
    content = content.replace(/1A2F4C/gi, '111111');
    content = content.replace(/0B1B3D/gi, '111111');
    content = content.replace(/1A1615/gi, '1C1C1C');
    content = content.replace(/AF8B48/gi, 'C8A24D');
    content = content.replace(/d3a44b/gi, 'C8A24D');
    content = content.replace(/FDFBF7/gi, 'F7F7F5');
    content = content.replace(/FAFAFA/gi, 'F7F7F5');
    content = content.replace(/f5f5f7/gi, 'F7F7F5');

    // Muted text
    content = content.replace(/text-zinc-600/g, 'text-[#6B6B6B]');
    content = content.replace(/text-zinc-500/g, 'text-[#6B6B6B]');

    // Hover logic fix (after the replacement above)
    // The previous golds C8A24D on hover need to be E3C67A
    content = content.replace(/hover:bg-\[#C8A24D\]/g, 'hover:bg-[#E3C67A]');
    content = content.replace(/hover:text-\[#C8A24D\]/g, 'hover:text-[#E3C67A]');

    if (content !== original) {
        fs.writeFileSync(file, content);
        console.log("Updated: " + file);
    }
}

walkDir(path.join(DIR, 'components'), processFile);
walkDir(path.join(DIR, 'public'), processFile);
console.log('All replacements complete.');
