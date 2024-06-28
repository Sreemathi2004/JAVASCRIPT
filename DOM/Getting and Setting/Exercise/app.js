// 1. Select the anchor tag
// 2. Use getAttribute(attrName) to check the attribute.
// 3. Select a-two & set "href" attribute
// setAttribute(attrName, value)

const a=document.querySelector("a");
console.log(a.getAttribute("href"));
console.log(a.text);//twitter
const a_two=document.querySelector(".a-two");
console.log(a_two.setAttribute("href","https://www.youtube.com/@huxn"));