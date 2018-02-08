
    export function GetStoredToken() {
        const token = localStorage.getItem('token') 
        ? '?token=' + localStorage.getItem('token')
        : '';

        return token;
    }

    /*
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
          res.status(200).json({ token: token });
        });
      });
    }*/
  