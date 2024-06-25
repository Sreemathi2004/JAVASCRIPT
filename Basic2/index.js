const number=[1,2,3,4];
console.log(number);

//Accessing Items from array

console.log(number[0]);
console.log(number[1]);
console.log(number[2]);
console.log(number[3]);

//Nested array

const nestArr=['one',['two','three'],'four'];
console.log(nestArr);
console.log(nestArr[1][0]);//two
console.log(nestArr[1][1]);//three
console.log(nestArr[2]);//four

const myLetter=['h','e','l','l','o'];
console.log(myLetter);

//Assignment

const favSinger=['sree','vishnu','kavitha'];
console.log(favSinger[0]);
const favNumbers=[1,2,3,4];
const mixedArray=["string",[favNumbers],123,true];
console.log(mixedArray);
console.log("sreekutty")
console.log(mixedArray[1][0]);//[1,2,3,4]
console.log(mixedArray[1][0][0]);//1
console.log(mixedArray[1][0][1]);//2
console.log(mixedArray[1][0][2]);//3
console.log(mixedArray[1][0][3]);//4
console.log(mixedArray[2]);//123
console.log(mixedArray[3]);//true


// Operations 
const fruits=['apples','pomegranate','mango','strawberry','pineapple','grapefruite'];

fruits.push('guva');
console.log(fruits);
console.log(fruits.sort());
console.log(fruits.includes("guva"));
console.log(fruits.join("-"));
console.log(fruits.reverse());
console.log(fruits.slice(1,3));
console.log(fruits.slice(1));
console.log(fruits.slice(-1));//last item