<!-- @format -->

# Javascript Interview Questions And Answers

### Table of Contents

| No. | Questions                                                                                                              |
| --- | ---------------------------------------------------------------------------------------------------------------------- |
| Q1  | [What is Javascript , where it is used , It's limitations ](#What-is-Javascript-,-where-it-is-used-,-It's-limitations) |
| Q2  | [How javascript works OR V8 engine working ](#How-javascript-works-OR-V8-engine-working)                               |

1. ### What is Javascript , where it is used , It's limitations ?

Javascript is a client and server side programming language , Initially it was only supported on client side browsers , but now it can also run on servers like Nodejs.

Almost all the websites use javascript fully or partially.It can also Interact with hardware devices.

Other languages are built using Javascript , Like Reactjs , VueJs , Angular Js , Hybrid web or mobile application , React Native , Ionic , Phonegap , Flutter etc.

## Advantages

It used in most of the languages like , React , Angular , Vues , ReactNative , Cross platform application  
 It can also be embedded with hardware.

i. **Speed** - JavaScript used to be purely interpreted but that was many years ago. Nowadays, it is uses JIT-compiler to convert code to optimized version of code so speed get increased.

ii. **Simplicity** - Its syntax is simple so easy so It is easy to understand and learn.

iii. **Popularity** - almost all the the browser support javascript , famous websites uses it like Google , Amazon , Paypal etc

## Limitations of javascript

i. **Client side security** - code is viewable to the use , can be used for malicious purposes.

ii. **Browser support** - browsers interpret javascript differently in different browsers , so old browsers may not support new functions created in javascript so we need to install a new version of javascript.

iii. **Lack of debugging facility** - Unlike other languages , Javascript is not easy to debug, sometimes browsers do not show any error so it becomes difficult for developers to find errors.

iv. **Stopped Rendering** - Page gets stopped rendering when there is error related to javascript.

2. ### How javascript works OR V8 engine working ?

Javascript uses V8 engine to provide run time environment to run code on browser on nodejs. V8 engine is a normal software or program writen in C++ , Javascript can run on different browsers , browsers have different Engines to run like Mozila uses SpiderMonkey.

In V8 engine javascript code gets into 3 phases.

i. **Parsing** - In this phase javascript code get converted into Abstract syntax tree.

ii. **Compilation** - During the compilation it uses JIT(Just in time compilation) to convert code into bytecode.

iii. **Execution** - In this phase it uses interpreter as well as compiler to conevert code into bytecode.

V8 engine also uses Callstack , event queue , memory heap (Mark and sweep algorithim).

**[⬆ Back to Top](#table-of-contents)**
