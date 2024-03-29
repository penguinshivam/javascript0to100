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


//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score1 = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id1 = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heos = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3