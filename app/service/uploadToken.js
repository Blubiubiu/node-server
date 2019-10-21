const Service = require("egg").Service;
const qiniu = require("qiniu");

class UploadTokenService extends Service {
  async token() {
    const accessKey = "9Z7lCH-vkt5VPsXroQWyTYoBNvMx6q17Up60uxjm";
    const secretKey = "XB2COWDAHCZU31EJs-h5exGi2iuWEJkjnBAsFDA6";
    const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    const options = {
      scope: "11vx-image"
    };
    const putPolicy = new qiniu.rs.PutPolicy(options);
    const uploadToken = putPolicy.uploadToken(mac);
    return uploadToken;
  }
}

module.exports = UploadTokenService;
