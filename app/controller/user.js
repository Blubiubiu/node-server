'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async info() {
        const { ctx } = this;
        const userId = ctx.request.body.id;
        const data = await ctx.service.user.find(userId);
        ctx.body = data;
    }
}

module.exports = UserController;