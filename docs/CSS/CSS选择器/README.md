# CSS 选择器
> CSS选择器是CSS规则的一部分，位于CSS声明块前，决定了定义的样式规则会被应用到哪些DOM元素上。

> 本文内容建议配合demo食用：[https://github.com/Raaabbit/MyNotes/tree/master/CSS%E9%80%89%E6%8B%A9%E5%99%A8](https://github.com/Raaabbit/MyNotes/tree/master/CSS%E9%80%89%E6%8B%A9%E5%99%A8)

这个例子展示了最基本的id选择器、class选择器和标签选择器：
```css
#app{
    width: 300px;
    margin: 10px auto;
    background-color: #eeeeee;
    border-radius: 30px 30px;
    padding: 100px;
}
.demo-list{
    color: blueviolet;
    font-size: 30px;
}
p{
    display: inline;
}
```

## 简单选择器
所谓的简单选择器就是上面的例子中的三种：id选择器、class选择器和标签选择器，除此之外还有一个不怎么常用的通配符选择器
```css
*{
    margin:0;
    padding:0;
}
```
这个选择器下的样式可以选择所有的DOM元素，同时优先级和效率都相对更低，不太常用。

注：
- 类选择器匹配类名，以`.`开头，类名必须以字母开头（我习惯用 `-` 分割而不用 `_`），区分大小写
(这个好像没什么用)

## 属性选择器
当元素设置了属性时匹配（比如 `button` 元素的 `disabled` ）就可以通过属性进行匹配。有两种不同的类型，请看下面的例子：
```css
/* 第一种 [attr] */
[disabled]{
    background-color: #ccc;
}
/* 第二种 [attr=val] */
[type='button']{
    background-color: #ccc;
}
/* 第三种 [attr~=val] 属性包含val */
[class~='test']{
    color:red;
}
/* 第四种 [attr^=val] 属性以val开头 */
[class^='demo']{
    background-color:red;
}
/* 第五种 [attr|=val] 属性以 val- 开头 */
[class|='demo']{
    background-color:red;
}
/* 第六种 [attr$=val] 属性以 val 结尾 */
[class$='item']{
    font-weight: bold;   
}
```
**注：**第一种不管属性值是什么都能匹配到，就比如上面的 `disabled` 无论是 `true` 还是 `false` 都会匹配到。

另外我感觉第四、五、六种都没什么用，，，，

## 伪类
定义：
伪类根据元素的特征分类，而不是名字、属性或者内容。

定义太生硬了，下面是例子：
```css
/* 伪类选择器 */
#app:hover{
    border:2px solid #aaccaa;
}
```
**常见的伪类选择器：**

|伪类选择器|功能|
|-|-|
|:hover|鼠标移入元素上方|
|:focus|元素获得焦点|
|:checked|选中的表单元素|
|:empty|没有任何子元素的元素|
|:optional|表单元素中可以为空的元素|
|:read-only|只读属性的元素|
|:read-write|没有只读属性的元素|
|:required|选择表单必填项的元素|
|:valid|选择所有有效值的元素|
|:target|当前活动元素|
|:root|匹配到文档根元素|
|:enabled|匹配到页面上可用状态的元素|
|:disabled|匹配到不可用的元素|
|:first-child|匹配到一个作为第一个子元素的元素|
|:last-child|匹配到一个作为最后一个子元素的元素|
|:nth-child(n)|匹配父元素的第n个子元素（允许食用乘法因子n作为换算）|
|:nth-last-child(n)|匹配父元素的倒数第n个子元素|
|:link|没有访问过的链接|
|:visited|访问过的链接|
## 伪元素选择器
定义：
伪元素建立了对超出文档语言指定的文档树的抽象。
|伪元素选择器|功能|
|-|-|
|::first-letter|选择元素的第一个字母|
|::first-line|选择元素的第一行|
|::before|在元素之前插入内容并定制样式|
|::after|在元素之后插入内容并定制样式|
|::selection|被用户选中的内容|

## 组合选择器

组合选择器是通过多个简单选择器进行组合
- 后台选择器：A B，作用于A的子代孙代所有B
- 子代选择器：A>B，作用于A的子代的B
- 相邻元素选择器：A+B，作用于紧邻于A后的B
- 同级元素选择器：A~B，作用于A后面的所有同级的B

## 选择器优先级

浏览器会根据选择器优先级来决定给元素使用什么样式，并解决冲突。

### 一般规则
**内联样式 > ID选择器 > 伪类选择器=属性选择器=类选择器 > 标签选择器 > 通用选择器 > 继承样式**

### 优先级提升
末尾加上`!important` 的优先级最高
例子
```css
div{
    color:#000!important;
}
```