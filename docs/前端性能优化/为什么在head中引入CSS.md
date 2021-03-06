
# 为什么在head中引入CSS

> 写在前面：有很长一段时间没有更新这个专栏，是因为在准备一些课程上的东西，不过这个专栏一定不会烂尾的~

写这篇文章的原因是因为从我初学前端开始，就一直有人告诉我：“样式表文件在`head`中通过`link`引入，`script`文件在`body`的末尾引入，这样页面加载速度更快。”那么着一切究竟是为什么呢，下面我们来看一下~

（如果真的不想看这些铺垫内容，不妨直接跳到最后的总结，嘤嘤嘤~）

## 曾经的错误尝试
下面这个例子摘自《高性能网站建设指南》第五章开头：
Yahoo！前端团队曾经为了优化门户网站的性能，调整了CSS的位置——由于一个div是在点击某个功能时才会弹出，所以工程师将与这个div有关的CSS在文档的末尾引入，希望以这种方式提高首页的渲染效率。
但是事实上，状况并不理想，甚至恰恰相反——将CSS在文档head引入反而更快。
## 错误原因：逐步呈现被阻止
### 逐步呈现
我们都希望页面的呈现过程是一个逐步呈现的过程，理想的效果是用户能够尽快看到页面上的内容，同时内容可以呈现一个柔滑的增加，毕竟不是所有的用户都有非常良好的网络环境。这样做有几个好处：

- 让用户感受到系统并没有崩溃，它正在有条不紊的运作
- 让用户知道自己大概还需等待多长时间
- 让用户对页面内容有一个概览，同时有内容可以看

注：上面列出的三点是由 Jakob Nielson 提出的可视化回馈的重要性
### 错误
为了增强用户体验，浏览器也采用了这样的方式来处理一个页面。
但是，为了避免当样式表改变时重绘页面中的内容，浏览器会在样式表加载好之前阻止内容呈现。所以将样式表放在文档底部，页面上的内容虽然很快**加载**好了，但是浏览器会延迟**可视化渲染**，这还造成了一个很可怕的现象——白屏。

## 解决方法
解决上面提到的问题其实很简单，只要将CSS以下面的方式引入：
```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>嘤嘤嘤？</title>
	<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
<body>
    
</body>
</html>
```
这时又有一个问题产生了，引入CSS有两种方法：`link`和`@improt`。我们要为什么一般使用`link`呢？     
除了语法更简单，`link`比`@import`的性能好很多，因为`@import`仍然没有解决白屏问题。
使用`@import`会导致下载的无序性，我们的样式表仍然会在最后被下载。
## 浏览器为什么这么做
> 如果样式表仍然在加载，构建呈现树就是一种性能浪费，因为在所有样式表加载并解析完毕之前无需绘制任何东西。否则我们将会遇到FOUC（无样式内容闪烁）问题。

浏览器构建页面的顺序我在之前的文章中写到过，戳戳->[前端性能优化第二篇](https://blog.csdn.net/github_39457740/article/details/80697345)

如果浏览器不做任何操作的话，我们将CSS放在文档后面会导致FOUC问题，具体表现为页面最初呈现一个样式，在短暂的几秒后，样式表加载好，页面布局突然发生了变化。

而白屏现象则是浏览器对闪烁的弥补措施，避免额外的呈现过程，浏览器得以延迟呈现这个页面。

## 总结
1. 我们应当遵守规范，使用**LINK**标签，将样式表文件添加到**HEAD**中
2. 如果我们将样式表放到文档的底部或者使用`@import`可能会导致“白屏”或者“无样式内容闪烁”，具体会发生什么取决于浏览器的策略。