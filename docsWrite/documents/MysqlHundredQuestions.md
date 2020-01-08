# MYSQL 百问百答

## 链接ip从127.0.0.1改为具体ip

**mysql 设置 开启远程可以连接ip 192.168.40.54**

* 方案一：在安装的时候以后选择可以开启远程访问。
* 方案二：因为我在安装的时候，没注意这个问题，只能后期修改一下。
 
**用 Navicat Premium**
1. 先连接数据库 表 user，然后修改 里面第一列 Host，`将原有localhost，改为%`，这样就能通过绝对ip访问了。
2. 右键新建查询 输入 FLUSH PRIVILEGES; 点击执行 刷新表格。

* ctrl+Q 新建查询 或者是 文件下的 查询表

[参考](https://www.cnblogs.com/pengchenggang/p/10811989.html)