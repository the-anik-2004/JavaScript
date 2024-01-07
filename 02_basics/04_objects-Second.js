 //singleton ==>When a object is made by a consturtor...
const appUser=new Object(); //==>singleton
// const appUser={};//==>Literals


appUser.id="062";
appUser.name="Gayle";
appUser.isLoggedIn = false;

// console.log(appUser);

/**+++++Nesting of Objects++++++ */
const regularUser={
    email:"abc123@gmail.com",
    fullName:{
                firstName:"Anik",
                lastName:"Pal",
            }
}

// console.log(regularUser.fullName.firstName);


/**+++++++++Merge Array++++++++++ */
/*Notes:-
    While merging rwo array always REMEMBER : both the object have
    different keys...if a/the key/keys is/are same in both the object the value of
    the last Object's key/keys Overides the first's Object */
const obj1={1:"a",2:"b",3:"c"};
const obj2={3:"r",4:"d"};

/*Notes:-
The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object. */

// const mergeObj1=Object.assign({},obj1,obj2);
// console.log(mergeObj1);

// const mergeObj={...obj1,...obj2};
// console.log(mergeObj);


//++++Objects Keys & values+++

console.log(appUser);
console.log(Object.keys(appUser));
console.log(Object.values(appUser));
console.log(Object.entries(appUser));
console.log(appUser.hasOwnProperty('isLoggedIn'));//==>Chceking The property
