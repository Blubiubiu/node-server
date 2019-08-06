'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async info() {
        const { ctx } = this;
        // const userId = ctx.params.id;
        // const user = await ctx.service.user.find(userId);
        // ctx.body = user;
        ctx.body = {
            id: 1
        }
    }
}

module.exports = UserController;