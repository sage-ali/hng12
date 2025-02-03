import request from 'supertest';
import app from '../src/index';
const { Server } = require('http');

let server: typeof Server;

const port: number = 3000;

beforeAll((done) => {
  server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    done();
  });
});

afterAll((done) => {
  console.log('Server closed');
  server.close(() => {
    done();
  });
});

const HTTP_OK = 200;

describe('API Endpoints', () => {
  it('should return welcome message for root path', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(HTTP_OK);
    expect(response.text).toBe('Welcome to the API');
  });

  it('should return classification for a valid number', async () => {
    const response = await request(app).get('/api/classify-number?number=153');
    expect(response.status).toBe(HTTP_OK);
    expect(response.body).toHaveProperty('number', 153);
    expect(response.body).toHaveProperty('is_prime');
    expect(response.body).toHaveProperty('is_perfect');
    expect(response.body).toHaveProperty('properties');
    expect(response.body).toHaveProperty('digit_sum');
    expect(response.body).toHaveProperty('fun_fact');
  });

  it('should return error for an invalid number', async () => {
    const response = await request(app).get('/api/classify-number?number=abc');
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('number', 'alphabet');
    expect(response.body).toHaveProperty('error', true);
  });

  it('should return error for missing number parameter', async () => {
    const response = await request(app).get('/api/classify-number');
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message', 'Missing number parameter');
    expect(response.body).toHaveProperty('error', true);
  });

  it('should return not implemented for other routes', async () => {
    const response = await request(app).get('/some-other-route');
    expect(response.status).toBe(501);
  });
});
