// innerText
// textContent
// innerHTML

const p=document.querySelector("p");
console.log(p.innerText);//of the text but totally formatted 
console.log(p.textContent);//it will give pure content
console.log(p.innerHTML);//it includes everythin like tag ,etc

const h1=document.querySelector("h1");
h1.innerText="text changed";
h1.innerHTML="<em><del>SreemathiVishnu</del></em>"