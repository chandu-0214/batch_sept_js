console.log("class 12")

console.log("Start")
for(let i=0;i<10;i++){
    // if(i===5){
    //     break
    // }
    if(i===3){
        continue
    console.log(i)

    }else{
        // console.log("I not equal to 3")

    }
}
console.log("End")

// switch 
let count=2
// if(count === 0){
//     console.log("Zero")
// }
// if(count === 1){
//     console.log("One")
// }
// if(count === 2){
//     console.log("Two")
// }
// if(count === 3){
//     console.log("Three")
// }



switch(2){
    case 0:
        console.log("Zero")
        break
    case 1:
        console.log("One")
        break
    case 2:
        console.log("Two")
        break
    case 3:
        console.log("Three") 
        break
    default:
        console.log("Default Case")
       
}

// ternary operator (?)

// condition ? true : false
let name = "Chandu hggfff"
// if(name==="Chandu"){
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// name==="Chandu" ? console.log(true) : console.log(false)

// closures 

const greet = ()=>{
    console.log("Hello World")
}
const first = (callback)=> {
    let todayClass = 12
    console.log(todayClass,'first function')
    const secound = (name)=>{
        console.log(todayClass,'secound function',name)
    }
    callback()
    return secound
}
let returnedFunction = first(greet)
returnedFunction("Chandu")
// 1
// 123 
// 1234
// 12345


let len= 10
 for (let i = 1;i<len;i++){
    let ouptput = ''
    for (let j=1;j<i+1;j++){
        ouptput=ouptput+" "+j
    }
    console.log(ouptput)
 }







