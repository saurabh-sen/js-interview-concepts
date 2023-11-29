
<div align="center">
  <img height="60" src="https://i.postimg.cc/gj9HS4qY/javascript.png">
  <h1>JavaScript Questions</h1>
</div>

# JavaScript(Easy - Medium) Theory/Output Based Interview Questions.

Here's the list of topics that will be covered :

- Normal Functions & Arrow Functions,
- Polyfills of map, filter and reduce,
- Closures,
- Currying in JavaScript,
- Objects in JavaScript,
- this-keyword, 
- call, bind and apply,
- Polyfills of call, bind and apply.
- Promises,
- Debouncing and throttling implementation,
- Event Propogation(Event capturing, event bubbling, event target and event Delegation).

---

### Functions:

###### 1. What is function definition or function declaration or function statement?

<details><summary><b>Answer</b></summary>
<p>

function definition or function declaration or function statement means defining a function using normal function syntax.

```javascript
function name(){
  console.log("saurabh");
}
```
</p>
</details>

---

###### 2. What are function expressions?

<details><summary><b>Answer</b></summary>
<p>

A function assigned to a variable is called as function expression.

```javascript
const name = function (){
  console.log("saurabh");
}
let about = () => {
  console.log("Frontend engineer");
}
```
</p>
</details>

---

###### 3. What's the difference between function definition and function expression?

<details><summary><b>Answer</b></summary>
<p>

function statements can be called before initialization.
function expression can not be called before initialization, they behave as normal variables syntax(const, let and var).

```javascript
// behaves normally
funcStatement();
function funcStatement(){
    console.log("hello");
}

// behaves as let var const
funcExpression();
let funcExpression = function (){
    console.log("this will give ReferenceError");
}
```

</p>
</details>

---

###### 14 What is TDZ(temporal dead zone)?

<details><summary><b>Answer</b></summary>
<p>

This is what the TDZ is: the term to describe the state where variables are un-reachable. They are in scope, but they aren't declared.

The let and const variables exist in the TDZ from the start of their enclosing scope until they are declared.

```javascript
// This is the temporal dead zone for the name and age variable!
// ReferenceError: cannot acccess name before initialization.
console.log(name);
let name = "saurabh";
// This is the temporal dead zone for the age variable!
// This is the temporal dead zone for the age variable!
let age = 25; // Whew, we got there! No more TDZ
console.log(age);
```
</p>
</details>
---

###### 5. What are first class functions?

<details><summary><b>Answer</b></summary>
<p>

Functions which can be treated as value(passing function as arguments or return them as value) is called as first class functions.

```javascript
function square(num){
  return num*num;
}

function display(callback){
  console.log('square is a first class function: '+ callback(4));
}

display(square)
```
</p>
</details>
---

###### 6. What is IIFE(Immediately invoked function expression)?

<details><summary><b>Answer</b></summary>
<p>

IIFE is a JavaScript function that runs as soon as it is defined.

```javascript
(function (num){
  console.log(num*num);
})(4);
```
</details>
---

###### 7. What's the output?

```javascript
(function (x){
    return (function(y){
        console.log(x);
    })(2);
})(1)
```

- A: `2`
- B: `1`
- C: `ReferenceError`
- D: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

When the outer function is called with the argument `1`, it immediately calls the inner function with the argument `2`. The inner function then logs the value of `x` to the console, which is `1`.

</p>
</details>

---

###### 8. What's the output?

```javascript
let count = 0;
(function () {
    if(count === 0){
        let count = 1;
        console.log(count);
    }
    console.log(count);
})();
```
- A: `1` and `1`
- B: `0` and `1`
- C: `1` and `0`
- D: `0` and `0`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

</p>
</details>

---


###### 9 What's the output?
`Hint: variable hoisting`

```javascript
var name = 'javascript';
var display = function () {
  console.log(name);
  var name = 'saurabh';
}

display();
```

- A: `javascript`
- B: `saurabh`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

When the `display` function is called, it first tries to log the value of the local variable `name`. However, since there is a declaration of a new variable `name` within the function, it creates a new local variable `name` that <strong>shadows</strong> the outer variable.

Since the new local variable `name` is declared but not yet assigned a value at the time of the `console.log` statement, it will output `undefined`.

</p>
</details>

---

###### 10. What's the output?

