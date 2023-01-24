// ! call apply and bind are used to set the "this" keyword independent of how the function is called.
// ! we can use these methods to tie a function to a object and call the function as if it belongs to that object.

// ? what is call?
// ! call method is used to tie a function to a obj 
// var obj = {
//     fname:'saurabh',
//     age: 20
// };
// function sayName(lname) {
//     return "hello "+ this.fname + " " + lname;
// }
// console.log(sayName("sen")); // ! hello undefinedsen
// ? fixing the above using call();
// console.log(sayName.call(obj, "sen")) // ! hello saurabhsen
// ! params1:- The object to be used as the current object.
// ! params2:- A list of arguments to be passed to the method.

// var obj = {
//     fname:'saurabh',
//     age: 20
// };
// function sayName1(lname, profession) {
//     return "hello "+ this.fname + " " + lname + " " + profession;
// }
// console.log(sayName1.call(obj, "sen", "frontend developer")) // ! hello saurabh sen frontend developer

// ? what is apply?
// ! apply is used to tie a function to an object with accepting obj and an array of params as arguments.
// let obj1 = {
//     name: "saurabh",
//     age: 20
// };
// function applyFunc(newAge, profession){ // params got spreaded here implicitly
//     console.log("hello ", this.name, newAge, profession); // ! hello  saurabh 21 software engineer
// };
// applyFunc.apply(obj1, [21, "software engineer"]);

// ? what is bind?
// ! bind creates a copy of the function with binded 'this' with the provided value
// let obj = {
//     name: "saurabh"
// };
// function bindFunc(age, profession){
//     console.log(this.name, age, profession)
// };
// let bindedFunc = bindFunc.bind(obj);
// bindedFunc(20, "software developer") // ! saurabh 20 software developer
// let bindedFunc1 = bindFunc.bind(obj, 21, "sde1");
// bindedFunc1(22, "sde2") // ! saurabh 20 software developer

// ? o/p
// const person = { name: "saurabh" };
// function sayHi(age){ return `${this.name} is ${age}`}; 
// console.log(sayHi.call(person, 24)); // ! saurabh is 24
// console.log(sayHi.bind(person, 21)) // ! sayHi(age){ return `${this.name} is ${age}`} // returns a copy of function.

// ? o/p for call
// const age = 10;
// var person = {
//     name: "saurabh",
//     age: 20,
//     getAge: function (){ return this.age; },
// };
// var person1 = { age: 24 };
// console.log(person.getAge.call(person1)); // ! 24 // call will bind 'this' to the value passed in it, not to the global scope neighter to inner object scope.

// ? o/p for apply
// const age = 10;
// var person = {
//     name: "saurabh",
//     age: 20,
//     getAge: function (){ return this.age; },
// };
// var person1 = { age: 24 };
// console.log(person.getAge.apply(person1)); // ! 24 // call will bind 'this' to the value passed in it, not to the global scope neighter to inner object scope.

// ? o/p
// const age1 = 10;
// var person = {
//     name: "saurabh",
//     age: 20,
//     getAge: function (){ return this.age; },
// };
// var person1 = { age: 24 };
// console.log(person.getAge.bind(person1)()); // ! 24 // call will bind 'this' to the value passed in it, not to the global scope neighter to inner object scope.

// o/p
// var status = "😎";
// setTimeout(() => {
//     const status = "😍";
//     const data = {status : "🐍",getStatus(){
//             return this.status;
//         },}
//     console.log(data.getStatus());  // ! 🐍
//     console.log(data.getStatus.call(this)); // ! 😎 // this is pointing to the object of the settimeout function in which there exists a status 😎.
// }, 0);

// ? o/p call function such it prints all animals in object
// const animals = [
//     { species: 'lion', name: 'king'},
//     { species: 'whale', name: 'queen'}
// ];
// function printAnimals(i){
//     this.print = function(){
//         console.log("#", i, this.species + ": ", this.name)
//     };
//     this.print();
// };
// for(let i=1;i<=animals.length;i++)printAnimals.call(animals[i-1], i);

// ? o/p append an array to another array
// let arr = [1, 2, 3, 4];
// let arr1=["a", "d"];
// let ans = arr.concat(arr1) // [ 1, 2, 3, 4, 'a', 'd' ] // ! combines to array and returns another array
// console.log(ans)

// let l = arr.push(...arr1) // [ 1, 2, 3, 4, 'a', 'd' ] // ! add element to the end and returns new length of array
// console.log(arr, l)

// ? o/p // find min/max using apply to enhance builtin function
// let nums = [5, 6, 2, 3, 7];
// console.log(Math.max(...nums)) // 7 // ! return max elements and accepts values as arguments instead of array

// console.log(Math.max.apply(null, nums)) // 7 // ! implicitly spread the array while accepting parameters

// ? o/p 
// function f(){
//     console.log(this) // window object
// }
// let user = { g: f.bind(null), }
// user.g();

// ? o/p bind chaining?
// function f(){
//     console.log(this.name); // john
// };
// f = f.bind({ name: "john" }).bind({ name: "Ann" }); // ! bind chaining doesn't exists, after bounding an function it can't be unbound
// f();

// ? o/p fix the code
// function checkPass(success, failed){
//     let pass = prompt("Pass? ", "enter pass");
//     if(pass == "hello")success();
//     else failed();
// };
// let user = {
//     name : "saurabh",
//     loginSuccess(){
//         console.log(`${this.name} logged in`)
//     },
//     loginFailed(){
//         console.log(`${this.name} failed to login`)
//     }
// }
// checkPass(user.loginSuccess, user.loginFailed); // logged in // ! because we are just copying the function and passing those to checkPass function but in checkPass there is nothing in function object called name(this.name) that's why prints only "logged in"
// // * fixing it with anonymous arrow function
// checkPass(()=>user.loginSuccess(), () => user.loginFailed()) // ! saurabh logged in
// // * fixing it with bind
// checkPass(user.loginSuccess.bind(user), user.loginFailed.bind(user)) // ! saurabh logged in

// ? o/p partial application for login function
// function checkPass(ok, fail){
//     let pass = prompt("pass?", "hey");
//     if(pass == "hello")ok();
//     else fail();
// }
// let user= {
//     name: "saurabh",
//     login(result){
//         console.log(this.name+( result ? " login success": " login failed"));
//     }
// }
// checkPass(user.login.bind(user, true), user.login.bind(user, false))

// ? o/p explicit binding with arrow functions
// var age=10; // ! var is present inside window object that's why we can access it with arrow function, is we use let or const it will give undefined
// let age = 10;
// var person={
//     name: "saurabh",
//     age: 20,
//     getAgeArrow: () => console.log(this.age),
//     getAge: function(){
//         console.log(this.age)
//     }
// }
// var person1 = { age: 24 };
// person.getAge.call(person1) // 24
// person.getAgeArrow.call(person1) // this- points to normal function parent object or window object