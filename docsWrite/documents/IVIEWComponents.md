# IVIEW 常用自定义组件

## Modal 提示框 模板

**现在这个和函数弹出的不太一样**

* 函数调用Modal只能调一次，所以连续调用，还是要代码支持

```html
<Modal v-model="huilvVmodel">
  <div style="text-align:left">
    <h3>提示：</h3>
    <div style="height:10px;"></div>
    <p>{{ huilvMsg }}</p>
  </div>
  <div slot="footer">
    <Button type="primary"
            @click="huilvClickHandle">确定</Button>
  </div>
</Modal>
```