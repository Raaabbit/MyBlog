# 好用的documentFragment
> 虽然说是第三篇，但是其实算作对第二篇的补充比较合适，没有看第二篇的小伙伴可以戳下面的链接～
> [前端性能优化第二篇](https://blog.csdn.net/github_39457740/article/details/80697345)

## 前戏
在第二篇中提到了回流和重绘，一个重要的优化策略就是在创建dom节点的时候将创建多个节点的操作变为一次操作。下面我以我做的一个小项目——服务中心课表查询中的部分代码为例进行一下说明。

## 栗子
抱歉抱歉这是我奇怪的课程表，仅仅是为了说明我要做什么，呈现课程表的时候在下面的通过一个表格做背景，来显示出第几节课。
![课程表的栗子](https://img-blog.csdn.net/20180614205707598?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTQ1Nzc0MA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
## 平常的做法
在使用documentFragment之前我的做法大致是这样的
```js
let table = document.getElementById("u-table");
for(let i = 0;i<13;i++){
	let tempTr = document.createElement("tr");
	for(let j = 0;j<5;j++){
		let tempTd = document.createElement("td");
		tempTr.appendChilda(tempTd);
	}
	table.appendChild(tempTr);
}
```
上面向table中添加了65个子节点，相应的，页面就要进行65次回流想想就很可怕。
## 使用documentFragment的改进策略
为了减少回流次数，我们可以如此这般
```js
// 创建一个文档碎片
let fragment = document.createDocumentFragment();
// 将所有的单元格都塞进这个fragment中
for(let i = 0;i<13;i++){
	let tempTr = document.createElement("tr");
	for(let j = 0;j<5;j++){
		let tempTd = document.createElement("td");
		tempTr.appendChild(tempTd);
	}
	fragment.appendChild(tempTr);
}
// 直接将文档碎片塞到table里
table.appendChild(fragment);
```
这样仅仅进行了一次重绘就完成了，amazing～
## 其他
### 浏览器兼容性
这么好用的东西，万一不支持怎么办，所以特别奉上浏览器支持情况
![浏览器兼容性](https://img-blog.csdn.net/20180614205340761?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTQ1Nzc0MA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
只要关心第一行basic support，全部支持
so，**放心大胆地使用吧～**

参考：[MDN文档](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)