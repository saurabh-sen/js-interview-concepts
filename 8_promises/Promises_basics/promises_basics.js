// ! Asynchronous JavaScript - Promises
// * js runs synchronous code first then asynchronous
// ! why do we need promises?
// ans:- promises helps us avoid callback hell + other features.

// ? callback
// console.log("start")
// function func1(name){
//     setTimeout(() => {
//         return `hello ${name}`;
//     }, 1000);
// }
// const msg = func1("saurabh");
// console.log(msg); // ! this wont stop for async code to make it run use callback
// console.log("stop"); // ! start, undefined, stop

// ? fixing it with callback
// console.log("start")
// function func1(name, cb){
//     setTimeout(() => {
//         cb(`hello ${name}`);
//     }, 1000);
// }
// func1("saurabh", (msg) => console.log(msg));
// console.log("stop"); // ! start, stop, hello saurabh

// ? creating a callback hell
// console.log("start")
// function func1(fname, cb){
//     setTimeout(() => {
//         cb(`first name ${fname}`);
//     }, 1000);
// };
// function func2(lname, cb){
//     setTimeout(() => {
//         cb(`last name ${lname}`)
//     }, 1000);
// }
// function func3(profession, cb){
//     setTimeout(() => {
//         cb(`profession ${profession}`)
//     }, 1000);
// }
// function func4(idk, cb){
//     setTimeout(() => {
//         cb(`something ${idk}`)
//     }, 1000);
// }
// func1("saurabh", (msg) => { // ! callback hell
//     console.log(msg)
//     func2("sen", (msg) => {
//         console.log(msg);
//         func3("software engineer", (msg) => {
//             console.log(msg);
//             func4("idk", (msg) => {
//                 console.log(msg);
//             })
//         })
//     })
// })
// console.log("stop")
// ! start
// ! stop
// ! first name saurabh
// ! last name sen
// ! profession software engineer
// ! something idk

// ? promises:- promise represents upcomming completion or failure of a asynchronous event.
// ? execute func1 to func4 asynchronous functions synchronously
// console.log("start");
// function func1(fname) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`first name ${fname}`);
//     }, 1000);
//   });
// }
// function func2(lname) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`last name ${lname}`);
//     }, 1000);
//   });
// }
// function func3(profession) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`profession ${profession}`);
//     }, 1000);
//   });
// }
// function func4(idk) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`something ${idk}`);
//     }, 1000);
//   });
// }
// func1("saurabh").then((res) => {  // ! promise hell
//   console.log(res);
//   func2("sen").then((res) => {
//     console.log(res);
//     func3("sde").then((res) => {
//       console.log(res);
//       func4("idk").then((res) => {
//         console.log(res);
//       });
//     });
//   });
// }).catch((er) => console.log("broke ",er));
// console.log("stop");

// ? Promise chaining 
// console.log("start");
// function func1(fname) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`first name ${fname}`);
//     }, 1000);
//   });
// }
// function func2(lname) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`last name ${lname}`);
//     }, 1000);
//   });
// }
// function func3(profession) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`profession ${profession}`);
//     }, 1000);
//   });
// }
// function func4(idk) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`something ${idk}`);
//     }, 1000);
//   });
// }
// func1("saurabh").then((res) => { // promise chaining
//   console.log(res);
//   return func2("sen");
// }).then((res) => {
//     console.log(res)
//     return func3("frontend dev")
// }).then((res) => {
//     console.log(res);
//     return func4("idk");
// }).then((res) => {
//     console.log(res);
// }).catch((er) => console.log("broke ",er));
// /* start
//  stop
//  first name saurabh
//  last name sen
//  profession frontend dev
//  something idk */
// console.log("stop");

// ! Promise Combinators( Promise.all, Promise.any, Promise.allSettled, Promise.race ) :- Promise combinators execute more than one promise at a time and returns the result accordingly

