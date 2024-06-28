const li=document.querySelector("li");
console.log(li);
console.log(li.parentElement);

let ul=document.querySelector("ul");
console.log(ul.children);
console.log(ul.children[0]);
console.log(ul.children[1]);
console.log(ul.children.length);
ul.children[0].innerText="Hello"
console.log(ul.children[0].innerText);

console.log(li.nextElementSibling);//give second li

console.log(li.nextElementSibling.nextElementSibling);

console.log(li.nextElementSibling.nextElementSibling.innerText);

//PREVIOUS CHILDREN
console.log("Hello");
let fourthLi=document.querySelector(".fourth");
console.log(fourthLi.previousElementSibling.previousElementSibling.innerText);
console.log(fourthLi.previousElementSibling.innerText);
;
