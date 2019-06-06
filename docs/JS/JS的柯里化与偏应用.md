# JS的柯里化与偏应用
> 在之前的文章中对函数式编程做了一个简单的概述，在这篇文章中对一个大家喜闻乐见的话题——函数的柯里化进行一个总结。

** ⚠️注意： **柯里化和偏应用的概念经常被混用，在文中会有概念上的简单区分
## 一些基本概念

### 一元函数、多元函数以及变参函数
这些概念还是很好理解的，我们的日常开发中总是伴随着这些函数：
- 一元函数：只有一个参数的函数，形如
```js
let log = (msg) => {console.log(msg)}
```
- 多元函数：有多个参数的函数，形如
```js
let add = (x,y) => {return x+y}
```
- 变参函数：参数数量不确定的函数，在ES6之前我们通过 `argements` 获取所有参数，现在我们往往会使用 `...args` 因为这样我们可以直接使用数组方法进行操作，形如
```js
function logAll(){
    // arguments 不是数组，只是一个类数组对象
    console.log(arguments); 
}
logAll(1,2,3); // [1,2,3]

function logAllByES6(...arg){
    // arg是数组，可以执行数组方法
    console.log(arg.map((item)=>{return item*2})); 
}
logAllByES6(1,2,3) // [2,4,6]
```

### 柯里化
根据一个相对通用的定义，函数的柯里化指：
> 把一个多参数函数转换为一个嵌套的一元函数的过程

有一个非常典型的例子是add函数
```js
// 柯里化前
function add(x,y){
    return x+y;
}
add(1,2); // 3

// 柯里化后
function addCurried(x){
    return function(y){
        return x+y;
    }
}
addCurried(1)(2); //3
```
这样做的好处

### 偏应用