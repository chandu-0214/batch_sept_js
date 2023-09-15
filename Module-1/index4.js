for(let i = 0;i<10;) {
    // code
    //console.log(i)
    i++
}
let namesArray = ['chandu',"A2N Academy",'rajesh',"Tanu Kulkarni" ,"Sharath",254,'pavithra',true,[25,26]]
let lengthOfTheArray = namesArray.length
// console.log(lengthOfTheArray,'lengthOfTheArray')
for(let i = 0;i<lengthOfTheArray;i++) {
    // code
    //console.log(namesArray[i],i)
}

for(let eachItem of namesArray){
    //console.log(eachItem)
}

let nameObject = {
    fullName:"chandu",
    age:26,
    location:"Goa",
    role:"Frontend",
    "last name":"Reddy"
}

for(let eachItem in nameObject){
    console.log(nameObject[eachItem])
}
for(let i = 0;i<10;i++) {
    // code
    // console.log(i)
}

let j = 10
while(j<10) {
    console.log(j)
    j=j+1 //i++
}
console.log("break")
let i = 8
do {
    console.log(i)
    i=i+1 //i++
} while(i<10)
