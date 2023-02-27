const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require("../index")
const db = require("../models")
const Movies = db.movies


chai.use(chaiHttp);
chai.should();

describe('/POST movies', () => {
        Movies.destroy({
            where : {
                id : 1
            }
        })  
    it('it should POST new movies ', (done) => {
        let movies = {
            "id" : 1,
            "title" : "Pengabdi Setan 2 Comunion",
            "description" : "dalah sebuah film horor Indonesia tahun 2022 yang disutradarai dan ditulis oleh Joko Anwar sebagai sekuel dari film tahun 2017, Pengabdi Setan.",
            "rating" : 7,
            "image" : ""
        }
        chai.request(server)
        .post(`/movies`)
        .send(movies)
        .end((err, res) => {
            res.should.have.status(200);
        done();
        })
    })
})


describe('Movies', () => {
    describe('/GET movies', () => {
        it('it should GET all the movies', (done) => {
            chai.request(server)
                .get('/movies')
                .end((err, res) => {
                    res.body.should.be.a('object');
                    res.should.have.status(200);
                done();
                })
        });
        it('it should GET detail the movies', (done) => {
            const id = 1;
            chai.request(server)
                .get(`/movies/${id}`)
                .end((err, res) => {
                    res.body.should.be.a('object');
                    res.should.have.status(200);
                done();
                })
        })
    })
})



describe('/PATCH movies', () => {
    it('it should EDIT movies ', (done) => {
        let id = 1;
        let movies = {
            "id" : 1,
            "title" : "Pengabdi Setan 2 Comunion - Edited",
            "description" : "dalah sebuah film horor Indonesia tahun 2022 yang disutradarai dan ditulis oleh Joko Anwar sebagai sekuel dari film tahun 2017, Pengabdi Setan.",
            "rating" : 7,
            "image" : ""
        }
        chai.request(server)
        .patch(`/movies/${id}`)
        .send(movies)
        .end((err, res) => {
            res.should.have.status(200);
        done();
        })
    })
})

describe('/DELETE movies', () => {
    it('it should DELETE movies ', (done) => {
        let id = 1;
        chai.request(server)
        .delete(`/movies/${id}`)
        .end((err, res) => {
            res.should.have.status(200);
        done();
        })
    })
})