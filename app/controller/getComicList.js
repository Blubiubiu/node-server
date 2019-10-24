'use strict';

const Controller = require('egg').Controller;

class GetComicListController extends Controller {
    async getComicList() {
        const { ctx } = this;
        const requestData = ctx.request.body;
        
        const data = await ctx.service.getComicList.get(requestData);
        ctx.body = {
            "code": 1,
            data
        };
    }
}

module.exports = GetComicListController;