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


const vechicle={
    door:2,
    enginer:function(){
        return `Vrroom!`;
    }
}

console.log(vechicle.enginer());

const car1=Object.create(vechicle);

car1.door=4;
car1.enginer=()=>{
    return `Boobm`;
}
console.log(car1.enginer());


const movie={
    actor:"Kavin",
    music:"Arr",
    director:"Lokesh",
    producer:"Anbu"
};

console.log(movie);

console.log(Object.keys(movie));

console.log(Object.values(movie));

for(let keys in movie){
    console.log(`${keys}--> ${movie[keys]}`);
}

