// function user(name,age,work){
//     return{
//         name,
//         age,
//         work,
//         intro:()=>
//             console.log(
//                 `My name is ${user.name}`
//             )
//         }
//     };


// const huxn=user("Huxn",29,"programmer");
// console.log(huxn);
// console.log(huxn.intro());

// //Assignment
// const a=1,b=2,c=3;
// const obj={
//     a,b,c,
   
// }
// console.log(obj.a);
// console.log(obj.b);
// console.log(obj.c);
// console.log(obj);

// //Assignment2
// const lib={
//     sum:(a,b)=> a+b,
//     mult:(a,b)=>a*b
// };
// console.log(lib.sum(2,3));
// console.log(lib.mult(4,5));

// //Assignment3
// function getPersonES6(name,age,heights){
//     return{
//         name,age,heights
//     };
// }
// const p=getPersonES6("Huxn",19,200);
// console.log(p);

// //-------------DEFAULT FUNCTION-------------
// function countTo5(count=false){
//     if(count===true){
//         for(let i=1;i<=5;i++){
//             console.log(`Count : ${i}`);
//         }
//     }
// }
// countTo5(true);


// function ratings(rate=5){
//     if(rate===5){
//         console.log(`high ratings :)`);
//     }
//     else if(rate ===0){
//         console.log('low ratings :(');
//     }
// }
// ratings(0);
// //Assignment
// function multiply2(a,b=1){
//     console.log(a*b);
// }
// multiply2(4,3);

// //---------SPREAD OPERATOR---------------
// //FUNCTION,ARRAY,OBJECTS

// //OBJECTS

// const obj1={x:1,y:2};
// const obj2={z:3};
// const obj3={...obj1,...obj2};
// console.log(obj3);

// let person={
//     name:"Huxn",
//     age:89,
//     gender:"male"
// };

// const clone={...person,isprogrammer:true};
// console.log(clone);

// //ASSIGNMENT
// let arr=[1,2,3];
// let arr1=[4,5];
// let arr2=[...arr,...arr1];
// console.log(arr2);

// const user1={
//     name:"Jen",
//     age:22
// };

// const c1={...user1};
// console.log(c1);

// //REST OPERATOR
// function u(x,...userData){
//     console.log(x);
//     console.log(userData);
// }
// u("Huxn",34,"programming","football");

// function  p11(firstName,lastName,...Hobbies){
//     console.log("FirstName:",firstName);
//     console.log("LastName:",lastName);
//     console.log("Hobbies:",Hobbies);
// }

// p11("Sree","Vishnu","Batminton","kababdi","cricket")

// //ASSIGNMENT

// function amount(...array){
//     console.log(array);
// }
// amount("sree","mathi",9,2,3,4,true,false);

// //DESCTRUCTURING

// const foo=['one','two','three'];
// const hello=foo[0];
// console.log(hello);

// const [h12,h23]=foo;
// console.log(h12);
// console.log(h23);

// const [red,yellow,green,blue]=foo;
// console.log(red);
// console.log(yellow);
// console.log(green);
// console.log(blue);

// let a1,b1;
// [a1=5,b1=4]=["one"];// 1 to a
// console.log(a1);//1
// console.log(b1);//4

// //FUNCTION DESTRUCTURING
// let a0,b0;
// function fun(){
//     return [1,2];
// }

// [a0,b0]=fun();
// console.log(a0);
// console.log(b0);

// //ignoring
// function function1(){
//     return [1,2,3];
// }
// const [a9,,b9]=function1();
// console.log(a9);//1
// console.log(b9);//3

// const [a4,...b4]=['one','two','three'];
// console.log(a4);
// console.log(b4);

// //ASSIGNMENT
// const colors=["red","green","blue","yellow","orange"];
// const[color1,color2,color3]=colors;
// console.log(color1);
// console.log(color2);
// console.log(color3);

// //OBJECT DESCTRUCTING
// const student={
//     name:"Huxn",
//     position:"first",
//     rollNo:19
// };
// const{name,position,rollNo}=student;
// console.log(name);
// console.log(position);

// //Assignement
// const person1={
//     name1:"John Doe",
//     age:30,
//     gender:"male",
//     country:"USA"
// };
// const {name1,age,gender,country}=person1;
// console.log(name1);
// console.log(age);
// console.log(gender);
// console.log(country);

// //renaming variable in objects

// const num={
//     x:100,
//     y:200

// }

// const{x:new1,y:new2}=num;
// console.log(new1);//100
// console.log(new2);//200



// //Object destructing and rest operator

// let {a3,b2,...rest}={a3:100,b2:200,c:300,d:400};
// console.log(a3);
// console.log(b2);
// console.log(rest);

// //ASSIGNMENT
// const p2={
//     name:"John Doe",
//     age:30,
//     gender:"Male",
//     country:"USA"
// };

