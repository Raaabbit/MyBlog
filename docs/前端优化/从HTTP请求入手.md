# 从HTTP请求入手
> 本系列文章是我在阅读《高性能网站架设指南》时的读书笔记，文章的顺序基本和书的顺序是相同的，同时由于这本书的出版时间比较早了，我会根据现代前端的发展变化做出备注。

http请求是提升性能的一个重要方面，我们可以在打开一个网站的时候打开开发者工具的时候看看发生的请求（如果你正在看这篇文章，不妨打开开发者工具，然后看看network，刷新页面），这是就能发现，在一个页面呈现的过程中进行了大量的数据请求，比如样式表，脚本，当然也包括引用的类库和框架。
看看下面几条优化方案，也许会对你有所帮助～


## 策略一：ImageMap
### 描述
这是一种取代多个图片链接的方法。

我们都知道如果我们在页面上呈现多个图片就要进行多次请求。如果这几个图片刚好能够排列在一起，将这些内容拼接成一个大图片，然后在不同区域绑定事件。

### 实现方法

需要三种不同的标签`<img>`，`<map>` ，`<area>`。

* `<img>`标签用来设定图片的内容
*  `<map>` 标签用来和图片进行映射，要在`<img>`中添加`usemap`属性来建立这个链接
* `<area>`标签用来规定成为热点的区域

一个小栗子（来自MDN，如果想看到效果，
）～
```html
<map name="primary">
  <area shape="circle" coords="75,75,75" href="left.html">
  <area shape="circle" coords="275,75,75" href="right.html">
</map>
<img usemap="#primary" src="https://placehold.it/350x150" alt="350 x 150 pic">
```
参考[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map)
## 策略二：图片sprites
### 描述
除了直接使用`<img>`标签引用图片之外，CSS中我们使用的图片同样会造成请求和载入，不妨看看这个页面上有多少图标，点赞，评论，分享等等，不胜枚举。
如果没一个图标都进行一次请求的话，页面的速度可想而知。所以我们换一个策略：将同种类的小图标放置在同一个图片中，然后通过`background-size`和`background-position`属性来得到合适的图标。
### 栗子～
![ 项目素材 ](https://img-blog.csdn.net/20180415215044286?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2dpdGh1Yl8zOTQ1Nzc0MA==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

## 策略三：内联图片
### 描述
传统的插入图片方式是这样滴：`<img src="http://我也不知道写点什么好">`，这样需要进行一次请求来的得到数据。

但是对于一个小小的图片，请求一次性价比不高，又没法应用上面提到的第二项的时候哦，我们可以尝试用内联图片：将图片作为数据直接写到页面的静态内容中。这种方法的优点是减少了请求次数，缺点是增加了第一次请求的大小，浏览器不能缓存这张图片，并且图片的大小有了限制
### 栗子
```html
<img src=“data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAkCAYAAABIdFAMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNo8zjsOxCAMBFB/KEAUFFR0Cbng3nQPw68ArZdAlOZppPFIBhH5EAB8b+Tlt9MYQ6i1BuqFaq1CKSVcxZ2Acs6406KUgpt5/LCKuVgz5BDCSb13ZO99ZOdcZGvt4mJjzMVKqcha68iIePB86GAiOv8CDADlIUQBs7MD3wAAAABJRU5ErkJggg%3D%3D”/>
```
参考[html img Src base64 图片显示](https://blog.csdn.net/samqingqing/article/details/7532141)
## 策略四：合并脚本和样式表
### 描述
在前端为了工程化和模块化，我们往往要将不同的功能模块放到不同的文件中，来保证可读性和可维护性。但是一个页面中有十几个css引用和script显然是不现实的。
解决方案就是在将他们合并到一个文件中，这是要尤其注意变量污染之类的问题。同时当文件A，B，C，D合并为X之后，引用X的这个页面只需要A和B的功能，，这样反而造成了冗余。

现在可以通过前端构建工具，比如[webpack](https://webpack.js.org/)等，进行构建，可以大大减少这些消耗