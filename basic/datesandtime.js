// let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(typeof mydate);

let mycreteddate=new Date(2023,1,23)
console.log(mycreteddate.toDateString());
console.log(mycreteddate.getDate());
console.log(mycreteddate.getMonth()+1);
console.log(mycreteddate.getDay());
// months start from 0 index
let mycreteddateandtime=new Date(2023,1,23,5,4)
console.log(mycreteddateandtime.toLocaleString());

let mycreteddateformate=new Date("01-06-2024")
console.log(mycreteddateformate.toDateString());
// mm dd yyyy

let mytimestamp= Date.now()
console.log(mytimestamp);

console.log(Math.floor(Date.now()/1000));

console.log(`${mycreteddate.getDay()} and the time `);
newDate.toLocaleString('default', {
    weekday:"long",
    
    
})