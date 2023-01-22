// let count =0;
// (function fn() {
//     if(count===0){
//         let count = 1;
//         console.log(count); // 1
//     }
//     console.log(count); // 0
// })();
// // 1 0

// // write a function that would allow you to do this
// function createBase(a){
//     return function child(b){
//         console.log(a+b);
//     }
// };
// var addSix = createBase(6);
// addSix(10); //16
// addSix(21); //27

// // Time optimization
// function find() {
//   let a = [];
//   for (let i = 0; i < 10000000; i++) {
//     a[i] = i * i;
//   }
//   return function (index) {
//     console.log(a[index]);
//   };
// }

// const closure = find();
// console.time("6");
// closure(6);

// console.timeEnd("6");
// console.time("12");
// closure(12);
// console.timeEnd("12");

// // Block scope and setTimeout
// for (var i = 0; i < 3; i++) {
//     setTimeout(() => {
//        console.log(i);
//     }, i*1000);
// }
// // 3 3 3;

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//        console.log(i);
//     }, i*1000);
// }
// // 0 1 2;

// for (var i = 0; i < 3; i++) {
//   function c(i) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
//   c(i);
// }
// // 0 1 2;

// // how would you use closure to create a private counter
// function counter(){
//     let _counter = 0;
//     function add(i) {
//         _counter += i;
//     }
//     function retrive(){
//         return "Counter value is: "+_counter;
//     }
//     return { add, retrive };
// }
// const { add, retrive } = counter();
// add(1)
// add(2)
// add(3)
// add(4);
// console.log(retrive());

// // What is module pattern ?
// var module = (function(){
//     let privateVar = 2;
//     function private(){
//         console.log("private method: ", privateVar);
//         return "private method is accessed"
//     };

//     return {
//         public: function(){
//             console.log("public method acsesing private data members : ", privateVar);

//             console.log("public method accesing private members functions : ", private());
//         }
//     }
// }());
// const { public } = module;
// public();

// // make code run only once
// let view;
// function l(){
//     let called=0;
//     return function(){
//         if(called > 0){
//             console.log("called more than 1 time")
//         }else{
//             view="world";
//             console.log('hello',view);
//             called++;
//         }
//     }
// };
// let closure = l();
// closure()
// closure()
// closure()
// closure()

// // memoization with closure