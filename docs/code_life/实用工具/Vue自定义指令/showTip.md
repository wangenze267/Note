### 1、产品需求

表格中如果超出宽度则**显示省略号**，且`hover`状态予以`tooltip`提示

![](https://img.wangez.site/img/showtip.jpg)

如果没有超出，即没有展示省略号，就**不显示**`tooltip`

**其实，核心要求就是去掉不显示省略号的tooltip提示，因为它已经展示全了，提示就多余了**

### 2、解决方案

- 让其换行，来判断高度来解决此问题
- 判断是否超出宽度来解决此问题

介于项目场景为`el-table`中的`cell`，所以采用判断宽度来解决

### 3、代码实现

```vue
<el-tooltip
	content="" v-showtip
	placement="top-start">
	<span
		class="value copy_btn">
		<span class="ellipse-text">{{ item.hostname || '--' }}</span>
	</span>
</el-tooltip>

```

```css
.value {
   flex: 1; 
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
 }

```

新建文件`directives.js`，全局注册Vue自定义指令：`v-showtip`

```js
const compareWidth = (el) => {
  // 如果没有超出宽度，即子<父 则移除tooltip
  if (el.querySelector('.ellipse-text') && el.querySelector('.ellipse-text').offsetWidth < el.offsetWidth) {
    const copyEl = el.parentNode; // 获取到目标节点的父节点
    const copySpan = el.querySelector('.ellipse-text'); // 获取到目标节点的子节点，即纯粹的span标签文案
    el.parentNode.removeChild(el); // 移除带有el-tooltip组件的节点
    copyEl.appendChild(copySpan); // 将纯粹的span标签文案整体追加到目标节点的父节点
  }
};
export default (Vue) => {
  // 注册一个全局自定义指令 `showtip`
  Vue.directive('showtip', {
  	// 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
    bind: (el, binding) => {
    // bind的时候无法获取到已经带有ajax数据的DOM元素，宽度为0
    },
    // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
    inserted: (el) => {
      compareWidth(el); // 可以获取到ajax数据的DOM元素，即真实的宽度
    },
    // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
    update: (el) => {
      compareWidth(el); // 可以获取到ajax数据的DOM元素，即真实的宽度
    },
  });
};

```

在`main.js`中引用注册

```js
import Vue from 'vue';
import initDirectives from '@/utils/directives';

initDirectives(Vue); // Vue全局自定义指令

```

### 4、补充

由于我的应用场景是`el-table`中的一列，因此在使用自定义指令去删除外部的`el-tooltip`的Dom节点后，配合上翻页的话，会有Dom不更新的情况。

这里我配合上了局部刷新来解决此问题。

局部刷新代码如下：

```js
reloadTable() {
  this.isReloadData = false
  this.$nextTick(() => {
    this.isReloadData = true
  })
},
```

将`isReloadData`绑定在`el-table`上的`v-if`指令上，完后在获取table数据的时候，调用此函数局部刷新一下可以完美解决此问题。

> 可能会伴有闪一下的情况，建议配合loading一起使用

