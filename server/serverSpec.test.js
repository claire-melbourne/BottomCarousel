const { TestScheduler } = require('jest');
const request = require('supertest');
const { deleteOne } = require('../database-mongodb/Furniture');
const app = require('../server/server');

describe('Server Tests', () => {
    test('Server should respond to GET request', () => {
        return request(app)
          .get('/relatedFurnitures')
          .then(response => {
            expect(response.statusCode).toBe(200);
        });
    });
});