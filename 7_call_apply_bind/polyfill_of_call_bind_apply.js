// ? polyfill of call method
// Function.prototype.mycall = function(context = {}, ...values){
//     if(typeof this !== "function")throw new Error(this+"this is not a function")
//     context.myCallFunc = this;
//     context.myCallFunc(...values)
// }

// function f(age, profession){
//     console.log(this.name,age, profession)
// };
// let user = { name: "saurabh" }
// f.mycall(user, 20, "software engineer")

// ? polyfills of apply method
// Function.prototype.myApply = function(context = {}, elementArray=[]){
//     if(typeof this !== 'function')throw new Error(this+"is not a function");
//     if(!Array.isArray(elementArray))throw new Error("arguments should be an Array");
//     context.myApplyFunc = this;
//     context.myApplyFunc(...elementArray)
// }
// function f(age, profession){
//     console.log(this.name,age,profession)
// };
// let user = { name: "saurabh" }
// f.myApply(user, [20, "frontend developer"]);

// ? polyfills of bind method
// Function.prototype.myBind = function(context = {}, ...values){
//     if(typeof this !== 'function')throw new Error(this+" is not a function");
//     context.myApplyFunc = this;
//     return function(...newValues){
//         return context.myApplyFunc(...values, ...newValues);
//     }
// }
// function f(age, profession){
//     console.log(this.name,age,profession)
// };
// let user = { name: "saurabh" }
// let func = f.myBind(user, 20);
// func("frontend developer");