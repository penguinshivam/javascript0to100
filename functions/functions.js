

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

