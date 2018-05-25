## 1、babel 是什么，我们为什么要使用 babel？

Babel 是一种用途很多的javascript编译器，他把最新版的javascript编译成当下可以执行的版本，简言之，利用babel就可以让我们在当前的项目中随意的使用这些新最新的es6，甚至es7的语法。


## 2、我们使用 babel 把 es6 的代码编译为 es5代码后，为什么还需要引入 polyfill？

Babel 默认只转换新的JavaScript句法，而不转换新的API。不同浏览器，不同版本，并不是都支持新的方法，我们需要引入polyfill使得一些低版本或不支持新方法的浏览器能够识别新的方法。


## 3、如下代码输出是什么？为什么？请写出js解释器实际执行的等效代码
```js
var v = 'Hello World';
    (function(){
        console.log(v)
        var v = 'I love you'
    })()
```
输出结果为undefined，**变量提升**：在指定作用域里，从代码顺序上看是变量先使用后声明，但运行时变量的 “可访问性” 提升到当前作用域的顶部，其值为 undefined ,等效代码如下：
```js
var v = 'Hello World';
(function(){
    var v;      //变量提升，并未赋值，
    console.log(v)    //输出结果为undefined
    v = 'I love you';
})()
```

## 4、如下代码输出是什么？为什么？请写出js解释器实际执行的等效代码
```js
function main(){ 
    console.log(foo)      // ?
    var foo = 10
    console.log(foo)      // ?
    function foo(){ 
    console.log("我来自 foo")
    }
    console.log(foo)      // ?
}
main()
```
输出结果如下：
```js
function main(){ 
    console.log(foo)      //function foo() { console.log("我来自 foo");  };  函数声明提升优先于变量声明提升。
    var foo = 10
    console.log(foo)      // 10   当前作用域声明了变量并赋值，所以结果为10
    function foo(){ 
    console.log("我来自 foo")
    }
    console.log(foo)      // 10  当前作用域声明了变量并赋值，所以结果为10
}
main()
```
等效代码如下：
```js
function main(){ 
    var foo
    function foo(){
        console.log("我来自 foo")
    }            
    console.log(foo)     // undefined  
    foo = 10
    console.log(foo)      // 10   
   
    console.log(foo)      // 10  
}
main()
```

## 5、如下代码输出是什么？为什么？请写出js解释器实际执行的等效代码
```js
 var a = 10;
 function main(){
     console.log(a);        // ?
     var a = 20;
     console.log(a);        // ?
     (function(){
         console.log(a);     // ?
         var a = 30;
         console.log(a);     // ?
     })()
     console.log(a);        // ?
 }
 main()
```
输出结果如下：
```js
 var a = 10;
 function main(){
     console.log(a);        // undefined  因为变量提升，这里不会报错，变量提升并没有赋值，所以undefined
     var a = 20;
     console.log(a);        // 20    当前作用域声明了变量并赋值，所以结果为20
     (function(){
         console.log(a);     // undefined 当前作用域下面定义了a=30，变量a会提升到当前作用域顶部，所以undefined
         var a = 30;
         console.log(a);     // 30  当前作用域声明了变量并赋值，所以结果为30
     })()
     console.log(a);        // 20  当前作用域声明了变量并赋值，所以结果为20
 }
 main()
```
等效代码如下：
```js
 var a = 10;
 function main(){
     var a
     console.log(a);        // undefined  
     a = 20;
     console.log(a);        // 20    
     (function(){
         var a
         console.log(a);     // undefined 
         a = 30;
         console.log(a);     // 30  
     })()
     console.log(a);        // 20  
 }
 main()
```

## 6、为什么点击所有的button打印出来的都是5而非0,1,2,3,4？要怎么修改？
```html
  <!DOCTYPE html>
 <html>
 <head>
 <meta charset="utf-8">
 <meta name="viewport" content="width=device-width">
 <title>JS Bin</title>
 <script src="https://code.jquery.com/jquery-3.1.0.js"></script>
 </head>
 <body>
 <ul>
     <li><button>0</button></li>
     <li><button>1</button></li>
     <li><button>2</button></li>
     <li><button>3</button></li>
     <li><button>4</button></li>
 </ul>
 <script>
 var buttons = $("button")
 for(var i=0;i<buttons.length;i++){
     buttons[i].onclick = function(){
         console.log(i)
     }
 }
 </script>
 </body>
 </html>
```
因为i使用的是全局变量，在点击按钮之前，for循环i已经是5了，所以无论点击多少次按钮，输出总是5。修改代码如下
```js
<script>
 var buttons = $("button")
 for(let i=0;i<buttons.length;i++){     //把var改为let即可，声明一个作用域被限制在块级中的变量、语句或者表达式
     buttons[i].onclick = function(){
         console.log(i)
     }
 }
<script/>
```
## 7、什么是解构？数组解构是什么？
ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构。数组解构使用一个数组作为一个数据项，你可以根据 数组模式 （用于从数组中匹配你所需要的数值）从这个数组里面提取数值给一个或者多个变量赋值。


