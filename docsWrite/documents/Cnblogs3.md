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


