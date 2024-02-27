

const heros=["spiderman","thor"];
const myHero={
    spidy:"SLING",
    thor:"HAMMER",
    getSpiderPower:function(){
        console.log(`Spiderman power is ${this.spidy}`)
    }
}

Object.prototype.anik=function(){
    console.log(`Anik  creates all the objects`);
}

Array.prototype.myARRAY=function () {
    console.log("NAMASTE USER")
}

myHero.anik();
heros.anik();

heros.myARRAY();
// myHero.myARRAY();//==>as the "mtARRAY()" 's access is only given to the array,...so Object can not have the property.


///Tasks of getting trueLength
let uName="Anik     "
String.prototype.trueLenght=function(){
   console.log(this)
   console.log(`True length is ${this.trim().length}`)
}
uName.trueLenght()
