import request from 'supertest';
import app from '../src/app';


describe('GET /', () => {
    it('should return hello message', async () => {
        const res = await request(app).get('/');

        expect(res.status).toBe(200);
        expect(res.body).toEqual({ message: 'Hello world' });
    });
});
