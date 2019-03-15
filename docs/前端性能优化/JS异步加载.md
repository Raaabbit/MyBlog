# body末尾引入JS与JS异步加载

> 自觉自己基础不扎实，不应该心猿意马，所以很久没有更新性能优化专栏，回顾总结了一段时间后再来一发吧～

在学习前端开发的最开始，就可能有人告诉你，在 body 的末尾再引入 script 标签（收到依赖的jQuery更适合放在前面），书写js代码就提高效率，这到底是为什么呢？ 

## 引入外部js带来的问题
先看一个不好的例子：
```html
<body>
    <!-- body -->
    <div id="app" class="page" >
        <input type="button" style="color:red" disabled> 
        <script src="./example.js"></script>
        <img title=" a picture">
    </div>
    <script></script>
</body>
```

由于 **逐步呈现** 的策略，当 script 横插到body中间，我们可能会看到这样的场景：input显示在屏幕上，再微微的卡顿后 img 才被渲染出来。

因此我们可得到一个粗略的结论，script 插入越晚，页面上的可见内容更能快速呈现出来。

## 受到限制的并行下载
根据之前写到的，我们影响页面渲染的一个重要因素的是http请求的数量，因为请求在网络环境的影响下可能会很慢。即便是并行下载，也并不能一次性完成很多请求，因为根据 Http 1.1 的标准建议，每个主机名一次性下载两个组件。这只是标准的建议，不同浏览器的实现不同，用户也可以手动更改设置

（鉴于这个限制在Http2被打破了，，，emmm，这段内容见供参考～）

同时开发者也可以利用CDN将静态资源分发在多个主机上，同时这样也可能会有并行下载过多带来的副作用

## script阻止并行下载
在加载script的时候，并行下载会暂时被阻止，现在看来原因非常明显啦

现在的 web 页面很少有纯粹的静态页面了，一旦有动态内容，为了避免错误，浏览器都会等待。

另外，如果这个页面上有多个 script 的话，也会造成这个现象，因为浏览器为了避免因为 js 相互依赖错误，会让脚本按照顺序下载，并行下载也就被浏览器阻止了。

## 更好的实践，JS异步加载

目前位置，我们知道了两点：

- 脚本会阻塞后面内容的呈现
- 脚本会阻止后面组件的下载

故我们应当把大部分脚本放在靠后的位置，but 对于会影响页面内容的脚本还是应该放的靠前一点。这时候我们可以采用异步的方式，晚一点引入不是那么紧急的脚本。

### 方式一：defer属性或async属性
这两个属性的添加可以让 script 的下载并行，也不会阻挡其他文档元素的下载，在下载好之后则时执行：
```html
<script defer src="js/example1.js"></script>
<script async src="js/example2.js" ></script>
```
这两个属性中，defer 是 html4 时代的属性，而 async 是 html5 时代的属性，他们的共同点是可以和其他组件脚本并行下载，不会阻碍页面的渲染，当然其中都不能使用document.write。

他们的不同点更加重要：带有 async 属性的脚本，一旦加载完成就会立即执行；带有 defer 属性的脚本在下载完成后并不会立即执行，而是在DOM加载完成之后执行（DOMContentLoaded 阶段而不是 onload 阶段）。

> DOMContentLoaded : 页面(document)已经解析完成，页面中的dom元素已经可用。但是页面中引用的图片、subframe可能还没有加载完；onLoad：页面的所有资源都加载完毕（包括图片）。浏览器的载入进度在这时才停止。

通过这个不同点我们可以很明显的看出来，async 脚本的执行比 defer 脚本的执行更早，更进一步提高了下载执行的并发度，但是也收到了 DOM 的限制。所以：

- 如果这个脚本不依赖于 DOM，也不依赖于其他脚本，果断使用 async
- 如果这个脚本依赖于 DOM，或者不能确定，那就用 defer 吧
- 如果有多个 defer ，它们会按照加载顺序执行，不建议这样做

### 方式二：动态加载js代码
这个方法依赖于 js 代码操作，可以通过 ajax 获取远在服务器端的代码，然后通过 eval 执行。
```js
axios.get('/examplejs').then( res => {
    eval(res.data);
})
```
当然也可以直接创建一个 script 标签，里面写入要执行的代码：
```js
let s = document.createElement('script');
s.innerHTML = `console.log("hello")`;
document.body.appendChild(s);
```