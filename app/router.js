"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.get("/test", controller.home.index);
  router.post("/user", controller.user.info);
  // 插入comic数据
  router.post("/insertComicData", controller.insertComicData.insertComicData);
  // 获取comic list
  router.post("/getComicList", controller.getComicList.getComicList);
  // 获取comic单条数据
  router.post("/getComicData", controller.getComicData.getComicData);
  // 获取七牛token
  router.get("/uploadToken", controller.uploadToken.getUploadToken);
};
