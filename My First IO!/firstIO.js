const fs = require('fs');

function readFile(fileName) {
  const data = fs.readFileSync(fileName);
  const lines = data.toString().split('\n');
  return lines.length - 1;
}

module.exports = readFile;
