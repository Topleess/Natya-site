import fs from 'fs';
import https from 'https';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const urls = [
    "https://static.tildacdn.com/tild3234-6330-4537-b632-636436376434/photo_2024-03-10_22-.jpg",
    "https://static.tildacdn.com/tild3264-6565-4532-a462-346437646639/BFSAg75W0cQ_1.jpg",
    "https://static.tildacdn.com/tild6463-6238-4031-a538-623934636133/Civbb06pqXs.jpg",
    "https://static.tildacdn.com/tild3638-3133-4537-b263-616138633264/photo_2024-03-10_23-.jpg",
    "https://static.tildacdn.com/tild3762-6333-4939-a434-656664356138/photo_2024-01-15_10-.jpg",
    "https://static.tildacdn.com/tild6539-6335-4862-a462-396439306537/wjhPTq2ZYqw_1.jpg",
    "https://static.tildacdn.com/tild3230-3930-4234-b661-376364323064/FWBBh5mQu7w.jpg",
    "https://static.tildacdn.com/tild3761-3963-4132-a161-326630353731/photo_2024-03-11_09-.jpg",
    "https://static.tildacdn.com/tild3663-3534-4965-b532-323031646236/_.jpg",
    "https://static.tildacdn.com/tild3135-6561-4762-a639-393039386533/logo7194929.png",
    "https://static.tildacdn.com/tild6466-3438-4532-b764-303166303731/R_4.jpg",
    "https://static.tildacdn.com/tild3037-6564-4131-b036-326564633937/ranepa_ru.png",
    "https://static.tildacdn.com/tild3864-3039-4763-b131-316135323365/_.jpg",
    "https://static.tildacdn.com/tild3839-6633-4433-a130-333062316463/U3zZM-NzGOo.jpg",
    "https://static.tildacdn.com/tild6238-6330-4865-a561-343539396464/image.png",
    "https://static.tildacdn.com/tild3636-3761-4237-b137-636534626333/photo_2024-04-01_14-.jpg"
];

const downloadDir = path.join(__dirname, 'public', 'images', 'partners');

if (!fs.existsSync(downloadDir)) {
    fs.mkdirSync(downloadDir, { recursive: true });
}

urls.forEach((url, index) => {
    const ext = path.extname(url);
    const filename = `partner-${index + 1}${ext}`;
    const filePath = path.join(downloadDir, filename);

    const file = fs.createWriteStream(filePath);
    https.get(url, function (response) {
        response.pipe(file);
        file.on('finish', function () {
            file.close(() => console.log(`Downloaded ${filename}`));
        });
    }).on('error', function (err) {
        fs.unlink(filePath);
        console.error(`Error downloading ${filename}: ${err.message}`);
    });
});
