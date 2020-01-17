# 博客园随笔备份2

## dos下 批处理 用 pause 可以在最后暂停 查看结果信息 build.bat
`2019-06-27 11:07`

dos下 批处理 用 pause 可以在最后暂停 查看结果信息 build.bat



## xmind zen 破解版 这个禅的版本 的 思维导图 特别快，比pro的快多了
`2019-06-25 13:42`

xmind zen 9.2.1

## webpack安装包的时候 1程序目录不要在C盘 2路径不要有中文 3用cnpm
`2019-06-21 10:42`

webpack安装包的时候 1程序目录不要在C盘 2路径不要有中文 3用cnpm

## import * as tools from '@/libs/tools' 导入组件的时候 如果里面都是单独导入的，可以用 *加as起个别名使用
`2019-06-14 13:52`

```js
import * as tools from '@/libs/tools'
```

## 谷歌浏览器 加安全地址 快捷方式加参数 chrome
`2019-06-13 15:53`

```
--unsafely-treat-insecure-origin-as-secure="http://192.168.43.17:8080"
```

## vue validate多表单验证
`2019-06-13 14:02`

vue validate多表单验证思考 之前写过一个里外层，现在觉得不合适，应该平行的写，然后都给ret，最后判断ret 再做出反应，这样整体表单的所有验证就都报验证，然后最后提交的时候把组件内的对象合并到总的对象，再提交

this.$refs.addpurchaseForm.validate

## js引入的数组 会被页面缓存，如需要被强制性不缓存，请用function return 就ok了
`2019-06-06 11:03`

js引入的数组 会被页面缓存，如需要被强制性不缓存，请用function return 就ok了

## FiraCode 字体 => 箭头函数变成 整体 还有 等于 不等于
`2019-06-04 16:17`

