import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';
import * as path from 'path';
import * as passport from 'passport';
import * as socketIo from 'socket.io';
import * as http from 'http';
import Nav from './models/nav';

import setRoutes from './routes';

const app = express();
const server = http.createServer(app);
const io = socketIo.listen(server);

dotenv.load({ path: '.env' });
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

mongoose.Promise = global.Promise;

//Old DB
//const mongodbURI = "mongodb://conor1123:test123@testcluster-shard-00-00-h2vrz.mongodb.net:27017,testcluster-shard-00-01-h2vrz.mongodb.net:27017,testcluster-shard-00-02-h2vrz.mongodb.net:27017/test?ssl=true&replicaSet=testCluster-shard-0&authSource=admin"
//New DB
const mongodbURI = "mongodb://test:test@loanstars-free-36-shard-00-00-q3fyp.mongodb.net:27017,loanstars-free-36-shard-00-01-q3fyp.mongodb.net:27017,loanstars-free-36-shard-00-02-q3fyp.mongodb.net:27017/test?ssl=true&replicaSet=Loanstars-Free-36-shard-0&authSource=admin"

const mongodb = mongoose.connect(mongodbURI);

mongodb
  .then((db) => {
    console.log('Connected to MongoDB');

    setRoutes(app);

    app.get('/*', function(req, res) {
      res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    if (!module.parent) {
      server.listen(app.get('port'), () => {
        console.log('Angular Full Stack listening on port ' + app.get('port'));
      });
    }

  })
  .catch((err) => {
    console.error(err);
});


io.sockets.on('connection', (socket) => {
  console.log("#-----------------Connected to Socket-----------------@# ID: ",  socket.id);
  

  Nav.watch({ fullDocument: 'updateLookup' }).
  on('change', data => {
    //console.log("Something happened?");
    
    if(data.operationType == "update") {
      console.log("IN UPDATE");
      let app = data.fullDocument.app ? data.fullDocument.app : "";
      let result = {
        location: data.fullDocument.location,
        app: app,
      }
      console.log(result);
      socket.emit('update', result);
      //console.log("update");
    }
    else if(data.operationType == "insert") {
      console.log("IN INSERT");
      //console.log(data.fullDocument);
      
      let app = data.fullDocument.app ? data.fullDocument.app : "";
      let result = {
        location: data.fullDocument.location,
        app: app,
      }
      console.log(result); 
      socket.emit('update', result);
    }
    else{
      //socket.emit('update', "error");
    }
    
  })

  socket.on('msg', (msg) => {
    console.log('socketData: '+ msg);
    //todoController.addTodo(io,Todo);
  });

  
  
})

export { app };
