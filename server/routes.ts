import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import * as authController from './controllers/auth/auth';

import AppCtrl from './controllers/app';
import UserCtrl from './controllers/user';

export default function setRoutes(app) {

  const router = express.Router();

  const appCtrl = new AppCtrl();
  const userCtrl = new UserCtrl();

  //Only unprotected route
  router.route('/login').post(userCtrl.login);

  router.route('/test').get(function(req, res, next){
    res.redirect('http://localhost:4200/login?test=123');
  });

/*
  router.use('/', function(req, res, next) {
    jwt.verify(req.query.token, process.env.SECRET_TOKEN, function(err, decoded) {
      if (err) {
        return res.status(401).json({
          title: 'Not Authenticated',
          error: err
        })
      }
      next();
    })
  });*/

  // Cats
  router.route('/apps').get(authController.isAuthenticated, appCtrl.getAll);
  //router.route('/cats').get(catCtrl.getAll);
  router.route('/apps/count').get(appCtrl.count);
  router.route('/app').post(appCtrl.insert);
  router.route('/app/:id').get(appCtrl.get);
  router.route('/app/:id').put(appCtrl.update);
  router.route('/app/:id').delete(appCtrl.delete);

  // Users
  router.route('/users').get(userCtrl.getAll);
  router.route('/users/count').get(userCtrl.count);
  router.route('/user').post(userCtrl.insert);
  router.route('/user/:id').get(userCtrl.get);
  router.route('/user/:id').put(userCtrl.update);
  router.route('/user/:id').delete(userCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

}
