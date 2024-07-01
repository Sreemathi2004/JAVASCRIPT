const myObject={
    name:"Sreemathi",
    content:["earn","grow","give"],
    sub:function(){
        console.log("Thanks for clicking bell icon");
    }
};

console.log(myObject);
console.log(myObject.name);

const Json=JSON.stringify(myObject);
console.log(Json);

console.log(Json.name);//undefined

console.log(typeof Json);//string
console.log(typeof JSON.parse(Json));//object