## 8、什么是解构默认值？怎样使用？
只有当一个数组成员严格等于undefined,默认值才会生效。
```js
let [foo = true] = [];
foo // true

let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
```
## 9、下面代码执行会报错吗？为什么？
```js
let foo;
let {foo} = {foo: 1}  
```
会报错，因为let不能重复声明同一个变量。
## 10、下面代码执行结果是什么？会报错吗？
```js
const {"0": a,"1": b} = ["foo", "bar"];
```
不会报错，对象解构如下
```js
const {"0": a,"1": b} = ["foo", "bar"];
a; //foo
b; //bar
```
## 11、下面代码声明了几个变量？值是多少？
```js
let { a: { b: { c }}} = { a: { b: { c: "1",d: "2"}}}
```
声明了1个变量“c”。只是“1”
## 12、数组解构的核心是什么？请自学 Generator 函数 回答下面代码返回什么
```js
function* count() {
    let i = 1
    while (true) {
        yield i++;
    }
}
let [first, second, third, fourth, fifth, sixth] = count();
```

```js
first //1
second //2
third //3
fourth //4
fifth //5
sixth //6
```
## 13、字符串可以解构吗？结合下面代码说说为什么？
```js
const [a, b, c, d, e] = 'hello';
```
字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。效果如下：
```js
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"
```
## 14、什么是箭头函数？它和 function 声明的函数有什么区别？
JS箭头函数和function的区别：

1.箭头函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

2.箭头函数不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

3.箭头函数不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。

4.不可以使用yield命令，因此箭头函数不能用作Generator函数。

## 15、下面代码输出的是什么？为什么？
```js
var a = 2
var obj = {
    a : 1,
    fun : function () {
        console.log(this.a)
    }
}
var obj2 ={
    a : 3
}
obj.fun()          // ?
var fun = obj.fun;
fun()              // ?
obj2.fun = obj.fun
obj2.fun()         // ?
```
输出结果分别是“1”、“2”、“3” 。

obj.fun()执行时，函数里的this指的就是当前函数体内定义的1。

fun()执行时，this相当于window.a所以输出结果为2.

obj2.fun() 执行时，this指向于obj2里面的a，所以结果为3.
## 16、下面代码输出的是什么？为什么？
```js
var a = 2
var obj = {
    a : 1,
    fun : () => {
        console.log(this.a)
    }
}
var obj2 ={
    a : 3
}
obj.fun()          // ?
var fun = obj.fun;
fun()              // ?
obj2.fun = obj.fun
obj2.fun()         // ?
```
输出结果全都是“2” 

箭头函数里面的this对象，指的就是定义时所在的对象，而不是使用时所在的对象
## 17、箭头函数的this静态绑定是什么含义？和this的动态绑定有什么区别？请写出示例代码说明区别
箭头函数里面的this对象，指的就是定义时所在的对象

普通函数里的this对象是指使用时所在的对象，this会根据使用时发生改变
## 18、下面代码输出是什么？结合前几题，试理解this静态绑定的绑定规则。
```js
var id = 2;
function foo() {
    return () => {
        console.log('id:', this.id);
    };
}
foo.call({id: 1})()
```
输出结果为“1”   因为这里使用的是箭头函数this。所以这里foo.call({id: 1})()id是多少，输出结果就是多少
## 19、对于function声明的函数，如果想实现箭头函数的this静态绑定，需要怎么做？


## 20、什么是柯里化(currying)，它有什么作用？
函数柯里化是这样的一个转换过程，把接受多个参数的函数变换成接受一个单一参数(注：最初函数的第一个参数)的函数，如果其他的参数是必要的，返回接受余下的参数且返回结果的新函数。所谓“柯里化”就是使函数理解并处理部分应用。

概括起来有三个作用：1. 参数复用；2. 提前返回；3. 延迟计算/运行。

## 21、下面代码输出的是什么？为什么？
```js
let fun1 = i => i*2
let fun2 = i => {i*2}
console.log(fun1(1))   // ?
console.log(fun2(1))   // ?
```
第一个输出结果为2.第二个输出结果为undefined(如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回)，等效代码如下：
```js
let fun1 = function (i) {
    return i*2
}
console.log(fun1(1))   // 2
//======================
let fun2 = function (i) {
    i*2
}
console.log(fun2(1))   // undefined
```
## 22、以下递归函数在调用 factorial(50000) 时会报错吗？如果会，应该如何修改此函数（改造后的函数还需为递归函数），使其满足尾递归性质而不会栈溢出。
```js
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}
```
会报错，修改后代码如下
```js
function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}
factorial(50000, 1) 
```