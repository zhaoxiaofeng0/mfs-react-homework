## 1、Symbol 是什么？有哪些使用场景？
Symbol译作“符号”，它是一种特殊的组，能被多个页面重复引用，在Symbol中修改样式，其他页面也会同时被修改。如果熟悉Axure的同学应该比较容易理解了，对，它的功能和Axure中“母版”的功能类似，但是它的应用某种程度上比Axure的母版更方便。

Symbol 值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。
## 2、Symbol("foo") == Symbol("foo")输出什么？为什么？
输出结果为“flase”!每个 Symbol 值都是独一无二的。
## 3、Symbol.iterator 是什么？这里为什么要使用 Symbol 那？
相当于迭代器的接口，只有对象里有这个symbol的属性，才可以认为此对象是可迭代的。为了保证迭代器不和已有的属性冲突。
## 4、数组解构的核心本质是什么？哪些对象（容器）可以作为数组解构的右值？（此题请自学完成）
数组解构的核心是 具备 Iterator 接口。遍历器（Iterator）接口类型的都可以作为数组解构的右值。
## 5、Promsie 对象有几种状态？他们之间是怎么转换的？
Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。

从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。
## 6、下面代码的输出结果是什么？为什么？（饿了么面试题）
```js
 setTimeout(function() {
     console.log(1)
 }, 0);
 new Promise(function executor(resolve) {
     console.log(2);
     for( var i=0 ; i<10000 ; i++ ) {
         i == 9999 && resolve();
     }
     console.log(3);
 }).then(function() {
     console.log(4);
 });
 console.log(5);
```
运行结果为"2","3","5","4","1" 
## 7、什么是 Promise 对象？引入 Promise 对象是为了解决什么？
所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件 (通常是一个异步操作)的结果。从语法上说，Promise是一个对象，从它可以获取异步操作的消息。
## 8、Promise.all 和 Promise.race 的区别是什么？（此题请自学完成）
Promise.all可以将多个Promise实例包装成一个新的Promise实例。同时，成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候则返回最先被reject失败状态的值。

Promse.race就是赛跑的意思，意思就是说，Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态
## 9、Promise 中抛出未处理的异常  ？会阻碍后面的代码执行吗？Chrome 和 Node.js 环境下有什么不同？
## 10、Promise.catch 方法中再抛出异常会怎么样，需要怎样捕捉？
## 11、then 的链式调用每次返回的是同一个 Promise 对象吗？请写一小段代码证明你的观点
## 12、什么是 Generator 函数？和普通函数有什么区别？怎么声明 Generator 函数？
Generator函数是es6提供的一种异步编程的解决方案,语法行为与传统函数完全不一样。,Generator函数有多种理解角度,从语法上，首先可以把它理解成，Generator函数是一个状态机，封装了多个内部状态。

Generator函数跟普通函数的写法有非常大的区别：

一是，function关键字与函数名之间有一个星号；
二是，函数体内部使用yield语句，定义不同的内部状态（yield在英语里的意思就是“产出”）。

声明如下图
```js
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}
var hw = helloWorldGenerator();
```
## 13、怎样调用 Generator 函数并逐步执行 Generator 代码？
必须调用遍历器对象的next方法，使得指针移向下一个状态。
## 14、Generator 函数实现无限序列原理是什么？
## 15、Generator 函数怎么实现函数内的数据与函数外进行交互的？请从函数内数据传至函数外，和函数外数据传至函数内 两个方面说明
## 16、yield* 有什么用？它和 yield 有什么关系？（此题请自学完成）
两者都是返回 iterator 的一个元素，不过yield 的返回值是当作一个元素，yield* 的返回值是一个 iterator，会依次返回这个 iterator 中的每个元素
## 17、怎么迭代出 Generator 函数所有值？请使用 for of 循环实现
```js
function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

for (let v of foo()) {
  console.log(v);
}
// 1 2 3 4 5
```
## 18、为什么要使用 Generator 函数 或者 async/await 进行异步控制流，对比 callback 和 Promise 方案，主要解决了什么问题？
## 19、Generator 函数为什么能实现异步控制流？其原理是什么？
## 20、什么是 Thunk 函数？为什么使用 Thunk 函数可以通过和 Generator 函数配合实现异步控制流？(此题请自学完成)
编译器的"传名调用"实现，往往是将参数放到一个临时函数之中，再将这个临时函数传入函数体。这个临时函数就叫做 Thunk 函数。
## 21、使用 Promise 可以配合 Generator 函数实现异步控制流吗？具体原理是什么？
## 22、真正发出异步操作指令是在 Generator 函数外还是在 Generator 函数内？（HINT: 基于 Thunk 函数和基于 Promise 两种 Generator 函数异步控制流，情况不一样）
## 23、async 函数是什么？它和 Generator 函数有什么关系？
async函数是Generator函数的语法糖

区别如下:

将*替换为了async且async提到了function的前面,表示函数中有异步操作
将yield替换为了await，表示紧跟后面的表达式需要等待结果
async函数自带了执行器，不需要像Generator一样需要next方法才能执行
yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）
async返回的是一个Promise对象，Generator函数返回的是一个遍历器对象
## 24、在全局域或者普通函数中能使用 await 或 yield 关键字吗？为什么？
不能，await 命令只能用在 async 函数之中,如果用在普通函数,就会报错。yield表达式只能用在 Generator 函数里面。
## 25、直接调用 async 函数的返回值类型是什么？为什么？
返回值类型是Promise 对象。
## 26、下面代码能正常捕获异步异常吗？为什么？如果不能需要怎样修改才可以正常捕获异常？
```js
async function f() {
     throw new Error('出错了');
 }
 try{
     f()
 }catch(e){
     console.log(e)
 }
```
不能。修改代码如下
```js
async function f() {
  throw new Error('出错了');
}

f().then(
  v => console.log(v)
).catch(
  e => console.log(e)
);
```
### 代码题
## 1、请实现与下面 Generator 函数 等价的迭代器
```js
 function* gen(){
     yield 1
     yield 2
     return 3;
 }
```
效果如下
```js

```
## 2、请给对象 let obj={} 加上迭代器，实现其如果迭代返回的是无限 a 的序列
```js
let bbj = {
    
}
```