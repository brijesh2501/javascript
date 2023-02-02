<!-- @format -->

# Javascript Interview Questions And Answers

### Table of Contents

| No. | Questions                                                                                                                                                |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | [What are the possible ways to create objects in JavaScript](#what-are-the-possible-ways-to-create-objects-in-javascript)                                |
| 2   | [What is prototype chain](#what-is-a-prototype-chain)                                                                                                    |
| 3   | [What is the difference between Call, Apply and Bind](#what-is-the-difference-between-call-apply-and-bind)                                               |
| 4   | [What is JSON and its common operations](#what-is-json-and-its-common-operations)                                                                        |
| 5   | [What is the purpose of the array slice method](#what-is-the-purpose-of-the-array-slice-method)                                                          |
| 6   | [What is the purpose of the array splice method](#what-is-the-purpose-of-the-array-splice-method)                                                        |
| 7   | [What is the difference between slice and splice](#what-is-the-difference-between-slice-and-splice)                                                      |
| 8   | [How do you compare Object and Map](#how-do-you-compare-object-and-map)                                                                                  |
| 9   | [What is the difference between == and === operators](#what-is-the-difference-between--and--operators)                                                   |
| 10  | [What are lambda or arrow functions](#what-are-lambda-or-arrow-functions)                                                                                |
| 11  | [What is a first class function](#what-is-a-first-class-function)                                                                                        |
| 12  | [What is a first order function](#what-is-a-first-order-function)                                                                                        |
| 13  | [What is a higher order function](#what-is-a-higher-order-function)                                                                                      |
| 14  | [What is a unary function](#what-is-a-unary-function)                                                                                                    |
| 15  | [What is the currying function](#what-is-the-currying-function)                                                                                          |
| 16  | [What is a pure function](#what-is-a-pure-function)                                                                                                      |
| 17  | [What is the purpose of the let keyword](#what-is-the-purpose-of-the-let-keyword)                                                                        |
| 18  | [What is the difference between let and var](#what-is-the-difference-between-let-and-var)                                                                |
| 19  | [What is the reason to choose the name let as a keyword](#what-is-the-reason-to-choose-the-name-let-as-a-keyword)                                        |
| 20  | [How do you redeclare variables in switch block without an error](#how-do-you-redeclare-variables-in-switch-block-without-an-error)                      |
| 21  | [What is the Temporal Dead Zone](#what-is-the-temporal-dead-zone)                                                                                        |
| 22  | [What is IIFE(Immediately Invoked Function Expression)](#what-is-iifeimmediately-invoked-function-expression)                                            |
| 23  | [How do you decode or encode a URL in JavaScript?](#how-do-you-decode-or-encode-a-url-in-javascript)                                                     |
| 24  | [What is memoization](#what-is-memoization)                                                                                                              |
| 25  | [What is Hoisting](#what-is-hoisting)                                                                                                                    |
| 26  | [What are classes in ES6](#what-are-classes-in-es6)                                                                                                      |
| 27  | [What are closures](#what-are-closures)                                                                                                                  |
| 28  | [What are modules](#what-are-modules)                                                                                                                    |
| 29  | [Why do you need modules](#why-do-you-need-modules)                                                                                                      |
| 30  | [What is scope in javascript](#what-is-scope-in-javascript)                                                                                              |
| 31  | [What is a service worker](#what-is-a-service-worker)                                                                                                    |
| 32  | [How do you manipulate DOM using a service worker](#how-do-you-manipulate-dom-using-a-service-worker)                                                    |
| 33  | [How do you reuse information across service worker restarts](#how-do-you-reuse-information-across-service-worker-restarts)                              |
| 34  | [What is IndexedDB](#what-is-indexeddb)                                                                                                                  |
| 35  | [What is web storage](#what-is-web-storage)                                                                                                              |
| 36  | [What is a post message](#what-is-a-post-message)                                                                                                        |
| 37  | [What is a cookie](#what-is-a-cookie)                                                                                                                    |
| 38  | [Why do you need a Cookie](#why-do-you-need-a-cookie)                                                                                                    |
| 39  | [What are the options in a cookie](#what-are-the-options-in-a-cookie)                                                                                    |
| 40  | [How do you delete a cookie](#how-do-you-delete-a-cookie)                                                                                                |
| 41  | [What are the differences between cookie, local storage and session storage](#What-are-the-differences-between-cookie-local-storage-and-session-storage) |
| 42  | [What is the main difference between localStorage and sessionStorage](#what-is-the-main-difference-between-localstorage-and-sessionstorage)              |
| 43  | [How do you access web storage](#how-do-you-access-web-storage)                                                                                          |
| 44  | [What are the methods available on session storage](#what-are-the-methods-available-on-session-storage)                                                  |
| 45  | [What is a storage event and its event handler](#what-is-a-storage-event-and-its-event-handler)                                                          |
| 46  | [Why do you need web storage](#why-do-you-need-web-storage)                                                                                              |
| 47  | [How do you check web storage browser support](#how-do-you-check-web-storage-browser-support)                                                            |
| 48  | [How do you check web workers browser support](#how-do-you-check-web-workers-browser-support)                                                            |
| 49  | [Give an example of a web worker](#give-an-example-of-a-web-worker)                                                                                      |
| 50  | [What are the restrictions of web workers on DOM](#what-are-the-restrictions-of-web-workers-on-dom)                                                      |
| 51  | [What is a promise](#what-is-a-promise)                                                                                                                  |
| 52  | [Why do you need a promise](#why-do-you-need-a-promise)                                                                                                  |
