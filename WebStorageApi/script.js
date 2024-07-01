const obj={
    name:"SreeVishnu",
    age:20,
    gender:"female"
};

localStorage.setItem("age",obj.age);
localStorage.setItem("gender",obj.gender);
localStorage.setItem("name",obj.name);

// sessionStorage.setItem("name",obj.name);
// sessionStorage.setItem("age",obj.age);
// sessionStorage.setItem("gender",obj.gender);

console.log(sessionStorage.getItem("name"));

console.log(localStorage.getItem("name"));

//************COOKIES */

document.cookie="name=somename";
console.log(document.cookie);

//expires

const expire=new Date(2024,6,2).toUTCString();
console.log(expire);

document.cookie="name=someName; expires="+expire;