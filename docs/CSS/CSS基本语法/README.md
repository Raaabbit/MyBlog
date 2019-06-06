# CSS 基本语法
> CSS 是前端开发的基本功，这篇文章做一个简单的整理吧～

## 规则集以及注释
```css
/* 页面容器 */
.container{
    margin: 10px auto;
    background: #fff; /* 背景颜色 */
}
```
由选择器和生命块组成，关于选择器的内容请参见[https://github.com/Raaabbit/MyNotes/tree/master/CSS%E9%80%89%E6%8B%A9%E5%99%A8](https://github.com/Raaabbit/MyNotes/tree/master/CSS%E9%80%89%E6%8B%A9%E5%99%A8)

## 浏览器私有属性
有些CSS在不同浏览器中的支持不同，这种情况一般出现在一个新的CSS规则尚是草案的时候，浏览器提前对其进行了支持。

例子：
```css
div{
    -webkit-border-radius: 10px 10px;
    -moz-border-radius: 10px 10px;
    -ms-border-radius: 10px 10px;
    -o-border-radius: 10px 10px;
    border-radius: 10px 10px;
}
```
属性名前缀代表了不同的浏览器
-webkit-|-moz-|-ms-|-o-
---|---|---|---
chrome，safari|firefox|IE|opera

**注：** 要根据项目兼容性要求调整书写顺序，特殊属性写在通用标准属性名前。


## CSS 变量
自从CSS3，我们可以在CSS中定义变量，从而使得页面的样式更统一。
下面的例子中，先声明了全局变量，定义了一系列字体颜色和大小；然后再第二段代码中使用了变量。
```css
/* 声明全局变量 */
:root{
    --color-main-font: #303133;
    --color-normal-font: #606266;
    --color-secondary-font: #909399;
    --size-main-title: 20px;
    --size-title: 18px;
    --size-second-title: 16px;
    --size-body: 14px;
    --size-tip: 12px;
}
/* 声明局部变量 */
div{
    --color: green;
}
/* 使用变量 */
.example{
    color:var(--color-main-font);
    /* 如果变量不存在就会使用逗号后面的值 */
    font-size:var(--color-body,20px);
}
```
**注：** 当有重复变量名的时候，遵循优先级规则覆盖！
## 几个特别的规则语法
### @media
媒体查询，是开发响应式网页必不可少的内容
在同一个CSS文件中，可以通过下面的语法规定同一个元素的不同样式，例子摘自菜鸟教程
```css
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .example {background: red;}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .example {background: green;}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .example {background: blue;}
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .example {background: orange;}
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .example {background: pink;}
}
```
另外我们也可以在HTML文件中通过媒体查询判断是否引入一个CSS
```html
<link rel="stylesheet" media="(min-width:480px)" href="mystylesheet.css">
```
### @font-face
使用自定义字体的时候可以用到这个规则
> 字体图标相对于小图片有下面的优点：容易缩放；容易改变颜色；可以拥有透明效果；容易产生阴影；CSS支持良好；浏览器支持良好。
首先我们要准备一些字体图标文件，扩展名为 `.eot`，`.svg`，`.ttf`，`.woff`，`.woff2`，来满足不同的需求

> 我们可以从 https://www.iconfont.cn 下载:D

然后我们要通过 `@font-face` 规则来引入自定义字体图标
```css
@font-face{
    font-family:'myFont';
    src:url('./font/example.svg')format('svg'),
        url('./font/example.ttf')format('truetype');
}
```

```css
/* 可以直接将上面定义好的的 `my-font` 作为字体 */
.my-font{
    font-family: 'myFont';
}
/* 如果是小图标，可以作为伪元素插入到页面中 */
.icon-back:before{
    content:'\800';
}
```
```html
<span class="my-font icon-back"></span>
```