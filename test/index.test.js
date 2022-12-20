const request = require('supertest');
const app = require("../app");

describe('Test', () => {
    it('tests /opeartions/sum', async() => {
        const response = await request(app).get("/operations/sum?a=1&b=1");
        expect(response.body).toEqual({"result":2});
        expect(response.statusCode).toBe(200);
    });

    it('tests /opeartions/sum', async() => {
        const response = await request(app).get("/operations/sum?a=1&b=");
        expect(response.statusCode).toBe(402);
    });

    it('tests /opeartions/sub', async() => {
        const response = await request(app).get("/operations/sub?a=1&b=1");
        expect(response.body).toEqual({"result":0});
        expect(response.statusCode).toBe(200);
    });

    it('tests /opeartions/sub', async() => {
        const response = await request(app).get("/operations/sub?a=1&b=");
        expect(response.statusCode).toBe(402);
    });

    it('tests /', async() => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
    });

});


