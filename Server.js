import http from 'http';
import api from './api.js';
import "./config/database.js"

const server = http.createServer(api);

server.on('listening', () => {
    console.log('Server is listening on port 8080☜(ﾟヮﾟ☜)');
});

server.listen(8080);