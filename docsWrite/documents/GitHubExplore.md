# GitHub 常用库推荐

## 数据库 生成 对象

**先全局安装组件**
* cnpm i -g typeorm-model-generator

**执行命令** `记得先开启mysql`
* typeorm-model-generator -h 192.168.40.54 -d code_search -u root -x 123456 -e mysql -o . -p 3306

**gitHub**
* [typeorm-model-generator](https://github.com/Kononnable/typeorm-model-generator)

::: tip
默认的模式是 mssql, 开始以为是mysql, 报错后，发现默认不是mysql
:::

## GitHub Wiki 可以git clone下来

* 每个项目的Wiki都是一个独立的Repository
* Clone this wiki locally