```javascript
function display(a, b, ...rest) {
  console.log(a, b, rest);
}

display(23, 3, 4, 7, 8);
```

- A: `23 3 [4, 7, 8]`
- B: `ReferenceError`
- C: `23 3 4, 7, 8`
- D: `23 3 4`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

last parameter used with `...` is called rest operator. Rest operator stores rest of the params in array.

</p>
</details>

---

###### 11. What's the output?

```javascript
function display(a, b) {
  console.log(a+b);
}

let values = [5, 6]
display(values[0], values[1]);
display(...values);
```

- A: `11` and `ReferenceError`
- B: `ReferenceError` and `11`
- C: `5` and `6`
- D: `11` and `11`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D

Here `...` is used as spread operator. Spread operator spreads the array/object values.

</p>
</details>

---

###### 12. What's the output?

```javascript
function display(a, ...rest, b) {
  console.log(a, rest, b);
}

display(23, 3, 4, 7, 8);
```

- A: `23 [3, 4, 7] 8`
- B: `SyntaxError: Rest parameter must be last formal parameter`
- C: `23 3 4, 7, 8`
- D: `23 3 8`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

`...` Rest parameter must be last formal parameter

</p>
</details>

---

###### 13. What's the output?

```javascript
function display(...nums) {
  let ans = 0;
  for(const i of nums)ans += i;
  return ans;
}

console.log(display(1, 2, 3, 4, 5));
```

- A: `0`
- B: `15`
- C: `10`
- D: `[1, 2, 3, 4, 5]`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

we are looping through the nums array and adding all the elements then returning the sum

</p>
</details>

### map, filter and reduce method.

###### 14. Polyfill of map.

<details><summary><b>Answer</b></summary>
<p>

```javascript
// !NOTE: this-keyword is covered later
const arr = [1, 2, 3, 4];
Array.prototype.myMap = function(callback){
  let res = [];
  for(let i=0;i<this.length;++i){
    res.push(callback(this[i], i, this));
  }
  return res;
}

const ans = arr.myMap((item, index, ar) => item * 2);
console.log(ans);  // [2, 4, 6, 8]
```

</p>
</details>

---

###### 15. Polyfill of filter.

<details><summary><b>Answer</b></summary>
<p>

```javascript
const arr = [1, 2, 3, 4];
Array.prototype.myFilter = function(callback){
  let res = [];
  for(let i=0;i<this.length;++i){
    if(callback(this[i], i, this))res.push(this[i]);
  }
  return res;
}

const ans = arr.myFilter((item, index, ar) => item > 2);
console.log(ans);  // [3, 4]
```

</p>
</details>

---

###### 16. Polyfill of reduce.

<details><summary><b>Answer</b></summary>
<p>

```javascript
Array.prototype.myReduce = function(callback, initialVal) {
  if (!this) throw new Error("myReduce is called on null or undefined");
  if (typeof callback !== 'function') throw new Error("callback is not a function");
  let len = this.length,
    k = 0,
    value = undefined;
  if (initialVal !== undefined) value = initialVal;
  else {
    while(k<len && !(k in this)){
    	k++;
    }
    if(k >= len)throw new Error("reduce is called on empty array with no initial value")
    value = this[k++];
  }
  for (; k < len; ++k) {
    value = callback(value, this[k], k, this);
  }
  return value;
}
const arr = [1, 2, 3, 4];
console.log(arr.myReduce((acc, cur, ind, arr) => acc + cur, 0)); // 15

```

</p>
</details>

---

###### 16. Write a function that returns only name of students in Upper case.

```javascript
let students = [
    { name: "saurabh", age : 22, marks: 80},
    { name: 'jenny', age:15, marks:69},
    { name: 'Rinku', age:16, marks:35},
    { name: 'preet', age:7, marks:55},
];
```

<details><summary><b>Answer</b></summary>
<p>

```javascript
const students = [
    { name: "saurabh", age : 22, marks: 80},
    { name: 'jenny', age:15, marks:69},
    { name: 'Rinku', age:16, marks:35},
    { name: 'preet', age:7, marks:55},
];

function upperCaseNames(students){
  let ans = students.map((item)=> item.name.toUpperCase())
  return ans;
}
console.log(upperCaseNames(students)) // ['SAURABH', 'JENNY', 'RINKU', 'PREET']
```

</p>
</details>

---

###### 17. Write a function which returns only details of those wo scored more than 60 marks.

