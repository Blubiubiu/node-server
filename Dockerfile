#制定node镜像的版本
FROM node:10.6.0


RUN mkdir -p /usr/src/node-app/node-server

WORKDIR /usr/src/node-app/node-server

COPY package.json /usr/src/node-app/node-server/package.json

RUN npm i --registry=https://registry.npm.taobao.org

COPY . /usr/src/node-app/koa-server
#对外暴露的端口
EXPOSE 7000
#程序启动脚本
CMD ["npm", "start"]