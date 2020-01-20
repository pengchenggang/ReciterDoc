# 博客园随笔备份4


## webstorm 创建es6项目 babel 转 es5
`2018-12-06 14:36`

```
node 安装 webstorm 安装 略过
npm install -y //生成package.json
npm install babel-cli -g //全局安装babel-cli
//这个会在package.json 写入数据，所以一定要有package.json
npm install babel-preset-env --save-dev
```

webstorm 菜单

file - settings - tools - file watchers - 添加babel，右边点加号 添加 babel 都默认 确定就ok了。

上面的 到 import 就不好使了 

最后用webpack了

[https://www.webpackjs.com/guides/getting-started/](https://www.webpackjs.com/guides/getting-started/)


## vue2.0学习——使用webstorm创建一个vue项目
`2018-12-05 15:26`

[https://blog.csdn.net/weixin_40877388/article/details/80911934](https://blog.csdn.net/weixin_40877388/article/details/80911934)



## 用npm来部署快速一个httpweb服务器
`2018-12-05 15:05`

https://blog.csdn.net/u012182627/article/details/55060594

http-server的安装######注意事项 安装http-server的时候 用管理员权限运行cmd 如果是win10的话
npm install http-server -g

http-server的启动
http-server [path] [options]
 
 
 npm init -y
创建package
package.json里面写这个
 
"dev": "http-server -p 8083 -o"
 
每次启动就能用 npm run dev 就可以了

第8页了

