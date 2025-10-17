import fs from 'node:fs';
import path from 'node:path';
import archiver from 'archiver';

const dist = 'dist';
fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const f of ['manifest.json']) {
  if (fs.existsSync(f)) fs.copyFileSync(f, path.join(dist, f));
}

if (fs.existsSync('src')) fs.cpSync('src', path.join(dist, 'src'), { recursive: true });
if (fs.existsSync('icons')) fs.cpSync('icons', path.join(dist, 'icons'), { recursive: true });

const output = fs.createWriteStream(path.join(dist, 'extension.zip'));
const archive = archiver('zip', { zlib: { level: 9 } });
archive.pipe(output);
archive.directory(dist, false);
await archive.finalize();
console.log('Build gerado em dist/ e dist/extension.zip');
