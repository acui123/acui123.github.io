(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{612:function(s,t,a){"use strict";a.r(t);var n=a(12),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"javascript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[s._v("#")]),s._v(" JavaScript")]),s._v(" "),a("h3",{attrs:{id:"_1-promise的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-promise的理解"}},[s._v("#")]),s._v(" 1.Promise的理解")]),s._v(" "),a("h3",{attrs:{id:"_2-箭头函数和普通函数的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-箭头函数和普通函数的区别"}},[s._v("#")]),s._v(" 2.箭头函数和普通函数的区别")]),s._v(" "),a("p",[s._v("普通函数中的this指向函数被调用的对象，因此对于不同的调用者，this的值是不同的。箭头函数没有prototype")]),s._v(" "),a("p",[s._v("箭头函数中并没有自己的this(同时箭头函数中也没有其他的局部变量。如this,argument,super等)。所以箭头")]),s._v(" "),a("p",[s._v("函数中的this是固定的，它指向定义该函数时所在的对象")]),s._v(" "),a("p",[s._v("普通函数中的this总是指向它的直接调用者。")]),s._v(" "),a("p",[s._v("在严格模式下，没有直接调用者，则函数中的this是undefined")]),s._v(" "),a("p",[s._v("在默认模式下，没找到直接调用者，则函数中的this指向window")]),s._v(" "),a("p",[s._v("箭头函数是匿名函数，因此不能使用new作为构造函数使用。")]),s._v(" "),a("p",[s._v("箭头函数中的this始终指向其父级作用域中的this.箭头函数会捕获其所在的上下文的this值，作为自己的this值")]),s._v(" "),a("p",[s._v("。任何方法都改变不了其指向，如call(),bind(),apply().在箭头函数中调用this时，仅仅是简单的沿着作用域")]),s._v(" "),a("p",[s._v("链向上寻找，找到最近的一个this拿来使用，它与调用时的上下文无关")]),s._v(" "),a("p",[s._v('箭头函数不绑定arguments,取而代之用rest参数"..."解决')]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    a"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("b")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// undefined")]),s._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, frames: Window, …}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("c")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 10")]),s._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// {a: 10, b: ƒ, c: ƒ}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("d")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 10")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("e")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      setTime\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n  obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("d")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("h3",{attrs:{id:"_3-es6新特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-es6新特性"}},[s._v("#")]),s._v(" 3.ES6新特性")]),s._v(" "),a("p",[s._v("1.let和const")]),s._v(" "),a("p",[s._v("2.全局作用域/私用作用域")]),s._v(" "),a("p",[s._v("3.变量的赋值解构")]),s._v(" "),a("p",[s._v("① 解构的值一定是可遍历的")]),s._v(" "),a("p",[s._v("② 如果解构不成功，存储值是undefined")]),s._v(" "),a("p",[s._v("4.对象的解构")]),s._v(" "),a("p",[s._v("对象的解构按照属性名进行解构，跟顺序无关")]),s._v(" "),a("p",[s._v("5.数组的拓展")]),s._v(" "),a("p",[s._v("6.对象的拓展")]),s._v(" "),a("h3",{attrs:{id:"_4-var-let-const-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-var-let-const-的区别"}},[s._v("#")]),s._v(" 4.var let const 的区别")]),s._v(" "),a("p",[s._v("① 块级作用域")]),s._v(" "),a("p",[s._v("块级作用域由{ }包括,let和const具有块级作用域，var不存在块级作用域。")]),s._v(" "),a("p",[s._v("块级作用域解决了ES5中的两个问题：")]),s._v(" "),a("p",[s._v("内层变量可能覆盖外层变量")]),s._v(" "),a("p",[s._v("用来计数的循环变量泄露为全局变量")]),s._v(" "),a("p",[s._v("② 变量提升")]),s._v(" "),a("p",[s._v("var存在变量提升，let和const不存在变量提升，即在变量声明之后才能使用，否则会报错")]),s._v(" "),a("p",[s._v("③ 给全局添加属性")]),s._v(" "),a("p",[s._v("浏览器的全局对象是window，Node的全局对象是global.var声明的变量为全局变量，同时会将该变量添加为全局")]),s._v(" "),a("p",[s._v("的属性对象，但是let和const 就不会。")]),s._v(" "),a("p",[s._v("var声明的变量会挂载在window上，而let和const声明的变量不会")]),s._v(" "),a("p",[s._v("④ 重复声明")]),s._v(" "),a("p",[s._v("var声明变量时，可以重复声明变量，const和let不能重复声明。")]),s._v(" "),a("p",[s._v("⑤暂时性死区")]),s._v(" "),a("p",[s._v("在代码块内，使用let,const 命令声明变量之前，该变量都是不可用的。在语法上，称为暂时性死区。")]),s._v(" "),a("p",[s._v("⑥ 初始值设置")]),s._v(" "),a("p",[s._v("在变量声明时，var和let可以不用设置初始值。而const声明变量必须设置初始值。")]),s._v(" "),a("p",[s._v("⑦ 指针指向")]),s._v(" "),a("p",[s._v("let和const都是ES6新增的用于创建变量的语法。let创建的变量可以更改指针指向.但const声明的变量是不允许")]),s._v(" "),a("p",[s._v("改变指针的指向")]),s._v(" "),a("h3",{attrs:{id:"_5-实现继承的几种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-实现继承的几种方式"}},[s._v("#")]),s._v(" 5.实现继承的几种方式")]),s._v(" "),a("h3",{attrs:{id:"_6-null和undefined-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-null和undefined-的区别"}},[s._v("#")]),s._v(" 6.Null和undefined 的区别")]),s._v(" "),a("p",[s._v("1.定义\n①undefined:是所有没有赋值变量的默认值\n②null:主动释放一个变量的引用对象")]),s._v(" "),a("p",[s._v("null是空对象引用，引用指向为空")]),s._v(" "),a("p",[s._v("undefined是只定义了引用")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'object'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'undefined'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("undefined")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//false")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//值相同，但类型不同")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("共同点：都是原始类型，保存在栈中变量本地")]),s._v(" "),a("p",[s._v("不同点：\n① undefined"),a("br"),s._v("\n表示变量声明过但并未赋值\n②null\n表示一个变量将来可能指向一个对象")]),s._v(" "),a("h3",{attrs:{id:"_7-call-bind-apply的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-call-bind-apply的区别"}},[s._v("#")]),s._v(" 7.Call bind apply的区别")]),s._v(" "),a("p",[s._v("在JS中这三者都是用来改变函数的this指向的，在讨论区别之前先总结一下相似之处：")]),s._v(" "),a("p",[s._v("1.都是用来改变函数的this对象的指向的")]),s._v(" "),a("p",[s._v("2.第一个参数都是this要指向的对象")]),s._v(" "),a("p",[s._v("3.都可以利用后续参数传参")]),s._v(" "),a("p",[s._v("先看一个例子：")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" xw "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"小王"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        gender "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"男"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        age "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("say")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                                "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" , "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gender "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" ,今年"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                                \n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" xh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"小红"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        gender "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"女"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        age "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                xw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("say")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("输出结果为小王，用xw的方法显示小红 可以用到以上三个方法。")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("xh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("xh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xw")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("xh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("可以看出，call和apply都是对函数的直接调用，但是bind方法返回的是一个函数，需要再调用一下这个函数。")]),s._v(" "),a("p",[s._v("再看call和apply的区别")]),s._v(" "),a("p",[s._v("首先，再修改一下代码")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" xw "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"小王"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        gender "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"男"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        age "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("say")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("school"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("grade")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                                "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" , "')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("gender "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" ,今年"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" ,在"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" school "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"上"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" grade"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("                                \n                        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" xh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                        name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"小红"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        gender "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"女"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                        age "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("可以看到say方法多了两个参数，我们通过call和apply的参数进行传参")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[s._v("xw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("say")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("xh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nxw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("say")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("xh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nxw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("say")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("xh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nxw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("say")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("xh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("可以看到call后边的参数与say方法是一一对应的，而apply方法第二个参数是一个数组，数组中的元素与say方法中一一对应的，bind方法可以像call方法一样传参，也可以，在调用的时候在传参")]),s._v(" "),a("h3",{attrs:{id:"_8-前端缓存的理解-或者-前端数据持久化的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-前端缓存的理解-或者-前端数据持久化的理解"}},[s._v("#")]),s._v(" 8.前端缓存的理解 或者 前端数据持久化的理解")]),s._v(" "),a("h3",{attrs:{id:"_9-防抖和节流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-防抖和节流"}},[s._v("#")]),s._v(" 9.防抖和节流")]),s._v(" "),a("h3",{attrs:{id:"_10-闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-闭包"}},[s._v("#")]),s._v(" 10.闭包")]),s._v(" "),a("p",[s._v("一个函数和对其周围状态（lexical environment，词法环境）的引用捆绑在一起（或者说函数被引用包围），这")]),s._v(" "),a("p",[s._v("样的组合就是闭包（closure）。也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域。在")]),s._v(" "),a("p",[s._v("JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来。")]),s._v(" "),a("p",[s._v("11.数组去重")]),s._v(" "),a("h3",{attrs:{id:"_12-深浅拷贝"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-深浅拷贝"}},[s._v("#")]),s._v(" 12.深浅拷贝")]),s._v(" "),a("p",[s._v("1.深浅拷贝的区别")]),s._v(" "),a("p",[s._v("如何区别深浅拷贝，简单来说，就是假设B复制了A，当修改A时，看B是否会发生变化，如果B也跟着发生了变化，")]),s._v(" "),a("p",[s._v("说明这是浅拷贝，如果B没变，那就是深拷贝")]),s._v(" "),a("p",[s._v("2.栈堆、基本数据类型、引用数据类型")]),s._v(" "),a("p",[s._v("栈堆：存放数据的地方")]),s._v(" "),a("p",[s._v("基本数据类型：number,string,boolean,null,undefined")]),s._v(" "),a("p",[s._v("引用数据类型 ：对象 数组 函数")]),s._v(" "),a("p",[s._v("3.浅拷贝")]),s._v(" "),a("p",[s._v("4.深拷贝")]),s._v(" "),a("p",[s._v("5.引用类型和基本类型栈内储存")]),s._v(" "),a("p",[s._v("5.1 引用类型")]),s._v(" "),a("p",[s._v("5.2 基本类型")]),s._v(" "),a("h3",{attrs:{id:"_13-原型和原型链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-原型和原型链"}},[s._v("#")]),s._v(" 13.原型和原型链")]),s._v(" "),a("p",[s._v("任何对象都有一个原型对象，这个原型对象由对象的内置属性_proto_指向它的构造函数的prototype指向的")]),s._v(" "),a("p",[s._v("对象，即任何对象都是由一个构造函数创建的，被创建的对象都可以获得构造函数的prototype属性。注意：对象")]),s._v(" "),a("p",[s._v("没有prototype属性，只有方法才有prototype属性")]),s._v(" "),a("p",[s._v("任何对象都有一个constructor属性，指向创建此对象的构造函数。比如说{}对象，它的构造函数是function")]),s._v(" "),a("p",[s._v("Object(){}")]),s._v(" "),a("p",[s._v("new一个新对象，它的_proto_属性指向了方法的prototype属性，并且constructor指向了prototype的")]),s._v(" "),a("p",[s._v("constructor属性")]),s._v(" "),a("p",[s._v("创建一个新对象的过程")]),s._v(" "),a("p",[s._v("先创建一个空对象，设置一个_proto_指向方法的原型，设置constructor,用新对象做this指向方法，返回新对")]),s._v(" "),a("p",[s._v("象")]),s._v(" "),a("p",[s._v("原型链的核心就是依赖函数的_proto_的指向，当自身不存在的属性时，就一层层的扒出创建对象的构造函数。")]),s._v(" "),a("p",[s._v("直至到Object时就没有_proto_指向了")]),s._v(" "),a("h3",{attrs:{id:"_14-require-和-import"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-require-和-import"}},[s._v("#")]),s._v(" 14.Require 和 import")]),s._v(" "),a("p",[s._v("区别一：模块加载的时间")]),s._v(" "),a("p",[s._v("require:运行时加载")]),s._v(" "),a("p",[s._v("import:编译时加载（效率更高） 由于是编译时加载，所以import命令会提升到整个模块的头部")]),s._v(" "),a("p",[s._v("区别二：模块的本质")]),s._v(" "),a("p",[s._v("require:模块就是对象，输入时必须查找对象属性")]),s._v(" "),a("p",[s._v("import:ES6模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入，由于ES6模块是编译时加载，使得静态分析成为了可能。有了它，就能进一步拓宽js的语法。")]),s._v(" "),a("p",[s._v("区别三：严格模式")])])}),[],!1,null,null,null);t.default=r.exports}}]);