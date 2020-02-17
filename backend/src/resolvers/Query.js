const { forwardTo } = require('prisma-binding');

const Query = {
    users: forwardTo('db'),
    async me(parent, args, ctx, info) {
        const userId = await ctx.request.userId;
        return ctx.db.query.user({ where: { id: userId } }, info);
    },
    async user(parent, args, ctx, info) {
        if (!ctx.request.userId) {
            // throw new Error('You arent logged in!');
        }
        const user = await ctx.db.query.users(
            {
                where: { name: args.name },
            },
            info
        );
        return user;
    },
};

module.exports = Query;
