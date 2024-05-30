const mongoose = require('mongoose');
const cors = require('cors');
const app = require('./app');

const port = process.env.PORT || 3000;
console.log(process.env.MONGO_URI)
app.use(cors())
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch((err) => {
  console.error('Failed to connect to MongoDB', err);
});
