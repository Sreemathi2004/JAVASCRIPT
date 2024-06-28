//createElement()

const h1=document.createElement("h1");
h1.textContent="hello world";
h1.classList.add("greetings");
console.log(h1);
const body=document.body;
body.appendChild(h1);//append the body in last


const ul=document.querySelector("ul");
const li=document.createElement("li");
li.textContent=5;
ul.appendChild(li);
const h2=document.createElement("h1");
h2.textContent="Hello chellakutty";
const p=document.querySelector("p");
const i=document.createElement("i");
i.innerText="Iam italics";
i.style.color="red";
p.insertAdjacentElement("beforebegin",i);
p.insertAdjacentElement("beforeend",i);
p.insertAdjacentElement("afterbegin",i);
p.insertAdjacentElement("afterend",i);


let section =document.querySelector("section");
const p1=document.createElement("p");
p1.innerText="hi this is frontend developer";
const span=document.createElement("span");
span.textContent="Vishnu";
section.append(p1,span);
section.prepend(p1,span);

const news=document.querySelector(".new-list");
news.removeChild(document.querySelector(".fourth"));
news.remove();


