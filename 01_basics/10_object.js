// singleton

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name:"Dilip",
    [mySym]:"mykey1",
    age: 30,
    location: "Bihar",
    email: "dilip@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser[mySym])

jsUser.email = "dilipraushan@cgpt.com"
Object.freeze(jsUser)
jsUser.email = "dilip@microsoft.com"
//console.log(jsUser)

//const tinderUser = new Object() //singleton

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Dilip"
tinderUser.isLoggedIn = false
//console.log(tinderUser)

const regularUser = {
    email:"dilip@gmail.com",
    fullname:{
        userfullname:{
            firstname: "dilip",
            lastname:"raushan"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}
//const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2}
//console.log(obj3)

const users = [
    {
        id:1,
        name:"dilip",
        email:"dilip@gmail.com",
    },
]
//users[1].email
//console.log(tinderUser)
//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty("isLogged"))

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Dilip",
}
//console.log(course.courseInstructor)

const {courseInstructor: instructor} = course
//console.log(instructor)

