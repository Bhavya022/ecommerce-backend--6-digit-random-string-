const express = require('express');
const multer = require('multer');
const encryptFile = require('../middlewares/encryptFile');

const router = express.Router();

const generateRandomString = () => {
  return Math.random().toString().slice(2, 8);
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const randomString = generateRandomString();
    const filename = `${Date.now()}_${randomString}_${file.originalname}`;
    cb(null, filename);
  },
});

const upload = multer({ storage });

router.post('/upload', upload.single('file'), encryptFile, (req, res) => {
  res.json({ message: 'File uploaded and encrypted successfully', path: `uploads/${req.file.filename}` });
});

router.get('/:filename', (req, res) => {
  res.json({ message: 'Access to the file is restricted' });
});

module.exports = router;
