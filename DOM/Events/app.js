// ----------- BAD WAY-----------
const secondBtn = document.querySelector(".second-btn");
secondBtn.onmousemove=()=>console.log("SreeVishnu");
secondBtn.onmousemove=()=>alert("Hello");
// ----------- GREAT WAY-----------

const best=document.querySelector(".best");
best.addEventListener("click",()=>console.log("hi hello"));

// ----------- Event (e) Object -----------