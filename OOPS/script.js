console.log(this);
console.log(window);

window.firstName="sree";
this.lastName="mathi";
console.log(window);

//------------------------------

function printfunc(){
    return this;
}

const res=printfunc();
console.log(res);


const obj={
    firstName : "Huxn",
    lastName  : "WebDev",
    fullName : (){
        //return this; //owner obj

        return `${this.firstName} ${this.lastName}`
    }
};
console.log(obj.fullName());