// ! Promise.all:- it will execute all promise and return the result in an array and fails if any of the promise get rejected
// if multiple promise get rejected then it will return only that which was executed first or called first
// console.log("start");
// function func1(fname) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`first name ${fname}`);
//     }, 1000);
//   });
// }
// function func2(lname) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`last name ${lname}`);
//     }, 1000);
//   });
// }
// function func3(profession) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`profession ${profession}`);
//     }, 1000);
//   });
// }
// function func4(idk) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`something ${idk}`);
//     }, 500);
//   });
// }
// Promise.all([func1("saurabh"), func2("sen"), func3("frontend"), func4("idk")]).then((res) => console.log(res)).catch((er) => console.log(er))
// /* start
//  stop
//  ["first name saurabh", "last name sen","profession frontend dev","something idk" ]*/
// console.log("stop");

// ! Promise.race :- this returns first promise which is get resolved or rejected, if two promises resolved or reject at the same time then it will return that promise which was called first
// console.log("start");
// function func1(fname) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`first name ${fname}`);
//     }, 100);
//   });
// }
// function func2(lname) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`last name ${lname}`);
//     }, 1000);
//   });
// }
// function func3(profession) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`profession ${profession}`);
//     }, 1000);
//   });
// }
// function func4(idk) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`something ${idk}`);
//     }, 100);
//   });
// }
// Promise.race([func1("saurabh"), func2("sen"), func3("frontend"), func4("idk")]).then((res) => console.log(res)).catch((er) => console.log("broke",er))
// /* start
// stop
// first name saurabh */
// console.log("stop");

// ! Promise.allSettled :- this returns an result array of all the promises
// console.log("start");
// function func1(fname) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`first name ${fname}`);
//     }, 100);
//   });
// }
// function func2(lname) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`last name ${lname}`);
//     }, 1000);
//   });
// }
// function func3(profession) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`profession ${profession}`);
//     }, 1000);
//   });
// }
// function func4(idk) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`something ${idk}`);
//     }, 100);
//   });
// }
// Promise.allSettled([func1("saurabh"), func2("sen"), func3("frontend"), func4("idk")]).then((res) => console.log(res)).catch((er) => console.log("broke",er))
// /* start
// stop
// [
//   { status: 'fulfilled', value: 'first name saurabh' },
//   { status: 'fulfilled', value: 'last name sen' },
//   { status: 'rejected', reason: 'profession frontend' },
//   { status: 'rejected', reason: 'something idk' }
// ] */
// console.log("stop");

// ! Promise.any :- this returns first promise resolved or if all the promises got rejected then it will throw error saying all rejected
// console.log("start");
// function func1(fname) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`first name ${fname}`);
//     }, 1000);
//   });
// }
// function func2(lname) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`last name ${lname}`);
//     }, 1000);
//   });
// }
// function func3(profession) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`profession ${profession}`);
//     }, 1000);
//   });
// }
// function func4(idk) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(`something ${idk}`);
//     }, 100);
//   });
// }
// Promise.any([func1("saurabh"), func2("sen"), func3("frontend"), func4("idk")]).then((res) => console.log(res)).catch((er) => console.log("broke",er))
// /* start
// stop
// first name saurabh */
// console.log("stop");

// ! Promises using async await with try catch
// console.log("start");
// function func1(fname) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`first name ${fname}`);
//     }, 1000);
//   });
// }
// function func2(lname) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`last name ${lname}`);
//     }, 100);
//   });
// }
// function func3(profession) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`profession ${profession}`);
//     }, 1000);
//   });
// }
// function func4(idk) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(`something ${idk}`);
//     }, 100);
//   });
// }
// let result = async() => {
//     try {
//         let msg1 = await func1("saurabh")
//         console.log(msg1)
//         let msg2 = await func2("sen")
//         console.log(msg2)
//         let msg3 = await func3("sde")
//         console.log(msg3)
//         let msg4 = await func4("idk")
//         console.log(msg4)
//     } catch (error) {
//         console.log("error broke", error)
//     }
// }
// result()
// /* start, stop, first name saurabh, last name sen, profession sde, something idk */
// console.log("stop");