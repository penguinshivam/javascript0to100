// immediately invoked function expression  ()()

(function chai (){// named iife
    console.log(`db connected`);
})();

((name)=> {
    console.log(`db connected two ${name}`);// unnamed iife
})("name")//