const sharp = require('sharp');
const fs = require('fs');

async function run() {
    const files = ['public/hero-1.png', 'public/hero-2.png', 'public/hero-3.png', 'public/hero-5.jpg'];
    for (const f of files) {
        if (fs.existsSync(f)) {
            const metadata = await sharp(f).metadata();
            console.log(f, 'width:', metadata.width, 'height:', metadata.height);
        }
    }
}
run();
