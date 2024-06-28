// href
// value
// type
// getAttribute(attrName)
// setAttribute(attrName, value)

const  a=document.querySelector("a");
console.log(a.href);
const input=document.querySelector("input");
console.log(input.value);
console.log(input.type);//text

a.href="https://www.youtube.com/@huxnwebdev";

console.log(input.text="password");
console.log(input.placeholder="pls provide srg pass");

//getattributes(arrtName)
console.log(input.getAttribute("type"));
console.log(input.getAttribute("placeholder"));

//setAttribute
console.log(input.setAttribute("placeholder","Email"));
console.log(input.setAttribute("type","text"));
console.log(input.type);