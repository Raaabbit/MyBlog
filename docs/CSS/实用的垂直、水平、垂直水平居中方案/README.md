# 实用的垂直、水平、垂直水平居中方案

> 居中布局在开发过程可以说是非常常见咯，不管是水平居中还是垂直居中都有多种实现方法，常见实现方法走起～

## 水平居中
**要求：** 两个容器嵌套，且宽度 **不固定** ，满足小容器在大容器的水平居中位置
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>测试专用</title>
    <style type="text/css">
        .parent{background-color: gray;width: 100%; height: 100px;}
        .child{background-color:orange; height:100%;}
    </style>
</head>
<body>
    <div class="parent">
        <div class="child"></div>
    </div>
</body>
</html>
```

### 解决方案1：flex + justify—content（推荐）
原理：当设置父元素是flex，子元素就变成了flex-item，宽度由内容决定；在flex模式下`justify—content:center;`可以居中。
```css
.parent{
    display:flex;
    justify—content:center;
}
```
* 优点：只对父元素进行设置,并且，如果设置justify—content，也可以对子元素设置margin
* 缺点：ie低版本不兼容

### 解决方案2：absolute + transform
```css
.parent{
    position: relative;
}
.child{
    position: absolute;
    left: 50%;transform: 
    translateX(-50%);
}
```
* 优点：脱离文档流，对其他元素不影响
* 缺点：不兼容ie低版本

### 解决方案3：inline-block + text-align
原理：将子容器设置为inline-block之后，宽度由内容决定；父容器的text-align就可以生效
```css
.parent{
    text-align: center;
}
.child{
    display: inline-block;
}
```
* 优点：兼容性好，我们可以在ie6/7，可以通过`display:inline;zoom:1;`兼容   
* 缺点：子容器中的内容会继承到居中属性，那么就需要在子容器中额外进行设置

### 解决方案4：table + margin
>   如果子元素不要要求大小自适应，可以不必设置为table

原理：display:table;后，容器的宽度也是由内容决定；margin:auto;可以居中；
```css
.child{
    display:table;margin:auto;
}
```
优点：只对子容器进行设置，在ie8+支持,兼容更低版本直接用`table`替换掉`div`


## 垂直居中
**要求：** 父子容器高度不固定情况下，实现子元素在父元素内居中
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>测试专用</title>
    <style type="text/css">
        .parent{background-color: gray; width: 100px; height: 300px;}
        .child{background-color:orange;width: 100%; }
    </style>
</head>
<body>
    <div class="parent">
        <div class="child">子容器</div>
    </div>
</body>
</html>
```
### 解决方案1：flex + align-items
原理：当设置父元素为flex，子元素变为flex-item，默认align-items是拉伸的，高度变为和父元素相同
```css
.parent{
    display:flex;
    align-items:center;
}
```
* 优点：只对父元素进行设置
* 缺点：兼容性问题

### 解决方案2：absolute + transform
> 有什么是绝对定位解决不了的？
```css
.parent{
    position: relative;
}
.child{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
```
* 优点：不影响其他元素
* 缺点：兼容问题

### 解决方案3：table-cell + vertical-align
> 不推荐，都2019年了，还要用table？

原理：将父元素设置为标单元格之后，vertical就可以生效了
```css
.parent{
    display: table-cell;
    vertical-align: middle;
}
```
* 优点：兼容性好，兼容到ie8+，对于更低版本，将结构换为table结构
* 缺点：会影响子元素内的元素，需要额外设置

## 绝对居中
如果你耐心地看完了前面的水平居中和垂直居中方案，绝对居中自然就掌握啦！

当然在这里也列出几个方案参考！实现原理参见上文！！
**需求：** 父子元素大小都不固定
### 解决方案1：flex + justify-context + align-items
> `flex` 真好用
```css
.parent{
    display:flex;
    justify-content:center;
    align-items:center;
}
```

### 解决方案2：absolute + transform
```css
.parent{
    position: relative;
}
.child{
    position: absolute;
    left: 50%;top: 50%;
    transform: translate(-50%,-50%);
}
```

### 解决方案3：inline-block + text-align + table-cell + vertical-align
```css
.parent{
    text-align: center;
    display: table-cell;
    vertical-align: middle;
}
.child{
    display: inline-block;
}
```

如果这篇文章对你有帮助，不妨关注收藏我的blog吧～


