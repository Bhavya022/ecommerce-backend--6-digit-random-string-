const request = require('supertest');
const app = require('../src/app');
const mongoose = require('mongoose');

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe('POST /api/files/upload', () => {
  it('should upload a file and return success message', async () => {
    const res = await request(app)
      .post('/api/files/upload')
      .attach('file', 'tests/test-file.txt');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'File uploaded and encrypted successfully');
  });
});
