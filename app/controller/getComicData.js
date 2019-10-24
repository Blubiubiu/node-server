'use strict';

const Controller = require('egg').Controller;

class GetComicDataController extends Controller {
    async getComicData() {
        const { ctx } = this;
        const requestId = ctx.request.body.id;
        
        const data = await ctx.service.getComicData.find(requestId);
        ctx.body = {
            "code": 1,
            data
        };
    }
}

module.exports = GetComicDataController;