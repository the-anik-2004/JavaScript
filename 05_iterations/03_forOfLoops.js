/*========  for of  ======= */
const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
for(const itr of arr){
    // console.log(itr);
}

const greeting ="Hare Krishna";
for(const greet of greeting){
    // if(greet==" "){
    //     continue;
    // }
   // console.log(`My greeting is ${greet}`);

}

//maps
const map=new Map();
map.set('IN',"India");
map.set('USA',"United States of America");
map.set("AUS","Australia");

// console.log(map);
for(const [key] of map){
    console.log(key);
}

for(const [value] of map){
    console.log(value);
}

for(const [key,value] of map){
    console.log(key+" :- "+value);
}

/*
NOTES:-
    if as Maps are iterable so there is a speacial syantax to itertae a map using
    square brackets[] in for-of loop */