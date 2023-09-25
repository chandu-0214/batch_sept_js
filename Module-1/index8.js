let myArray = [10,80,90,30]   // mutable
console.log(myArray)

// push()  // push the arguemnt at the end of the array

myArray.push(100) 
console.log(myArray)

// unshift()  // push the arguemnt at the start of the array

myArray.unshift(55)
console.log(myArray)

// pop()   // remove the arguemnt at the end of the array

myArray.pop()
console.log(myArray)


// shift()     // remove the arguemnt at the start of the array

myArray.shift()
console.log(myArray)


// sort()

myArray.sort()
console.log(myArray)

// includes() (if the argumrnt is there it returns true else it return false)

let isincludes = myArray.includes(10)

console.log(isincludes)


// modify 
let newArray = [1,8,4,7]
console.log(newArray)

newArray[3]=17
console.log(newArray)
// objects 

let myObj = {
    name:"Chandu",
    lastName:'Reddy',
    role:"Frontend",

}
console.log(myObj)
// adding 
myObj.salary = 100

console.log(myObj)

// delete myObj.lastName
console.log(myObj)

let keysOFObj = Object.keys(myObj)
console.log(keysOFObj)

let valuesOFObj = Object.values(myObj)
console.log(valuesOFObj)


let enteriesOFObj = Object.entries(myObj)
console.log(enteriesOFObj)



















