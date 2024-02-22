const myarray=[0,1,2,3,4,5,6]
console.log(myarray[1]);
console.log(myarray.length);


myarray.push(6)
myarray.push(7)
console.log(myarray);
myarray.pop()
console.log(myarray);
myarray.unshift(8)
console.log(myarray);
myarray.shift(8)
console.log(myarray);
console.log(myarray.includes(4));//datatype is boolean
const newArr = myarray.join()


console.log( newArr);
console.log( typeof newArr);

// slice, splice

console.log("A ", myarray);

const myn1 = myarray.slice(1, 3)

console.log(myn1);
console.log("B ", myarray);


const myn2 = myarray.splice(1, 3)//splice modify the orignal array and remove the part we slected 
console.log("C ", myarray);
console.log(myn2);