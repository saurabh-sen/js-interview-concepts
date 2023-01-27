// ? Ques - what is event propagation?
// ! the sequence and direction in which events are triggered is called event propagation.
// let div = document.querySelector(".div")
// let form = document.querySelector(".form")
// let button = document.querySelector(".button")
// div.addEventListener('click', () => {
//     alert("div")
// })
// form.addEventListener('click', () => {
//     alert("form")
// })
// button.addEventListener('click', () => {
//     alert("button")
// }) // ! alert from inside to outside(from child to parent)

// ? Ques - what is event bubbling?
// ! events as triggered from bottom to up(child to parent) default behavior.
// ! events that don't bubble -  abort, blur, error, focus, load, mouseenter, mouseleave, resize, scroll (*), unload

// ? Ques - what is event capturing or trickling?
// ! events get triggered from top to bottom(parent to child)
// let div = document.querySelector(".div");
// let form = document.querySelector(".form");
// let button = document.querySelector(".button");
// div.addEventListener(
//   "click",
//   () => {
//     alert("div");
//   },
//   {
//     capture: true,
//   }
// );
// form.addEventListener(
//   "click",
//   () => {
//     alert("form");
//   },
//   {
//     capture: true,
//   }
// );
// button.addEventListener(
//   "click",
//   () => {
//     alert("button");
//   },
//   {
//     capture: true,
//   }
// );

// ? Ques - How do you stop bubbling or trickling?
// ! by adding e.stopPropagation();
// let div = document.querySelector(".div")
// let form = document.querySelector(".form")
// let button = document.querySelector(".button")
// div.addEventListener('click', () => {
//     alert("div")
// })
// form.addEventListener('click', () => {
//     alert("form")
// })
// button.addEventListener('click', (e) => {
//     e.stopImmediatePropagation();
//     alert("button")
// })

// ! difference between stopImmediatePropagation and stopPropagation is that immediatePropagation stops other events and stopPropagation doesn't prevent other parents events.

// ? Ques - event.target vs event.currentTarget vs this.event
// ! event.target - gives the element which is targetted first
// ! event.currentTarget - this gives the current element instead of origin or target.
// ! this.target - gives the current element.

// ? Ques - what is event delegation?
// ! it is a technique to add event listeners to the parent element to access the decendent elements
// document.querySelector(".div").addEventListener('click', (e) => {
//     console.log(e.target.innerText)
// });

// ? Ques - remove the modal when clicked on negative area
// let modal_container = document.querySelector(".modal_container");
// let modal = document.querySelector(".modal");
// let button = document.querySelector(".open_modal")
// const toggler = (toggle) => {
//     modal_container.style.display = toggle?"flex":"none" 
// }
// button.addEventListener('click', () => {
//     toggler(true);
// })
// modal_container.addEventListener('click', (e) => {
//     if(e.target.className === "modal_container")toggler(false);
// })