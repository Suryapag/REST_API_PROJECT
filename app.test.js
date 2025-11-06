const request = require('supertest');
const app = require('./app');

describe('API Tests', () => {
  
  test('GET /health → should return ok true', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.ok).toBe(true);
  });

  test('POST /user → should create a user', async () => {
    const res = await request(app)
      .post('/user')
      .send({ name: 'Surya' });
    
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Surya');
    expect(res.body).toHaveProperty('id');
  });

  test('POST /user → should fail if name missing', async () => {
    const res = await request(app).post('/user').send({});
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe('Name required');
  });
});
