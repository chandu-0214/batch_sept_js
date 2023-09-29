// schedulers =>(used to schedule the execution of a callBack function)

// 1. setInterval(callBack,delay(in milli secounds))

let count =0 
console.log("start")
let intervalId = setInterval(()=>{
    if(count===5){
        clearInterval(intervalId)
    }
    console.log(count)
    count++

},1000)
console.log("End")
console.log(count,'intial count')
console.log('first')
const settimeoutId = setTimeout(() => {
    console.log("Name Chandu")
}, (1000));
console.log('secound')











