let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();


chai.use(chaiHttp);

describe('Sum', () => {
    describe('/GET sum?a=1&b=1', () => {
        it('it should sum 1+1 and return 2', (done) => {
            chai.request(server)
                .get('/sum?a=1&b=1')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.to.be.json;
                    res.body.result.should.be.eql(2);
                    done();
                });
        });
    });

});