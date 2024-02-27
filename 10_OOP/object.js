function multi5(num){
    return num*5;
}

multi5.powerVar=2
console.log(multi5(10));
console.log(multi5.powerVar);
console.log(multi5.prototype);

function game(username,score){
    this.username=username;
    this.score=score;
}

game.prototype.increment=function(){
    this.score++;
}
game.prototype.printMe=function(){
    console.log(`${this.username} : ${this.score}`)
}

const ff=new game("free fire",40); //===>If you try to access this it doesn't show you any error...as a new object is created
const pubg= game("Battle Ground",80); //===>If you try to access this it  shows you any error...as a new object is not  created

ff.increment()
ff.printMe()