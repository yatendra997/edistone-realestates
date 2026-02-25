const fs = require('fs');
let file = fs.readFileSync('app/residential/page.tsx', 'utf8');
file = file.replace(/#ef4f00/g, '#C8A24D').replace(/#2b3a55/g, '#111111');
fs.writeFileSync('app/residential/page.tsx', file);
