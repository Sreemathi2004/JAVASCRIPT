// https://www.w3schools.com/jsref/obj_keyboardevent.asp
const input = document.querySelector("input");

//keypress
// input.addEventListener("keypress",()=>{
//     console.log("keypressed");
// })

// //keyup
// input.addEventListener("keyup",()=>{
//     console.log("keyup");
// })

//keydown
// input.addEventListener("keydown",()=>{
//     (console.log("keydown"))
// })

//USEFUL PROPERTIES METHODS
input.addEventListener('keypress',e=>console.log(e.Key));

input.addEventListener('keypress',e=>console.log(e.shiftKey));