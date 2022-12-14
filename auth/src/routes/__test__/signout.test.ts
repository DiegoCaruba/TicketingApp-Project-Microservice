import request from 'supertest';
import app from '../../app';

describe('Signout Test Suite', () => {

    it('clear the cookie after singing out', async () => {
        await request(app)
            .post('/api/users/signup')
            .send({
                email: 'test@test.com',
                password: 'password'
            })
            .expect(201);

        const response = await request(app)
            .post('/api/users/signout')
            .send({})
            .expect(200);

        expect(response.get('Set-Cookie')).toBeDefined();
    });

});