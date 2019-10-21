'use strict';

const Controller = require('egg').Controller;

class InsertComicDataController extends Controller {
    async insertComicData() {
        const { ctx } = this;
        const requestData = ctx.request.body;
        
        const data = await ctx.service.insertComicData.insert(requestData);
        ctx.body = data;
    }
}

module.exports = InsertComicDataController;