# 博客园随笔备份

+ [博客园地址](https://www.cnblogs.com/pengchenggang/)

## 组件/ 外层数据初始化时候，不应该触发 on-change 事件
`2020年1月6日`

```js
watch: {
    value (value) {
      this.noOnChange = true // 外层传值 不触发on-change 事件
      this.valueCopy = value
    },
    valueCopy (value) {
      if (this.noOnChange) {
        this.noOnChange = false
      } else {
        this.$emit('on-change', value)
      }
    }
```

## watch 同步表单 记得$nextTick，否则不会同步更新到组件内
`2020年1月3日`

```js
watch: {
'formData.aaa' (val) {
  this.$nextTick(() => {
    this.formData.aaa= val.trim()
  })
},
```

## vscode 对于 md的编写 左侧 大纲 很重要！！
`2019年12月28日`

vscode 对于 md的编写 左侧 大纲 很重要！！

## vue 模板 template init
`2019年12月15日`

```js
<template>
  <div>
  </div>
</template>

<script>
export default {
  name: '模板名称',
  mixins: [],
  props: {},
  components: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  filters: {},
  created () { },
  activated () { },
  mounted () { },
  beforeDestroy () { }
}
</script>

<style lang="less">
</style>
```

## Vue.extend组件的嵌套和template外用
`2019年12月13日`
**组件嵌套分为全局组件嵌套和局部组件嵌套**
* 组件嵌套需要将子元素写在父元素内
* 子组件必须在父组件中注册之后才能在父组件的模板中使用
**全局组件嵌套**
```js
Vue.component('Father',{
    template: '<h3> father <Son></Son> </h3>'//这里要把子组件加进来
})
Vue.component('Son',{
    template: '<h3> son </h3>'
})

new Vue({
    el: '#app',
})
```
**局部组件嵌套**
```js
new Vue({
    el: '#app',
    components: {
        'Father': {
            template: '<div> father <Son/> </div>',//这里也要把子组件加进来，组件可以使用单标签
                components: {
                'Son': {//子组件必须在父组件内创建才行
                    template: '<h3> Son </h3>'
                }
            }
        }
    }
})
```
**template的外用**
**注意：template外用，组件模板中的第一个元素必须唯一**
```js
<body>
    <div id="app">
        <Hello></Hello><!---在组件模板中调用之后还要在根实例模板中调用一下--->
    </div>
    
    
    <template id="Hello">
        <div class="content"><!---这个元素必须唯一的--->
            <ul>
                <li><a href="">你好</a></li><!---里面的子元素可以多个--->
                <li><a href="">你好</a></li>
                <li><a href="">你好</a></li>
            </ul>
        </div>
    </template>
</body>
```

```js
Vue.component('Hello',{
    template: '#Hello'//这里的作用相当于根实例中的el:'app' ;作用一样，都是挂载
})

new Vue({
    el: '#app',
})
```
摘自：[https://blog.csdn.net/zhangyuea/article/details/89421424](https://blog.csdn.net/zhangyuea/article/details/89421424)

## token iviewAdmin + php 登录验证解决方案
`2019年12月12日`
**思路：**

* php 开启 Session 登录时 生成token，前端存下，然后每次走接口 验证下Session里的token和前端发过来的token是否一样。

* 遇到问题：后端 每次PHP SessionId 由于异步请求，就不一样了，每次都生成一个新的。

* 解决方案：后端生成token，把 SessionId  和 token的value值 合并，一起发给前端，存在token里

* 每次token发给后端，分解下数据，拿到 SessionId  和 前端的token，验证下 SessionId  内的 token 和前端的token 是否一样。

* 当然也涉及到后header的设置。


## vscode执行任务 和 手输npm run dev 效果不一样
vscode在执行 npm任务的时候，会先执行package的name@version 然后命令名 加 当前路径，问题是我的引入路径e是小写的，会导致调试错误，解决方案：没找到，先手书吧
 
```
Executing task: npm run build <

>name@version build e:\xxx\xxx\xxx

> vue-cli-service build
```

## 将config从内部移动到外部 3部曲
**1 创建 public/config.js**
```js
/* eslint-disable no-shadow-restricted-names */
// eslint-disable-next-line no-unused-vars
const config = (function (global, undefined) {
  let config = {}
  /**
     * @description 配置显示在浏览器标签的title
     */
  config.title = 'iView-admin'
  /**
   * @description token在Cookie中存储的天数，默认1天
   */
  config.cookieExpires = 1
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  config.useI18n = true
  /**
   * @description api请求基础路径
   */
  config.baseUrl = {
    dev: 'http://localhost/',
    pro: 'http://localhost/'
  },
    /**
     * @description 默认打开的首页的路由name值，默认为home
     */
    config.homeName = 'home'
  /**
   * @description 需要加载的插件
   */
  config.plugin = {
    'error-store': {
      showInHeader: true, // 设为false后不会在顶部显示错误日志徽标
      developmentOff: true // 设为true后在开发环境不会收集错误信息，方便开发中排查错误
    }
  }
  global.config = config
  return config
}(typeof window !== 'undefined' ? window : this))
```
**2 index.html 加入**
```
<script type='text/javascript' src='/viewDesignAdmin/config.js?${Math.random().toString(36).substr(2)}'></script>
```
**3 config/index.js 改为**
export default config

## iviewadmin url 加入 Router base viewDesignAdmin
**router/index.js**
```js
const router = new Router({
  routes,
  base: '/viewDesignAdmin/',
  mode: 'history'
})
```

**vue.config.js**
```js
const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/viewDesignAdmin'
  : '/viewDesignAdmin'
```
## phpStudy php+mysql 一键安装
配合 Navicat Premium 链接 mysql 非常好用

## rimraf node_modules 突然不能用了
rimraf node_modules 突然不能用了 怀疑是yarn的问题，从环境变量将yarn删掉，能用了

## this.current = params.page || 1 （前提是params对象一定要存在）
`2019年11月27日`
this.current = params.page || 1 （前提是params对象一定要存在）

## onOK Modal.warning iview 要写一个函数 套上，不然会得不到异步调用，直接弹出的时候就执行了
```js
export const warning = (str, callback = _ => {}, outCallback = () => {}) => {
  Modal.warning({
    // onOk: callback,
    onOk: () => { callback(outCallback) },
    title: '提示',
    content: str
  })
}
```

## ant-design-pro 如何打包成 本地html，双击即可查看
`2019年11月26日`
+ 由于 ant-design-pro 的 mock 是一个单独的服务，所以没有办法整合到一起打包。暂时我是没有找到。

+ 所以解决方案就是不用 mock 。

+ 由于 系统有异步调取，所以一旦有异步调取就会失败，所以也不能有异步。

**方案如下**

1. 删除路由权限
2. 删除基本框架异步代码
3. 删除基本框架权限代码
4. 添加hash功能
5. 编译build改为相对路径

**代码如下**

**1 config/config.ts**
```js
// component: '../layouts/SecurityLayout',
// authority: ['admin', 'user'],
// authority: ['admin'],
```

**2 src\layouts\BasicLayout.tsx**
```js
// useEffect(() => {
  //   if (dispatch) {
  //     dispatch({
  //       type: 'user/fetchCurrent',
  //     });
  //     dispatch({
  //       type: 'settings/getSetting',
  //     });
  //   }
  // }, []);
```

**3 src\layouts\BasicLayout.tsx**
```js
{/* <Authorized authority={authorized!.authority} noMatch={noMatch}> */}
      {children}
{/* </Authorized> */}
```

**4 config/config.ts  export default {**
```js
history: 'hash'
```

**5 config/config.ts  export default {**
```js
publicPath: './',
```

源码地址：[https://gitee.com/pengchenggang/local_static_antdesignpro](https://gitee.com/pengchenggang/local_static_antdesignpro)

## iview mock main.js
`2019-11-25 17:17`

**main.js**
```js
// 实际打包时应该不引入mock
/* eslint-disable */
// if (process.env.NODE_ENV !== 'production') require('@/mock')
require('@/mock')
```

## this.baseInfoList = [...this.baseInfoList]
`2019-11-25 17:17`

this.baseInfoList = [...this.baseInfoList] 所有和数组有关的操作，最后一定都展开一次，否则就没有双向绑定！！

## *fetch(_, { call, put }) { --- generator
`2019-11-20 09:47`

```js
effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },
```

## vuex 业务使用
`2019-11-12 16:50`

**1 创建变量**
```js
cityVuex.js

export default {
  state: {
    cityArr: []
  },
  mutations: {
    setCityArr (state, arr) {
      state.cityArr = arr
    }
  },
  actions: {}
}
```

**2.合并变量**
```js
import Vue from 'vue'
import Vuex from 'vuex'

import user from './module/user'
import app from './module/app'
import pageInfo from './module/pageInfo'
import cityVuex from './module/cityVuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user,
    pageInfo,
    app,
    cityVuex
  }
})
```
上面两块都是创建变量部分

**下面是页面引用**
```js
import { mapMutations, mapState } from 'vuex'

这里就是展开变量

computed: {
    ...mapState({
      cityArr: state => state.cityVuex.cityArr
    })
  },


赋值变量

methods: {
    ...mapMutations(['setCityArr']),

由于我迪调用的城市组件 可能改写原数组，所有，再转到data下用

data () {
    return {
      innerCityOptions: this.cityArr,
```

## tableZen maxHeight 解决方案
`2019-11-08 09:29`

tableZen maxHeight 解决方案 如果数据条数小于N，不进行高度设置，超过N条，直接设置高度，解决原生iview Table 对于右侧固定列，不能计算出正确数值的解决方案

## webstorm 开新项目 setting 设置@目录别名 add @ (languages & Framewors - Javascript - Webpack 4. setting eslint enable
`2019-11-07 13:59`

* webstorm 开新项目 setting 设置@目录别名 add @ (languages & Framewors - Javascript - Webpack 4. setting eslint enable
1. svn download
2. add npm run dev(check add)
3. add @ (languages & Framewors - Javascript - Webpack - C:\myHome\epan\rolanDesk\svn_work\inspectionTour_web\alias.config.js)
4. setting eslint enable

[https://blog.csdn.net/gyz718/article/details/70556188](https://blog.csdn.net/gyz718/article/details/70556188)
使用WebStorm的Macros宏指令，实现保存的同时格式化代码,并跳至行尾

**alias.config.js**
```js
const path = require('path')
module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '_c': path.resolve(__dirname, 'src/components')
    }
  }
}
```

## Checkbox 勾上 不让勾下 同步手动刷新复选框状态 iview
`2019-10-24 15:13`

```js
<Checkbox
                        v-show="!disabledForm"
                        ref="youwubianhuaRef"
                        :value="youwubianhua"
                        @input="youwubianhuaInputHandle">无变化</Checkbox>


this.$nextTick(() => {
  this.youwubianhua = false
  this.$refs.youwubianhuaRef.updateModel()
  // 事务逻辑调用函数
})
记得nextTick
```
## treeselect 异步拿到数据后 要经过一个过滤 然后放入options 否则组件会崩溃
`2019-10-22 10:42`

事件缘由：由于城市树会反复调用，所以不用api每次调用，改用数据缓存一次读取，各处使用。然后我把调用的数据放入treeselect，发现组件就崩溃了，但是api读取的数据就没问题。

查看不是props问题，也不是watch问题，因为是个数组，不是属性，所以怀疑一下。

最后发现是数据没有进行过滤导致。

```js
getOptions (data) {
      let d = data
      let parentType = d[0].parentId
      let putFn = (pid) => {
        let arr = []
        for (let i = 0, len = d.length; i < len; i++) {
          if (d[i].parentId === pid) {
            let obj = {}
            obj = { ...d[i] }
            let n = putFn(d[i].id)
            if (n.length !== 0) {
              obj.children = n
            }
            arr.push(obj)
          }
        }
        return arr
      }
      return putFn(parentType)
    },
```

## 两个div，高度都是100% 用 display:flex; 和 min-height 一边撑高了，另一边自动走 （不加flex不自动撑开）
`2019-10-18 14:22`

两个div，高度都是100% 用 display:flex; 和 min-height 一边撑高了，另一边自动走

## vue 接口 对象数组的传入传出
`2019-10-16 14:26`

**数组传入 对象的话用{...obj}**
```js
<selectFile
  :tableData="[...tableData]"
  @uploadSuccess="data => { tableData.push(data) }"></selectFile>
```
**对象数组传出**
```js
this.$emit('uploadSuccess', { ...result.data })
```

**或者**
```html
<custom-element v-bind="obj"></custom-element>
```

## typescript package.json vscode 终端 运行任务 Ctrl shift B
`2019-10-15 19:28`

```js
{
  "dependencies": {
    "typescript": "^3.6.4"
  }
}
```

## react / config\webpack.config.js 编译后去掉map 减小体积 shouldUseSourceMap = false
`2019-10-11 18:39`

react / config\webpack.config.js 编译后去掉map 减小体积 shouldUseSourceMap = false

## react / router / let location = useLocation(); 获取当前页面url hash
`2019-10-11 15:54`

[https://reacttraining.com/react-router/web/api/Hooks/uselocation](https://reacttraining.com/react-router/web/api/Hooks/uselocation)


## react 装 router - yarn add react-router-dom@next
`2019-10-11 11:06`

react 装 router

yarn add react-router-dom@next


## react 脚手架装后 运行eject报错 的 正确运行方式
`2019-10-10 10:39`

```js
git init
git add .
git commit -m 'init'
npm run eject 或者 cnpm run eject
```

## ESLint {} 内部强制有空格 .eslintrc.js 配置文件 'object-curly-spacing': ["error", "always"],
`2019-10-10 08:58`

```js
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'object-curly-spacing': ["error", "always"],
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': [2, {
      'x-invalid-end-tag': false
    }],
    'no-undef': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
```

## flex 居中
`2019-10-09 15:42`

```css
display: flex;
justify-content: space-between;
align-items: center;
```

## isEmpty 判空函数 内部分别判断是 null 空数组 等
`2019-10-09 10:08`

**import { oneOf, isEmpty } from '@/libs/tools'**
```js
export const isEmpty = (value) => {
  if (value == null) {
    return true
  }
  if (isArrayLike(value)) {
    return !value.length
  } else if (isPlainObject(value)) {
    for (let key in value) {
      if (hasOwnProperty.call(value, key)) {
        return false
      }
    }
    return true
  }
  return false
}

export const isArrayLike = (value) => {
  return value != null && isLength(value.length) && !isFunction(value)
}

export const isPlainObject = (obj) => {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

export const isLength = (value) => {
  return typeof value === 'number' && value > -1 && value % 1 === 0 && value <= Number.MAX_SAFE_INTEGER
}

export const isFunction = (value) => {
  return Object.prototype.toString.call(value) === '[object Function]'
}
```


## Iconfont-阿里巴巴矢量图标库 登录账户是 github自动登录
`2019-09-29 18:08`

Iconfont-阿里巴巴矢量图标库 登录账户是 github自动登录

## vue 阻止冒泡 @click.stop=
`2019-09-29 10:42`

::: tip
* vue中处理冒泡标准姿势
* 事件修饰符
* Vue.js 为 v-on 提供了事件修饰符，修饰符是由点开头的指令后缀来表示的。这些事件修饰符主要有以下几个:

* stop
* prevent
* capture
* prevent
* self
* once
* passive

* 看到没有，第一个'stop'就是我们想要的!
* 这些修饰符正是为了解决这些问题而生的。也就说我们只需要在模板中这样写就搞定停止冒泡了。
:::

## react build相对目录 "homepage": ".", package.json
`2019-09-27 16:59`

react build相对目录 "homepage": ".", package.json

## php 数据库 操作
`2019-09-27 12:03`

**header.php**
```php
<?php
error_reporting(0);//加上error_reporting(0);就不会弹出警告了  
// header("Content-type:text/html;charset=utf-8");
// header('Content-Type:application/x-www-form-urlencoded; charset=utf-8');

header('Content-Type:application/json; charset=utf-8');
header("Access-Control-Allow-Origin:*");

header('Access-Control-Allow-Methods:POST');

header('Access-Control-Allow-Headers:x-requested-with, content-type');
ini_set("error_reporting","E_ALL & ~E_NOTICE");

?>
```

**comm.php**
```php
<?php
class database {
  var $servername = "127.0.0.1";
  var $username = "root";
  var $password = "123456";
  var $dbname = "database";
  var $conn;

  function openConn() {
    // 创建连接
    $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
    
    // Check connection
    if ($this->conn->connect_error) {
      die("连接失败: " . $this->conn->connect_error);
    } 
    mysqli_query($this->conn, "set names utf8"); //**设置字符集***
  }

  function closeConn() {
    $this->conn->close();
  }

  function __construct() {
    $this->openConn();
  }

  function __destruct() {
      $this->closeConn();
  }

  function select($sqlStr)
  {
    // $sql = "SELECT * FROM person";
    $sql = $sqlStr;
    $result = $this->conn->query($sql);
    
    $arr1 = array();
    if ($result->num_rows > 0) {
        // 输出数据
        while($row = $result->fetch_assoc()) {
          array_push($arr1, $row);
        }
    }

    // return $arr1;

    $object = (object) [
      'data' => $arr1,
      "status" => 20
    ];
    
    print_r(json_encode($object));
  }

  function update($sqlStr) {
    if (mysqli_query($this->conn, $sqlStr)) {
      $object = (object) [
        "status" => 20
      ];
    } else {
      $object = (object) [
        "status" => 40
      ];
    }
    print_r(json_encode($object));
  }
}

?>
```

**select.php**
```php
<?php
include 'header.php';
include 'comm.php';
$d = new database();
$d->select("SELECT * FROM person");
?>
```

**update.php**
```php
<?php
include 'header.php';
include 'comm.php';

$id = $_POST['id'];
$username = $_POST['username'];
$userpass = $_POST['userpass'];

$sql = "UPDATE person SET 
username='$username',
userpass='$userpass'
 WHERE id = '$id'";

$d = new database();
$d->update($sql);

?>
```

**insert.php**
```php
<?php
include 'header.php';
include 'comm.php';

$username = $_POST['username'];
$userpass = $_POST['userpass'];
$sql = "INSERT INTO person (username, userpass) VALUES ('$username', '$userpass')";
 
$d = new database();
$d->update($sql);
?>
```

**delete.php**
```php
<?php
include 'header.php';
include 'comm.php';

$id = $_POST['id'];
$sql = "DELETE FROM person WHERE id = '$id'";

$d = new database();
$d->update($sql);
 
?>
```

* 字符集： utf8 -- UTF-8 Unicode
* 排序规则： utf8_general_ci


## mysqli_query($conn, "set names utf8"); //**设置字符集*** 不设置插入数据库就是乱码
`2019-09-26 16:26`

mysqli_query($conn, "set names utf8"); //**设置字符集*** 不设置插入数据库就是乱码

## iview admin template 基础模板架子
`2019-09-25 17:20`

[https://github.com/iview/iview-admin/tree/template](https://github.com/iview/iview-admin/tree/template)

## iview-admin里面的 axios 给包装了一层数据 libs/axios.js 数据做了一层拦截
`2019-09-25 14:57`

```js
interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use(config => {
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        // Spin.show() // 不建议开启，因为界面不友好
      }
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      this.destroy(url)
      const { data, status } = res
      return { data, status }
    }, error => {
      this.destroy(url)
      let errorInfo = error.response
      if (!errorInfo) {
        const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error))
        errorInfo = {
          statusText,
          status,
          request: { responseURL: config.url }
        }
      }
      addErrorLog(errorInfo)
      return Promise.reject(error)
    })
  }
```

```js
config: {transformRequest: {…}, transformResponse: {…}, timeout: 0, xsrfCookieName: "XSRF-TOKEN", adapter: ƒ, …}
data: {id: "1", username: "2", userpass: "3"}
headers: {content-type: "application/json; charset=utf-8", content-length: "40"}
request: MockXMLHttpRequest {custom: {…}, readyState: 4, responseURL: "http://127.0.0.1:8081/api/select.php", status: 200, statusText: "OK", …}
status: 200
statusText: "OK"
__proto__: Object
```

## mysql 如果没有密码 就不能远程连接
`2019-09-25 14:55`

mysql 如果没有密码 就不能远程连接


## 后端框架 KOA NESTjs Think.js
`2019-09-24 16:25`

后端框架 KOA NESTjs Think.js

## vscode style内置auto会导致eslint格式化 对不齐报错
`2019-09-23 17:26`

```js
"files.associations": {
    "*.vue": "vue",
    // "*.js": "javascriptreact"
  },
```

**如果是 *.vue:html 就有style自动提示，但是eslint就会报格式格式化的不对 空格个数不对**

## 解决vue在控制台的 NavigationDuplicated 相同链接报错
`2019-09-23 15:37`

```js
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
```
**放在router 的 index.js 里**

## ret.data[0]._highlight = true iview table表格高亮
`2019-09-20 17:37`

ret.data[0]._highlight = true iview table表格高亮

## tomcat 开启 vue项目 配置端口号
`2019-09-19 14:20`

tomcat 对 vue的history默认支持 tomcat 开启步骤
1. build文件放入webapps目录 
2. 进入conf目录修改server.xml端口号改成8088
3. 进入bin目录运行startup.bat
4. 浏览器 localhost:8088/workName 访问即可

## vscode灰暗色主题和 左侧加图标 Spacegray VSCode vscode-icons
`2019-09-19 11:51` `多标签测试`

vscode灰暗色主题和 左侧加图标 Spacegray VSCode vscode-icons

## vscode配置里关于 eslint配置不要有 "eslint.alwaysShowStatus": true
`2019-09-19 09:04`

```js
"eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
```

## 左侧带三角的Card css支持hover阴影
`2019-09-18 11:35`

```html
<div class="inputReportIndex">
    <div class="inner">
      <div class="left">
        <Card :bordered="false" style="height: 48%;">1</Card>
        <div style="height: 4%;"></div>
        <Card :bordered="false" style="height: 48%;">1</Card>
      </div>
      <div class="right">
        <Card :bordered="false">
          <!--<div style="background-color: aqua; width: 100%; height: 100%;"></div>-->
        </Card>
      </div>
    </div>
  </div>
```

```css
.inputReportIndex {
    display: flex; justify-content: center;align-items: center;width: 100%; height: 100%;
    .inner {
      width: 88%; height: 88%;
      .left{
        width: 62%;
        height: 100%;
        float: left;
      }
      .right{
        width: 35%;
        height: 100%;
        float: right;
        > .ivu-card {
          height: 100%;
          position: relative;
          > .ivu-card-body {
            height: 100%;
            position: relative;
            z-index: 99;
          }
          &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            transform: translate(-50%, -50%) rotate(45deg);
            width: 25px;
            height: 25px;
            background: #fff;
            transition: all 0.2s ease-in-out;
          }
          &:hover::after {
            box-shadow: -2px 2px 4px rgba(0, 0, 0, 0.11);
          }
        }
      }
    }

  }
```

## keep-alive 大量异步数据嵌入在循环体内，会有大量相同异步请求，可以缓存下拉用。
`2019-09-17 08:53`

keep-alive 大量异步数据嵌入在循环体内，会有大量相同异步请求，可以缓存下拉用。

## require.context('.', true, /\.router\.js/) webpack 编译的时候读取目录文件
`2019-09-16 15:45`

```js
const routerList = []

function importAll (r) {
  r.keys().map(value => {
    r(value).default.map(item => {
      routerList.push(item)
    })
  })
}

importAll(require.context('.', true, /\.router\.js/))
```

## 某些时候 v-if 会导致 v-modal 内部数据获取不到 也watch不到，这个时候用v-show即可，另外提一下数组要整体赋值才有双向绑定
`2019-09-12 17:28`

某些时候 v-if 会导致 v-modal 内部数据获取不到 也watch不到，这个时候用v-show即可，另外提一下数组要整体赋值才有双向绑定

## 表单配置json写入slot 表单组件
`2019-09-12 16:06`

表单配置项写法，表单写成JSON数组套对象，一行是一个数组单位，一列是一个对象单位，然后再写一个公共组件读取这个配置，循环加载slot，外层载入slot的自定义部分，比如input select等，这种写法就是把组件嵌套改为配置方式

## @on-row-click="$emit('on-row-click', arguments[0], arguments[1])" 行内返回事件的一种写法
`2019-09-12 16:03`

```js
@on-row-click="$emit('on-row-click', arguments[0], arguments[1])"
行内返回事件的一种写法
```

## table 上下左右 4根线的写法 :before :after 还有表头header的右侧overflow overflow-y
`2019-09-10 18:50`

::: tip
table 上下左右 4根线的写法 :before :after 他们就能把td里面右下的那颗线给盖上 还有body和header横向滚动的联动 || 不能把body套在header上是为了上header表头固定 || 还有表头header的右侧overflow-y 是否出现滚动条的位置 记得有一个$nextTick 要不然会获取不到高度 高度就为0了 || 横向滚动条纵向滚动条
:::

**table 上下左右 4根线的写法**

```js
<!--
* @description ----
!-->
<template>
  <div class="keyCheckersTable">
    <div class="tableZenHeader" ref="tableZenHeader">
      <tableZen ref="tableZen"
                disInnerInit
                width="1500"
                :styles="{border:0}"
                :columns="columns"
                @reload="tableZenReloadHandle">
      </tableZen>
    </div>
    <div :style="{height:innerHeight+'px' }" class="tableZenBody" ref="tableZenBody" @scroll="scrollHandle">
      <div style="height: 500px; width: 1500px;">
        123
      </div>
    </div>
  </div>
</template>

<script>
import columns from './columns'
import mockJson from './mockJson'
import buttonZen from '@/components/buttonZen'
import tableZen from '@/components/tableZen/tableZen' // 表格组件
import privateZenMixins from '@/view/biz/input/components/privateZenMixins.js'
export default {
  name: 'keyCheckersTable',
  mixins: [privateZenMixins],
  components: {
    tableZen,
    buttonZen
  },
  props: {
    diffHeight: {
      type: Number,
      default: 315
    }
  },
  data () {
    return {
      innerHeight: 0,
      mockJson,
      columns
    }
  },
  watch: {},
  computed: {},
  methods: {
    hasScrollbar () {
      this.consoleInfo('hasScrollbar', this.$refs.tableZenBody.scrollHeight, this.$refs.tableZenBody.offsetHeight)
      // return this.$refs.tableZenBody.scrollWidth > this.$refs.tableZenBody.offsetWidth
      return this.$refs.tableZenBody.scrollHeight > this.$refs.tableZenBody.offsetHeight
    },
    setScrollbar () {
      this.$nextTick(() => {
        this.setScrollbarExecute()
      })
    },
    setScrollbarExecute () {
      this.consoleInfo('this.hasScrollbar()', this.hasScrollbar())
      if (this.hasScrollbar()) { // 如果有横向滚动条
        this.$refs.tableZenHeader.style['overflow-y'] = 'scroll'
      } else {
        this.$refs.tableZenHeader.style['overflow-y'] = 'hidden'
      }
    },
    scrollHandle () {
      // this.consoleInfo('scrollHandle scrollLeft', this.$refs.tableZenBody.scrollLeft)
      this.$refs.tableZenHeader.scrollLeft = this.$refs.tableZenBody.scrollLeft
    },
    init () {
      this.calcHeight()
      this.setScrollbar()

      window.addEventListener('resize', () => {
        this.consoleInfo('resize')
        this.calcHeight()
        this.setScrollbar()
      })
    },
    calcHeight () {
      this.innerHeight = window.innerHeight - this.diffHeight
      // this.consoleInfo('height', window.innerHeight, this.diffHeight, this.innerHeight)
    },
    tableZenReloadHandle (anyParams, callback) {
      let ret = {
        total: 100,
        data: [{ a1: 'test' }]
      }
      callback(ret)
    }
  },
  created () {},
  mounted () {
    this.init()
  }
}
</script>
<style lang="less">
  .keyCheckersTable {

    border-top: 1px solid #dcdee2;
    border-left: 1px solid #dcdee2;
    position: relative;
    &:before {
      content: '';
      width: 100%;
      height: 1px;
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: #dcdee2;
      z-index: 1;
    }
    &:after {
      content: '';
      width: 1px;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      background-color: #dcdee2;
      z-index: 3;
    }
    .tableZenHeader {
      overflow-x: hidden;
      /*overflow-y: scroll;*/
    }
    .ivu-table-tip { display: none;}
    .tableZenBody {
      overflow: auto;
    }
    .ivu-table { margin-bottom: 0 !important;}
  }
</style>
```

## css hover transition 动画
`2019-09-10 10:44`

css hover 动画 transition:background-color 0.2s,color 0.2s; 外层套内层，正常是 里外层 鼠标上来 外层有hover，如果就想到里层hover触发外层hover，要用外层position 定义绝对定位，内层的hover跳出外层的div，这样视觉上就是两个单独的div，进行内外层联动。

## rimraf node_modules 删除目录 超快
`2019-09-06 10:27`

rimraf node_modules 删除目录 超快

## Python教程
`2019-09-05 19:59`

[https://space.bilibili.com/20291891/channel/detail?cid=29424](https://space.bilibili.com/20291891/channel/detail?cid=29424)

## 前端技术栈使用整理
`2019-09-02 10:44`

```
前端架构 技术栈
node
webpack
vue
iview
axios

架构框架（核心）
iview-admin
https://github.com/iview/iview-admin

架构框架2
react
Ant Design
https://github.com/ant-design/ant-design-pro
umi

其他组件
vue-cli-service 脚手架
vuex
vue-router
echarts

软件
webStorm vscode

语言
ES6

语法监测
eslint

数据模拟
mockjs

模块安装
npm/cnpm/yarn

数据后端
KOA

工具
SVN
数据接口 DOClever
项目管理 禅道
反向代理 nginx
数据缓存 redis
```

## $api 回调函数then应用
`2019-08-30 11:03`

```js
getReceiveListAPI (param) {
      return new Promise(resolve => {
        let params = {
          // idCard: this.idCard,
          // typeFlag: this.typeFlag
          ...param
        }
        this.$api('/API/dataReport/getReceiveList', params).then(res => {
          if (res.status === 20) {
            this.consoleInfo('getRepeatList res', res)
            resolve(res)
          }
        })
      })
    },
```

## 对象数组化 Object.values(this.totalValueObj).forEach(value => {
`2019-08-30 10:01`

对象数组化 Object.values(this.totalValueObj).forEach(value => {

## Ant Design Ant Design 实战教程（beta 版） 在 model 中请求服务端数据
`2019-08-29 19:50`

[https://www.yuque.com/ant-design/course/ig6mzb](https://www.yuque.com/ant-design/course/ig6mzb)

## react 环境搭建
`2019-08-27 14:14`

```dos
$ cnpm install -g create-react-app
$ create-react-app my-app (eslint报错 换下面的)
npx create-react-app my-app  --use-npm
$ cd my-app/
$ npm start
```

## 返回运行方法，可以写在一行 callback&&callback()
`2019-08-26 14:08`

`return DiscountMap[discountType] && DiscountMap[discountType](price)`

## computed 里面 不能写箭头函数 都要写 function () {} 否则页面会都不显示
`2019-08-22 19:43`

computed 里面 不能写箭头函数 都要写 function () {} 否则页面会都不显示


## webStorm -> Version Control _> Repository -> Filter By User 查看svn日志
`2019-08-22 12:44`

webStorm -> Version Control _> Repository -> Filter By User 查看svn日志


## created：异步初始化数据都应该放到 created里面
`2019-08-22 09:27`

created：异步初始化数据都应该放到 created里面

## keep-alive 必须 页面有name 要不缓存不住数据
`2019-08-21 08:46`

keep-alive 必须 页面有name 要不缓存不住数据

## consoleInfo 输出 数组套对象 不显示...的方法 序列化 再反序列化
`2019-08-20 14:31`

```js
consoleInfo (...args) {
      // console.info('this', this)
      const name = this.$options.name
      let outName = name
      if (name === 'basicInformation') outName = '111况'
     
      let args1 = []
      args.forEach((item, index) => {
        args1[index] = JSON.parse(JSON.stringify(item))
      })
      console.info(outName, '>', ...args1)
    }
```

## 判断 tableZen 是否有 横向滚动条
`2019-08-20 11:05`

```js
const outWidth = this.$refs.tableInnerZen.$el.clientWidth
const inWidth = this.$refs.tableInnerZen.$children[0].$el.clientWidth
```

## forEach 循环数组 # for in 循环对象 key # for of 循环对象 value
`2019-08-16 11:58`

forEach 循环数组 # for in 循环对象 key # for of 循环对象 value

## props watch 接口抖动
`2019-08-15 15:01`

```js
readType (val) {
      this.innerReadType = '-'
      this.$nextTick(() => {
        this.innerReadType = val
      })
    },
```

## iview Checkbox 多选框 用value 不要用v-modal 然后用updateModel 方法
`2019-08-15 11:30`

iview Checkbox 多选框 单个的时候 如果需要change 以后进行赋值 就要用value 不要用v-modal 然后用updateModel 方法

```js
noSuchSituationSetFalse () {
      this.noSuchSituationOne = false
      this.$refs.noSuchSituationRef.updateModel()
      this.noSuchSituationHandleAPI('0')
    },
    noSuchSituationSetTrue () {
      this.noSuchSituationOne = true
      this.$refs.noSuchSituationRef.updateModel()
      this.noSuchSituationHandleAPI('1')
    },
```

## JavaScript unshift() 方法
`2019-08-14 09:40`

JavaScript unshift() 方法

## 单选框 改成 复选框 的css样式
`2019-08-13 09:26`

见 radioGroupZen.vue


## 动态表单数据验证 vue
`2019-08-09 17:08`

```js
idCard: [{ validator: (rule, value, callback) => {
          if (this.idCardVif === 'idCard') {
            this.validateIdCard(rule, value, callback)
          } else {
            this.validRequired(rule, value, callback)
          }
        },
```

```html
<tcHeader required width="100px">证件号码</tcHeader>
              <FormItem prop="idCard"></FormItem>
              <!--<FormItem prop="idCardInput" class="idCardInput" v-if="idCardVif === 'idCardInput'"></FormItem>-->
              <tcContent style="width: calc(100% - 100px);">
                <inputZen max
                          v-if="idCardVif === 'idCardInput'"
                          @on-blur="valiFormItemHandle('idCard')"
                          v-model="formData.idCard" placeholder="" :maxlength="50"/>

                <id-card
                  v-if="idCardVif === 'idCard'"
                  @on-change="valiFormItemHandle('idCard')"
                  v-model="formData.idCard"
                  border="border-width:0"></id-card>
              </tcContent>
```

```js
data () {
    return {
      idCardVif: 'idCard', // 身份证组件 和 input 组件 来回切换 idCard idCardInput
```

## Pending 打断点
`2019-08-09 15:27`

**pending**

英['pendɪŋ]，美['pɛndɪŋ]

a. 未决定的, 待决的, 行将发生的, 向外伸出的

prep. 在等待...之际, 直到...时为止, 在...期间, 在...过程中


**pend**

英[pend]，美

vi. 悬而未决, 待定

 

词 源 树

pend-,pens- : = hang, 表示“悬挂”，来自拉丁语。


## chrome DevTools css :hover div上勾 :hover
`2019-08-02 17:00`

chrome DevTools 里面 css样式里面 勾上 :hover 会将鼠标移上的效果一直保持，技巧：要在鼠标上的 div上 勾 :hover

## iview Checkbox 多选框 v-model 赋值方法 this.innerValueArr = [this.previousValue]
`2019-07-31 15:20`

iview Checkbox 多选框 v-model 赋值方法 this.innerValueArr = [this.previousValue]

## webStorm ctrl+L 跳转到指定行line eclipes快捷键
`2019-07-30 14:17`

webStorm ctrl+L 跳转到指定行line eclipes快捷键

## vue中的$props、$attrs和$listeners研究 [包装iview组件]
`2019-07-10 14:35`

```js
$props：当前组件接收到的 props 对象。Vue 实例代理了对其 props 对象属性的访问。

$attrs：包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)。

$listeners：包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。
它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。
```

```js
v-bind="$attrs"
v-on="$listeners"
v-bind="$props" v-on="$listeners" （这里的props 不是想的那个 是attrs是）
```
[https://blog.csdn.net/viewyu12345/article/details/84031295](https://blog.csdn.net/viewyu12345/article/details/84031295)


## 表格树 tableTree 高度 默认maxHeight，在isFold下不起作用，后期改值 vue-table-with-tree-grid
`2019-07-10 09:44`

```js
mounted () {
  this.$refs.table.$refs['body-wrapper'].style['height'] = '300px'
}
```

## 动态高度计算 height window.addEventListener('resize', () => {
`2019-07-05 20:31`

```js
created() {
      window.addEventListener('resize', () => {
        this.helpHeight = window.innerHeight - 90
      })
    },
```

```js
return function removeEventListeners () {
    window.removeEventListener('resize', listener)
    $scrollParents.forEach($scrollParent => {
      $scrollParent.removeEventListener('scroll', listener)
    })
  }
```

## js运算【按位非】~ （index = ~~this.userIndex）双破折号 如果是数字返回数字，如果不是数字 返回0）
`2019-07-02 16:48`

**index = ~~this.userIndex**

**~~ 双破折号 如果是数字返回数字，如果不是数字 返回0**

 

这个运算符有点意思：按位非【~】

先来几个例子：

~undefined: -1

~false: -1

~true: -2

~10:-11

找出规律了吧~~

再说一下运用场景：

之前判断字符串是否存在是这样写：

```js
var str = "sdfjh2kdd";
if( str.indexOf("2")>-1 ){
  console.log("存在") 
}else{
  console.log("不存在") 
}
```

**现在可以这样写：**
```js
var str = "sdfsdfs233";
 
if( ~str.indexOf('2') ){
 
    console.log("存在")
     
}
```
位运算的效率会比运算符高，如果不了解的也正好学习一下，免得看到【按位非~】运算符一脸懵，高级程序设计里面有一章是介绍这个的，可以回去翻一番。


