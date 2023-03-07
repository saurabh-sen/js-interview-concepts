// ? currying a function is a concept, in which a function accept one argument at a time and returns a new function that accept the next argument.
// ! in currying number of argument should be equal to number of function returned
// function multiply(a){
//     let c=0;
//     for (let index = 0; index < 1000000; index++) {
//         c+=index;
//     }
//     console.log(c);
//     return function(b){
//         console.log(a+b);
//     }
// };
// multiply(5)(6);
// ? advantages of currying in javascript is it saves us from expensive computations by using closures.

// // implement sum(2)(6)(1)
// function sum(a){
//     return function(b){
//         return function(c){
//             console.log(a+b+c);
//         }
//     }
// }
// sum(2)(6)(1)
// // o/p :- 9

// // evaluate basis on operation
// evaluate("sum")(4)(2) // 6
// evaluate("subtract")(4)(2) // 2
// evaluate("multiply")(4)(2) // 8
// evaluate("divide")(4)(2) // 2
// function evaluate(operation){
//     return function(a){
//         return function(b){
//             switch(operation){
//                 case "sum" : 
//                     console.log(a+b);
//                     break;
//                 case "subtract": 
//                     console.log(a-b);
//                     break;
//                 case "multiply" :
//                     console.log(a*b);
//                     break;
//                 case "divide" : 
//                     console.log(a/b);
//                     break;
//                 default: 
//                     console.log("invalid operation")
//                     break;
//             }
//         }
//     }
// };
// evaluate("sum")(2)(9);

// var rate =10;
// function getrate(){
//     if(rate == undefined){
//         var rate = 6; // var is function scoped and hoisted in that scope here.
//         return rate;
//     }else{
//         return 10;
//     }
// }
// console.log(getrate());
// console.log(rate)

// // infinite currying sum(3)(4)....(n)
// function sum(a){
//     return function (b){
//         if(b) return sum(a+b);
//         return a;
//     }
// }

// one liner :- 
// const sum = a => b => b?sum(a+b):a;
// console.log(sum(2)(3)(4)());


// // partial function and currying
// partial application transforms one function into another function with some arity(the number of formal parameters it has)
// function sum(a){
//     return function(b, c){
//         return a+b+c;
//     }
// };
// console.log(sum(2)(3, 4));

// // manipulating dom
// function domUpdate(){
//     return function(content){
//         document.querySelector('h1').textContent = content;
//     }
// };
// const update = domUpdate();
// update("meow meow")

// // write a curry function which takes argument like sum(a, b, c) to sum(a)(b)(c)
// function curry(func){
//     return function curriedFunc(...args){
//         if(args.length >= func.length)return func(...args)
//         else return function(...next){
//             return curriedFunc(...args, ...next);
//         }
//     }
// }
// const sum = (a, b, c) => a+b+c;
// const totalSum = curry(sum);
// console.log(totalSum(2)(3)(4))