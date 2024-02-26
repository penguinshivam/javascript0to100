

function saymyname(){
    console.log("s");
    console.log("h");
    console.log("i");
    console.log("v");
    console.log("a");
    console.log("m"); 
}
// saymyname();

// function addtwonumber(num1,num2){
//     console.log(num1+num2);
// }
function addtwonumber(num1,num2){
    // let result = num1+num2
    // return result
    return num1+num2
}
const result=addtwonumber(5,4)
console.log("result" ,result);


function loginusermessage(username="shivam"){
    if (!username) {
        return "please enter user name"
    }

    return `${username} just login in`//baptics 
}

// console.log(loginusermessage("shivam"));
console.log(loginusermessage("hello"));

function calculatecartprice(...num1){//... rest and spread operater
    return num1

}

console.log(calculatecartprice(200,400,500)); 

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));