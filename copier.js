const fs = require('fs');

try {
    fs.copyFileSync('C:/Users/rigteq2026/Desktop/RIGTEQ-REPO/edistone/app/page.tsx', './temp_edistone_page.tsx');
    console.log('Copied from edistone');
} catch (e) { console.error('Error 1:', e.message); }

try {
    fs.copyFileSync('C:/Users/rigteq2026/Desktop/RIGTEQ-REPO/edistone_realestate/app/page.tsx', './temp_edistone_real_page.tsx');
    console.log('Copied from edistone_realestate');
} catch (e) { console.error('Error 2:', e.message); }
