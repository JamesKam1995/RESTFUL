//server setup
const http = require('http');
const app = require('./app'); 

//Define port. If port env not set, default to use PORT 3000
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);