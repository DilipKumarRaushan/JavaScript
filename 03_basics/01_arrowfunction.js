const user = {
    username: "dilip",
    price : 999,
    welcomeMessage: function(){
      console.log(`${this.username} welcome to website`)
      console.log(this)
    }
}
//user.welcomeMessage()
// user.username = "Raushan"
// user.welcomeMessage()
//console.log(this);

// function chaiTwo(){
//     let username = "dilip"
//     console.log(this.username);
// }
// chaiTwo()

// const chaiOne = function(){
//     let username = "dilip"
//     console.log(this.username)
// }
// chaiOne()

// const chai = ()=>{
//     let username="dilip"
//     console.log(this.username)
// }
// chai()

//+++++++++++pure arrow function+++++++++++++++++

// const addTwo = (num1,num2)=>{
//     return num1 + num2
// }
// console.log(addTwo(8,9))

// const addTwo = (num1,num2)=>num1 + num2
// console.log(addTwo(17,13))

//const addTwo = (name)=>

// const addTwo = (num1,num2)=>(num1 + num2)
// console.log(addTwo(3,4))

// const addTwo = (num1,num2)=>({username:"dilip Kumar"})
// console.log(addTwo(8,6))

// const addOne = (username,age,roll)=>({username:"dilip",age:30,roll:8})
// console.log(addOne());




