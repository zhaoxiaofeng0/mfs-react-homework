# Visual Studio Code常用功能说明
## 通用快捷键
快捷键	作用


Ctrl+Shift+P,F1	展示全局命令面板


Ctrl+P	快速打开最近打开的文件


Ctrl+Shift+N	打开新的编辑器窗口


Ctrl+Shift+W	关闭编辑器 


## 基础编辑
快捷键	作用
Ctrl + X	剪切
Ctrl + C	复制
Alt + up/down	移动行上下
Shift + Alt up/down	在当前行上下复制当前行
Ctrl + Shift + K	删除行
Ctrl + Enter	在当前行下插入新的一行
Ctrl + Shift + Enter	在当前行上插入新的一行
Ctrl + Shift + | 匹配花括号的闭合处，跳转	
Ctrl + ] / [	行缩进
Home	光标跳转到行头
End	光标跳转到行尾
Ctrl + Home	跳转到页头
Ctrl + End	跳转到页尾
Ctrl + up/down	行视图上下偏移
Alt + PgUp/PgDown	屏视图上下偏移
Ctrl + Shift + [	折叠区域代码
Ctrl + Shift + ]	展开区域代码
Ctrl + K Ctrl + [	折叠所有子区域代码
Ctrl + k Ctrl + ]	展开所有折叠的子区域代码
Ctrl + K Ctrl + 0	折叠所有区域代码
Ctrl + K Ctrl + J	展开所有折叠区域代码
Ctrl + K Ctrl + C	添加行注释
Ctrl + K Ctrl + U	删除行注释
Ctrl + /	添加关闭行注释
Shift + Alt +A	块区域注释
Alt + Z	添加关闭词汇包含


声明式编程：告诉“机器”你想要的是什么，让机器想出如何去做，声明式更加直观，声明式说白了就是对命令式的上层封装。
## 什么是 React Compoent? 它一般继承于什么？一般至少实现哪个方法？
React.Component是以ES6的形式来创建react的组件的，是React目前极为推荐的创建有状态组件的方式，最终会取代React.createClass形式；相对于 React.createClass可以更好实现代码复用。必须包含render()方法
## JSX 语法对比普通 JavaScript 有何不同？它是如何解析的？
JSX就是Javascript和XML结合的一种格式。React发明了JSX，利用HTML语法来创建虚拟DOM。当遇到<，JSX就当HTML解析，遇到{就当JavaScript解析。如果 JSX 标签是闭合式的，那么你需要在结尾处用 />, 就好像 XML/HTML 一样。
## 阻塞调用与非阻塞调用有何不同？
阻塞 
阻塞调用是指调用结果返回之前，当前线程会被挂起。函数只有在得到结果之后才会返回。

非阻塞 
非阻塞和阻塞的概念相对应，指在不能立刻得到结果之前，该函数不会阻塞当前线程，而会立刻返回。 


**码蜂社和XXX版权所有，转载请注明出处**
