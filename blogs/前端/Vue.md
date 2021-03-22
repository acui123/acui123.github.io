---
title: Vue知识总结
date: 2021-3-13
tags:
 - 前端
categories:
 -  前端
---


## Vuex

### 什么是Vuex
vuex是实现组件全局状态数据管理的一种机制，可以方便的实现组件之间的数据共享。可以把vuex看成一个仓库

所有的组件都可以把数据存在这里，也可以从这里拿取数据

### vuex的组成

state:存放的公共数据源，所有共享的数据都要统一放到Store的state中进行储存。通过this.$store.state访问

Mutation:在vuex中直接修改state里的数据是不对的，这样不安全，使用Mutation来变更修改数据，可以方便后

期的维护，找到谁能修改这个数据

调用方法：配置好mutation后，在组件中使用，this.$store.commit('方法名称')来修改state的数据

action:在mutaion函数中不能写异步函数，定时器之类的，要执行异步任务，使用action属性来执行

调用方法：this.$store.dispatch('addAsync')

getters:对store中已有的数据进行修改，类似于vuexd的计算属性

调用方法：this.store.getters.名称


## 双向绑定的原理

Vue双向绑定，使用数据劫持和发布订阅模式实现的。

实现的核心是通过Object.defineProperty()对data的每个属性进行了get,set的拦截

观察者模型是双向绑定更有效率

观察者模式，是一对多的模式。 页面上使用data的地方，都观察着这个data.

Object.defineProperty（）

有三个参数

    第一个是属性所在的对象

    第二个是要操作的属性

    第三个是被操作的属性（一般是get,set）的特性

    get:读取属性时触发

    set:写入属性时触发

数据劫持就是通过Object.defineProperty,去操作数据的get、set










## 组件间传递数据

## Vue项目优化

## MVVM和MVC

## Computed和Watch

## V-for和V-if 同时使用的问题

## 什么时候使用$nextTick()

## 路由的原理

## 常用事件修饰符