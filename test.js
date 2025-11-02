// test.js
const request = require('supertest');
const app = require('./app');

describe('API Tests', () => {
  it('GET /health should return ok true', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('ok', true);
  });
});
