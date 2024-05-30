const express = require('express');
const fileRoutes = require('./routes/fileRoutes');
const cors = require('cors')
require('dotenv').config();

const app = express();
app.use(cors()) 
app.use(express.json());
app.use('/api/files', fileRoutes);

module.exports = app;
