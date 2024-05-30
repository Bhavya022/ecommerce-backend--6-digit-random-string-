const fs = require('fs');
const path = require('path');
const encryption = require('../utils/encryption');

module.exports = (req, res, next) => {
  const filePath = path.join(__dirname, '../uploads/', req.file.filename);
  const fileBuffer = fs.readFileSync(filePath);
  const encrypted = encryption.encrypt(fileBuffer);
  fs.writeFileSync(filePath, encrypted);
  next();
};
