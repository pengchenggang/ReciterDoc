# 博客园随笔备份3

## chart 图片组件 生成后不能动态更新，需要销毁dom，从新载入 用 v-if 和 this.$nextTick(() => {
`2019-02-15 08:24`

```html
<chart-box v-if="cbData1Bool"
cb-text="基本概况"
chartBoxSele="饼状图"
:cb-width="cbWidth"
:cb-height="cbHeight"
:cb-data="cbData1"
style="float:left; margin-right:50px;"></chart-box>
```
data下

cbData1Bool: false,
 
方法下

```js
this.cbData1Bool = false
this.$nextTick(() => {
this.cbData1Bool = true
})
```



## iview table 勾选当前行代码 data key _checked: true
`2019-02-13 14:02`

给 data 项设置特殊 key _checked: true 可以默认选中当前项


## Object.assign(o1, o2, o3) 对象 复制 合拼
`2019-02-13 11:58`

```js
var o1 = {a: 1};
var o2 = {b: 2};
var o3 = {c: 3};

var obj = Object.assign(o1, o2, o3);
console.log(obj); //{a: 1, b: 2, c: 3}
console.log(o1); //{a: 1, b: 2, c: 3}, 目标对象被改变了
```

[http://www.cnblogs.com/heiye168/p/5689006.html](http://www.cnblogs.com/heiye168/p/5689006.html)



## vscode vue template 下 style 的样式自动提示 #bug 这个搞完vue语法esLint就又不好使了，ERR
`2019-02-12 15:29`

网上都是 "*.vue": "vue"，改成"*.vue": "html" 就ok了
 
```json
"files.associations": {
"*.vue": "html"
}
```
失败了

## VsCode使用之HTML 中 CSS Class 智能提示
`2019-02-12 11:48`

HTML 中 CSS Class 智能提示

安装插件：HTML CSS Support

设置中添加以下代码：

```json
"editor.parameterHints": true,
"editor.quickSuggestions": {
    "other": true,
    "comments": true,
    "strings": true
```

## this.$Message.success('提示信息') 少写了一个c 导致报错
`2019-02-12 11:40`

this.$Message.success('提示信息') 少写了一个c 导致报错 

而且 $Message 输出还没显示，导致我以为是没有 $Message 对象了，其实全局对象直接调用即可


## Jenkins java svn同步 自动构建
`2019-02-11 21:48`

Jenkins java svn同步 自动构建


## index 定义 v-for 未使用变量 实际是没有 :key="index"
`2019-02-11 09:52`

需要有 :key="index"

```html
<Checkbox :label="item.key"
                            :key="index"
                            v-for="(item, index) in specialtyServiceAryList">
                    <span>{{item.value}}</span>
                  </Checkbox>
```



## Postman 安装及使用入门教程 | 前后台 写接口的 徐工给的
`2019-02-03 11:14`

[https://www.cnblogs.com/mafly/p/postman.html](https://www.cnblogs.com/mafly/p/postman.html)


## javascript.json snippets vscode 注释
`2019-02-03 09:36`

vscode vue js里面的注释

javascript.json

```json
{
  // Place your global snippets here. Each snippet is defined under a snippet name and has a scope, prefix, body and 
  // description. Add comma separated ids of the languages where the snippet is applicable in the scope field. If scope 
  // is left empty or omitted, the snippet gets applied to all languages. The prefix is what is 
  // used to trigger the snippet and the body will be expanded and inserted. Possible variables are: 
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. 
  // Placeholders with the same ids are connected.
  // Example:
  // "Print to console": {
  //     "scope": "javascript,typescript",
  //     "prefix": "log",
  //     "body": [
  //         "console.log('$1');",
  //         "$2"
  //     ],
  //     "description": "Log output to console"
  // }

  "注释": {
    "prefix": "//",
    "body": [
      "// * --------------------------------------",
      "// *",
      "// *",
      "// * @description:$0",
      "// *",
      "// *",
      "// * @author 彭成刚",
      "// * @date $CURRENT_YEAR/$CURRENT_MONTH/$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND",
      "// * --------------------------------------",
    ],
    "description": "vue初始化页面"
  }


}
```

## vscode 打开新文件不替换旧文件
`2019-02-03 09:09`

设置 `"workbench.editor.enablePreview": false`


## vscode 用户代码片段 vue初始化模板 Snippet
`2019-02-02 16:57`

vscode 用户代码片段 vue初始化模板 Snippet #新加入开头注释 自动生成文件名 开发日期时间等内容

vue文件模板

模板变量

[https://code.visualstudio.com/docs/editor/userdefinedsnippets#_variables](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_variables)

vue.json

```html
{
  // Place your snippets for vue here. Each snippet is defined under a snippet name and has a prefix, body and 
  // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
  // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
  // same ids are connected.
  // Example:
  // "Print to console": {
  //     "prefix": "log",
  //     "body": [
  //         "console.log('$1');",
  //         "$2"
  //     ],
  //     "description": "Log output to console"
  // }

  "vue": {
    "prefix": "vue",
    "body": [
      "<!--",
      "* @description $1",
      "* @fileName $TM_FILENAME",
      "* @author 彭成刚",
      "* @date $CURRENT_YEAR/$CURRENT_MONTH/$CURRENT_DATE $CURRENT_HOUR:$CURRENT_MINUTE:$CURRENT_SECOND",
      "* @version V1.0.0",
      "!-->",
      "<template>",
      "  <div>$0</div>",
      "</template>",
      "",
      "<script>",
      "export default {",
      "  data () {",
      "    return {",
      "    }",
      "  },",
      "",
      "  components: {},",
      "",
      "  computed: {},",
      "",
      "  //mounted: {},",
      "",
      "  methods: {}",
      "}",
      "",
      "</script>",
      "<style lang='less' scoped>",
      "</style>"
    ],
    "description": "vue初始化页面"
  }

}
```

## ignore-on-commit 忽略提交svn
`2019-02-01 16:18`

ignore-on-commit svn 更改文件后 默认不提交文件到服务器（服务器上已存在的文件）

不用那个忽略文件那个，那个功能是删除服务器的文件，然后本地还存在，不符合我的要求

我的要求是 服务器文件在，我不动，然后我改完了，和别人的不冲突，我也不覆盖别人的文件

主要就是默认不提交，这个很重要

ignore-on-commit

<img :src="$withBase('/assets/cnblogsImg/10346208.jpg')" />



## project .mpp 查看当天工作任务 1.选择自己 2.选择起始和终止时间 就显示当天的任务了
`2019-02-01 16:12`

project .mpp 查看当天工作任务 1.选择自己 2.选择起始和终止时间 就显示当天的任务了


## vscode setting.json
`2019-02-01 14:42`

setting.json

```json
{
  "sync.gist": "#github的码##",
  "sync.lastUpload": "2018-08-26T06:45:07.435Z",
  "sync.autoDownload": false,
  "sync.autoUpload": false,
  "sync.lastDownload": "2018-05-15T06:30:38.965Z",
  "sync.forceDownload": false,
  "sync.host": "",
  "sync.pathPrefix": "",
  "sync.quietSync": false,
  "sync.askGistName": false,
  "sync.removeExtensions": true,
  "sync.syncExtensions": true,
  "editor.fontSize": 16,
  "workbench.colorTheme": "Dracula Soft",
  "view-in-browser.customBrowser": "chrome",
  "explorer.confirmDragAndDrop": false,
  "explorer.confirmDelete": false,
  "[vue]": {},
  "background.useDefault": false,
  "background.customImages": [
    "file:///D:/bg1.jpg",
    "file:///D:/bg2.jpg",
    "file:///D:/bg3.jpg"
  ],
  "background.style": {
    "content": "''",
    "pointer-events": "none",
    "position": "absolute",
    "z-index": "99999",
    "width": "100%",
    "height": "100%",
    "background-color": "#282A36",
    "background-position": "100% 100%",
    "background-repeat": "no-repeat",
    "opacity": 0.9
  },
  "background.useFront": false,
  "window.zoomLevel": 0,
  "search.location": "sidebar",
  "workbench.activityBar.visible": true,
  "window.menuBarVisibility": "toggle",
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/bower_components": true
  },
  "terminal.integrated.shell.windows": "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe",
  "git.ignoredRepositories": [
    "https://github.com/iview/iview-admin"
  ],
  "git.checkoutType": "local",
  "git.autoRepositoryDetection": false,
  "git.autorefresh": false,
  "editor.detectIndentation": false,
  "editor.formatOnSave": true,
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "prettier.eslintIntegration": true,
  "prettier.semi": false,
  "prettier.singleQuote": true,
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "force-aligned"
    },
    "prettyhtml": {
      "printWidth": 100,
      "singleQuote": false
    }
  },
  "editor.tabSize": 2,
  "todo-tree.defaultHighlight": {
    "foreground": "green",
    "type": "none"
  },
  "todo-tree.customHighlight": {
    "TODO": {},
    "FIXME": {}
  },
  "workbench.iconTheme": "vscode-icons",
  "git.autofetch": true,
  "git.enableSmartCommit": true,
  "git.confirmSync": false,
  "vetur.validation.template": false,
  "vetur.format.defaultFormatter.html": "js-beautify-html"
  // "terminal.integrated.shell.windows": "D:\\cmder\\Cmder.exe"
}
```


我以前不好用的 但是颜色比较喜欢的黑色的

```json
{
    "window.zoomLevel": 2,
    "workbench.iconTheme": "vscode-icons",
    "terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\cmd.exe",
    "editor.tabSize": 2,
    "vetur.validation.template": false,
    "vetur.format.defaultFormatter.js": "vscode-typescript",
    "[vue]": {},
    "emmet.includeLanguages": {
        "vue": "html",
        "vue-html": "html"
    },
    "files.associations": {
        "*.vue": "html"
    },
    "editor.quickSuggestions": {
        "other": true,
        "comments": true,
        "strings": true
    },

    //配置eslint
    "eslint.autoFixOnSave": true,
    "files.autoSave": "off",
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "html",
        {
            "language": "vue",
            "autoFix": true
        }
    ],
    "eslint.options": {
        "plugins": ["html"]
    },
    "search.exclude": {
        "**/node_modules": true,
        "**/bower_components": true,
        "**/dist": true
      }




}
```


## 油猴和EX-百度脚本 百度网盘下载
`2019-01-31 22:40`

pansoso.com 搜网盘

油猴和EX-百度脚本.zip

[https://aleikeji.pipipan.com/fs/845023-331102839](https://aleikeji.pipipan.com/fs/845023-331102839)


## slides 在线ppt && React && Angular
`2019-01-31 22:10`

现在主流前端框架 有3个 Vue React Angular

如果有时间就都学习，理解一下他们的差异性~

 

在线ppt的一个网站 这个是npm讲解的，不错

[https://slides.com/seldo/npm-future-of-javascript](https://slides.com/seldo/npm-future-of-javascript)



## iview table icon dorpdown html页面级别vue组件 #vuez#
`2019-01-31 11:43`

[https://www.cnblogs.com/pengchenggang/p/10341327.html](https://www.cnblogs.com/pengchenggang/p/10341327.html)


## 字符串压缩工具 https://www.npmjs.com/package/pako
`2019-01-30 16:12`

[https://www.npmjs.com/package/pako](https://www.npmjs.com/package/pako)


## iview 的 Carousel 走马灯 焦点图 不能用 建议换/vue-awesome-swiper
`2019-01-30 12:55`

[https://www.npmjs.com/package/vue-awesome-swiper](https://www.npmjs.com/package/vue-awesome-swiper)


## iview table的render()函数基本的用法
`2019-01-25 15:41`

```js
render:(h,params) => {
  return h(" 定义的元素 "，{ 元素的性质 }，" 元素的内容"/[元素的内容])
}
```


## iview Tree数据格式问题,无限递归树处理数据
`2019-01-24 16:35`

[https://juejin.im/post/5b51a8a4e51d455d6825be20](https://juejin.im/post/5b51a8a4e51d455d6825be20)

最新都用 treeselect组件


## 用JSON-server模拟REST API
`2019-01-24 16:34`

[https://www.cnblogs.com/ys-wuhan/p/6387791.html](https://www.cnblogs.com/ys-wuhan/p/6387791.html)


## vue-cli 打包后显示favicon.ico小图标
`2019-01-24 16:33`

[https://www.cnblogs.com/mmzuo-798/p/9285013.html](https://www.cnblogs.com/mmzuo-798/p/9285013.html)


## 数据传递-vuex this.$store.commit is not a function
`2019-01-24 16:33`

解决vue不相关组件之间的数据传递----vuex的学习笔记，解决报错this.$store.commit is not a function

[https://www.cnblogs.com/jasonwang2y60/p/6433082.html](https://www.cnblogs.com/jasonwang2y60/p/6433082.html)


## iview中刷新页面的时候更新导航菜单的active-name
`2019-01-24 16:32`

[https://blog.csdn.net/lhjuejiang/article/details/83212070](https://blog.csdn.net/lhjuejiang/article/details/83212070)


## treeGrid 树形表格
`2019-01-24 16:32`

treeGrid 树形表格

[https://fly.layui.com/extend/treeGrid/](https://fly.layui.com/extend/treeGrid/)


## webpack+vuecli打包生成资源相对引用路径与背景图片的正确引用
`2019-01-24 16:31`

[https://www.cnblogs.com/moqiutao/p/7496718.html](https://www.cnblogs.com/moqiutao/p/7496718.html)



## 在.vue文件中让html代码自动补全的方法(支持vscode)
`2019-01-24 16:28`

在.vue文件中让html代码自动补全的方法(支持vscode) 

**这种发现 属于bug的一种，不适用**

https://blog.csdn.net/qq_36529459/article/details/79196763

```json
"files.associations": {
"*.vue": "html"
},
```

## 解决VSCode中使用vetur插件格式化vue文件时，js代码会自动加上冒号和分号
`2019-01-24 15:43`

解决VSCode中使用vetur插件格式化vue文件时，js代码会自动加上冒号和分号

在设置中把`"vetur.format.defaultFormatter.js": "prettier",`

改为 `"vetur.format.defaultFormatter.js": "vscode-typescript"`



## Modal 下面的 v-model 就是显示不显示 true 或 false
`2019-01-24 09:47`

Modal 下面的 v-model 就是显示不显示 true 或 false


## import downloadjs from 'downloadjs'
`2019-01-24 09:01`

import downloadjs from 'downloadjs' 如果是自己写的函数 没用默认导出 记得加花括号 例如 import { download } from './data.js'



## js文件下载代码 import downloadjs from 'downloadjs'
`2019-01-23 16:43`

```js
function logDownload(contribution_id) {
  setTimeout(function () {
        $.ajax({
              url: "/ajax/Wallpaper/LogDownload",
              type:'POST',
              cache:false,
              dataType:'json',
              data:{'contribution_id':contribution_id},
              success:function(response){}
            });
  },1200);
}
```

## vscode 配置import @ 路径提示及代码智提
`2019-01-22 17:56`

vscode 配置import @ 路径提示及代码智提

[https://www.jianshu.com/p/8f18ecacc4b5](https://www.jianshu.com/p/8f18ecacc4b5)


## vs code 插件list
`2019-01-22 16:22`

<img :src="$withBase('/assets/cnblogsImg/2019-01-22-1.jpg')" />

<img :src="$withBase('/assets/cnblogsImg/2019-01-22-2.jpg')" />


## Promise
`2019-01-22 13:54`

```js
return new Promise((resolve, reject) => {
        //your code
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
```


## axios中为所有请求带上Token头
`2019-01-22 11:17`

[https://www.imooc.com/article/27751](https://www.imooc.com/article/27751)


## axios 两种异步模式，代理模式 和 异步模式
`2019-01-21 15:20`

axios 两种异步模式，代理模式 和 异步模式

<img :src="$withBase('/assets/cnblogsImg/20190121.png')" />


## lodash中文说明文档
`2019-01-21 11:03`

lodash中文说明文档

[https://www.lodashjs.com/](https://www.lodashjs.com/)


## axios添加了header信息后发送的get请求自动编程option请求了
`2019-01-21 09:59`

webpack 代理转发

Provisional headers are shown

**在Vue中如何使用axios跨域访问数据**

如果你是跨域请求，服务端返回响应时需要添加headers: Access-Control-Allow-Origin: *

express:

```js
// Website you wish to allow to connect
res.setHeader('Access-Control-Allow-Origin', '*');
// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
// Request headers you wish to allow
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
// Set to true if you need the website to include cookies in the requests sent
// to the API (e.g. in case you use sessions)
res.setHeader('Access-Control-Allow-Credentials', true);
```

## axios token header response request http拦截器 axios实现登录、拦截、登出
`2019-01-18 21:48`

一个项目学会前端实现登录拦截

[https://github.com/superman66/vue-axios-github](https://github.com/superman66/vue-axios-github)

axios 后台管理项目 - token刷新，拦截器设置

[https://blog.csdn.net/qq_31454017/article/details/79229779](https://blog.csdn.net/qq_31454017/article/details/79229779) 

vue的token刷新处理的方法

[https://www.jb51.net/article/143935.htm](https://www.jb51.net/article/143935.htm)

他这个是放在拦截机里面 发现快过期了，就刷新token

Vue刷新token，判断token是否过期

[https://www.cnblogs.com/huancheng/p/9288837.html](https://www.cnblogs.com/huancheng/p/9288837.html)

这个是用setTimeOut


## qs库 是将url参数和json互转 | query strings 缩写 | import qs from 'qs'
`2019-01-18 09:34`

import qs from 'qs'
 
1.npm地址

[https://www.npmjs.com/package/qs](https://www.npmjs.com/package/qs)

2、概述

将url中的参数转为对象；

将对象转为url参数形式

3、示例

```js
import qs from 'qs';
const url = 'method=query_sql_dataset_data&projectId=85&appToken=7d22e38e-5717-11e7-907b-a6006ad3dba0';
// 转为对象
console.log(qs.parse(url));
const a = {name:'hehe',age:10};
// 转为url参数形式
console.log(qs.stringify(a))
```


## 一次执行两个npm "start": "concurrently 'npm:dev' 'npm:json-server'"
`2019-01-18 08:58`

用的这个程序 concurrently 

说是再有异步的时候，&& 就不好使，而且&& 也不能执行npm 只能执行命令

 

官方地址：[https://www.npmjs.com/package/concurrently](https://www.npmjs.com/package/concurrently)

 

安装脚本：

npm install concurrently --save

不知道为什么，全局的我没装上

 

然后在package.json 里面添加

`"start": "concurrently 'npm:dev' 'npm:json-server'"`


## gitee上新创建的博客 gitBlog
`2019-01-17 15:43`

gitee上新创建的博客 [https://gitee.com/pengchenggang/gitBlog](https://gitee.com/pengchenggang/gitBlog)



## mysql front
`2019-01-17 15:42`

常用的还是 Navicat Premium，标题的不常用


## pandoc md.md -o md.docx 将md转化成docx
`2019-01-17 13:41`

pandoc md.md -o md.docx 将md转化成docx


## typora md神器
`2019-01-17 09:48`

神器 [https://www.typora.io/](https://www.typora.io/)

顺手看看 Pandoc 2.5


## 看云&gitbook 写帮助文档 | 专注于文档在线创作、协作和托管
`2019-01-16 17:26`

看云 写帮助文档 | 专注于文档在线创作、协作和托管

[https://www.kancloud.cn/manual/thinkphp/1678](https://www.kancloud.cn/manual/thinkphp/1678)

[https://www.gitbook.com/](https://www.gitbook.com/)


## Vue 2.0 右键菜单组件 Vue Context Menu
`2019-01-16 17:02`

[https://juejin.im/entry/5976d14751882507db6e839c](https://juejin.im/entry/5976d14751882507db6e839c)



## Day.js 是一个轻量的处理时间和日期的 JavaScript 库
`2019-01-16 16:06`

Day.js 是一个轻量的处理时间和日期的 JavaScript 库，和 Moment.js 的 API 设计保持完全一样. 如果您曾经用过 Moment.js, 那么您已经知道如何使用 

Day.js

[https://www.npmjs.com/package/dayjs](https://www.npmjs.com/package/dayjs)

[https://github.com/iamkun/dayjs](https://github.com/iamkun/dayjs)

[https://github.com/iamkun/dayjs/blob/97a60883f3ee99b1f42f9e8c0684b1f0f89db257/docs/zh-cn/API-reference.md](https://github.com/iamkun/dayjs/blob/97a60883f3ee99b1f42f9e8c0684b1f0f89db257/docs/zh-cn/API-reference.md)



## vue-gemini-scrollbar（vue组件-自定义滚动条）
`2019-01-16 15:44`

[https://segmentfault.com/a/1190000013338560](https://segmentfault.com/a/1190000013338560)


## 英文文章转音标 英文单词转音标
`2019-01-16 14:45`

[https://tophonetics.com/zh/](https://tophonetics.com/zh/)


## vueCode 常用代码总结 20190116
`2019-01-16 10:28`

代码比较多，就跳转链接看吧

[https://www.cnblogs.com/pengchenggang/p/10275632.html](https://www.cnblogs.com/pengchenggang/p/10275632.html)



## tabsGif
`2019-01-16 08:31`

<img :src="$withBase('/assets/cnblogsImg/tabsGif.gif')" />


## this.$refs.tabs.activeKey ref就是vue里面的id
`2019-01-15 16:14`

this.$refs.tabs.activeKey ref就是vue里面的id


## @click.native 会触发原生 click事件 vue
`2019-01-15 11:00`

@click.native 会触发原生 click事件 vue


## Web Server Notifier 是chrome网上商店的一个插件
`2019-01-15 10:37`

Web Server Notifier 是chrome网上商店的一个插件


## autoOpenBrowser: true, 运行npm后自动打开浏览器
`2019-01-15 08:37`

autoOpenBrowser: true, 运行npm后自动打开浏览器


## 总结vue2.0 配置的实例方法
`2019-01-14 16:21`

[http://www.php.cn/js-tutorial-369603.html](http://www.php.cn/js-tutorial-369603.html)


## chrome 打开上次关闭的tab ctrl+shift+T
`2019-01-14 12:56`

chrome 打开上次关闭的tab ctrl+shift+T


## 动态菜单路由 Router
`2019-01-14 12:41`

[https://www.cnblogs.com/pengchenggang/p/10266182.html](https://www.cnblogs.com/pengchenggang/p/10266182.html)

[https://github.com/renrenio/renren-fast-vue/wiki/Dynamic-menu-routes](https://github.com/renrenio/renren-fast-vue/wiki/Dynamic-menu-routes)

[http://fast.demo.renren.io/#/sys-menu](http://fast.demo.renren.io/#/sys-menu)


## gitee 如何创建仓库 及发布
`2019-01-10 17:43`

gitee 如何创建仓库 及发布

[http://pengchenggang.gitee.io/layuisyshelp](http://pengchenggang.gitee.io/layuisyshelp)

-----------

在本地项目文件中使用bash

```
$ git config --global user.name "你的名字"

$ git config --global user.email "你的邮箱"
```

1. 初始化  

```
$ git init

$ git remote add origin https://gitee.com/xxx/xxx.git (你的远程项目地址)
```

2.克隆一下
```
$ git clone https://****.git (你的远程项目地址)
```

3. 提交
```
$ git pull origin master

$ git add .

$ git commit -m "你的第一次提交"

$ git push origin master
```

---------------------


gitee 里面要发布一个pages的服务，然后就能访问了



## 【前端】pid2children iview tree json
`2019-01-10 17:12`

```html
<script>
  import inBody from '../inBody'
  export default {
    components:{
      inBody
    }
 
    ,data () {
      return {
        data2: [
          {title: 'parent 1'}
          ,{title: 'parent 1'}
        ]
        ,pidData:[
          {id:"1",pid:"0",title:"一级目录"}
          ,{id:"2",pid:"0",title:"又是一个一级目录"}
          ,{id:"3",pid:"1",title:"二级栏目"}
        ]
      }
    }
    ,methods:{
      pid2children:function(){
 
        let pidData2 = this.pidData //pidData就是pid数据
        //pidData2 === this.pidData ? console.info("true") : console.info("false")
        pidData2.forEach(el => {
          delete el.children //delete 删除数组 数组长度不变 特别适合 索引用
        })
 
        let map = {}
        pidData2.forEach(el => {
          map[el.id] = el // 循环data拿到所有的id
        })
 
        let arr = []
        pidData2.forEach(el => {
          // 拿到所有的pid,如果为真,和id进行对比,如果pid===id,就说明是id的子集
          let parent = map[el.pid]
          if (parent) {
            (parent.children || (parent.children = [])).push(el)
          } else { // 如果不是就是第一级,没有pid或者pid为0
            arr.push(el)
            console.log('arr', arr)
          }
        })
 
 
        return arr;
      }
    }
    ,mounted:function(){
      this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been rendered
        //this.getData2()
      })
 
    }
  }
</script>
```


## vue组件的初始化事件 简单理解就是 mounted
`2019-01-08 14:17`

```js
mounted () {}
```


## axios 里面 then 默认写的function里面没有this，改成箭头函数后就可以用this了
`2019-01-08 14:13`

```js
,methods:{
        loadJson:function(){
            //this.jsonTest = "jjj"
          this.$http.get('http://localhost:3003/news/1')
            .then((response) => {
              //console.log(response.data.title);
              this.jsonTest = response.data.title;
              //console.info(this)
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }
```



## json-server && axios
`2019-01-08 11:24`

vue2.0项目实战（3）使用axios发送请求

[https://www.cnblogs.com/zhouyangla/p/6753673.html](https://www.cnblogs.com/zhouyangla/p/6753673.html)


## vue >>> 编译失败问题 loader 待解决( iview vue脚手架生成)
`2019-01-06 21:4`

vue >>> 编译失败问题 loader 待解决

用vue iview 脚手架 来一次试试~


## webpack打包 css文件里面图片路径 替换位置 loader
`2019-01-04 09:05`

```js
{
    test: /\.css$/,
    use: ExtractTextPlugin.extract({
        use: ['css-loader?minimize', 'autoprefixer-loader'],
        fallback: 'style-loader'
        ,publicPath: '.3/'
    })
},
```


## es6 fs 输出文件 iviewDemo
`2019-01-03 17:14`

```js
// fs.open('./env.js', 'w', function(err, fd) {
//     // const buf = 'export default "development";';
//     // fs.write(fd, buf, 0, buf.length, 0, function(err, written, buffer) {});
//     const buf = 'module.exports = {\n' +
//         '    NODE_ENV: \'development\',\n' +
//         '    MOCK: \'true\'\n' +
//         '}';
//     fs.writeSync(fd, buf, 0, buf.length, 0);
// });

const buf = "module.exports = {  NODE_ENV: 'development',    MOCK: 'true'}";
fs.writeFile('./build/env.js', buf, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('ok.');
    }
});
```


## vue 模块 props
`2019-01-03 17:08`

inbody.vue

```html
<template>
    <div>
        <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>{{mbx[0]}}</BreadcrumbItem>
            <BreadcrumbItem>{{mbx[1]}}</BreadcrumbItem>
            <BreadcrumbItem>{{mbx[2]}}</BreadcrumbItem>
        </Breadcrumb>
        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <slot></slot>
        </Content>
    </div>
</template>

<script>
    export default {
        name: "inBody",
        props:{
            mbx:Array
        }
    }
</script>

<style scoped>

</style>
```

myButton.vue

```html
<template>
    <div>
        <in-body :mbx="['首页','基础','Button']">
            <Button>Default</Button>
            <Button type="primary">Primary</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="text">Text</Button>
            <br><br>
            <Button type="info">Info</Button>
            <Button type="success">Success</Button>
            <Button type="warning">Warning</Button>
            <Button type="error">Error</Button>
        </in-body>
    </div>
</template>

<script>
    import inBody from '../inBody'
    export default {
        name: "myButton"
        ,components:{
            inBody
        }
    }
</script>

<style scoped>

</style>
```


## 前端网络收藏夹【置顶】不更新了，这里有点麻烦
`2019-01-02 18:03`

iview Tree数据格式问题,无限递归树处理数据

[https://juejin.im/post/5b51a8a4e51d455d6825be20](https://juejin.im/post/5b51a8a4e51d455d6825be20)

FormData使用方法详解

用JSON-server模拟REST API 

[https://www.cnblogs.com/ys-wuhan/p/6387791.html](https://www.cnblogs.com/ys-wuhan/p/6387791.html)

解决vue不相关组件之间的数据传递----vuex的学习笔记，解决报错this.$store.commit is not a function

[https://www.cnblogs.com/jasonwang2y60/p/6433082.html](https://www.cnblogs.com/jasonwang2y60/p/6433082.html)

vue-cli 打包后显示favicon.ico小图标

[https://www.cnblogs.com/mmzuo-798/p/9285013.html](https://www.cnblogs.com/mmzuo-798/p/9285013.html)

treeGrid 树形表格

[https://fly.layui.com/extend/treeGrid/](https://fly.layui.com/extend/treeGrid/)

iview中刷新页面的时候更新导航菜单的active-name

[https://blog.csdn.net/lhjuejiang/article/details/83212070](https://blog.csdn.net/lhjuejiang/article/details/83212070)

webpack+vuecli打包生成资源相对引用路径与背景图片的正确引用

[https://www.cnblogs.com/moqiutao/p/7496718.html](https://www.cnblogs.com/moqiutao/p/7496718.html)

vue elementui navmenu 多级导航菜单(水平、垂直)

[https://blog.csdn.net/qq_31126175/article/details/81875468](https://blog.csdn.net/qq_31126175/article/details/81875468)



## CSS继承inherit | elementUI NavMenu vertical竖版 加 A标记 外联 不能继承上层color，需要手写下color:inherit;
`2019-01-02 17:53`

```html
<li data-v-576b9cf5="" role="menuitem" tabindex="0" class="el-menu-item"
style="color: rgb(255, 255, 255); border-bottom-color: transparent; background-color: rgb(84, 92, 100);">
<a data-v-576b9cf5="" href="http://element-cn.eleme.io/#/zh-CN/component/menu" target="_blank">
        ElementUI 说明文档
      </a></li>
```


## java 随机数 <%=System.currentTimeMillis() %>
`2019-01-02 15:24`

java 随机数

```html
<c:set var="version" value="<%=System.currentTimeMillis() %>"/>
```



## 用JSON-server模拟REST API
`2019-01-01 00:11`

用JSON-server模拟REST API

[https://www.cnblogs.com/ys-wuhan/p/6387791.html](https://www.cnblogs.com/ys-wuhan/p/6387791.html)

live-server的使用

[https://blog.csdn.net/shan1991fei/article/details/79007953](https://blog.csdn.net/shan1991fei/article/details/79007953)



## rolan 1.1.3
`2018-12-29 23:44`

rolan 1.1.3 这个版本 黑色的 alt+1显示 ctrl+F 搜索 不能自动搜索，是个小遗憾，但是能用

[https://files.cnblogs.com/files/pengchenggang/rolan_latest113.zip](https://files.cnblogs.com/files/pengchenggang/rolan_latest113.zip)


## vue vueRouter vuex Axios webpack 前端常用内容
`2018-12-29 16:08`

Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。



## python study
`2018-12-27 08:38`

```
 python
pycharm
Python pip 安装与使用
python pip
pip install pyqt5
pip install pyqt5_tools

qtdesigner就在python目录下：.\Python36\Lib\site-packages\pyqt5-tools。

pyqt5_tools需要在 pycharm settings Tools External Tools

Pycharm安装PyQt5和pyqt5-tools从而使用Qt Designer
https://blog.csdn.net/Cc_Sonia/article/details/83625298
PyCharm安装配置Qt Designer+PyUIC教程
https://blog.csdn.net/Dreamhai/article/details/82701063
PyQt5安装及ModuleNotFoundError: No module named 'PyQt5'问题解决
https://blog.csdn.net/qq_33485434/article/details/80606359

pip install installer
安装Pyinstaller
刚才好像少了一个Py

python3.7 打包成exe的一种方法 pyinstaller
https://blog.csdn.net/louniuous/article/details/82960164

pip install pyinstaller

pyinstaller -F -w inst.py
```

最后pyinstaller 打包的时候 还是有一些dll没有打包进去，暂时就先到这里了。



## ZXing.dll 生成二维码 C# winform net4.5
`2018-12-22 20:53`

[https://www.cnblogs.com/pengchenggang/p/10162428.html](https://www.cnblogs.com/pengchenggang/p/10162428.html)


## delphi 7 生成 调用 bat文件的exe文件
`2018-12-22 01:25`

[https://www.cnblogs.com/pengchenggang/p/10159688.html](https://www.cnblogs.com/pengchenggang/p/10159688.html)



## XMind 8 思维导图
`2018-12-21 16:49`

XMind 8 思维导图


## java组件不存在解决方案：右侧Maven Projects展开后左上角第一个刷新按钮 刷新后就会从新加载所有java的依赖项了
`2018-12-21 09:38`

java组件不存在解决方案：右侧Maven Projects展开后左上角第一个刷新按钮 刷新后就会从新加载所有java的依赖项了

软件：idea

问题产生：其他同事进行开发，引入新java组件后提交

本机同步代码后，为进行java的maven Projects同步。

 
**解决方案二：** 当修改pom.xml后 比如加个空格，也会询问是否从新加载所有java依赖项。



## 所有的工作目录 都要svn_开头，并且要进行svn同步
`2018-12-21 08:47`

所有的工作目录 都要svn_开头，并且要进行svn同步，你能保证你不删除，你保证不了非你！

血的代价啊~




## 火狐删除配置文件 会删除目录下所有文件 切记不要把配置文件建立在桌面 太恐怖了
`2018-12-20 17:15`

火狐删除配置文件 会删除目录下所有文件 切记不要把配置文件建立在桌面 恢复软件：易我数据恢复向导 9.0 DiskGenius500

结果：由于时间比较常 恢复文件均失败了~ 估计就是时间短 恢复也费劲



## 谷歌全屏脚本 start chrome.exe --kiosk http://www.baidu.com
`2018-12-19 23:43`

```
start chrome.exe --kiosk http://www.baidu.com
```


## 火狐加载用户配置文件 "C:\XXX\Mozilla Firefox\firefox.exe" http://192.168.1.1:8080 -profile ../kkk
`2018-12-19 11:16`

[https://www.cnblogs.com/pengchenggang/p/10142075.html](https://www.cnblogs.com/pengchenggang/p/10142075.html)



## https://quotefancy.com/ 经典句子（英语） 真是特别好~
`2018-12-19 08:40`

经典句子（英语） [https://quotefancy.com/](https://quotefancy.com/)


## (function(){})() 立即执行函数
`2018-12-18 14:39`

(function(){})() 立即执行函数

(function(a){})(5) 带参的



## VUE scoped css 局部css内嵌样式方法
`2018-12-18 08:51`

```html
<style scoped>
  .ivu-carousel >>> button { background-color: buttonface;}
  .demo-carousel { background-color: #0f8de9; height: 300px; line-height: 300px; color: #fff; font-size:36px;}
</style>
```


## web pack 生成本地dist后 本地可以访问 路径由/ 改 ./
`2018-12-14 14:05`

config / index.js 里面将 / 改成 ./ 有两个 都改了 反正管用

然后npm run build

如果涉及到字体 css里面不会改 需要手工改成 ../../ 反正一般用到字体也不是很多 就手工改吧


## vs code 格式化 美化 html js css 插件 Beautify
`2018-12-14 13:58`

安装 Beautify 插件 然后 F1 输入 Beautify file 回车即可



## vue 模板下只能有一个跟节点 根节点一定要是个div
`2018-12-14 09:35`

vue 模板下只能有一个跟节点 根节点一定要是个div


## iView webapp / Mint UI / MUI [前端UI]
`2018-12-12 15:56`

前端UI

iView webapp一套高质量的 微信小程序 UI 组件库

[https://weapp.iviewui.com/?from=iview](https://weapp.iviewui.com/?from=iview)

 
Mint UI 基于 Vue.js 的移动端组件库

[http://mint-ui.github.io/#!/zh-cn](http://mint-ui.github.io/#!/zh-cn)

MUI 最接近原生APP体验的高性能前端框架

[http://dev.dcloud.net.cn/mui/](http://dev.dcloud.net.cn/mui/)



## 前端入门22-讲讲模块化 包括webstrom建立简单ES6
`2018-12-12 10:16`

[前端入门22-讲讲模块化 包括webstrom建立简单ES6](前端入门22-讲讲模块化 包括webstrom建立简单ES6)


## zTree 点击文字 勾选check
`2018-12-12 08:58`

```js
callback: {
    onClick:function(event, treeId, treeNode){
        console.info("onClick")
        var treeObj = $.fn.zTree.getZTreeObj(treeId);
        treeObj.checkNode(treeNode,null,false)

    }
```


## formSelects-v4.js 基于Layui的多选解决方案
`2018-12-11 11:21`

[https://hnzzmsf.github.io/example/example_v4.html](https://hnzzmsf.github.io/example/example_v4.html)



## vs code 用户代码片段 html.json
`2018-12-10 09:40`

```json
{
    // Place your snippets for html here. Each snippet is defined under a snippet name and has a prefix, body and
    // description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
    // $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the
    // same ids are connected.
    // Example:
    "Print to console": {
        "prefix": "log",
        "body": [
            "console.log('$1');",
            "$2"
        ],
        "description": "Log output to console"
    }

    ,"<link...": {
        "prefix": "<link",
        "body": [
            "<link rel=\"stylesheet\" href=\"$1\">",
            "$2"
        ],
        "description": "添加css文件"
    }
    ,"<script...": {
        "prefix": "<script",
        "body": [
            "<script src=\"$1\"></script>",
            "$2"
        ],
        "description": "添加js文件"
    }
    ,"<script-jquery": {
        "prefix": "<script-jquery",
        "body": [
            "<script src=\"http://libs.baidu.com/jquery/1.11.1/jquery.min.js\"></script>",
            "<script>",
            "$1",
            "</script>",
            "$2"
        ],
        "description": "添加jquery文件"
    }    
}
```

## thisInObject
`2018-12-10 08:36`

```js
var k = {
name:"kName"
,getName:function(){
console.info(this.name)
}
,getParentName:function(_this){
console.info(_this.name)
}
}

var j = {
name:"jName"
,getName:function(){
console.info(this.name)
}
}
k.getName();//kName
j.getName();//jName
var m = {
name:"mName"
,kk:k
,jj:j
}
m.kk.getName();//kName
m.jj.getName();//jName
m.kk.getParentName(m)//mName
```


## 浏览器用户脚本—打造自己的专属页面 油猴
`2018-12-08 23:09`

[https://cloud.tencent.com/developer/article/1361189](https://cloud.tencent.com/developer/article/1361189)



## $("[lay-id='demo'] tbody tr[data-index=0]") 查找某行layui table
`2018-12-07 15:18`

```js
$("[lay-id='demo'] tbody tr[data-index=0]")
```


## ztree 展开一级节点 | ztree只显示到二级目录
`2018-12-07 10:09`

```js
// 默认展开一级节点
var nodes = tree.getNodesByParam("level", 0);
for (var i = 0; i < nodes.length; i++) {
    tree.expandNode(nodes[i], true, false, false);
}

//ztree只显示到二级目录
var nodes2 = tree.getNodesByParam("level", 1);
for (var j = 0; j < nodes2.length; j++) {
    tree.removeChildNodes(nodes2[j]);
}
```


## [转]解决右键用notepad++打开提示
`2018-12-07 09:19`

解决右键用notepad++打开提示【ShellExecute failed (2): Is this command Correct? (Fix) 】


最近发现右键使用notepad++打开文件时提示如下错误：

ShellExecute failed (2): Is this command Correct? ...

经用搜索引擎搜索得知，应该是开启了notepad++的【以管理员身份运行此程序】选项而导致的。

**解决方法**：

找到notepad++.exe，右击之，进入【兼容性】选项卡然后取消勾选【以管理员身份运行此程序】，最后【应用】并【确定】即可。

本人环境：Windows10，win7估计也是一样的方法。

Notepad++是安装C盘默认的软件安装目录。

解决方法来自：[shellexecute-failed-2-is-this-command-correct-fix](https://notepad-plus-plus.org/community/topic/10945/shellexecute-failed-2-is-this-command-correct-fix)
