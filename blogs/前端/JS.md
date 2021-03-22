---
title: JS知识总结
date: 2021-3-02
tags:
 - 前端
categories:
 -  前端
---

## JavaScript

### 1.Promise的理解

### 2.箭头函数和普通函数的区别

普通函数中的this指向函数被调用的对象，因此对于不同的调用者，this的值是不同的。箭头函数没有prototype

箭头函数中并没有自己的this(同时箭头函数中也没有其他的局部变量。如this,argument,super等)。所以箭头

函数中的this是固定的，它指向定义该函数时所在的对象

普通函数中的this总是指向它的直接调用者。

在严格模式下，没有直接调用者，则函数中的this是undefined

在默认模式下，没找到直接调用者，则函数中的this指向window

箭头函数是匿名函数，因此不能使用new作为构造函数使用。

箭头函数中的this始终指向其父级作用域中的this.箭头函数会捕获其所在的上下文的this值，作为自己的this值

。任何方法都改变不了其指向，如call(),bind(),apply().在箭头函数中调用this时，仅仅是简单的沿着作用域

链向上寻找，找到最近的一个this拿来使用，它与调用时的上下文无关

箭头函数不绑定arguments,取而代之用rest参数"..."解决

``` javascript
var obj = {
    a: 10,
    b: () => {
      console.log(this.a); // undefined
      console.log(this); // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}
    },
    c: function() {
      console.log(this.a); // 10
      console.log(this); // {a: 10, b: ƒ, c: ƒ}
    },
    d:function(){
        return ()=>{
            console.log(this.a); // 10
        }
    },
    e:function(){
      setTime
    }
 
  }
  obj.b(); 
  obj.c();
  obj.d()();

```

### 3.ES6新特性

1.let和const

2.全局作用域/私用作用域

3.变量的赋值解构

① 解构的值一定是可遍历的

② 如果解构不成功，存储值是undefined

4.对象的解构

对象的解构按照属性名进行解构，跟顺序无关

5.数组的拓展

6.对象的拓展


### 4.var let const 的区别

① 块级作用域

块级作用域由{ }包括,let和const具有块级作用域，var不存在块级作用域。

块级作用域解决了ES5中的两个问题：

内层变量可能覆盖外层变量

用来计数的循环变量泄露为全局变量

② 变量提升

var存在变量提升，let和const不存在变量提升，即在变量声明之后才能使用，否则会报错

③ 给全局添加属性

浏览器的全局对象是window，Node的全局对象是global.var声明的变量为全局变量，同时会将该变量添加为全局

的属性对象，但是let和const 就不会。

var声明的变量会挂载在window上，而let和const声明的变量不会

④ 重复声明

var声明变量时，可以重复声明变量，const和let不能重复声明。

⑤暂时性死区 

在代码块内，使用let,const 命令声明变量之前，该变量都是不可用的。在语法上，称为暂时性死区。

⑥ 初始值设置

在变量声明时，var和let可以不用设置初始值。而const声明变量必须设置初始值。

⑦ 指针指向 

let和const都是ES6新增的用于创建变量的语法。let创建的变量可以更改指针指向.但const声明的变量是不允许

改变指针的指向


### 5.实现继承的几种方式

### 6.Null和undefined 的区别
1.定义
①undefined:是所有没有赋值变量的默认值
②null:主动释放一个变量的引用对象

null是空对象引用，引用指向为空

undefined是只定义了引用

``` javascript
typeof null:'object'
typeof undefined:'undefined'

null==undefined //true
null===undefined //false

//值相同，但类型不同
```
共同点：都是原始类型，保存在栈中变量本地

不同点：
① undefined   
表示变量声明过但并未赋值
②null
表示一个变量将来可能指向一个对象
### 7.Call bind apply的区别
在JS中这三者都是用来改变函数的this指向的，在讨论区别之前先总结一下相似之处：

1.都是用来改变函数的this对象的指向的

2.第一个参数都是this要指向的对象

3.都可以利用后续参数传参

先看一个例子：

``` javascript
      var xw = {
                        name : "小王",
                        gender : "男",
                        age : 24,
                        say : function() {
                                alert(this.name + " , " + this.gender + " ,今年" + this.age);                                
                        }
                }
                var xh = {
                        name : "小红",
                        gender : "女",
                        age : 18
                }
                xw.say();
```

输出结果为小王，用xw的方法显示小红 可以用到以上三个方法。
``` javascript
xw.apply(xh)

xw.call(xh)

xw.bind(xh)()
```
可以看出，call和apply都是对函数的直接调用，但是bind方法返回的是一个函数，需要再调用一下这个函数。

再看call和apply的区别

首先，再修改一下代码

``` javascript
 var xw = {
                        name : "小王",
                        gender : "男",
                        age : 24,
                        say : function(school,grade) {
                                alert(this.name + " , " + this.gender + " ,今年" + this.age + " ,在" + school + "上" + grade);                                
                        }
                }
                var xh = {
                        name : "小红",
                        gender : "女",
                        age : 18
                }
```
可以看到say方法多了两个参数，我们通过call和apply的参数进行传参

``` javascript
xw.say.apply(xh,['1','2'])

xw.say.call(xh,1,2)

xw.say.bind(xh,1,2)()

xw.say.bind()(xh,1,2)
```

可以看到call后边的参数与say方法是一一对应的，而apply方法第二个参数是一个数组，数组中的元素与say方法中一一对应的，bind方法可以像call方法一样传参，也可以，在调用的时候在传参


### 8.前端缓存的理解 或者 前端数据持久化的理解



### 9.防抖和节流

### 10.闭包

一个函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起（或者说函数被引用包围），这

样的组合就是闭包（closure）。也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。在 

JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。

11.数组去重

### 12.深浅拷贝
1.深浅拷贝的区别

如何区别深浅拷贝，简单来说，就是假设B复制了A，当修改A时，看B是否会发生变化，如果B也跟着发生了变化，

说明这是浅拷贝，如果B没变，那就是深拷贝

2.栈堆、基本数据类型、引用数据类型

栈堆：存放数据的地方

基本数据类型：number,string,boolean,null,undefined

引用数据类型 ：对象 数组 函数

3.浅拷贝

4.深拷贝

5.引用类型和基本类型栈内储存

5.1 引用类型

5.2 基本类型


### 13.原型和原型链

任何对象都有一个原型对象，这个原型对象由对象的内置属性_proto_指向它的构造函数的prototype指向的

对象，即任何对象都是由一个构造函数创建的，被创建的对象都可以获得构造函数的prototype属性。注意：对象

没有prototype属性，只有方法才有prototype属性

任何对象都有一个constructor属性，指向创建此对象的构造函数。比如说{}对象，它的构造函数是function 

Object(){}

new一个新对象，它的_proto_属性指向了方法的prototype属性，并且constructor指向了prototype的

constructor属性


创建一个新对象的过程

先创建一个空对象，设置一个_proto_指向方法的原型，设置constructor,用新对象做this指向方法，返回新对

象

原型链的核心就是依赖函数的_proto_的指向，当自身不存在的属性时，就一层层的扒出创建对象的构造函数。

直至到Object时就没有_proto_指向了

### 14.Require 和 import

区别一：模块加载的时间

require:运行时加载

import:编译时加载（效率更高） 由于是编译时加载，所以import命令会提升到整个模块的头部

区别二：模块的本质

require:模块就是对象，输入时必须查找对象属性

import:ES6模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入，由于ES6模块是编译时加载，使得静态分析成为了可能。有了它，就能进一步拓宽js的语法。

区别三：严格模式