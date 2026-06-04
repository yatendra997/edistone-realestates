const fs = require('fs');

function getJpegSize(buffer) {
    let offset = 2; // skip FFD8
    while (offset < buffer.length) {
        if (buffer[offset] !== 0xFF) break;
        let marker = buffer[offset + 1];
        let length = buffer.readUInt16BE(offset + 2);
        // C0 to C3, C5 to C7, C9 to CB, CD to CF
        if ((marker >= 0xC0 && marker <= 0xCF) && 
            marker !== 0xC4 && marker !== 0xC8 && marker !== 0xCC) {
            let height = buffer.readUInt16BE(offset + 5);
            let width = buffer.readUInt16BE(offset + 7);
            return { width, height };
        }
        offset += length + 2;
    }
    return null;
}

const files = [
    'public/Gallery-1.jpeg',
    'public/Gallery-2.jpeg',
    'public/Gallery-3.jpeg',
    'public/Gallery-4.jpeg',
    'public/Gallery-5.jpeg',
    'public/Gallery-6.jpeg',
    'public/Gallery-7.jpeg',
    'public/Gallery-8.jpeg'
];

files.forEach(f => {
    try {
        const buf = fs.readFileSync(f);
        const size = getJpegSize(buf);
        if (size) {
            console.log(f, size.width, size.height, size.height > size.width ? "vertical" : "horizontal");
        } else {
            console.log(f, "could not determine");
        }
    } catch(e) {
        console.log(f, e.message);
    }
});
