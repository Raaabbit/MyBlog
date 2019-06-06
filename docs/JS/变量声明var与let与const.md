# 变量声明var与let与const

> 现在已经2019年啦，ES6（ES2015）早已经普及了，在学习时第一个接触的就是新的变量声明方式，在这里做一个对比吧～
## var的问题们
现在已经2019年啦，ES6（ES2015）早已经普及了，在之前的版本中我们怎么来定义一个变量呢？  
作为一个弱类型的语言，没有什么是一个`var`解决不了的，于是**问题**来了。我们先看几个之前ES5版本会有的几个问题：      

1. 可以重复声明
> 在一个项目中，如果在版本迭代中或者多人协作中，使用了相同的变量名，就可能造成错误。
```js
//可以重复声明
var a = 12;
var a = 100;
console.log(a);     //控制台打印100
```

2. 无法限制修改
```js
// 有很多约定俗成的量是不可变的
var PI = 3.1415926;
PI = 4;// 这是不合理的
```

3. 没有块级作用域  
在C++。Java这些严谨的语言中，块级作用域是很重要的，但是js在这方面并不明显    
```js
if(true){
    var a = 13;
}
//在if外面也可以访问
console.log(a);
```
## let和const

1. let和const不能重复声明
```js
let a = 10;
let a = 100;
```
下面是报错信息
> Uncaught SyntaxError: Identifier 'a' has already been declared

```js
const b = 10;
const b = 100;
```
下面是报错信息
> Uncaught SyntaxError: Identifier 'b' has already been declared

2. let可以修改，const不可修改

```js
let a= 10;
a = 100;
console.log(a);

const b = 10;
b = 100;
console.log(b);
```
下面是错误信息
> Uncaught TypeError: Assignment to constant variable.

3. 块级作用域问题
```js
    {
        let a = 13;
    }
    //在if外面不可以访问
    console.log(a);
```
错误信息
> Uncaught ReferenceError: a is not defined


## 块级作用域的一个重要作用 
> 这个被用烂了，却依旧好用的例子～

先看看旧版本的问题
```js
<input type="button" value="Btn1">
<input type="button" value="Btn2">
<input type="button" value="Btn3">
<script type = "text/javascript">
window.onload = function(){
    var btns = document.getElementsByTagName("input");
    console.log(btns);
    for(var i = 0;i < btns.length;i++){
        btns[i].addEventListener("click",function(){
            alert(i);
        });
    }
}
</script>
```
经过尝试之后，我们发现，不会像预想的一样分别alert出0，1，2，而都是alert出了3.      
我们往往要用匿名函数来解决问题
```js
<script type = "text/javascript">
window.onload = function(){
    var btns = document.getElementsByTagName("input");
    console.log(btns);
    for(var i = 0;i < btns.length;i++){
        (function(i){
            btns[i].addEventListener("click",function(){
                alert(i);
            });
        })(i);
        
    }
}
</script>
```
这样很繁琐，而且有其他语言使用习惯的，往往不习惯使用函数作用域。    
只要把for循环中的`var`改为`let`就可以完美的解决这个问题，不妨试试下面的代码：
```js
window.onload = function(){
    var btns = document.getElementsByTagName("input");
    console.log(btns);
    for(let i = 0;i < btns.length;i++){
        btns[i].addEventListener("click",function(){
            alert(i);
        });
    }
}
```
本文完