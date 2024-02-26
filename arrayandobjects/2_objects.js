// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularuser ={
    email:"some@gamail.com",
    fullname:{
        userfullname:{
            firstname:"shivam",
            lastname:"agarwal"
        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname);
const obj1 ={
    1:"a",
    2:"b"
}
const obj2 ={
    3:"a",
    4:"b"
}

// const obj3={obj2 ,obj1}
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
// console.log(obj3);

const user =[
    {
        id:1,
        email:"hello@gamil.com"
    },
    {
        id:2,
        email:"hello@gamil.com"
    }
]

user[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));//important
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));//less use

console.log(tinderUser.hasOwnProperty("isLoggedIn"))

const course ={
    coursename:"hello world",
    price:"444",
    courseinstructor:"hello"
}

// course.courseinstructor

const{courseinstructor:instroctor}=course
console.log(instroctor);

// {
//     "name":"shivam",
//     "cousrename":"hello world",
//     "price":"free"
// }

[
    {},
    {    },
    {}
]
