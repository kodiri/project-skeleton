require('dotenv').config();
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const db = require('./db');
const createServer = require('./createServer');
const server = createServer();


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
    cors: {
        credentials: true, // Unsecure
        origin: process.env.FRONTEND_URL
    }
}, deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`)
})