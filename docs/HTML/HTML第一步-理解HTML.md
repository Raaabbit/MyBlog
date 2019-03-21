# HTML第一步-理解HTML

> 今天在这里整理前端体系中看似最简单，却又暗藏玄机的HTML

## HTML的前世今生
HTML 的全称是超文本标记语言（HyperText Markup Language），这并不是编程语言而是一种标记语言，通过各种标签来构成一个网页中的内容。

到目前位置，比较有影响力的 HTML 的版本有：
- 1991年：html
- 1999年：html4.01
- 2000年：xhtml1.0（开始趋于标准严格）
- 2001年：xhtml1.1
- 2005年：xhtml2.0
- 2008年：html草案
- 2014年：html5正式版本
- 2017年：html5.2（目前普遍使用的版本）

## 理解HTML文档
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <style></style>
    <link rel="stylesheet" href="">
</head>
<body>
    <!-- body -->
    <div>
        <p>欢迎浏览我的博客</p>
    </div>
    <script></script>
</body>
</html>
```

### 文档声明

一份 HTML 文档的第一行应当以文档声明开始：
文档声明的作用是告知浏览器应当以什么方式来解析这份文档，在不同的版本有不同的文档声明：
```html
<!-- html 4.01 -->
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">

<!-- xhtml -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<!-- html5 -->
<!DOCTYPE html>
```

（我拒绝接受需要兼容远古浏览器，并使用 html4/xhtml）

**注意：** 文档声明并不强制区分大小写，但是上面的例子是推荐的写法

### html文档
文档声明之后就是 html 文档的主体部分，以 html 标签包裹，其中有 head 部分和 body 部分。
```html
<html>
    <head>
    </head>
    <body>
    </body>
</html>
```
head 部分是文档头部， body部分是文档主体。

### head文档头部
head 文档头部中包含了 **文档元数据** 其中包含了文档的一系列属性和信息。
```html
<head>
    <meta charset="UTF-8">
    <!-- 在这里定义标题 -->
    <title></title>
    <link rel="stylesheet" href="">
    <style></style>
</head>
```
其中，除了 title 和 icon （参考文章 -> [文档标题](https://raaabbit.github.io/HTML/HTML%E6%96%87%E6%A1%A3%E6%A0%87%E9%A2%98/))

元数据的详细内容我们下一篇文章再进行总结

### body文档主体

这部分内容是用户真正可以在页面上看到的部分，包含页面上的文本、图片、媒体等等。
```html
<body>
    <!-- body -->
    <div>
        <p>欢迎浏览我的博客</p>
    </div>
    <script></script>
</body>
```
另外，我们会习惯性的将页面中的 js代码 放在 body的尾部，具体原因请参考前端优化部分～


