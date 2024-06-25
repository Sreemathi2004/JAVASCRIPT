const person={}
console.log(person);

const p={
    firstName : "HuXn",
    lastName : "WebDev",
    age:19,
    location:["planet","earth"],
    isProgrammer:true,
    10:'ten'
};
console.log(p);
console.log(typeof p);//object
console.log(p.firstName);
console.log(p.lastName);
console.log(p.location[0]);
console.log(p.location[1]);
console.log(p.isProgrammer);

console.log("Hi");
console.log(p['location']);
console.log(p['lastName']);
console.log(p['firstName']);
console.log(p['age']);

console.log(p['10']);

//Assignment

const car={
    type:"cartype",
    model:"newModel",
    color:"black"
};
console.log(typeof car);//object
car.type="Toyota";
car.Wheels=4;
console.log(car);