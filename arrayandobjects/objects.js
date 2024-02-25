// singleton
// Object.create
// object

const mysym=Symbol("key1")

const Jsuser={
    name:"shivam",
    "fullname":"shivam agarwal",
    "full name":"shivam agarwal",
    mykey1:[mysym],
    age:21,
    location:"delhi",
    email:"ghome@gmail.com",
    isLoggedin:false
}
console.log(Jsuser.fullname);
console.log(Jsuser["age"]);
console.log(Jsuser["full name"])
console.log(Jsuser.mykey1)
console.log(typeof Jsuser.mykey1)
console.log(typeof mysym)

// Object.freeze(Jsuser)
Jsuser.email="shivam@gmail.com"
// console.log(Jsuser);

Jsuser.greeting=function(){
    console.log("hello user ");
}
Jsuser.greetingtwo=function(){
    console.log(`hello user ${this.name}`);
}

console.log(Jsuser.greetingtwo());
