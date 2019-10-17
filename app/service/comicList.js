const Service = require('egg').Service;

class ComicListService extends Service {
    async insert(data) {
        const {
            app
        } = this;
        const result = await app.mysql.insert('comic_list', data);
        // 判断插入成功
        const insertSuccess = result.affectedRows === 1;
        if (insertSuccess) {
            return {
                "code": 1,
                "message": "success"
            }
        }
    }
}

module.exports = ComicListService;