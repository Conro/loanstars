/*
import * as chai from 'chai';
import * as chaiHttp from 'chai-http';

process.env.NODE_ENV = 'test';
import { app } from '../app';
import App from '../models/app';

const should = chai.use(chaiHttp).should();

describe('Cats', () => {

  beforeEach(done => {
    App.remove({}, err => {
      done();
    });
  });

  describe('Backend tests for cats', () => {

    it('should get all the cats', done => {
      chai.request(app)
        .get('/api/apps')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });

    it('should get apps count', done => {
      chai.request(app)
        .get('/api/apps/count')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('number');
          res.body.should.be.eql(0);
          done();
        });
    });

    it('should create new cat', done => {
      const app = new App({ name: 'Fluffy'});
      chai.request(app)
        .post('/api/app')
        .send(app)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.a.property('name');
          done();
        });
    });

    it('should get a cat by its id', done => {
      const app = new App({ name: 'Cat'});
      app.save((error, newApp) => {
        chai.request(app)
          .get(`/api/app/${newApp.id}`)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('name');
            res.body.should.have.property('_id').eql(newApp.id);
            done();
          });
      });
    });

    it('should update a cat by its id', done => {
      const cat = new Cat({ name: 'Cat', weight: 2, age: 4 });
      cat.save((error, newCat) => {
        chai.request(app)
          .put(`/api/cat/${newCat.id}`)
          .send({ weight: 5 })
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });

    it('should delete a cat by its id', done => {
      const cat = new Cat({ name: 'Cat', weight: 2, age: 4 });
      cat.save((error, newCat) => {
        chai.request(app)
          .delete(`/api/cat/${newCat.id}`)
          .end((err, res) => {
            res.should.have.status(200);
            done();
          });
      });
    });
  });

});*/


