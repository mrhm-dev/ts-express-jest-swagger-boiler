import request from 'supertest';
import app from '../src/app';

test('Sample Test', () => {
    expect(1).toEqual(1);
});

describe('Get /', () => {
    it('should return Hello World as JSON', (done) => {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect('Hello World').toEqual(res.body.msg);
                done();
            });
    });
});
