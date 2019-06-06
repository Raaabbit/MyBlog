# HTML基本语法

> 不管是编程语言还是标记语言，都要遵循一定的语法，那么，这篇文章对语法进行总结，本文的绝大部分内容都可以在下面这段代码中找到：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
    <!-- body -->
    <div id="app" class="page" >
        &lt; <input type="button" style="color:red" disabled> &gt;
    </div>
    <img title=" a picture">
    <script></script>
</body>
</html>
```
## 标签
HTML 中的标签是一系列被尖括号包裹的关键字，在文档中随处可见（ **看上面的代码片** ），一对标签构成一个元素。

要注意几点：

- 标签要被一对尖括号包裹
- 大部分标签要进行闭合，比如 `<div> </div>` 
- 少部分单标签如 `<input type="button" disabled>` 是自闭合的
- 按照 W3C 标准，标签应当小写，（自定义的组件标签也常常写作用连接符号连接的纯小写形式，比如`SideNav` 写作 `side-nav`


## 属性
很多元素都具有属性
```html
<div id="app" class="page">
    &lt; <input type="button" disabled> &gt;
</div>
```
属性规定了元素的一些性质，也可以成为元素的标示，下面是几个注意点：
- 属性一般是 名称="值" 的形式
- 部分属性可以简写，标示取 bool 真值（上面的 `disabled` ）
- 根据书写规范，属性名一律小写，属性值用双引号包裹

### 一些全局属性
有的属性是只有特定元素才有的，同时也有很多属性是对所有元素都生效的，比如：
#### id 和 class
```html
<div id="app" class="page">
```
id 与 class 的主要作用是标记区分元素，这样 CSS 和 JS 就可以作用于这些元素。

他们的主要不同点在于在整个页面中，id 是唯一的，只能标记一个唯一的元素；class 是不唯一的，用来标记一类功能相似或者样式相似的元素。

#### style
一般情况下我们会通过外部的 CSS 文件或者 head 中的 style 标签中的 CSS 来规定页面中元素的样式，但是我们也会直接在标签的style属性中定义行内样式，一般用来覆盖其他样式（优先级最高）。
```html
<!-- 通过行内样式，设置文字颜色是 red -->
<input type="button" style="color:red" disabled>
```

#### title
title 是元素的附加信息
```html
<img title=" a picture">
```
当用户把鼠标悬停在元素上的时候，附加信息会显示出来

#### data-*
这个属性并不常用，但是在开发中会有特别的效果，我们要将 `*` 更换为具有一定语意的字符串。
```html
<ul>
    <li data-index="0"></li>
    <li data-index="1"></li>
    <li data-index="2"></li>
</ul>
```
这个属性的作用是存储一些定制的数据，比如在上面的例子中，我们可以获得 li 是 ul 的第几个子元素（从0开始）

要获得这个值，我们可以通过 js 中的 `getAttribute` 方法或者 `dataset` 属性得到。

#### 不常用的全局属性
除了上面这些，还有一些不常用的，简单列举如下
accesskey contenteditable dir draggable hidden lang spellcheck tabindex translate 

## 注释与条件注释

html的注释是下面的格式
```html
<!-- This is a comment -->
```

注释掉的内容不会显示，不会被渲染，但是也有例外，比如 **条件注释**

### 条件注释

条件注释主要针对于低版本IE浏览器，可以视情况进行浏览器兼容，比如曾经常用的使 ie低版本兼容 html5标签的一段代码：
```html
 <!--[if lte IE9]>
<script src="http://cdn.bootcss.com/html5shiv/r29/html5.min.js"type="text/javascript" charset="utf-8"></script>
<script src="http://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"type="text/javascript" charset="utf-8"></script>
<![endif]-->
```
将这段代码加入 head 中，就可以在ie低版本中引入src中的js代码，进行兼容。

（拒绝IE低版本

## 实体字符
由于 html 语法的限制，如果我们在文本中想要书写尖括号或者大于/小于号，可能会被识别为标签，因此我们要用实体字符（类似转义字符）进行替换。还有一些难以输入的特殊符号也有对应的实体，列举如下：

显示结果|	描述|	实体名称|	实体编号
---|---|---|---
` `|空格|`&nbsp;`|`&#160;`
<|小于号|`&lt;`|`&#60;`
> |大于号|`&gt;`|`&#62;`
&|和号|`&amp;`|`&#38;`
"|引号|`&quot;`|`&#34;`
'|撇号 |`&apos;`|`&#39;`
￠|分|`&cent;`|`&#162;`
£|镑|`&pound;`|`&#163;`
¥|日圆|`&yen;`|`&#165;`
€|欧元|`&euro;`|`&#8364;`
§|小节|`&sect;`|`&#167;`
©|版权|`&copy;`|`&#169;`
®|注册商标|`&reg;`|`&#174;`
™|商标|`&trade;`|`&#8482;`
×|乘号|`&times;`|`&#215;`
÷|除号|`&divide;`|`&#247;`