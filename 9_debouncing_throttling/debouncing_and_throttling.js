// ! debouncing - Debouncing is a technique to limit the execution of a function call and waits for certain amount of time before running it again.

// ! throttling - Throttling is a technique to limit the execution of an event handler function, while it is continuosly called by user action

// ? Ques - show "button click <x> times" every time button is pressed
// ? show "debounce trigger <x> times" every 800ms of debounce
// ? show "throttle trigger <x> times" every 800ms of throttle
// let button = document.querySelector(".button");
// let button_click_text = document.querySelector(".button_click");
// let debounce_text = document.querySelector(".button_click_debounce");
// let throttle_text = document.querySelector(".button_click_throttle");
// let button_count = 0;
// let debounce_count = 0;
// let throttle_count = 0;
// const myDebounce = (cb, d) => {
//   let timer;
//   return function (...args) {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       cb(args);
//     }, d);
//   };
// };
// const myThrottle = (cb, d) => {
//   let last = 0;
//   return function (...args) {
//     let now = new Date().getTime();
//     if (now - last < d) return;
//     last = now;
//     cb(args);
//   };
// };

// const debounceCount = myDebounce(
//   () => (debounce_text.innerText = ++debounce_count),
//   800
// );

// const throttleCount = myThrottle(
//   () => (throttle_text.innerText = ++throttle_count),
//   800
// );

// button.addEventListener("click", () => {
//   button_click_text.innerText = ++button_count;
//   debounceCount();
//   throttleCount();
// });
