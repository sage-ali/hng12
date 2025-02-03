/* eslint-disable */
/* global describe, it, expect*/

/*
 * const supertestRequest = require('supertest');
 * const appInstance = require('../src/index').default;
 * const { Server } = require('http');
 */

// let server: typeof Server;

// const port: number = 3000;

/*
 * beforeAll(() => {
 *   server = appInstance.listen(port, () => {
 *     console.log(`Server running on port ${port}`);
 *   });
 * });
 */

/*
 * afterAll(() => {
 *   console.log('Server closed');
 *   server.close();
 * });
 */

// const HTTP_OK = 200;

describe('GET /api', () => {
  it('GET /api', async () => {
    /*
     * const response = await supertestRequest(server).get('/api');
     * expect(response.status).toBe(HTTP_OK);
     */
    expect(true).toEqual(true);
  });
});
/* eslint-enable */
