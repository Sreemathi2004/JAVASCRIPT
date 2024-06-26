function greeting(){
    console.log("hello from function");
}
greeting();


function sayHello(name){
    console.log(`Hello ${name}`);
}

sayHello("Sreemathi")

function add(x,y){
    return x+y;
}
let value=add(5,6);
console.log(value);

//assignment

function myFunction(a,b){
    return a*b;
}
let value1=myFunction(3,4);
console.log(value1);

//function expression

const a=()=>{
    console.log("Hello");
}
a();

const b=(name)=>{
    console.log(`Hello ${name}`);
}
b("Sreemathi");


function func(value){
    console.log(value*2);
}

function result(func){
    func(34);
}
result(func);


function greet(name,cb){
    console.log(`Hello ${name}`);
    cb()
}
function cb(){
    console.log("Iam in cb");
}
greet("Rakesh",cb);


//Assignment
function showCalFunc(fn){
    let c=10;
    fn(c);
}
function fn(value){
    console.log(`Value is ${value} from show call`);
}

showCalFunc(fn);