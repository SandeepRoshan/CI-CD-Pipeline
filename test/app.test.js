const request = require('supertest');
const app = require('../app');  // Import your app here

describe('GET /', () => {
  it('should return Hello, CI/CD!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello, CI/CD!');
    expect(res.statusCode).toBe(200);
  });
});

afterAll(() => {
  // Ensure the server is closed after all tests are complete
  app.close();
});
