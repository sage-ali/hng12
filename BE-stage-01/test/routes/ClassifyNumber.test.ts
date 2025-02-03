import request from 'supertest';
import express from 'express';
import classifyNumberRouter from '../../src/routes/ClassifyNumber';

const app = express();
app.use(classifyNumberRouter);

describe('GET /classify-number', () => {
  it('should return classification for a valid number', async () => {
    const response = await request(app).get('/classify-number?number=153');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('number', 153);
    expect(response.body).toHaveProperty('is_prime');
    expect(response.body).toHaveProperty('is_perfect');
    expect(response.body).toHaveProperty('properties');
    expect(response.body).toHaveProperty('digit_sum');
    expect(response.body).toHaveProperty('fun_fact');
  });

  it('should return error for an invalid number', async () => {
    const response = await request(app).get('/classify-number?number=abc');
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('number', 'alphabet');
    expect(response.body).toHaveProperty('error', true);
  });

  it('should return error for missing number parameter', async () => {
    const response = await request(app).get('/classify-number');
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message', 'Missing number parameter');
    expect(response.body).toHaveProperty('error', true);
  });

  it('should return not implemented for other routes', async () => {
    const response = await request(app).get('/some-other-route');
    expect(response.status).toBe(501);
    expect(response.body).toHaveProperty('message', 'Not implemented');
    expect(response.body).toHaveProperty('error', true);
  });
});
