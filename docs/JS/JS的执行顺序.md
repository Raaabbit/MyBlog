
# 技术总结——JS的执行顺序

> 最近在准备面试，才发现对JS的运行机制掌握的还是很浅薄，看了不少文档、博客后在这里做一个简单的总结

## 基础知识
我们都知道，为了避免对DOM的操作产生冲突（JS诞生之初只是为了给页面赋予一些动态效果），JS只有一个线程。即便是现在有了webworker来实现多线程进行任务处理，但实际上，JS的多线程其实是单线程模拟出来的。
所以，为了保证JS的执行效率，异步成为了JS的一个核心的技术点。

## 以往的印象
按照我之前的理解，所谓JS的异步操作就是注册一个回调函数，当触发回调函数的事件满足了，就挂起当前执行的任务，转而执行回调函数。
事实证明我把JS想的太简单了～

## 事实一，事件循环
1. 首先，一门单线程语言从上向下执行
2. 当遇到同步任务，让同步任务进入主线程开始执行；当遇到异步任务，注册异步任务的回调
3. 当异步任务的触发条件完成，回调函数进入事件队列
4. 当主线程中的同步任务完成，将事件队列中的任务拉入主线程
5. 进入步骤2，继续～

上面就是JS的执行顺序，用一个简单的栗子说明一下
```javascript
function foo(){
  console.log('异步回调执行');
}
console.log('第一个同步任务');
setTimeout(foo);
console.log('第二个同步任务');
```
上面代码的执行顺序是：
- 显示`第一个同步任务`
- 然后执行`setTimeout`将foo注册为回调，因为我们没有写延时，所以foo进入了事件队列
- 接下来显示`第二个同步任务`，至此主线程空了
- foo被拉入主线程开始执行，显示`异步回调执行`

## 事实二，宏任务和微任务
除了同步任务和异步任务的差别，有时我们还需要进一步对任务进行划分，也就是宏任务和微任务。
- 宏任务主要包括script，setTimeout，setInterval
- 微任务主要包括Promise，process.nextTick

随着任务的细化，任务队列也进一步分开了分为宏任务队列和微任务队列。

这时的执行顺序如下：
1. 首先script作为第一个宏任务进入主线程开始执行
2. 自上而下执行，当遇到同步任务直接在主线程执行；当遇到异步宏任务，进入宏任务队列；当遇到异步微任务，进入微任务队列
3. 当前宏任务（第一次是script）结束后，检查微任务队列是否为空，如果不为空就拉入主线程执行。
4. 当微任务队列执行完成后，从宏任务队列拉取一个宏任务进入主线程执行，转到步骤3

我们还是举一个栗子
```javascript
setTimeout(function() {
	new Promise(function(resolve) {
	    console.log('promise');
	}).then(function() {
	    console.log('then又是一个微任务');
	})
    console.log('setTimeout是一个宏任务');
})

new Promise(function(resolve) {
    console.log('promise');
}).then(function() {
    console.log('then是一个微任务');
})

console.log('console');
```
这段代码的执行顺序如下：

- 首先整段代码作为一个宏任务，进入主线程执行
- 遇到第一个`setTimeout`，将他的回调函数放到宏任务队列
- 遇到下面的`promise`将`then`，放到微任务队列
- 执行`console.log`，第一个宏任务结束，开始拉取微任务队列，显示`then是一个微任务`，微任务队列空
- 进入宏任务队列执行``setTimeout``的回调函数，将新的`promise.then`放到微任务队列，显示`setTimeout是一个宏任务`，当前宏任务结束，拉取微任务队列
- 显示`then又是一个微任务`，微任务队列空
- 宏任务和微任务全部执行完成，程序执行完成

> 我的理解大致就是这样，如果有哪里写的不正确欢迎指正～