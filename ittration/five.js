const coding =['js','ruby','java']

coding.forEach(function (item) {
    console.log(item);
})

coding.forEach((item)=> {
    console.log(item);
    
})

coding.forEach((item,index,arr)=> {
    console.log(item,index,arr);
    
})


const myCoding =[
    {
        languagename:"javascript",
        languagesymbol:"js"

    },
    {
        languagename:"javalang",
        languagesymbol:"java"

    },
    {
        languagename:"python",
        languagesymbol:"py"

    },
]


myCoding.forEach((item) => {

    console.log(item.languagename);
});