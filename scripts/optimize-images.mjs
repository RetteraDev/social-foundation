import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = 'public/images';
const outputDir = inputDir;

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Поддерживаемые расширения
const SUPPORTED_EXTS = ['.jpg', '.jpeg', '.png'];

const files = fs.readdirSync(inputDir).filter(f => {
  const ext = path.extname(f).toLowerCase();
  return SUPPORTED_EXTS.includes(ext);
});

for (const file of files) {
  const inputFile = path.join(inputDir, file);
  const outputFile = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

  try {
    await sharp(inputFile)
      .resize(1400, null, { fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputFile);
    console.log(`✅ ${file} → ${path.basename(outputFile)}`);
  } catch (err) {
    console.error(`❌ Не удалось обработать файл: ${file}`);
    console.error(`   Причина:`, err.message);
  }
}
