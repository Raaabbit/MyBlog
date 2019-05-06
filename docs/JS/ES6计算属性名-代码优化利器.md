# ES6计算属性名-代码优化利器
> 虽然现在已经是2019年4月了（马上就是5月），ES10的草案也已经诞生很久了，但是 ES6 还是有很多没有研究到的地方，本文就是对 ES6 计算属性名的一个简单梳理

本文主要内容：
- ES6 计算属性名
- 计算属性名的应用场景
- 闲话

## 什么是计算属性名
计算属性名是 ES6 的一个很大的增强，事实上可计算属性不是一个很新鲜的东西

在 ES5 版本中我们也可以通过计算属性来进行取值：
```js
let name = "first name";
let person = {};

person[name] = "Raaa";
console.log(person[name]); // Raaa
console.log(person["first name"]); // Raaa
```

但是我们并不能在字面量声明的时候就使用这样的计算属性：
```js
// 错误示范
let name = "first name";
let person = {
    name: "Raaa", // 错误
    "last name": "bbit" // 正确
};
```

**重点来啦！！！**

在 ES6 的语法中，我们可以直接在字面量定义中使用计算属性，只要使用`[]`即可，我们甚至可以在`[]`中书写表达式：
```js
let name = "first name"

let person = {
    [name]:"Raaa",
    ["last"+" name"]:"bbit",
    // 方法也可以用这样的方式定义
    ["say"+"Hello"](){
        console.log("hello");
    }
}
console.log(person["first name"]); // Raaa
```

新特性要有适合的应用场景才有意义，那么接下来就是我们计算属性的应用！

## 使用计算属性名优化我们的代码

这个词汇不止一次提到了，下面我们说说为什么需要使用计算属性名

当我们进行一个项目开发时（特别是多人项目），要保证命名的可读性和可维护性，这时往往需要进行统一的管理

现在一个常用的方法是使用模块化方法（如ES6模块化规范，CommonJS规范，AMD规范，CMD规范），在一个模块中定义一些常量，并进行统一的导出使用，从而保证变量名良好的维护性

```js
// states.js
export const states = {
    states1:"start",
    states2:"doing",
    states3:"end"
}

```
```js
import STATES from 'states.js'
let obj = {
    [STATES.states1](){
        console.log("start~~")
    }
}
obj[STATES.states1]();
```

我们可以在使用`vuex`这样的工具的时候采用上面的这种模式
```js
//store.js
import Vuex from 'vuex'
import STATES from 'states.js'

const store = new Vuex.Store({
    mutations:{
        [STATES.doing](state){
            // to do
        }
    }
})
```