[https://github.com/tonsky/FiraCode](https://github.com/tonsky/FiraCode)

* Enable in Settings → Editor → Color Scheme → Color Scheme Font → Enable Font Ligatures

## VS2013常用快捷键[转] 注释 Ctrl+K - C 和 k - u
`2019-06-04 11:24`

vs2013总体说快捷键 非常不好用 直接甩个链接吧

[https://www.cnblogs.com/pengchenggang/p/10972488.html](https://www.cnblogs.com/pengchenggang/p/10972488.html)

## 【vue iview】项目 win10 放在C盘 经常npm install不成功，就是因为 权限问题，把代码目录放到D盘就没事了。
`2019-06-03 16:30`

【vue iview】项目 win10 放在C盘 经常npm install不成功，就是因为 权限问题，把代码目录放到D盘就没事了。

## C#之winform实现文件拖拽功能【转】
`2019-06-03 16:17`

将一个文件拖拽到窗体的某个控件时，将该控件的路径显示在该控件上，只要拿到了路径自然可以读取文件中的内容了

将一个控件的属性AllowDrop设置为true，然后添加DragDrop、DragEnter时间处理函数，如下：

```js
private void txtAppPath_DragEnter(object sender, System.Windows.Forms.DragEventArgs e)
        {
            if (e.Data.GetDataPresent(DataFormats.FileDrop))
            {
                e.Effect = DragDropEffects.Link;
            }
            else
            {
                e.Effect = DragDropEffects.None;
            }
        }

        private void txtAppPath_DragDrop(object sender, System.Windows.Forms.DragEventArgs e)
        {
            txtLocalFileName.Text = ((System.Array)e.Data.GetData(DataFormats.FileDrop)).GetValue(0).ToString();
        }
```

```js
private void button1_Click(object sender, EventArgs e)
        {
            // System.Diagnostics.Process.Start("Explorer.exe", "c:\\windows");
            System.Diagnostics.Process.Start("Explorer.exe", this.button1.Text);
        }
```

## 任务管理器 用 Ctrl + Shift + Esc 替换 Ctrl + Alt + Del
`2019-05-29 11:31`

任务管理器 用 Ctrl + Shift + Esc 替换 Ctrl + Alt + Del

## 导入文件 服务器报错，有可能是 开发时候是window 服务器是linux，两个系统的文件系统的/和\是相反的，要注意这块
`2019-05-28 17:36`

导入文件 服务器报错，有可能是 开发时候是window 服务器是linux，两个系统的文件系统的/和\是相反的，要注意这块

## git clone 和 download 不一样，能用git clone 就用git clone，download的代码，经常出现安装bug
`2019-05-28 10:43`

git clone 和 download 不一样，能用git clone 就用git clone，download的代码，经常出现安装bug

## 掘金 里面 写文章 带目录的时候 用#(空格)标题 后面用## title，一个页面只有一个H1
`2019-05-27 08:56`

掘金 里面 写文章 带目录的时候 用#(空格)标题 后面用## title，一个页面只有一个H1

## vue props 传入对象Object，如果外层更改属性，默认里面是不更新，需要使用 this.$set(this.datese1, 'xsfaDateYear1', '')
`2019-05-23 15:11`

vue props 传入对象Object，如果外层更改属性，默认里面是不更新，需要使用 this.$set(this.datese1, 'xsfaDateYear1', '')

或者是里面用 深度watch

## 组件的通信 ：provide / inject props Object.assgin覆盖对象
`2019-05-22 11:55`

组件的通信 ：provide / inject 对象进入后，就等于不用props，然后内部对象，直接复制可以接受数组，属性不能直接复制，可以用Object.assgin覆盖对象，或者Vue的set 双向绑定数据

```js
provide () {
  return {
    tsStore: this.tsStore
  }
},

inject: ['tsStore'],
```

## 为管理复杂组件状态困扰？试试 vue 简单状态管理 Store 模式【转】
`2019-05-21 15:52`

[https://www.cnblogs.com/pengchenggang/p/10900261.html](https://www.cnblogs.com/pengchenggang/p/10900261.html)


## 怎么在WEBSTORM中设置代码模板 Live Templates
`2019-05-21 15:50`

怎么在WEBSTORM中设置代码模板 Live Templates

setting 里面

[https://www.cnblogs.com/xinzaimengzai/p/9938464.html](https://www.cnblogs.com/xinzaimengzai/p/9938464.html)

## vue组件 v-bind="$attrs" 和 v-on="$listeners"
`2019-05-17 11:31`

如何写好一个vue组件,老夫的一年经验全在这了【转】 `v-bind="$attrs" 和 v-on="$listeners"`

[https://www.cnblogs.com/pengchenggang/p/10880437.html](https://www.cnblogs.com/pengchenggang/p/10880437.html)


## 作用域插槽 向父组件传递 `<template slot-scope="{ row, index }"  slot="dateNo">`
`2019-05-16 18:57`

**slotTest1**

```js
<slot name="action" :kk="kk"></slot>
```

**slotTest2**

```html
<!--
* @description text
!-->
<template>
    <div>
      <slot-test1>
        <template slot-scope="{ kk }" slot="action">
          <slot name="action" :kk="kk"></slot>
          111 {{kk}}
        </template>
          </slot-test1>
    </div>
</template>

<script>
import slotTest1 from './slotTest1'
export default {
  name: 'slotTest',
  components: {
    slotTest1
  },
  props: {},
  data () {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  created () {
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
</style>
```

**父组件调用**

```html
<slot-test2>
      <template slot-scope="{ kk }" slot="action">
        666 {{kk}}
      </template>
    </slot-test2>
```

## vue 数组更新 this.$set(this.dataList, data.index, data.data)
`2019-05-16 14:13`

vue 数组更新 this.$set(this.dataList, data.index, data.data)

[https://www.cnblogs.com/huangenai/p/9836811.html](https://www.cnblogs.com/huangenai/p/9836811.html)


## iview 验证 trigger: 'blur,change', 同时加两个，省的每次还想input 还是 select
`2019-05-16 09:10`

```js
dataRuleValidate: {
        name: [{
          required: true,
          trigger: 'blur,change',
          validator: textFrom
        }],
```

## Vue 前端面试题[转]
`2019-05-14 22:02`

[https://www.cnblogs.com/pengchenggang/p/10864931.html](https://www.cnblogs.com/pengchenggang/p/10864931.html)

## 用vscode开发vue应用-转
`2019-05-14 21:48`

[https://www.cnblogs.com/pengchenggang/p/10864820.html](https://www.cnblogs.com/pengchenggang/p/10864820.html)


## vue 不支持 数组Array双向绑定 指针的问题 tab splice v-if
`2019-05-14 19:38`

vue 不支持 数组Array，只支持get set push，但是正是做tab的时候，用到splice，就都不好用了，最后用v-if，从新渲染 完美解决

## iview input 就一个 form 用 @submit.native.prevent
`2019-05-14 17:38`

**老解决方案**

【iview input 回车刷页面bug】input 就一个的时候 有form的时候 回车会刷页面，如果就一个input，可以不要form，或者form里面两个input 将一个input v-show false 就可以了

**官方新方案**

即：当一个 form 元素中只有一个输入框时，在该输入框中按下回车应提交该表单。如果希望阻止这一默认行为，可以在 `<Form>` 标签上添加 `@submit.native.prevent`

## 油猴Tampermonkey 全局函数 onload window
`2019-05-10 17:30`

油猴Tampermonkey 全局函数 它的注入函数都在 onload里面，直接写函数 都是内部函数，外部要是调用，就要挂靠到window上

```js
window.like111 = function (){
    console.info('like')
}
```

## 函数队列 概念 next
`2019-05-10 14:23`

插入函数概念 接收一个callback，然后外面函数，接一个对象，和一个next，外面都执行完了，继续执行下一个函数，相当于一个链状体，插入了一个函数的概念

log4js 输出 等于 console.info

```js
// KOA2
app.use(function (ctx, next) {
  ctx.log.info('Got a request from %s for %s', ctx.request.ip, ctx.path);
  return next();
});
```

Koa2 学习文档: [https://blog.csdn.net/pingsoli/article/details/76584093](https://blog.csdn.net/pingsoli/article/details/76584093)


## firstElectron_web5 安装
`2019-05-09 17:43`

[https://www.cnblogs.com/pengchenggang/p/10839941.html](https://www.cnblogs.com/pengchenggang/p/10839941.html)

## console.trace 跟踪轨迹 从哪来的
`2019-05-09 15:34`

```js
VM885:8 console.trace
myOtherFunction @ VM885:8
myFunction @ VM885:4
onclick @ try.php?filename=tryjsref_console_trace:1
```

## iview table里面 插入下拉列表组件（自定义组件）一定要加key
`2019-05-09 10:29`

iview table里面 插入下拉列表组件（自定义组件）一定要加key，不加key，table开始会加载所有数据，然后再从第2页点回第一页，就会走onChange事件，混乱的逻辑，切记加：key

```html
<template slot-scope="{ row, index }" slot="belongDept" v-if="belongDeptVif">
  <sysSelectBelongDept v-model="row.belongDept"
                        :disabled="getDisabled(row)"
                        :key="row.id"
                        :bdRow="row"
  @onChangeEmit="belongDeptOnChange"></sysSelectBelongDept>
</template>
```

## DatePicker 注意点 1.不用v-model 用:value 2.配合on-change进行回调 3.初始值 当天的用 (new Date()).toLocaleDateString().replace(/\//g, '-')
`2019-05-08 09:37`

```html
<DatePicker :value="formData.date"
            type="date"
            format="yyyy-MM-dd"
            placeholder="请选择日期"
            @on-change="_ => formData.date = _"
            style="width: 100%;"></DatePicker>
```
DatePicker 注意点 1.不用v-model 用:value 2.配合on-change进行回调 3.初始值 当天的用 (new Date()).toLocaleDateString().replace(/\//g, '-')

因为 DatePicker 默认是日期类型，但是数据库都是字符串，所以取消v-model自动绑定，手动改为 用value初始值，然后用on-change进行返回赋值


## win10 多桌面 win+tab | ctrl+win+左右箭头
`2019-05-07 14:45`

win10 多桌面 win+tab | ctrl+win+左右箭头

## GitKrakenSetup Git可视化操作软件
`2019-05-06 08:31`

GitKrakenSetup Git可视化操作软件

## dinner 后台 nodemon 部署 Koa
`2019-05-05 11:18`

dinner 后台 nodemon 部署 Koa (关闭everything 安装或排除node_modules) # mysql 没开192.168.x.x 需要设置一下 #Navicat Premium,mysql 数据库版本有要求：mysql-5.7.17.msi 对??的支持
```
tip1：新建数据库 记得选 字符集和排序规则 utf8 -- UTF-8 Unicode utf8_general_ci

后台链接部分

1. 全局管理员安装 nodemon，后台热部署(右键 管理员运行cmd)

npm install -g nodemon

2. 管理员安装插件(右键 管理员运行cmd)

npm install

3. 修改 config.js 里面的配置文件，我写绝对ip不好使，先用 本机ip走着

HOST: '127.0.0.1', // 地址 192.168.40.54
 
4.（应该是第一步）安装mysql 5.5 安装版 mysql-5.5.28-winx64.msi ，
说是目录版的配置更麻烦配置一路next 
密码写123456，然后就安装完成了。
 
4.1 用 Navicat Premium 链接 mysql数据库，新建数据库链接，
链接刚才安装的mysql服务 localhost的
端口都默认
HOST: '127.0.0.1', // 地址 192.168.40.54
PORT: '3306', // 端口
USERNAME: 'root', // 用户
PASSWORD: '123456', // 密码
DATABASE: 'dinner' // 名称
 
4.2 创建数据库结构 用dinner.sql 创建数据库结构和数据。
 
5. 用postman 测试接口 都是post接口
建立目录 建立个接口 然后 起个名字 比如login
然后选 body 选第3个 x-www-form-urlencoded
里面写参数
 
----------------------------
总结bug：
bug1 开始遇到安装nodemon报错，然后发现是没用 管理员权限安装。
bug2 链接mysql 说链接不上数据库 报错，
然后改成本机127的能链接，回头再具体看是什么问题
 
----------------------------
mysql 设置 开启远程可以连接ip 192.168.40.54
方案一：在安装的时候以后选择可以开启远程访问。
方案二：因为我在安装的时候，没注意这个问题，只能后期修改一下。
 
用 Navicat Premium
1. 先连接数据库 表 user，然后修改 里面第一列 Host，
将原有localhost，改为%，这样就能通过绝对ip访问了。

2. 右键新建查询 输入 FLUSH PRIVILEGES; 点击执行 刷新表格。
 
mysql 数据库版本有要求：mysql-5.7.17.msi 对??的支持
```


Koa -- 基于 Node.js 平台的下一代 web 开发框架 koa.bootcss.com
`2019-04-26 10:57`

Koa -- 基于 Node.js 平台的下一代 web 开发框架 koa.bootcss.com


## iview 表单验证 input 用失去焦点事件 blur， select下拉选框 要用change事件 验证
`2019-04-26 10:16`

```js
birthday: [{ required: true, message: '内容不能为空', trigger: 'blur' }],
belongDept: [{ required: true, message: '内容不能为空', trigger: 'change' }],
```

## webStorm Ctrl+s 自动格式化 然后 保存 用宏命令
`2019-04-23 17:12`

使用WebStorm的Macros宏指令，实现保存的同时格式化代码,并跳至行尾
[https://blog.csdn.net/gyz718/article/details/70556188](https://blog.csdn.net/gyz718/article/details/70556188)

## vuez init webStorm vscode
`2019-04-22 10:38`

```html
<!--
* @description text
!-->
<template>
  <div>#[[$END$]]#</div>
</template>

<script>
export default {
  name: '${COMPONENT_NAME}',
  components: {},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang="less" scoped>
</style>
```

## Node + Express + MySQL 接口开发完整案例
`2019-04-20 22:16`

**Node + Express + MySQL 接口开发完整案例**

[https://blog.csdn.net/u013216976/article/details/85273770](https://blog.csdn.net/u013216976/article/details/85273770)

**github源码**

[https://github.com/Apache-Ra/node-express-mysql](https://github.com/Apache-Ra/node-express-mysql)


## sysUpload.vue上传组件 的时候 看进度的时候 不要mock 注释掉
`2019-04-15 15:47`

sysUpload.vue上传组件 的时候 看进度的时候 不要mock 注释掉 // if (process.env.NODE_ENV !== 'production') require('@/mock')

sysUpload.vue源码：[https://www.cnblogs.com/pengchenggang/p/10711070.html](https://www.cnblogs.com/pengchenggang/p/10711070.html)


## 目录下 shift 右键菜单 打开cmd 或者在 地址栏输入cmd 回车进入cmd
`2019-04-12 09:26`

目录下 shift 右键菜单 打开cmd 或者在 地址栏输入cmd 回车进入cmd


## xls表格 拼接字段 拼json =CONCAT("{ code:'",A2,"',","codeName: '",B2,"',","flag: '",C2,"'},")
`2019-04-04 14:12`

xls表格 拼接字段 拼json =CONCAT("{ code:'",A2,"',","codeName: '",B2,"',","flag: '",C2,"'},")


## js 数组过滤 filter
`2019-04-04 11:06`

::: tip
let res = this.list.filter(item => routeEqual(this.currentRouteObj, item) || item.name === this.$config.homeName)
:::


## libs/tools.js stringToDate dateToString 日期字符串转换函数
`2019-04-03 13:51`

```js
import { stringToDate } from '@/libs/tools.js'

export const stringToDate = (dateStr, separator) => {
  if (!separator) {
    separator = '-'
  }
  let dateArr = dateStr.split(separator)
  let year = parseInt(dateArr[0])
  let month
  // 处理月份为 04 这样的情况
  if (dateArr[1].indexOf('0') === 0) {
    month = parseInt(dateArr[1].substring(1))
  } else {
    month = parseInt(dateArr[1])
  }
  let day = parseInt(dateArr[2])
  let date = new Date(year, month - 1, day)
  return date
}

export const dateToString = (date, separator) => {
  if (!separator) {
    separator = '-'
  }
  let year = date.getFullYear()
  let month = (date.getMonth() + 1).toString()
  let day = (date.getDate()).toString()
  if (month.length === 1) {
    month = '0' + month
  }
  if (day.length === 1) {
    day = '0' + day
  }
  var dateTime = year + separator + month + separator + day
  return dateTime
}
```


## vue 组件内 directives指令的调用方式 <base-table v-auto-height:tableHeight="{vm:this, diffHeight:ahTable.diffHeight}"
`2019-04-03 09:37`

vue 组件内 directives指令的调用方式 <base-table v-auto-height:tableHeight="{vm:this, diffHeight:ahTable.diffHeight}"


## 油猴 tamperMonkey 在百度首页 添加自己的自定义链接
`2019-04-02 10:57`

发现 GM_addStyle 函数不能用了，从写加载css函数。 剩下找个定位 添加内容 就很简单了。

```js
// ==UserScript==
// @name         helloWorld
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.baidu.com/
// @grant        none
// @require      http://code.jquery.com/jquery-1.11.0.min.js
// ==/UserScript==

$(document).ready(function(){
    // 在这里写你的代码...


    // console.info('form',$("form"))
    let m = `<div style="color:#fff;position: absolute;bottom: -30px;">
<a class="myLink" href="http://www.baidu.com/" target="_blank">aaa</a>
</div>`
    $(m).appendTo("#s_form_wrapper")


});



(function() {
    'use strict';
    // Your code here...
    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        head.appendChild(style);
    }

    addGlobalStyle('a.myLink, a.myLink:hover { color:#fff; }');


})();
```


## vue :class 可以接收 字符串 数组 和 对象 对象里面的key值 根据true或false 显示不显示
`2019-03-29 11:55`

vue官方文档：[https://cn.vuejs.org/v2/guide/class-and-style.html](https://cn.vuejs.org/v2/guide/class-and-style.html)

**html部分 注意:class**

```html
<component :is="tagName" :class="classes" :disabled="disabled" @click="handleClickLink" v-bind="tagProps">
        <Icon class="ivu-load-loop" type="ios-loading" v-if="loading"></Icon>
        <Icon :type="icon" :custom="customIcon" v-if="(icon || customIcon) && !loading"></Icon>
        <span v-if="showSlot" ref="slot"><slot></slot></span>
    </component>
```

**代码部分**

```js
computed: {
  classes () {
      return [
          `${prefixCls}`,
          `${prefixCls}-${this.type}`,
          {
              [`${prefixCls}-long`]: this.long,
              [`${prefixCls}-${this.shape}`]: !!this.shape,
              [`${prefixCls}-${this.size}`]: this.size !== 'default',
              [`${prefixCls}-loading`]: this.loading != null && this.loading,
              [`${prefixCls}-icon-only`]: !this.showSlot && (!!this.icon || !!this.customIcon || this.loading),
              [`${prefixCls}-ghost`]: this.ghost
          }
      ];
  },
```

第一个和第2个 肯定显示 后面对象里面就是true的显示 这个class

false的就不显示这个class



## vue props 下有验证器 validator 验证数据返回true false后，false给default值
`2019-03-29 11:25`

```js
props: {
  type: {
      validator (value) {
          return oneOf(value, ['default', 'primary', 'dashed', 'text', 'info', 'success', 'warning', 'error']);
      },
      default: 'default'
  },
```


## Vue的 $parent，并不能准确找到上一层的控件，所以如果需要，需要填坑这个 bug，递归寻找下上级
`2019-03-28 16:28`

```js
// Find components upward
function findComponentUpward (context, componentName, componentNames) {
  if (typeof componentName === 'string') {
    componentNames = [componentName]
  } else {
    componentNames = componentName
  }

  let parent = context.$parent
  let name = parent.$options.name
  while (parent && (!name || componentNames.indexOf(name) < 0)) {
    parent = parent.$parent
    if (parent) name = parent.$options.name
  }
  return parent
}
```


## upload 上传 加token 在 :headers='headers' 注意 不要直接写$refs.upload.headers = {} 这样vue会警告 修改组件内部变量
`2019-03-28 13:48`

```html
<Upload :action="$baseUrl + 'API/file/upload'"
        :show-upload-list="false"
        :headers='headers'
        ref='upload'
        name="file"
        type="drag"
        :on-success="handleSuccess"
        :before-upload="handleBeforeUpload">
```

```js
import { getToken } from '@/libs/util'
export default {
  data () {
    return {
      headers: {
       
        token: getToken() ? getToken() : ''
      },
```


## nginx 1.15.10 前端代理转发 多系统公用一个cookie 统一token
`2019-03-27 16:54`

nginx 1.15.10 前端代理转发 将多个地址，代理转发到一个地址和端口 多系统公用一个cookie 统一token

注意：

proxy_pass http://192.168.40.54:2233/xxxx_web/; （结尾有分号）
 
重新加载的reload命令

nginx.exe -s reload
 

nginx 下载 https://nginx.org/en/download.html

解压本地后 看 conf/nginx.conf

打开后 在倒数第2行 加入

```
include       nginx-xxxx.conf;
```

就是单独写一个配置文件，不改写公共配置文件，当然也可以直接写在配置文件内

小插曲：我本机应该是开了一个80端口，影射着一个目录，所以把配置文件的端口号从80改成8000了

**nginx-xxxx.conf**

```js
    server {
        listen       8888;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location /xxxx1_web {
          # 这个是平台的接口
           proxy_pass http://192.168.999.999:9999/xxxx1_web;
        }
    location /xxxx2_web {
      proxy_pass http://192.168.888.888:8999/xxxx2_web;
    }
        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}
```

**最后回到解压的根目录 运行dos命令**

```
start nginx.exe
```

代理就打开了，可以通过本机的localhost和端口号 看看服务是否开启，

然后 在后面加入 目录名查看系统


## 99%的时候 文字会模糊 F12
`2019-03-26 16:34`

99%的时候 文字会模糊 F12


## 输入防抖 vue # 输入搜索的时候 防抖和节流
`2019-03-26 10:29`

输入防抖 vue # 输入搜索的时候 及时搜索的快速访问接口的 解决方案 vue 中使用防抖和节流

**输入防抖**

```js
watch: {
    value (newVal, oldVal) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        // console.info('text')
        this.getTableData(newVal)
      }, 500)
    }
  },
```

下面那个 经过测试不好用自己从写了个上面的

[https://blog.csdn.net/qq_39759115/article/details/82287517](https://blog.csdn.net/qq_39759115/article/details/82287517)

```js
// 防抖
export function _debounce(fn, delay) {

    var delay = delay || 200;
    var timer;
    return function () {
        var th = this;
        var args = arguments;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            timer = null;
            fn.apply(th, args);
        }, delay);
    };
}
// 节流
export function _throttle(fn, interval) {
    var last;
    var timer;
    var interval = interval || 200;
    return function () {
        var th = this;
        var args = arguments;
        var now = +new Date();
        if (last && now - last < interval) {
            clearTimeout(timer);
            timer = setTimeout(function () {
                last = now;
                fn.apply(th, args);
            }, interval);
        } else {
            last = now;
            fn.apply(th, args);
        }
    }
}
```


## promise 里面的 console.info 打印信息 并不准确，后期有修改对象数据，会覆盖，影响之前的显示
`2019-03-25 18:08`

promise 里面的 console.info 打印信息 并不准确，后期有修改对象数据，会覆盖，影响之前的显示


## hasOneOf # if (data.otherDescArr.some(_ => '7'.indexOf(_) > -1)) {
`2019-03-25 15:09`

```js
if (data.otherDescArr.some(_ => '7'.indexOf(_) > -1)) {

-----

export const hasOneOf = (targetarr, arr) => {
  return targetarr.some(_ => arr.indexOf(_) > -1)
}
```

## vue 数组对接字符串 传值时候，join(',') 一下 watch
`2019-03-25 14:59`

```js
watch: {
    'tFill.otherDescArr': function (newVal, oldVal) {
      this.tFill.otherDesc = this.tFill.otherDescArr.join(',')
    }
  },

  更新 上面这个写法不太正确，因为数组指针变，
  才更新，这里应该是组件整体数据替换，所以起作用了
  如果是单值替换 就不起作用了，需要深度监听这个数组
```

## css 两列 左侧列固定
`2019-03-21 15:45`

css 两列 左侧列固定 width: 100px; float: left; 右侧列自适应 margin-left:100px; 注意要用在div上的style

```css
.con1{
    width: 100px;
    float: left;
    background: #ff0;
}
.con2{
    margin-left:100px;
    background: #fe3;
}
```


## vscode F12 不能用，原来是快捷键冲突了。
`2019-03-21 09:34`

**F12**
| 命令                     | 绑定键 |
| ------------------------ | ------ |
| 视图：聚焦到活动编辑器组 | F12    |
| 转到定义                 | F12    |
 

## Vue.js Extension Pack | vsCode插件 可以定位跳转到@开头的路径等自定义路径
`2019-03-21 08:40`

**webpack自定义别名后，VScode路径提示问题**

```js
//tsconfig.json 或者 jsconfig.json 文件
{
    "compilerOptions": {
        "baseUrl": "./",
        "paths": {
            "@/*": ["src/*"],
        }
}
```


## poptip 外面 放 input 使用 iview vue
`2019-03-20 08:43`

外层套的是 

`<FormItem prop="name" label="姓名:">`

```html
<Input v-model="tFill.name"
                 @on-change="nameInputChange" />
          <Poptip ref="namePoptip"
                  class="namePoptipClass"
                  v-model="namePoptipVmodel"
                  placement="bottom-start">
            <div slot="content">暂无数据</div>

          </Poptip>
```

```css
.namePoptipClass {
  position: absolute; // 让内置的div 跳出来 不占用流位置
  margin-top: 16px; // 调整距离上面的高度，因为高为0了，所以要调整
  left: 0; // 修正跳出后 左侧的位置
  height: 0; // 调整高度，不遮挡流的 input
}
```

## Tooltip 文字提示
`2020-01-17`

```html
<Tooltip content="未填报"
                 transfer
                 theme="light">
          <Button type="text"
                  @click="itemBasicinfoTabel(row, index, item)"
                  icon="md-create"
                  class="zBtn_warning"></Button>
        </Tooltip>
```


## shift Alt + up(down) copy current line ! ctrl + j show the control # vscode key 快捷键
`2019-03-19 11:15`

ctrl + j === ctrl + ~ 都是打开控制台
shift Alt + up(down) 这个快捷键 很方便啊


## ref版的 摄像头 读取 因为id的时候，id不能重复 还要用时间戳
`2019-03-18 17:53`

[https://www.cnblogs.com/pengchenggang/p/10553728.html](https://www.cnblogs.com/pengchenggang/p/10553728.html)


## iview upload 上传图片 不传服务器 转 base64
`2019-03-18 16:59`

[https://www.cnblogs.com/pengchenggang/p/10553237.html](https://www.cnblogs.com/pengchenggang/p/10553237.html)


## js 时间戳 随机数 new Date().getTime()
`2019-03-18 16:31`

::: tip
一：时间转时间戳：javascript获得时间戳的方法有四种，都是通过实例化时间对象 new Date() 来进一步获取当前的时间戳

1.var timestamp1 = Date.parse(new Date()); // 结果：1477808630000 不推荐这种办法，毫秒级别的数值被转化为000

  console.log(timestamp1);

2.var timestamp2 = (new Date()).valueOf(); // 结果：1477808630404 通过valueOf()函数返回指定对象的原始值获得准确的时间戳值

console.log(timestamp2);

3.var timestamp3 = new Date().getTime(); // 结果：1477808630404 ，通过原型方法直接获得当前时间的毫秒值，准确

console.log(timestamp3);

4.var timetamp4 = Number(new Date()) ; //结果：1477808630404 ,将时间转化为一个number类型的数值，即时间戳

console.log(timetamp4);
:::


## drawer 抽屉 弹框 在 modal的后面的解决方案 zindex
`2019-03-18 14:05`

**方案1 在框内 弹出**

```html
<Drawer title="拍照"
            :transfer="false"
            :inner="true"
            v-model="drawerVmodel"
            width="500"
            :mask-closable="false">
```

**方案2 css 改写 z-index 但是不能直接在组件里写，要写在组件下面的两个div里面**

```html
<Drawer title="拍照"
            class="drawerClass"
            v-model="drawerVmodel"
            width="500"
            :mask-closable="false">
```

```css
<style lang='less'>
.drawerClass {
  .ivu-drawer-mask {
    z-index: 2000 !important;
  }
  .ivu-drawer-wrap {
    z-index: 2000 !important;
  }
```

第5页



