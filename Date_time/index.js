const currentDate=new Date();
console.log(currentDate);


//year.month,day,hours,minutes,seconds,milliseconds
const currentDate1=new Date(2024,2,24,12,30,0,0);
console.log(currentDate1);

const date=new Date();
const year=date.getFullYear();
const month=date.getMonth();
const day=date.getDay();
const hours=date.getHours();
const minutes=date.getMinutes();
const milliseconds =date.getMilliseconds();

console.log(year);
console.log(month);
console.log(day);
console.log(hours);
console.log(minutes);
console.log(milliseconds);


//date to string

console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toLocaleDateString());

//add one day

date.setDate(date.getDate()+1);
console.log(date);

date.setDate(date.getDate()-1);
console.log(date);


//SetINTERVALS and setTimeOut
// setInterval(
//     ()=>console.log(`This function will be executed every 2 seconds`),2000
// );

// setTimeout(
//     ()=>console.log(`hI`),3000
// );

//clear interval
// const intervalId=setInterval(
//     ()=>console.log('This is setInterval'),2000
// )
// setTimeout(
//     ()=>{
//         clearInterval(intervalId)
//         console.log('Stopped');
//     }
//     ,4000
// )

//Template literals

let fn="sree";
let ln="mathi";
console.log(`My name is ${fn.concat(ln)}`);

//assignment

const li=`
The quick
brown fox
jumps over
the lazy dog`
console.log(li);

let firstName="Sree";
let lastName="Vishnu";
console.log(`My name is ${firstName.concat(lastName)}`);

//------------------------------------------------------------
//      ARROW FUNCTION
function g(username){
    return `Hello ${username}`;
}
console.log(g("sreemathi"));


 gs=username=>`Hello ${username}`;
console.log(gs("Kavitha"));

//Normal function

function double(number){
    return number*2;
}
console.log(double(4));

//normal convert to arrow

double1=number=>number*2;
console.log(double1(5));

//Assignment

// setTimeout(()=>{
//     console.log("Hello");
//     setTimeout(()=>{
//         console.log("Hey");
//         setTimeout(()=>{
//             console.log("Namaste");
//             setTimeout(()=>{
//                 console.log("Hi");
//                 setTimeout(()=>{
//                     console.log("Bonjour");
//                 },2000)
//             },2000)
//         },2000)
//     },2000)
// },2000);

