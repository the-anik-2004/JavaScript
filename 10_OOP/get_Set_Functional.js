function User(username,email,password){
    this._username=username;
    this._email=email;
    this._password=password;

    Object.defineProperty(this,"password",{
        get:function(){
            return `${this._username.toLowerCase()}${this._password}${this._email}`
        },
        set:function(value){
            this._password=value;
        }
    })
}

const newUser=new User("Anik Pal","anikpal@ap.com","abc123");
console.log(newUser.password);