// const{name:personName,age:personAge,country:personCountry}=p2;
// console.log(personName);
// console.log(personAge);
// console.log(personCountry);

// function printPersonInfo({name,age,country}){
//     console.log(`Name : ${name}`);
//     console.log(`Age : ${age}`);
//     console.log((`Country : ${country}`));
// }
// printPersonInfo(p2);

// // ------------------------
// let options={
//     title:"My menu",
//     items:["item1","item2"]
// };

// function showMenu(
//     {title,items:[item1,item2],width:w=100,height:h=200}
// ){
//     console.log(`Title : ${title}`);
//     console.log(`Item1 : ${item1}`);
//     console.log(`Itme2 : ${item2}`);
//     console.log(`Width : ${w}`);
//     console.log(`Height : ${h}`);
// }
// showMenu(options);

//NESTED DESTRUCTURING
const data=[
    {name:"sree",age:20},
    {name:"vishnu",age:22},
    {name:"kavitha",age:50},
    {name:"karthika",age:25}
];

const[, ,{age:a1},{name:n1}]=data;
console.log(a1);
console.log(n1);



//TERNARY OPERATOR

let password=2;
function passwordChecker(ps){

    return (ps===8)?'Strong password':'Password should be 8 characters';
}
const res=passwordChecker(password);
console.log(res);

//ASSIGNMENET

let money=false;
money===true?console.log("Buy products"):console.log("They should bring money");

//FOR IN LOOP

let persons={
    name:"huxn",
    age:19,
    gender:"male"
}

for(let keys in persons){
    console.log(keys,persons[keys]);
}

for(let keys in persons){
    console.log(`${keys} : ${persons[keys]}`);
}


//assignemnt

const object={
    a:1,
    b:2,
    c:3
};

for(let keys in object){
    console.log(`${keys} : ${object[keys]}`);
}

//forof loop

let p1=["huxn","sree","kavitha"];
for(let people of p1){
    console.log(people);
}

const text="Hello";
for(const char of text){
    console.log(char);
}

//assignment

const array1=["a","b","c"];
for(const array of array1){
    console.log(array);
}

//Foreach
const col=["teal","blue","red","green"];
col.forEach((c)=>console.log(c));

const word=["hello","bird","table","football","pipe","code"];

const capWord=word.forEach((word,index,array)=>{
    array[index]=word[0].toUpperCase()+word.substring(1);
})

console.log(word);

//assignment
const number=[1,2,3,4,5,6,7,8,9,10];
let sum=0;
number.forEach((value)=>sum=sum+value);
console.log(`Sum is ${sum}`);


//map()
let numbers=[1,2,3,4,5];
let double = numbers.map(num=>num*2);
console.log(double);


let peoples1=[
    {firstName:"Macom",lastName:"ggfbe"},
    {firstName:"Sree",lastName:"Mathi"},
    {firstName:"Kavitha",lastName:"Murugan"}
]

const results=peoples1.map(people=>{
    return [people.firstName,people.lastName]
});

results.forEach(p=>console.log(p))


let randomNumbers=[3,6,7,19];
const num=randomNumbers.map(n=>n*10);
console.log(num);

//filter method

const songs=[
    {name:"Lucky you",duration:4.34},
    {name:"Just like you",duration:3.23},
    {name:"The search",duration:2.33},
    {name:"Old Town Road",duration:1.43},
    {
        name:"The BOx",duration :5.23
    }
];

console.log(songs.filter(song=>song.duration>3));

//assignment
const age=[32,33,16,40];
console.log(age.filter((age)=>age>18));

const words=[
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
];

console.log(words.filter((word)=>word.length>6));

console.log(words.find((word)=>word.length>6));

console.log(age.find((age)=>age>18));

const products=[
    {name:"checkers",category:"toys"},
    {name:"harry potter",category:"books"},
    {name:"iphone",category:"electronics"},
    {name:"Learn php",category:"books"}
];

console.log(products.every(p=>p.category!=="books"));
console.log(products.some(p=>p.category!=="books"));

console.log(products.find(p=>p.category==="books"));

const namess=['huxn','jordan','alex'];
console.log(namess.every(n=>n.length<=4));
console.log(namess.some(n=>n.length<=4));

//Reduce()

const numbes=[1,2,3,4,5];
const sum1=numbes.reduce((p,c)=>{return p+c},0);
console.log(sum1);

const p2=[
    {
        name:"Huxn WebDev",
        age:19,
    },
    {
        name:"Alex Mead",
        age:29,
    },
    {
        name:"Brain Griffin",
        age:40
    }
];

const ag=p2.reduce((p,c)=>
   ( c.age>p?c.age:p),0
);

console.log(ag);


//assignment

const nums=[2,3,4,5];
const values=nums.reduce((p,c)=>{return p*c},1)
console.log(values);