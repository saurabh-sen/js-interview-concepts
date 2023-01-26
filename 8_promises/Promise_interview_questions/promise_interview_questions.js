// ? Ques 1 - o/p
// console.log("start")
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2); // ! if there is resolve or reject only then it will execute then and catch block.
// })
// promise1.then((res) => console.log(res)); // ! start, 1 end, 2
// console.log("end")

// ? Ques 2 - o/p
// console.log("start")
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2);
//     console.log(3);
// })
// promise1.then((res) => console.log(res)); // ! start, 1, 3, end, 2.
// console.log("end")

// ? Ques 3 - o/p
// console.log("start")
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     console.log(3);
// })
// promise1.then((res) =>{ // ! if there is no resolve reject in promise then it won't execute then and catch block.
//     console.log(2)
//     console.log(res)
// });
// console.log("end") // ! start, 1, 3, end.

// ? Ques 4 - o/p
// function job(){
//     return new Promise((resolve, reject) => reject());
// }
// let promise = job();
// promise.then(function(){
//     console.log("success 1")
// }).then(function(){
//     console.log("success 2")
// }).then(function(){
//     console.log("success 3")
// }).catch(function(){
//     console.log("error 1")
// }).then(function(){
//     console.log("success 4")
// }) // ! error 1, success 4

// ? Ques 5 - o/p
// function job(state){
//     return new Promise((resolve, reject) => { 
//         if(state)resolve("success")
//         else reject("error")
//     });
// }
// let promise = job(true);
// promise.then(function(data){
//     console.log(data)
//     return job(false)
// }).catch(function(error){
//     console.log(error);
//     return "Error caught" // ! this will acts as resolved promise
// }).then(function(data){
//     console.log(data);
//     return job(true) // ! now we dont have any .then block to handle this promise.
// }).catch(function(error){
//     console.log(error)
// }) // ! success, error, Error caught

// ? Ques 6 - o/p
// function job(state){
//     return new Promise((resolve, reject) => { 
//         if(state)resolve("success")
//         else reject("error")
//     });
// }
// let promise = job(true);
// promise.then(function(data){
//     console.log(data)
//     return job(true)
// }).then(function(data){
//     if(data != 'victory'){
//         throw "Defeat"; // ! throws an error with rejected promise
//     }
//     return job(true);
// }).then(function(data){
//     console.log(data);
//     return job(true);
// }).catch(function(error){
//     console.log(error); // !Defeat
//     return job(false)
// }).then(function(data){
//     console.log(data);
//     return job(true)
// }).catch(function(error){
//     console.log(error);
//     return "error caught" // ! acts as resolved string
// }).then(function(data){
//     console.log(data);
//     return new Error("test"); // ! acts as resolved promise
// }).then(function(data){
//     console.log("success: ", data.message) // ! "test"
// }).catch(function(data){
//     console.log("error: ", data.message);
// }) // ! success, Defeat, error, error caught, success: test

// ? Oues 7 - create first promise and resolve it in second promise and pass the value resolved from second promise to first.
// let promise1 = new Promise((resolve, reject) => {
//     resolve("first promise")
// });
// let promise2 = new Promise((resolve, reject) => {
//     resolve(promise1);
// });
// promise2.then(res => {
//     return res 
// }).then(res => console.log(res)) // ! first promise

// ? Oues 8 - rewrite using async/await 
// function loadJson(url){
//     return fetch(url).then(res => {
//         if(res.status == 200)return res.json();
//         else throw new Error(res.status)
//     });
// }
// loadJson('https://fakeurl.com/no-such-user.json').catch(err => console.log(err));
// ? answer
// async function loadJson1(url){
//     let response = await fetch(url);
//     if(response.status == 200){
//         return response.json;
//     }
//     throw new Error(response.status)
// }
// loadJson1('https://fakeurl.com/no-such-user.json').catch(err => console.log(err));

// ? resolve promises recursively
// let firstPromise = new Promise((resolve, reject) => {
//     resolve("firstPromise")
// })
// let secondPromise = new Promise((resolve, reject) => {
//     resolve("secondPromise")
// })
// let thirdPromise = new Promise((resolve, reject) => {
//     resolve("thirdPromise")
// })

// function promiseRecur(promiseArray){
//     if(promiseArray.length == 0)return;
//     let currentPromise = promiseArray.shift();
//     currentPromise.then(res => console.log(res)).catch(er => console.log(er));
//     promiseRecur(promiseArray);
// }
// promiseRecur([firstPromise, secondPromise, thirdPromise]) // ! firstPromise, secondPromise, thirdPromise

// ! Polyfill of promise
// function promisePolyfill(executor){
//     let resolveCallback, rejectCallback, isFullfilled = false, isRejected = false, called=false, isCalled = false, value;
//     function resolve(val){
//         isFullfilled = true;
//         value = val;
//         if(typeof resolveCallback === 'function'){
//             resolveCallback(val);
//             isCalled = true;
//         }
//     }
//     function reject(val){
//         isRejected = true;
//         value = val;
//         if(typeof rejectCallback === 'function'){
//             rejectCallback(val);
//             called = true;
//         }
//     }
//     this.then = function(callback){
//         resolveCallback = callback;
//         if(isFullfilled && !isCalled){
//             resolveCallback(value);
//             isCalled = true;
//         }
//         return this;
//     }
//     this.catch = function(callback){
//         rejectCallback = callback
//         if(isRejected && !called){
//             rejectCallback(value);
//             called = true;
//         }
//         return this;
//     }
//     try {
//         executor(resolve, reject)
//     } catch (error) {
//         console.error(error)
//     }
// };
// let promise = new promisePolyfill((resolve, reject) => {
//     setTimeout(() => {
//         reject(2);
//     }, 1000);
// })
// promise.then((res) => console.log(res)).catch(er => console.log(er));

// ! polyfill of Promise.resolve()
// promisePolyfill.resolve = (val) => new Promise((resolve, reject) =>resolve(val));

// ! polyfill of Promise.reject()
// promisePolyfill.reject = (val) => new Promise((resolve, reject) =>reject(val));

// ! polyfill of Promise.all()
// let firstPromise = new Promise((resolve, reject) => {
//     resolve("firstPromise")
// })
// let secondPromise = new Promise((resolve, reject) => {
//     resolve("secondPromise")
// })
// let thirdPromise = new Promise((resolve, reject) => {
//     reject("thirdPromise")
// })
// Promise.allPolyfill = function(promiseArray){
//     return new Promise((resolve, reject) => {
//         let ans = [];
//         if(promiseArray.length == 0){
//             resolve(ans)
//             return;
//         };
//         let pendingPromises = promiseArray.length;
//         promiseArray.forEach((promise, i) => {
//             Promise.resolve(promise).then(res =>{
//                 ans[i] = res;
//                 pendingPromises--;
//                 if(pendingPromises == 0)resolve(ans);
//             }, reject);
//         });
//     })
// }
// Promise.allPolyfill([firstPromise, secondPromise, thirdPromise])
// .then((res) => console.log(res))
// .catch((er) => console.log(er))