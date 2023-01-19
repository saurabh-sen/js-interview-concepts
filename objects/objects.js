// an object is collection of properties and a properties have name/key and values, values can have functions which is known as methods.

// const func = (function (a){
//     delete a; // it will only works on object
//     return a;
// })(5);
// console.log(func);

// delete console.log(1);

// let arr = ['sdf', 'asf'];
// delete arr[1]; // it works with arr but doesn't affect array's length
// console.log(arr)

// let obj = {
//     name : "hello",
//     age: 23,
//     "hey meow": true,
// };
// console.log(obj["hey meow"]);
// delete(obj["hey meow"])
// console.log(obj);

// ? dynamically add property to obj
// const property = 'lastName';
// const lastName = "sen";
// let obj = {
//     name : "hello",
//     age: 23,
//     "hey meow": true,
//     [property]:lastName,
// };
// obj.first = "saurabh";
// console.log(obj);

// ? o/p of following code
// let obj = {
//   a: "one", // this will replaced by updated property
//   b: "two",
//   a: "three",
// };
// for (const key in obj) {
//   if (Object.hasOwnProperty.call(obj, key)) {
//     console.log(obj[key]);
//   }
// }

// // ? multiply numeric keys with 2;
// let obj = {
//   a: 100,
//   b: 200,
//   c: "three",
// };
// function multiplyByTwo(obj){
//     for (const key in obj) {
//         if (typeof obj[key] == "number") {
//             obj[key]= obj[key]*2;
//         }
//     }
// }
// multiplyByTwo(obj);
// console.log(obj);

// ? o/p 
// const a = {};
// const b = {
//     key:"b"
// }
// const c = {
//     key:"c"
// }
// a[b] = 123; // a["[object object]"]
// a[c] = 456; // a["[object object]"]
// console.log(a[b]);


// ? difference between JSON.stringify and JSON.parse
// stringify converts obj to string
// parse converts str to obj
// application: storing obj as string in localstorage and retrieving back the string to obj.
// let ob = {
//     name : "hello",
//     age: 32
// };
// const objToStr = JSON.stringify(ob);
// console.log(objToStr);
// localStorage.setItem("obj to string", objToStr);
// const strToObj = JSON.parse(localStorage.getItem("obj to string"));
// console.log(strToObj)

// ? o/p
// console.log([..."hello"]) // [ 'h', 'e', 'l', 'l', 'o' ]

// ? o/p
// const user = {
//     name : "hello",
//     age: 21
// }
// const admin = {
//     admin : true,
//     ...user
// }
// console.log(admin); // { admin: true, name: 'hello', age: 21 }

// ? o/p
// const setting = {
//     name: "hello",
//     level: 19,
//     health: 90
// };
// const data = JSON.stringify(setting, ["level", "health"]);
// console.log(data); // {"level":19,"health":90}

// ? o/p
// window.radius = 10;
// const shape = {
//     radius: 10,
//     diameter(){
//         return this.radius*2; // this here points to scope object
//     },
//     perimeter: () => 2* this.radius, // this in arrow function points to window object
// };
// console.log(shape.diameter());
// console.log(shape.perimeter());

// ? what is destructing in objects and renaming destructured value ?
// taking out the property from an object
// const user ={
//     name : "hello",
//     age: 23
// };
// const name = "saurabh"
// const { name:myObjName } = user;
// console.log(myObjName, name); // hello saurabh

// ? nested destructing of objects
// let user = {
//     name:"hello",
//     age:32,
//     obj:{
//         first: "saurabh",
//         last: "sen",
//     }
// };

// const { name, age, obj: {first, last} } = user;
// console.log(first, last); // saurabh sen
// array destructuring
// let user = [["1", "2"], "3", "4"];
// const [ [o, t], two, three ] = user;
// console.log(o, t, two, three)

// ? o/p
// function getItem(fruitList, favoriteFruit, ...args){
//     return [...fruitList, ...args, favoriteFruit]
// }
// console.log(getItem(["apple", "banana"], "pear", "orange")) //[ 'apple', 'banana', 'orange', 'pear' ]

// ? o/p
// let c = {
//     greeting : "hey"
// };
// let d;
// d=c; // objects are pass and copied by reference
// c.greeting = "hello"
// console.log(d.greeting); // hello

// ? o/p
// console.log({a:1} == {a:1}); // false
// console.log({a:1} === {a: 1}); // false

// ? o/p
// let obj1 = {a:1};
// let obj2 = obj1;
// console.log(obj1 == obj2) // true
// console.log(obj1 === obj2) // true

// ? o/p 
// let person = {name:"hello"};
// const member = [person];
// person = null;
// console.log(member); // [ { name: 'hello' } ]

// ! o/p - tricky
// const value = {number: 10};
// //                default value of x
// const multiply = (x={...value}) => {
//     console.log(x.number *= 2)
// }
// multiply(); // 20
// multiply() // 20
// multiply(value) // 20
// multiply(value) // 40

// many more