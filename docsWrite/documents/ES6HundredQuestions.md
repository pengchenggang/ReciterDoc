# ES6百问百答

## 对象数据如何展开合并？
**方式1：对象数组均可使用**
```js
JSON.parse(JSON.stringify(data))
```
**方式2：对象数组均可使用**

```js
[...data]
// 或者
{...data}
```
> 需要知道展开的是对象还是数组

**方式3：对象可以使用**
```js
Object.assign({}, obj)
Object.assign(target, obj)
```

**方式4：对象可以使用**
```js
{...default, ...obj}
[...default, ...obj]
```
> 之前用 Object.assign(target, obj)，忘记浅拷贝的问题，搞的很不愉快啊！


## import 多文件导入技巧

**目录结构**

::: vue
.
└── modelName
    └── etc
        ├── `index.js` 
        ├── `columns.js` 
        └── `fillEditorRows.js`
:::

**index.js** 进行集中处理
```js
import columns from './columns'
import fillEditorRows from './fillEditorRows'

export { columns, fillEditorRows }
```

**引入代码**

```js
import { columns, fillEditorRows } from './etc'
```

## json 配置 返回过滤函数

```js
[
  'container',
  {
    type: 'vue',
    before: '<pre class="vue-container"><code>',
    after: '</code></pre>'
  }
],
[
  'vuepress-plugin-container',
  {
    type: 'theorem',
    before: info => `<div class="theorem"><p class="title">${info}</p>`,
    after: '</div>',
  },
],
```