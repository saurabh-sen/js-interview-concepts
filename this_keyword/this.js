// ! two types of object binding in javascript:-
// ! one: implicit binding using dot(.) operator
// ! one: explicit binding using call() apply() bind()

// ? this keyword is used for reference of object
// ? 'this' refers to immediate parent object
// ! in arrow function this will point parent function object or window object

// ? o/p
// this.a = 8;
// function get(){
//     console.log(this.a);
// }
// get(); // 8

// ? o/p
// this.a = 8;
// const get1 = () => {
//     console.log(this.a);
// }
// get1(); // 8

// ? o/p
// let user = {
//     name : 'hello',
//     age: 24,
//     getDetails(){
//         console.log(this.name); // ! this is pointing to the parent object(user)
//     }
// };
// user.getDetails();

// ? o/p
// this.name = 'meow' // ! this is kind of similar to the window.name='meow'
// let user = {
//     name : 'hello',
//     age: 24,
//     getDetails : () => {
//         console.log(this.name); // ! this is pointing to the global object(this/window)
//     }
// };
// user.getDetails();

// ? o/p in nested object this will alway point to immediate parent object
// let user = {
//   name: "hello",
//   age: 24,
//   getDetails: () => {
//     console.log(this.name); // undefined // ! this is pointing to the window object(this/window)
//   },
//   nestedObj:{
//     first: "saurabh",
//     last: "sen",
//     getName(){
//         console.log(this.first) // saurabh
//         console.log(this.name) // undefined // ! pointing to immediate parent only
//     },
//     getParentName : () => {
//         console.log(this.first) // undefined // ! pointing to global object
//         console.log(this.name) // undefined // ! pointing to global object
//     }
//   }
// };
// user.getDetails();
// user.nestedObj.getName();
// user.nestedObj.getParentName();

// ! in arrow function this will point parent function object or window object
// let user = {
//     name: 'hello',
//     age: 24,
//     getName(){
//         const arrowfunc = () => console.log(this.name); // ! hello
//         arrowfunc();
//     }
// }
// user.getName();

// ? this with class and constructor
// class user{
//     constructor(n){
//         this.name = n;
//     }
//     getName(){
//         console.log(this.name); // ! this will point to the all variables and methods associated with constructor
//     }
// };
// let userObj = new user("hello");
// userObj.getName(); // hello
// userObj.name // hello

// ? interview questions o/p
// let user = {
//     first: 'hello',
//     getName(){
//         const first = 'meow'
//         return this.first // hello // ! point to the immediate parent object
//     }
// }
// console.log(user.getName())

// ? interview questions o/p what is the result of accessing its ref and why?
// function makeUser(){
//     return {
//         name: 'john',
//         ref: this, // ! point to the global object
//     }
// }
// let user = makeUser();
// console.log(user.ref.name); // undefined

// ? fix the above problem
// function makeUser(){
//     return {
//         name: 'john',
//         ref(){
//             return this
//         }, // ! point to the parent object
//     }
// }
// let user = makeUser();
// console.log(user.ref().name); // john

// ? interview questions o/p
// const user = {
//     name: "hello",
//     logMsg(){
//         console.log(this.name);
//     }
// };
// setTimeout(user.logMsg, 1000); // undefined // ! this will store the copy of function and call it without binding it to the user object.
// ? fixing the above problem
// const user = {
//     name: "hello",
//     logMsg(){
//         console.log(this.name);
//     }
// };
// setTimeout(() => user.logMsg(), 1000); // undefined // ! this will  call it.

// ? interview questions o/p
// const user = {
//     name: 'saurabh',
//     greet(){
//         return `hello, ${this.name}`;
//     },
//     farewell: () => {
//         return `goodbye, ${this.name}`; // ! point to the parent function object(not present here) or global object
//     },
// }
// console.log(user.greet()) // hello
// console.log(user.farewell()) // undefined // ! pointing to the global object

// ? fixing above code
// const user = {
//   name: "saurabh",
//   greet() {
//     return `hello, ${this.name}`;
//   },
//   farewellObj() {
//     const farewell = () => `goodbye, ${this.name}`; // ! point to the parent function object(present here) or global object.
//     return farewell();
//   },
// };
// console.log(user.greet()); // hello
// console.log(user.farewellObj()); // goodbye, saurabh

// ? interview questions o/p
// let cal = {
//     read(){
//         this.a = +prompt("a= ", 0);
//         this.b = +prompt("b= ", 0);
//     },
//     sum(){
//         return this.a+this.b;
//     },
//     mul(){
//         return this.a*this.b;
//     },
// }
// cal.read();
// console.log(cal.sum())
// console.log(cal.mul())

// ? interview questions o/p
// var length = 4;
// function callback(){
//     console.log(this.length);
// }
// const object = {
//     length: 5,
//     method(fn){
//         fn();
//     }
// }
// object.method(callback) // 4

//let length = 4; // while using let it prints 0 to the console
// var length = 4; // while using var it prints 4 to the console
// const object = {
//     length: 5,
//     method(){
//         function callback(){
//             console.log(this.length); // prints 4, why it should print 5
//         }
//         callback()
//     }
// }
// object.method()