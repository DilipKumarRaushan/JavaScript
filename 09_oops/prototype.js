// let myName = "dilip     "
// console.log(myName.trueLength);

let myHeros = ["thor","spiderman","superman"]
let heroPower = {
    thor: "hammer",
    spiderman:"sling",
    superman:"flying",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.dilip = function(){
    console.log(`dilip is present in all objects`);
}

Array.prototype.heydilip = function(){
    console.log(`dilip says hello`);
}

//heroPower.dilip()
// myHeros.dilip()
// myHeros.heydilip()
//heroPower.heydilip()

//inheritance
const User = {
    name:"chai",
    email:"chai@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment:"JS assigment",
    fullTime: true,
    __proto__:TeachingSupport
}
Teacher.__proto__ = User

//modern syntex

Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername = "ChaiAurCode    "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    //console.log(`${this.name}`);
    console.log(`True length is:${this.trim().length}`);
}
anotherUsername.trueLength()
"dilip".trueLength()
"iceTea".trueLength()

