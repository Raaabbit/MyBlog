# JS的柯里化与偏应用
> 在之前的文章中对函数式编程做了一个简单的概述，在这篇文章中对一个大家喜闻乐见的话题——函数的柯里化进行一个总结。

** ⚠️注意： ** 柯里化和偏应用的概念经常被混用，在文中会有概念上的简单区分
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
这样做的好处在于我们可以通过这样的方式得到一系列新函数，从而让我们优化数据的处理过程

### 偏应用（部分应用）
偏应用又称作部分应用，偏应用的概念和柯里化有所区别，但是又很类似

- 柯里化将函数转化为嵌套的一元函数
- 偏应用是为一个多元函数预先提供部分参数，从而在调用时可以省略这些参数

事实上有很多文章中的柯里化指的就是偏应用，比如：
```js
function add(x,y,z){
    return x+y+z;
}
add(1,2,3); // 6
// 柯里化
addcurried(1)(2)(3); // 6
// 偏应用
addPartial(1,2)(3);  // 6
addPartial(1)(2,3);  // 6
```

## 实现
实现的方式多种多样，写这篇文章的时候也参考了很多前辈的文章，有各种版本的实现，在`ES6`的加持下还出现了“一行代码实现柯里化”这样的骚操作

不过在这里，我选择了比较容易被大家接受的实现方法记录在文中

以下实现方法参考了 `Anto Aravinth` 的实现，并做了一点小小的改动

```js
let curry = (fn) => {
    return function curriedFn(...args){
        if(args.length < fn.length){
            return function(...args2){
                return curriedFn.apply(null,args.concat(args2));
            }
        }
        return fn.apply(null,args);
    }
}
let tipFunc = () => {console.log("通过柯里化，令 tipFunc 在指定事件后执行")}
let tipsTimer = curry(setTimeout)(tipFunc);
tipsTimer(10000); // 10s 后执行
tipsTimer(20000); // 20s 后执行
```
```js
// 偏应用函数
let partial = (fn,...partialArgs)=>{
    let args = partialArgs;
    return function(...fullArgs){
        let arg = 0;
        for(let i = 0;i < args.length && arg < fullArgs.length;i++){
            if (args[i] === undefined){
                args[i] = fullArgs[arg++];
            }
        }
        return fn.apply(null,args);
    }
}
let timer10s = partial(setTimeout,undefined,10000);
partial(()=>{console.log("通过偏应用，为setTimeout函数预先提供参数")});
```