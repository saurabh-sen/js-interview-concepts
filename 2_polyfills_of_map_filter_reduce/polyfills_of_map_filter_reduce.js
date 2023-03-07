// // polyfills of filter
// Array.prototype.myFilter = function(cb){
//   let temp=[];
//   for (let i = 0; i < this.length; i++) {
//       if(cb(this[i], i, this))temp.push(this[i]);
//   }
//   return temp;
// };
// let result = arr.myFilter((item, i, a)=> {
//    return item.id > 1;
//   })
// console.log(result)

// // polyfills of map
// let arr = [1, 2, 3, 4];
// Array.prototype.myMap = function(cb){
//   let temp=[];
//   for (let i = 0; i < this.length; i++) {
//       temp.push(cb(this[i], i, this));
//   }
//   return temp;
// };
// let result = arr.myMap((item, i, a)=> {
//    return item *2;
//   })
// console.log(result)

// // polyfills of reduce
// Array.prototype.myReduce = function(cb, initialValue){
//   let accumulator = initialValue;
//   for (let i = 0; i < this.length; i++) {
//       accumulator = accumulator?cb(accumulator, this[i], i, this):this[i];
//   }
//   return accumulator;
// }
// let arr = [1, 2, 3, 4];
// let sumArr = arr.myReduce((acc, curr, index, arr) => acc + curr, 0)
// console.log(sumArr);

// // Output based questions 
// // Return only name of students in capital
// let students = [
//     { name: "piyush", age : 31, marks: 80},
//     { name: 'jenny', age:15, marks:69},
//     { name: 'kaushal', age:16, marks:35},
//     { name: 'dilpreet', age:7, marks:55},
// ];

// let ans = students.map((item)=> item.name.toUpperCase())
// console.log(ans);

// // Output based questions 
// // Return only details of those wo scored more than 60marks
// let students = [
//     { name: "piyush", age : 31, marks: 80},
//     { name: 'jenny', age:15, marks:69},q
//     { name: 'kaushal', age:16, marks:35},
//     { name: 'dilpreet', age:7, marks:55},
// ];

// let ans = students.filter((item)=> item.marks >= 60)
// console.log(ans);

// // // Output based questions 
// // // Return only details of those who has marks more than 60 and age greater than 15
// let students = [
//     { name: "piyush", age : 31, marks: 80},
//     { name: 'jenny', age:15, marks:69},
//     { name: 'kaushal', age:16, marks:35},
//     { name: 'dilpreet', age:7, marks:55},
// ];

// let ans = students.filter((item)=> item.marks >= 60 && item.age >= 15)
// console.log(ans);

// // // Output based questions 
// // // Return sum of marks
// let students = [
//     { name: "piyush", age : 31, marks: 80},
//     { name: 'jenny', age:15, marks:69},
//     { name: 'kaushal', age:16, marks:35},
//     { name: 'dilpreet', age:7, marks:55},
// ];

// let ans = students.reduce((acc, curr, i, a)=> acc+curr.marks, 0)
// console.log(ans);

// // // Output based questions 
// // // Return only names of students who scored more than 60
// let students = [
//     { name: "piyush", age : 31, marks: 80},
//     { name: 'jenny', age:15, marks:69},
//     { name: 'kaushal', age:16, marks:35},
//     { name: 'dilpreet', age:7, marks:55},
// ];

// let ans = students.filter((item)=> item.marks >= 60).map((item) => item.name);
// console.log(ans);

// // Output based questions 
// // Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60
// let students = [
//     { name: "piyush", age : 31, marks: 80},
//     { name: 'jenny', age:15, marks:69},
//     { name: 'kaushal', age:16, marks:35},
//     { name: 'dilpreet', age:7, marks:55},
// ];

// let ans = students.map((item)=> {
//     if(item.marks <= 60)return item.marks+=20;
//     return item.marks;
// }).filter((item) => item > 60).reduce((ac, cu) => ac+cu, 0);
// console.log(ans);