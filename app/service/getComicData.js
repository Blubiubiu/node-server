const Service = require('egg').Service;

class GetComicData extends Service {
    async find(id) {
        const {
            app
        } = this;
        const data = await app.mysql.get('comic_list', {
            id: id
        });
        return {
            data
        };
    }
}

module.exports = GetComicData;