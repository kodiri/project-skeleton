const { forwardTo } = require('prisma-binding');


const Query = {
    users: forwardTo('db') // forwards the request directly to prisma

    // For reference to future logic implementation:
    // async users(parent, args, ctx, info) {
    //     const users = await ctx.db.query.users();
    //     return users;
    // }

};

module.exports = Query;