const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('./app')

chai.use(chaiHttp)
chai.should()

describe('Simple test', () => {
    it('GET / should return 200', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200)
                done()
            })
    })

    it('GET /hello should return 200', (done) => {
        chai.request(app)
            .get('/hello')
            .query({name: 'Dicoding'})
            .end((err, res) => {
                res.should.have.status(200)
                done()
            })
    })

    it('GET /notfound should return 404', (done) => {
        chai.request(app)
            .get('/notfound')
            .end((err, res) => {
                res.should.have.status(404)
                done()
            })
    })
})