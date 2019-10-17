'use strict';

const Controller = require('egg').Controller;

class UploadTokenController extends Controller {
    async getUploadToken() {
        const { ctx } = this;
        
        const data = await ctx.service.uploadToken.token();

        ctx.body = data;
    }
}

module.exports = UploadTokenController;