# Vue 常用代码

## 深度Watch

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