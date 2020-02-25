// This file connects to the remote prisma DB and gives the ability 
// to query it with JS
const { Prisma } = require('prisma-binding');
require('dotenv').config();

const db = new Prisma({
    typeDefs: "src/generated/prisma.graphql",
    endpoint: x,
    debug: false,
})

module.exports = db;
