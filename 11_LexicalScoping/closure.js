function Outer(){
    const name="ANIK";
    function makeFunction(){
        console.log(name);
    }
    console.log("-----")
    return makeFunction;
}

const myFn=Outer();
myFn()