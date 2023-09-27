// Recrusion ( function calling function itself)
// callbacks (passing a function as a argument)


const greeting1 = (name,callbackFunction)=>{
    console.log("Welcome "+name)
    callbackFunction(name)
}

const greeting2 = (name)=>{
    console.log("Callback "+name)
}

// greeting1("Suresh",greeting2)


// map && filter( only applicable to arrays)

// map (when u wants to modify each and every item in the array)
let myArray = [90,85,65,48,78,14]  //[92,87,67,50,80,16]


let modifileMyArray = myArray.map((eachItem)=>{
    return eachItem+2
})
console.log(modifileMyArray)



// filter(filter the item in the array a/c to return condition)

let filteredMyArrayBy80 = myArray.filter((eachItem)=>{
    console.log(eachItem)
    return eachItem<85
})

console.log(filteredMyArrayBy80)

let student_names = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank","Alice"]

let filteredstudent_names = student_names.filter((eachItem)=>{
    return eachItem==="Alice"
})
console.log(filteredstudent_names)