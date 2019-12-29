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