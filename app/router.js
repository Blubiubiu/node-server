'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test', controller.home.index);
  router.post('/user', controller.user.info);
  router.post('/comicList', controller.comicList.insertComicList);
  router.get('/uploadToken', controller.uploadToken.getUploadToken);
};
