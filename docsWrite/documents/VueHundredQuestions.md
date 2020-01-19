# Vue 常用代码

## 深度Watch deep

```js
data: {
  deep: true,
  immediate: true,
  handler (val) {
    this.autoSort()
    this.$nextTick(_ => {
      this.diagonalFormat()
    })
  }
},
```

```js
basicInfo: {
  deep: true,
  handler (val) {
    this.init()
  }
},
```

```js
familyUpdata: {
  immediate: true,
  handler (val) {
    if (val === '1') {
      this.method()
      this.$emit('family-updata-end', '8')
    }
  }
},
```

## prop type:String, default:'' 外部传 undefined，内部也会转成''
`2020-01-17`

国家组件多选改单选，他们的代码置空是 obj = {},将对象所有属性全删了，导致我原来都用''进行判断失效

并且 外部传''和undefined内部分辨不出来

**解决方案**

props 的 value 将 type 和 default 全删了

## vue $emit .sync update:
`2020-01-19`

```
this.$emit('update:leftYear', val)