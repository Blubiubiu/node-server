'use strict';

const Controller = require('egg').Controller;

class UploadTokenController extends Controller {
    async getUploadToken() {
        const { ctx } = this;
        
        const data = await ctx.service.uploadToken.token();

        ctx.body = {
            "code": 1,
            data
        };
    }
}

module.exports = UploadTokenController;