// ----------- BAD WAY-----------
const secondBtn = document.querySelector(".second-btn");
secondBtn.onmousemove=()=>console.log("SreeVishnu");
secondBtn.onmousemove=()=>alert("Hello");
// ----------- GREAT WAY-----------

const best=document.querySelector(".best");
best.addEventListener("click",()=>console.log("hi hello"));

// ----------- Event (e) Object -----------

const para=document.querySelector("p");
para.addEventListener('click',(event)=>console.log(event));


// ---------------form---------------------

const form =document.querySelector("form");
const input=document.querySelector("input");
form.addEventListener('submit',(event)=>{
    event.preventDefault();
  
console.log(input.value);
});


