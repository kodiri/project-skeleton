const { forwardTo } = require('prisma-binding');

const Query = {
    users: forwardTo('db'),
    async me(parent, args, ctx, info) {
        const userId = await ctx.request.userId;
        if (!userId) {
            return null;
        }
        return ctx.db.query.user({ where: { id: ctx.request.userId } }, info);
    }
};

module.exports = Query;
