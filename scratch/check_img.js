const sizeOf = require('image-size');
const path = require('path');
const imgPath = path.join(process.cwd(), 'public', 'chairman.jpg');
try {
  const dimensions = sizeOf(imgPath);
  console.log(JSON.stringify(dimensions));
} catch (err) {
  console.error(err);
}
