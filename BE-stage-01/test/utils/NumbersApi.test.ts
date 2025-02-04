import nock from 'nock';
import { getFunFact } from '../../src/utils/NumbersApi';

describe('getFunFact', () => {
  beforeEach(() => {
    nock.cleanAll();
  });

  it('should return a fun fact for a given number', async () => {
    const num = 42;
    const funFact = '42 is the answer to life, the universe, and everything.';
    nock('http://numbersapi.com').get(`/${num}`).reply(200, funFact);

    const result = await getFunFact(num);
    expect(result).toBe(funFact);
  });

  it('should throw an error if the request fails', async () => {
    const num = 9999999;
    const errorMessage = 'Network Error';
    nock('http://numbersapi.com').get(`/${num}`).replyWithError(errorMessage);

    await expect(getFunFact(num)).rejects.toThrow(errorMessage);
  });
});
