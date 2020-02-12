require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const Mutations = {

    async signup(parent, args, ctx, info) {
        args.email = args.email.toLowerCase();
        const password = await bcrypt.hash(args.password, 10);
        const user = await ctx.db.mutation.createUser({
            data: {
                ...args,
                password,
                permissions: { set: ['USER'] }
            }
        }, info);
        const token = jwt.sign({ userId: user.id }, process.env.PRISMA_SECRET);
        ctx.response.cookie('token', token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 365,
        })
        return user;
    },
    async signin(parent, { email, password }, ctx, info) {
        const user = await ctx.db.query.user({ where: { email } });
        if (!user) {
            throw new Error("Maybe a user with this email doesn't exist, or maybe you tried a wrong password.");
        } else {
            const valid = await bcrypt.compare(password, user.password);
            if (!valid) {
                throw new Error("invalid password");
            } else {
                const token = jwt.sign({ userId: user.id }, process.env.PRISMA_SECRET);
                ctx.response.cookie('token', token, {
                    httpOnly: true,
                    maxAge: 1000 * 60 * 60 * 24 * 365,
                })
                return user;
            }
        }
    },
    signout(parent, args, ctx, info) {
        ctx.response.clearCookie('token');
        return { message: 'Goodbye!' };
    },


}

module.exports = Mutations;