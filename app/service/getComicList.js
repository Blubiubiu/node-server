const Service = require("egg").Service;

class GetComicList extends Service {
  async get(requestData) {
    const { app } = this;
    const total = await app.mysql.select("comic_list");

    requestData.page = requestData.page || 1;
    requestData.pageSize = requestData.pageSize || 10;

    const data = await app.mysql.select("comic_list", {
        limit: requestData.pageSize,
        offset: requestData.page * requestData.pageSize - requestData.pageSize
    });
    
    return {
      totalNum: total.length,
      data
    };
  }
}

module.exports = GetComicList;
