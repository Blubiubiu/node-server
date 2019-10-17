/* eslint valid-jsdoc: "off" */

"use strict";
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1564578069537_9716";
  //白名单
  config.security = {
    domainWhiteList: ["https://www.11vx.cn"],
    methodnoallow: {
      enable: false
    },
    xframe: {
      enable: false
    },
    csrf: {
      enable: false,
      headerName: "x-csrf-token",
      ignoreJSON: false
    }
  };
  //数据库
  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: "39.107.96.198",
      // 端口号
      port: "3306",
      // 用户名
      user: "root",
      // 密码
      password: "123456",
      // 数据库名
      database: "test01"
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false
  };

  // add your middleware config here
  config.middleware = ["errorHandler"];

  config.cluster = {
    listen: {
      port: 7000,
      hostname: "0.0.0.0"
      // path: '/var/run/egg.sock',
    }
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig
  };
};
