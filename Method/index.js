const person={
    name:"Sreemathi",
    age:20,
    greet,
}
function greet(){
    return `Hello , my name is ${person.name} and ${person.age}`
}
console.log(person.greet());

//----------------------------------

const p={
    name:"Sreekutty",
    age:20,
    greet:function(){
        return `Hello , my name is ${person.name} and ${person.age} from kollapalayam`;
    }
}
console.log(p.greet());

//---------------------------------

//JSON

const Json={
    name:"sreemathi",
    age:20,
    email:"sreemathik.m2004@gmail.com",
    isSubscribed:true,
    hobbies:["reading","running","cooking"],
    address:{
        "city":"coimbatore"
    }
}

//JSON.stringify()
const JSONString=JSON.stringify(Json);
console.log(JSONString);

console.log(JSON.parse(JSONString));
