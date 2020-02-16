const { forwardTo } = require('prisma-binding');

const Query = {
    users: forwardTo('db'),
    async me(parent, args, ctx, info) {
        const userId = await ctx.request.userId;
        return ctx.db.query.user({ where: { id: userId } }, info);
    },
    async getUser(parent, args, ctx, info) {
        const name = await ctx.request.name;
        return ctx.db.query.user({ where: { name: name } }, info);
    },
};

module.exports = Query;
