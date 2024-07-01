

"use strict"
const makeError=()=>{
    try{
       const name="sree";
       name="vishnu";
       throw new Error("Hello");
    }
    catch(err){
            
           console.error(err.stack);
    }
    finally{
        console.log("Hello");
    }
}
makeError();

