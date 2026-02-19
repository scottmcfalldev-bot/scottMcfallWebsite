import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const src = process.argv[2] || 'public/profile-source.jpg';
if (!fs.existsSync(src)) {
  console.error(`Source file not found: ${src}`);
  console.error('Place your original photo at public/profile-source.jpg and re-run this script.');
  process.exit(1);
}

const outDir = path.dirname(src);
const sizes = [800, 1600];

(async () => {
  try {
    for (const size of sizes) {
      const jpgOut = path.join(outDir, size === 800 ? 'profile.jpg' : `profile@2x.jpg`);
      const webpOut = path.join(outDir, size === 800 ? 'profile.webp' : `profile@2x.webp`);

      await sharp(src)
        .resize({ width: size })
        .jpeg({ quality: 82, mozjpeg: true })
        .toFile(jpgOut);

      await sharp(src)
        .resize({ width: size })
        .webp({ quality: 80 })
        .toFile(webpOut);

      console.log('Wrote', jpgOut, webpOut);
    }

    // Also write a small social-friendly 1200x630 version for OG
    const ogJpg = path.join(outDir, 'profile-og.jpg');
    const ogWebp = path.join(outDir, 'profile-og.webp');
    await sharp(src)
      .resize({ width: 1200, height: 630, fit: 'cover' })
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(ogJpg);
    await sharp(src)
      .resize({ width: 1200, height: 630, fit: 'cover' })
      .webp({ quality: 80 })
      .toFile(ogWebp);
    console.log('Wrote', ogJpg, ogWebp);

    console.log('Done.');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
