// primitive
// 7 types  : string numbers boolearn null undefined symbol big int

const score = false
const scorevalue=100.3
let useremail;
useremail=undefined
console.log(useremail);

const id =Symbol('123')
const anotherid=Symbol('123')
console.log(id==anotherid);
//dynamically typed language


// reference non primitive
// aray objects functions 
const heros=["ironman","hulk"]
let myobj={
    name:"shivam",
    age:20
}
console.log(myobj.name);

const myfuction =function(){
    console.log("hello world");

}
console.log(typeof myobj);
console.log(typeof myobj.name);
console.log(typeof null)


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object