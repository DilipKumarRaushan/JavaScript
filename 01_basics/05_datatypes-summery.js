// Primitive datatype

// 7 types : string, number, boolean, null, undefined, symbole, bigint
const score = 100
const scoreValue = 100.2

const isLoggedIn = false
const outsideTemp = null
let userEamil;


const id = Symbol("123")
const anotherId = Symbol("123")
//console.log(id === anotherId)

const bigNumber = 345678954321234567n

// Reference type (Non Primitive datatype)

// Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]

let myObj={
    name:"dilip",
    age: 30,
}

const myFunction = function(){
    //console.log("Hello World");
}

//console.log(typeof bigNumber)

//+++++++++++++++++++++++++++++++++++

// Stack memory(Primitive), Heap memory(Non-Primitive)

let myYoutubename = "dilipRj"
let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email: "dilipraushan@gmail.com",
    upi : "user@yeb"
}
let userTwo = userOne
userTwo.email="dilipraushan@yahoo.com"
console.log(userOne.email)
console.log(userTwo.email)