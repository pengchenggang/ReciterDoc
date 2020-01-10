# 常用组件 说明文档

## treeselectZenCountry 国家组件

**功能基本说明**

* 支持常用国家 `根据选择国家的频率将所选国家移动到常用国家内`
* 支持单选多选
* 所选国家 以 文字 的形式返回，多选为逗分格式
* 包含 是否含有中国

::: tip
+ 出国的时候仅能选国家
+ 移居可以选含着港澳台的
  
**中国 港澳台**
* 2-2 false false
* 4 false false
* 6-1 false true
* 6-2 false true
* 13 true true
* 14-1 false true
* 14-2 false true
:::

**引入代码**
```js
import treeselectZenCountry from '@/components/treeselectZen/treeselectZenCountry'
```
**使用代码** `相关参数请自行修改`
```js
<treeselectZenCountry v-model="currentEditData.registerPlace"
                      :haveChina="true"
                      :haveGangAoTai="true"
                      :maxSelectLength="10"
                      :multiple="true"
                      placeholder=""
                      :noBorder="true"
                      :limit="Infinity"
                      @on-change="onChange"
                      :disabled="fillState === 'free'" />
```

**Node**

| Key                 | Type                                  | Description                                |
| ------------------- | ------------------------------------- | ------------------------------------------ |
| **haveChina**       | **Boolean**<br>**default:** `false`   | 是否含有中国                               |
| **haveGangAoTai**   | **Boolean**<br>**default:** `true`    | 设置控件是否显示港澳台 默认为显示          |
| **value**           | **String**                            | 绑定的值，可使用 v-model 双向绑定          |
| **disabled**        | **Boolean**<br>**default:** `false`   | 设置控件为禁用状态                         |
| **multiple**        | **Boolean**<br>**default:** `true`    | 设置控件是否为多选                         |
| **placeholder**     | **String**                            | 设置控件默认显示文字                       |
| **maxSelectLength** | **Number**<br>**default:** `0`        | 设置控件最多选择几个国家 0为不限制         |
| **noBorder**        | **Boolean**<br>**default:** `true`    | 设置控件是否不显示边框 不显示边框为max状态 |
| **limit**           | **Number**<br>**default:** `Infinity` | 设置控件是显示多少个                       |

**Events**

| Name          | Attributes | Description     |
| ------------- | ---------- | --------------- |
| **on-change** | -          | value变化时触发 |

## tableZen 添加单选

```html
<div :class="{ singleSelect }">
  ...
</div>
```

```js

props: {
    // 单选 复选框
    singleSelect: {
      type: Boolean,
      default: false
    },
}


methods: {
  onSelectHandle (selection, row) {
    // console.info('onSelectHandle (selection, row)', selection, row)
    // 22727 【建议】【录入上报】--【年度集中报告】--第11项房产添加去向时，界面内的勾选框改为只允许单选
    this.$nextTick(() => {
      let selection2 = []
      if (this.singleSelect) {
        if (selection.length > 1) {
          for (let i in this.$refs.tableInnerZen.objData) {
            // console.info('i', i)
            if (this.$refs.tableInnerZen.objData[i][this.selectKeyId] === row[this.selectKeyId]) {
              // console.info('this.$refs.tableInnerZen.objData[i][this.selectKeyId]', this.$refs.tableInnerZen.objData[i][this.selectKeyId])
              this.$set(this.$refs.tableInnerZen.objData[i], '_isChecked', true)
            } else {
              this.$set(this.$refs.tableInnerZen.objData[i], '_isChecked', false)
            }
          }
          // this.$Message.warning('只能选择一条记录')

          selection.map((item, index, arr) => {
            if (item[this.selectKeyId] === row[this.selectKeyId]) {
              // console.info('item', item)
              selection2.push(item)
            }
          })
        } else {
          selection2 = [...selection]
        }
      }
      // console.info('selection2', selection2)
      this.getOnSelectionChangeHandle(selection2)
      // console.info('innerData', this.innerData)
      // console.info('onSele this.$refs.tableInnerZen.objData', this.$refs.tableInnerZen.objData)
    })
  },
  onSelectionChangeHandle (item) {
    this.getOnSelectionChangeHandle(item)
  },
  getOnSelectionChangeHandle (item) {
    let arrT = []
    item.some(v => {
      arrT.push(v[this.selectKeyId])
    })

    this.$emit('update:selects', arrT.join(','))
    this.$emit('update:selectItems', item)
  },
}

<style lang="less">
.singleSelect thead .ivu-checkbox-inner {
  display: none !important;
}
</style>
```