console.log('hello Class 3')


// conditional statements(if,else if,else)(condition should always be true or false)
let value = false
let newvalue = true

if(value) {
    console.log("secret")
}
else if(newvalue){
    console.log("Partially secret")
}
else{
    console.log("Not a secret")
}

// Array and Objects 

let namesArray = ['chandu','rajesh',"Tanu Kulkarni" ,"Sharath",'pavithra',25,true,[25,26]]

console.log(Array.isArray(namesArray))


// indexing 
console.log(namesArray[7][0])

let nameObject = {
    fullName:"chandu",
    age:26,
    location:"Goa",
    role:"Frontend",
    "last name":"Reddy"
}
console.log(typeof(nameObject))
 
// camelCase       chandraShekharReddy
// PascalCase      ChandraShekharReddy
// kebab-case      chandra-shekhar-reddy
// snake_case      chandra_shekhar_reddy


// accessing (Dot(valid keys) and Bracket) 



console.log(nameObject.fullName)
console.log(nameObject["age"])





