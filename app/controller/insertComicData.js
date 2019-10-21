'use strict';

const Controller = require('egg').Controller;

class InsertComicDataController extends Controller {
    async insertComicList() {
        const { ctx } = this;
        const requestData = ctx.request.body;
        
        const data = await ctx.service.comicList.insert(requestData);
        ctx.body = data;
    }
}

module.exports = InsertComicDataController;