require('dotenv').config();
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();
server.start({
    port: process.env.NODE_PORT,
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL
    }
}, deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`)
})
