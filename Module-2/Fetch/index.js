
console.log('start')
// setTimeout(()=>console.log("SetTimeout"),0)
// // localStorage.setItem("name",'chandu')
// console.log("End")

let url = 'https://jsonplaceholder.typicode.com/todos/'
// fetch(url,options)
// options is a object{},


// GET 

fetch(url)
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((error)=>console.log(error,"error"))
console.log("end")

