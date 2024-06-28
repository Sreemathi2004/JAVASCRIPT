const map=new Map();
console.log(map);
console.log(typeof map);//object

  const keyOne="string";
  const keyTwo={};
  const keyThree=function(){};

  map.set(keyOne,"My name is sreemathi");
  map.set(keyTwo,"value of key two");
  map.set(keyThree,"Value of key is three");
  console.log(map);
  console.log(map.keys());
  console.log(map.values());
  console.log(map.delete(keyTwo));
  console.log(map);
  console.log(map.size);

  //iteration of map

  for(let [key,value] of map){
    console.log(`${key} -- ${value}`);
  }

  for(let key of map.keys()){
    console.log(`${key}`);
  }

  for(let value of map.values()){
    console.log(`${value}`);
  }
  //Assignment

  const map1=new Map();
  map1.set(1,"a");
  map1.set(2,"b");
  map1.set(3,"c");

  console.log(map1.get(1));
  console.log(map1.size);
  console.log(map1.delete(2));
  console.log(map1.size);
  //SET DATASTRUCTURE
  const set=new Set();
  console.log(set);
  console.log(typeof set);

  const initialvalue=[1,2,2,3,4];
  const set1=new Set(initialvalue);
  console.log(set1);
  set1.add(7);
  set1.add("sree");
  set1.add("banana");
  console.log(set1);

  console.log(set1.has("banana"));//true
  console.log(set1.has("sreemathi"));//false

  //delete
  set1.delete("sree");
  console.log(set1);

  for(let item of set1){
    console.log(item);
  }

  set1.clear();
  console.log(set1);//it removes all the value



//asignment

const letters=new Set();
letters.add("a");
letters.add("b");
letters.add("c");
for(let item of letters){
    console.log(item);
}

//Symbol

const mySymbol=Symbol();
console.log(mySymbol);
console.log(typeof mySymbol);

const mySymbol1=Symbol("My custom symbol");
console.log(mySymbol1);

//comparing symbolc
const mySymbol2=Symbol("name");
const mySymbol3=Symbol("name");
console.log(mySymbol2===mySymbol3);//false

const obj={};
obj[mySymbol1]="value1";
obj[mySymbol2]="value2";
console.log(obj);

const symbol4=Symbol('name');
const symbol5=Symbol('name');
const huxn={};
huxn.age=19;
huxn["gender"]="female";
huxn[symbol4]="alex";
huxn[symbol5]="john";
console.log(huxn);

//assignment

const foo=Symbol();
console.log(typeof foo);
const o={};
o[foo]="sreemathi";
o.age1=19;
o.gender="female";
console.log(o);

for(let keys in o){
    console.log(`${keys}--- ${o[keys]}`);
}


