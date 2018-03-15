import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';

import User from '../models/user';
import BaseCtrl from './base';
import JwtToken from '../models/jwtToken'

export default class UserCtrl extends BaseCtrl {
  model = User;

  login = (req, res) => {
    this.model.findOne({ email: req.body.email }, (err, user) => {

      //Check if user exists
      if (!user) { 
        return res.sendStatus(403); 
      }

      //Check if password hashes match
      user.comparePassword(req.body.password, (error, isMatch) => {

        //No match
        if (!isMatch) { 
          return res.sendStatus(403); 
        }

        //Match, sign JWT token
        const token = jwt.sign({ user: user }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds

        let jwtToken = new JwtToken({
          token: token,
          user: user._id
        });

        jwtToken.save((err, item) => {
          // 11000 is the code for duplicate key error
          if (err && err.code === 11000) {
            res.sendStatus(400);
          }
          if (err) {
            return console.error(err);
          }
          console.log("Saved JWT token to DB");
        });

        res.status(200).json({ token: token });
      });
    });
  }

}
