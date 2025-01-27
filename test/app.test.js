// test/app.test.js
const request = require('supertest');
const app = require('../app');  // Import your Express app
let server;

beforeAll(() => {
  // Start the server dynamically on a free port
  server = app.listen(0, () => {
    const port = server.address().port;
    console.log(`Test server running on port ${port}`);
  });
});

afterAll(() => {
  // Close the server after the tests are complete
  server.close();
});

describe('GET /', () => {
  it('should return Hello, CI/CD!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello, CI/CD!');
    expect(res.statusCode).toBe(200);
  });
});
