console.log(Math.PI)
Math.PI=5;
console.log(Math.PI)

const mathDes=Object.getOwnPropertyDescriptor(Math,"PI");
console.log(mathDes);

// Object.defineProperty(Math,"PI",{writable:true});//==>You Can not redefine the property of Math.PI


const obj={
    name:'CAR',
    price:300,
    isAvailable:true,
    display:function(){
        console.log(`${this.name} : ${this.price}`)
    }

}

console.log(Object.getOwnPropertyDescriptor(obj,"name"))

Object.defineProperty(obj,"name",{
    writable:false,
    enumerable:false,
 
})

// console.log(Object.getOwnPropertyDescriptor(obj,"name"))

// for(let [key,value] of obj){//==>It is uniterable
//     console.log(`${key} : ${value}`)
// }

for(let [key,value] of Object.entries(obj)){
    if(typeof value!=="function"){
        console.log(`${key} : ${value}`)
    }
}