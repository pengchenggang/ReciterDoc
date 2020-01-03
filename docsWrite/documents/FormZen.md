# FormZen表格布局

## 整体架构布局

**defaultFormRows.js** 全局默认值
```js
export default {
  global: {
    headerWidth: '150px', // 默认左侧宽度
    minHeight: '60px' // 最小高度
  },
  rows: [
    {
      direction: 'rows/column', // 当前单元格为竖列 要求下面的cols里只能有一个对象
      cols: [
        {
         ...
        },// 第一列
      ],// 第一行
    }
  ]
}
```
**direction: 'column'** // 默认 rows 当前单元格为竖列 要求下面的cols里只能有一个对象

## 单个单元格 配置参数

```js
{
  headerTitle: '标题名称:',
  key: 'key1', // key值 很重要 每个组件都要有key值
  type: 'input', // input 下拉列表 slot radio checkbox date
  arr: getRadioArr(),
  slot: 'name',
  // 下面参数为局部调整 单独参数覆盖全局
  headerWidth: '100px',
  colWidth: '10%', // 单框微调右侧挤一些
  flex: 'auto', // 为缩减模式 flex: '1 1' 为膨胀模式
  hideHeader: true, // 隐藏标题栏
  hideContent: true, // 隐藏内容框
  disabled: true, // 内容框禁用 现在先把背景颜色调整下 后期再禁用组件
  itemContent: 'text', // 内容框直接显示文字 type需要改成 text
  flex01: true, // 内容宽度 不进行弹性
  colWidth: '100px', // 配合flex01 对竖着的列进行优化
  
},

function getRadioArr () {
  return [
    { code: "6201", codeName: "苹果笔记本" },
    { code: "6202", codeName: "联想笔记本" }
  ]
}
```

## 可嵌套单元格

**当单个对象的span:true 开启后，就可以嵌入rows数组**

```js
cols: [
        {
         span: true,
         rows: [] // 递归嵌入下一个rows
        },
      ],
```

## 通过flex 改变 列比例
```js
span: true,
flex: '1.5 1',
rows: [...]
```

## 举例 row1.js

```js
export default {
  rows: [
    {
      cols: [
        {
          headerTitle: '标题名称1:',
          type: 'checkbox',
          arr: getHunyinxianzhuang()
        },// 第一列
      ],// 第一行
    },
    {
      cols: [
        {
          headerTitle: '标题名称2',
          hideContent: true,
          flex01: true
        },
        {
          span: true,
          rows: [
            {
              cols: [
                {
                  headerTitle: '右侧框内容',
                  type: 'checkbox',
                  arr: [{ code: '1', codeName: '无变化' }],
                  hideHeader: true
                }
              ],
            },
            {
              cols: [
                {
                  span: true,
                  rows: [
                    {
                      cols: [
                        {
                          headerTitle: '变化 ',
                          headerWidth: '100px',
                          colWidth: '10%', // 单框微调右侧挤一些
                          flex: 'auto',
                          type: 'checkbox',
                          arr: getHunyinxianzhuang()
                        },
                        {
                          span: true,
                          rows: [
                            {
                              direction: 'column',
                              cols: [
                                {
                                  headerTitle: '标题名称3',
                                  type: 'input',
                                },
                              ],
                            },
                          ]
                        },
                      ]
                    }
                  ]
                }
              ]
            },
          ]
        }
      ],
    },


  ]
}

function getHunyinxianzhuang () {
  return [
    { code: "选项1", codeName: "选项1" },
    { code: "选项2", codeName: "选项2" },
    { code: "选项3", codeName: "选项3" },
    { code: "选项4", codeName: "选项4" },
  ]
}
```

## 外层调用组件代码
**模板**
```js
<h2>2-1.表格标题</h2>
<FormZen :formRows="row2_1"
          :formData.sync="row2_1Data"
          :formRules="row2_1Rules">
  <template slot="top"
            slot-scope="{ data, refs }">
    <Button type="primary"
            @click="btnClickHandle(data, refs)"
            style="float:left;">确定1</Button>
  </template>
  <template slot="key3">
    <Input v-model="row2_1Data.key3"
            placeholder="请输入"
            style="width: 100%" />
  </template>
</FormZen>
```

**方法**
```js
methods: {
    btnClickHandle (data, refs) {
      refs.formRef.validate((valid) => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      })
    }
  },
```
