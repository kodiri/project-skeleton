require('dotenv').config();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const db = require('./db');
const createServer = require('./createServer');
const server = createServer();

//socketio requirements for chat app
const express = require('express');
const socketio = require('socket.io');
const io = socketio(server);
const router = require('./router');

const app = express();

app.use(router);

io.on('connection', (socket) => {
    console.log('We have a new connection!');

    socket.on('disconnect', () => {
        console.log('User has left!');
    })
})
//end of socketio requirements for chat app

server.express.use(cookieParser());

server.express.use((req, res, next) => {
    const { token } = req.cookies;
    if (token) {
        const { userId } = jwt.verify(token, process.env.PRISMA_SECRET);
        req.userId = userId;
    }
    next();
});

server.express.use(async (req, res, next) => {
    if (!req.userId) return next();
    const user = await db.query.user(
        { where: { id: req.userId } },
        '{ id, permissions, email, name }'
    );
    req.user = user;
    next();
});

server.start({
    port: process.env.NODE_PORT,
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL
    }
}, deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`)
})
