const user = {
    username:"Dilip",
    loginCount : 8,
    signedIn: true,
    getUserDetails:function(){
        //console.log("Got user details from database")
        //console.log(this);
    }
}
//console.log(user)
//console.log(user.getUserDetails())


function User(username,loginCount,isLoggeding){
    this.username = username;
    this.loginCount=loginCount;
    this.isLoggeding= isLoggeding;
     this.greeting = function(){
        console.log(`welcome ${this.username}`);
     }
    return this
}
const userOne = new User("dilip",12,true)
const userTwo = new User("Raushan",15,false)
console.log(userOne.constructor);
//console.log(userTwo);

