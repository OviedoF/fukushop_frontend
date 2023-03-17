import fs from 'fs';
import path from 'path';

export default function Sitemap() {
    const filePath = path.join(process.cwd(), 'public', 'sitemap.xml');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return fileContents;
}