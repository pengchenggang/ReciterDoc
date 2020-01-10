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

## vue-Treeselect 平层数据 转化 里外层 数据函数
```js
getPutFn2 (data) {
      let d = [...data]
      // console.info('d', d, allData, res.data)
      let parentType = d[0].parentId
      let putFn = (pid) => {
        let arr = []
        for (let i = 0, len = d.length; i < len; i++) {
          // console.log('d[item]', d[i])
          if (d[i].parentId === pid) {
            // console.log('d[item].id', d[i].parentId)
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

## js 获取id 和查询 class 数组对象
* getElementById、getElementsByTagName、getElementsByClassName

```js
const thisModuleDiv = document.getElementById('treeselectZenCityId')
// console.info('thisModuleDiv', thisModuleDiv)
const treeInputContainer = thisModuleDiv.getElementsByClassName('vue-treeselect__input')[0]
// console.info('treeInputContainer', treeInputContainer)
treeInputContainer.focus()
```

## oneOf 数组中是否包含某个值
```js
import { oneOf } from '@/libs/tools'
```

```js
/**
 * @param {Array} target 目标数组
 * @param {Array} arr 需要查询的数组
 * @description 判断要查询的数组是否至少有一个元素包含在目标数组中
 */
export const hasOneOf = (targetarr, arr) => {
  return targetarr.some(_ => arr.indexOf(_) > -1)
}
```

## 滚动条置顶
```js
setScrollTop () {
  let sst = this.$refs.tableInnerZen.$el.children[0].getElementsByClassName('ivu-table-body')[0]
  sst.scrollTop = 0
},
```