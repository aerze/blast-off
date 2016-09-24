// load .env file
require('dotenv').config();

// load native modules
const path = require('path');
const http = require('http');

// load npm modules
const express = require('express');
const socketio = require('socket.io');
const logger = require('morgan');
const bodyParser = require('body-parser');

// load local modules
const usersRouter = require('./routers/users');
const socketCtrl = require('./controllers/sockets');

// declare misc variables
const port = process.env.PORT;

// instatiate http and socket server
const app = express();
const server = http.Server(app);
const io = socketio(server);

// attach basic middleware
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// attach custom routes
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/users', usersRouter);

// attach io events
io.on('connection', socketCtrl.onConnection);

// open server connection
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
