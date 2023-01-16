// // function defination/declaration/statements
// function name() {
//     console.log('hello');
// }
// name();

//  // function expression :- function assigned to a variable is called as function expression
// const funcExp = function () {
//     console.log('hello');
// }
// funcExp();

// // first class functions :- function which can be treated as variable(passing func as argument or return them as a value) is called first class functions
// function sq(num){
//     return num*num;
// }

// function disp(fn){
//     console.log('first class functions:-' + fn(4));
// }
// disp(sq);

// // IIFE :- immediately invoked function expressions
// (function (n){
//     console.log(n*n);
// })(4);

// // ques:- o/p
// (function (x){
//     return (function(y){
//         console.log(x);
//     })(2);
// })(1)
// // 1

// // function hoisting
// var x =21;
// var fun = function (){
//     console.log(x);
//     var x =20;
// }
// fun();
// // undefined

// // rest operator & spread operator
// const a = (b, c, ...rest) => {
//     console.log(b, c, rest)
// }
// a(23, 33, 4, 7, 8);

// function m(num1, num2){
//     return num1*num2;
// }
// let spread = [5, 6];
// // console.log(m(arr[0], arr[1]));
// console.log(m(...spread));

// // o/p :- rest must be last params
// const fn = (a, ...rest, x, y) => {
//     console.log(a, rest, x, y);
// }
// fn(2, 3, 3, 4, 5)

// // o/p 
// const sum = (...nums) => {
//     let ans =0;
//     for(let i of nums) ans+=i;
//     return ans;
// }
// console.log(sum(2, 3, 4, 5, 6));
// 20

