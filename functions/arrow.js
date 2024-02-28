const user ={
    username:"shivam",
    price:100,

    welcomemessage :function(){
        console.log(`${this.username} , welcome to website `);
        console.log(this);
    }
    
}
// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()
// console.log(this);

// function chai(){
//     let username = "shivam"
//     console.log(this);
// }
// chai()
const chai=() =>{
    let username ="shivam"
    console.log(this);
}
// chai()


()=>{}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }//explicet

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )//implicet

// console.log(addTwo(4,6));

const addTwo = (num1, num2) => ({ username:"shivam" })
console.log(addTwo());