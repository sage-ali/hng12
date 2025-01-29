/* global describe, it, expect, beforeAll, afterAll */

const supertestRequest = require('supertest');
const appInstance = require('../src/index').default;
import { Server } from 'http';

let server: Server;
const port: number = 3000;

beforeAll(() => {
  server = appInstance.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});

afterAll(() => {
  console.log('Server closed');
  server.close();
});

const HTTP_OK = 200;

describe('GET /api', () => {
  it('should return email, datetime, and githubUrl', async () => {
    const response = await supertestRequest(server).get('/api');
    expect(response.status).toBe(HTTP_OK);
    expect(response.body).toHaveProperty('currentDatetime');
    expect(response.body).toHaveProperty('email');
    expect(response.body).toHaveProperty('githubUrl');
    expect(response.body.currentDatetime).toBeTruthy();
    expect(response.body.email).toBe('aliagboola1@gmail.com');
    /* eslint-disable comma-dangle */
    expect(response.body.githubUrl).toBe(
      'https://github.com/sage-ali/hng12/BE-stage-00'
    );
  });
});
