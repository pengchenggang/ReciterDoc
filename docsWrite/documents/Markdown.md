# Markdown使用手册

## Badge <Badge text="beta" type="warning"/> <Badge text="默认主题"/>
* **Props:**
  * `text` - string
  * `type` - string, 可选值： `"tip"|"warning"|"error"`，默认值是： `"tip"`
  * `vertical` - string, 可选值： `"top"|"middle"`，默认值是： `"top"`
* **Usage:**
你可以在标题中，使用这个组件来为某些 API 添加一些状态：
```html
## Badge <Badge text="beta" type="warning"/> <Badge text="默认主题"/>
```

## 粗体
输入
```
**粗体**
```
输出
**粗体**
## 详情框

输入
```
::: tip 提示框
这是一个提示
:::

::: warning 警告框
这是一个警告
:::

::: danger 危险警告框
这是一个危险警告
:::
```
输出
::: tip 提示框
这是一个提示
:::

::: warning 警告框
这是一个警告
:::

::: danger 危险警告框
这是一个危险警告
:::



## 列表 *+- 123

输入
```
* 第一项
* 第二项
* 第三项

+ 第一项
+ 第二项
+ 第三项


- 第一项
- 第二项
- 第三项

1. 第一项
2. 第二项
3. 第三项
```
输出

* 第一项
* 第二项
* 第三项

+ 第一项
+ 第二项
+ 第三项


- 第一项
- 第二项
- 第三项

1. 第一项
2. 第二项
3. 第三项

## 区块引用 >
输入
```
> 区块引用
> 菜鸟教程
> 学的不仅是技术更是梦想
```
输出
> 区块引用
> 菜鸟教程
> 学的不仅是技术更是梦想

## 单行代码框
输入

```
`printf()` 函数
```
输出

`printf()` 函数

## 多行代码框
可以高亮显示某行 用 `{4}`
几种代码风格 `javascript js html`
```
`` ` javascript
$(document).ready(function () {
    alert('RUNOOB');
});
`` `
```

```javascript
$(document).ready(function () {
    alert('RUNOOB');
});
```
## 链接
输入
```
[vuepress](https://vuepress.vuejs.org/zh/guide/)
```
输出

[vuepress](https://vuepress.vuejs.org/zh/guide/)

## 图片引入 imgz
输入
```js
![RUNOOB 图标](http://static.runoob.com/images/runoob-logo.png)
<img :src="$withBase('/assets/img/vscodeAds.png')" />

<img :src="$withBase('/assets/cnblogsImg/vscodeAds.jpg')" />
```
输出

<img :src="$withBase('/assets/img/vscodeAds.png')" />

## 表格引入
输入
```
| 表头   | 表头   |
| ------ | ------ |
| 单元格 | 单元格 |
| 单元格 | 单元格 |
```
输出

| 表头   | 表头   |
| ------ | ------ |
| 单元格 | 单元格 |
| 单元格 | 单元格 |

## html引入
输入
```
使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑
```
输出

使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑

