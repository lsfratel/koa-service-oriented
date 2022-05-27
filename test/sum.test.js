const req = require('supertest');
const koa = require('../loaders/koa');

const app = koa.load();

describe('sum endpoints', () => {
  test('parameters should be numbers', async () => {
    const res = await req(app.callback()).get('/v1/sum/a/2');
    expect(res.status).toBe(400);
  });

  test('1 + 3 should be 4', async () => {
    const res = await req(app.callback()).get('/v1/sum/1/3');
    expect(res.status).toBe(200);
    expect(res.body.data.sum).toBe(4);
  });
});
