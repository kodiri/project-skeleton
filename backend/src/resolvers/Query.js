const { forwardTo } = require('prisma-binding');

const Query = {
    users: forwardTo('db'),
    async me(parent, args, ctx, info) {
        const userId = await ctx.request.userId;
        return ctx.db.query.user({ where: { id: userId } }, info);
    },
    async getUser(parent, args, ctx, info) {
        const user = await ctx.db.query.users(
            {
                where: { name: args.name },
            },
            info
        );
        console.log(user);
        return user;
    },
};

module.exports = Query;
