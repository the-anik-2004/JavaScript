const progObj={
    js:"javacript",
    java:"java",
    cpp:"C++",
    swift:"Swift",
    py:"Python"
}

for (const key in progObj) {
  //console.log(`${key} represents ${progObj[key]}`);
}

/**
 NOTES:- for in loop is specialy used for objects key retrival
if you want to retrieve any value specific to key use OBJECT[KEY].
 */


//++++++++Array in for in loops++++++++++

const progArr=["js","rb","py","java"];
for(const index in progArr){
    console.log(progArr[index]);
}



//++++++++Maps in for in loops++++++++++

const map=new Map();
map.set('IN',"India");
map.set('USA',"United States of America");
map.set("AUS","Australia");

// console.log(map);
for(const [key] in map){
    console.log(key);
}

for(const [value] in map){
    console.log(value);
}

for(const [key,value] in map){
    console.log(key+" :- "+value);
}
/**
 NOTES:- MAP is not iterable so for in loop is not aplicalble
 */