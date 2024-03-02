function sayMyName(){
console.log("D");
console.log("I");
console.log("L");
console.log("I");
console.log("P");
}
//sayMyName()

// function addTwoNumbers(nm1,nm2){
//     console.log(nm1 + nm2)
// }
// const result = addTwoNumbers(5,6)
// console.log("Result:",result)

function addTwoNumbers(number1, number2){
    return number1 + number2
    
}
const result = addTwoNumbers(4,8)
//console.log("Result:",result);

function loginUserMessage(username = "dilip"){
    if(!username){
       //console.log("Please enter a username")
       return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Dilip"))

//console.log(loginUserMessage("Krishna"))

function calculateCartPrice(val1,val2,...num1){
   return num1
}
//console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username:"dilip",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.peice}`)
}
//handleObject(user);
handleObject({
    username:"sam",
    price:399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray))

//console.log(returnSecondValue([200,400,100,600]))