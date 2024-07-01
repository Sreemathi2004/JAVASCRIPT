class Pizza{
    crust="Original";
    #sauce="tomato";
    constructor(size){
        this.size=size;
    }
    getCrust(){
        return this.crust;
    }
    setCrust(crustPizza){
        this.crust=crustPizza;
    }
    getSauce(){
        return this.#sauce;
    }
    setCrust(Sauces){
        this.#sauce=Sauces;
    }
    bake(){
        console.log(`${this.size} ${this.crust} ${this.#sauce}`);
    }
    
}

const myObj=new Pizza("Small");
myObj.bake();
console.log(myObj.getCrust());
console.log(myObj.size);
console.log(myObj.getSauce());


