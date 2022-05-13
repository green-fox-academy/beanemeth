//const test = require('tape'); this is not required as I am using jest now
const request = require('supertest');
const app = require('../routes');

//const conn = require('./server');

describe('GET /groot', () => {
  test('should return {received: sommessage, translated: I am Groot}', async () => {
    const response = await request(app)
      .get('/groot')
      .query({ message: 'sommessage' });

    expect(response.status).toBe(200); // .expect(200)
    expect(response.body).toEqual({
      received: 'sommessage',
      translated: 'I am Groot!',
    });
  });

  test('should return {error : I am Groot}', async () => {
    const response = await request(app).get('/groot').query('');

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'I am Groot!' });
  });
});
//npm install jest
//npx jest