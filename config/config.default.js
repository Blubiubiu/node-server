/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};



    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1564578069537_9716';

    config.security = {
            domainWhiteList: ['https://test.11vx.cn'],
            methodnoallow: {
                enable: false,
            },
            xframe: {
                enable: false,
            },
            csrf: {
                enable: false,
                headerName: 'x-csrf-token',
                ignoreJSON: false,
            },
        },

        // add your middleware config here
        config.middleware = [];

    config.cluster = {
        listen: {
            port: 7000,
            hostname: '0.0.0.0',
            // path: '/var/run/egg.sock',
        }
    };

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig,
    };
};