console.log("class 10")
let studentNamesArray = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank"]
let myMarksArray = [90,85,65,48,78,14]

// splice(start INdex,delete count,addition items)

console.log(myMarksArray)
myMarksArray.splice(2,5,100,154)
console.log(myMarksArray)


// findIndex(callback)

const personName = "Bob"

let IndexOfThePersonName = studentNamesArray.findIndex((eachItem)=>{
    console.log(eachItem)
    return eachItem===personName
})
studentNamesArray[IndexOfThePersonName] ='Boby Deol'
console.log(studentNamesArray)
console.log(IndexOfThePersonName)


// object Method 
let nameObj = {
    name:"Chandu",
    role:"Front end Dev",
    salary:1000,
    isIndia:true,
    tenClassScore:[10,25,87,90],
    mobile:{
        name:"iphone",
        model:"14 pro"
    },
    addTwoNUmbers:function (a,b){
        console.log(a+b)
    },
    intro:function(){
        console.log('My name is '+this.name+". My Role is "+this.role+'. and my salary is '+this.salary+'.')

    }
}
nameObj.name="Shekhar"
nameObj.role = "Backend Developer"
nameObj.salary=50
console.log(nameObj.intro())







