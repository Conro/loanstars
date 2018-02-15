import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import * as passport from 'passport';
import * as passportJWT from 'passport-jwt';
import User from '../../models/user';

/*
var jwt = require('jsonwebtoken');
var dotenv = require('dotenv');
var passport = require('passport');
var passportJWT = require('passportJWT');
var User = require('../../models/user');
*/

dotenv.load({ path: '.env' });

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;
var jwtOptions : any = {}

jwtOptions.jwtFromRequest = ExtractJwt.fromUrlQueryParameter('token');
jwtOptions.secretOrKey = process.env.SECRET_TOKEN;

//console.log(process.env.SECRET_TOKEN);
//console.log(jwtOptions);


passport.use('jwt', new JwtStrategy(jwtOptions, 
    function(jwt_payload, next) {
    console.log('payload received', jwt_payload);
    //Check for user
      User.findOne({ email: jwt_payload.user.email }, (err, user) => {

        //Check if user exists
        if (!user) { 
          next(null, false); 
        }
        else{
          next(null, user);
        }
      });
    }
  )
)

var isAuthenticated = passport.authenticate('jwt', { session : false });

export { isAuthenticated };

//exports.isAuthenticated = passport.authenticate(['jwt'], { session : false });


/*
export default class CatCtrl extends BaseCtrl {
  model = Cat;
}*/