```javascript
let students = [
    { name: "saurabh", age : 22, marks: 80},
    { name: 'jenny', age:15, marks:69},
    { name: 'Rinku', age:16, marks:35},
    { name: 'preet', age:7, marks:55},
];
```

<details><summary><b>Answer</b></summary>
<p>

```javascript
const students = [
    { name: "saurabh", age : 22, marks: 80},
    { name: 'jenny', age:15, marks:69},
    { name: 'Rinku', age:16, marks:35},
    { name: 'preet', age:7, marks:55},
];

function toppers(students){
  let ans = students.filter((item)=> item.marks >= 60)
  return ans;
}
console.log(toppers(students))
//  [{ name: "saurabh", age : 22, marks: 80}, { name: 'jenny', age:15, marks:69}]
```

</p>
</details>

---

### Closures

###### 18. What is closure?

<details><summary><b>Answer</b></summary>
<p>

A closure is the combination of a function bundled together(enclosed) with references to its surrounding state(the lexical environment).

</p>
</details>

---

###### 19. Write a `createBase` function that allow you to do this.

```javascript
var addSix = createBase(6);
addSix(10); //16
addSix(21); //27
```

<details><summary><b>Answer</b></summary>
<p>

```javascript
function createBase(a){
  return function(b){
    console.log(a+b);
  }
};
var addSix = createBase(6);
addSix(10); //16
addSix(21); //27
```

</p>
</details>

---

###### 20. What's the output?

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
```

- A: `0 1 2` and `0 1 2`
- B: `0 1 2` and `3 3 3`
- C: `3 3 3` and `0 1 2`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

Because of the event queue in JavaScript, the `setTimeout` callback function is called after the loop has been executed. Since the variable `i` in the first loop was declared using the `var` keyword, this value was global. During the loop, we incremented the value of `i` by 1 each time, using the unary operator `++`. By the time the `setTimeout` callback function was invoked, `i` was equal to `3` in the first example.

In the second loop, the variable `i` was declared using the `let` keyword: variables declared with the `let` (and `const`) keyword are block-scoped (a block is anything between `{ }`). During each iteration, `i` will have a new value, and each value is scoped inside the loop.

</p>
</details>

---

###### 21. Write a function to increment private counter variable.
`Hint: use closure`

```javascript
function counter(){
    // write your logic here...
    return { add, retrive };
}
const { add, retrive } = counter();
add(1)
add(2)
add(3)
add(4);
console.log(retrive()); // 10
```

<details><summary><b>Answer</b></summary>
<p>

```javascript
function counter(){
    let _counter = 0;
    function add(i) {
        _counter += i;
    }
    function retrive(){
        return "Counter value is: "+_counter;
    }
    return { add, retrive };
}
const { add, retrive } = counter();
add(1)
add(2)
add(3)
add(4);
console.log(retrive()); // 10
```

</p>
</details>

---

###### 22. Write function that runs only once, if called more than once than print "cannot call more than once" in console.

```javascript
function l(){
    return function(){
    }
};
let closure = l();
closure() // final execution
closure() // cannot call more than once
closure() // cannot call more than once
closure() // cannot call more than once
```

<details><summary><b>Answer</b></summary>
<p>

```javascript

function l(){
    let called=0;
    return function(){
        if(called > 0){
            console.log("cannot call more than once")
        }else{
            console.log('final execution.');
            called++;
        }
    }
};
let closure = l();
closure() // final execution.
closure() // cannot call more than once
closure() // cannot call more than once
closure() // cannot call more than once
```

</p>
</details>

---

### Currying

###### 23. What is currying.

<details><summary><b>Answer</b></summary>
<p>

Currying a function is a technique, in which a function accept one argument at a time and return a new function that accept the next argument

NOTE: In currying number of argument should be equal to number of function returned.

</p>
</details>

---

###### 24. Implement the sum function.

```javascript
function sum(a){
  // write your logic here...
}
sum(2)(6)(1) // 9
```

<details><summary><b>Answer</b></summary>
<p>

```javascript
function sum(a){
  return function(b){
    return function(c){
      console.log(a+b+c);
    }
  }
};
sum(2)(6)(1) // 9
```

</p>
</details>

---

###### 25. Evaluate.

```javascript
```

<details><summary><b>Answer</b></summary>
<p>

```javascript

```

</p>
</details>

---


