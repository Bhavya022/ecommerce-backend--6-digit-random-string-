const File = require('../models/File');

exports.uploadFile = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const newFile = new File({
    originalName: req.file.originalname,
    path: req.file.path,
  });

  try {
    await newFile.save();
    res.json({ message: 'File uploaded and encrypted successfully', path: req.file.path });
  } catch (error) {
    res.status(500).json({ error: 'Error saving file metadata' });
  }
};

exports.getFile = (req, res) => {
  res.status(403).json({ message: 'Access to the file is restricted' });
};
