// Arrow function 

// function addTwoNUmbers (a,b){
//     let sumOfTwoNUmbers = a+b
//     return sumOfTwoNUmbers
// }


const addTwoNUmbers = (a,b) => {
    return a+b
}



let result=addTwoNUmbers(54,18)
// console.log(result)

// Task => given two numbers(A and B)
// 1. checks one of any number is less than 60 and 
// 2.any of number is greater than 80 

// ex , A= 50, B=100



const checkTwoNumbers = (a,b) => {
    let checkLessThan60ForA = a<60
    let checkLessThan60ForB = b<60
    let conditionFirst = checkLessThan60ForA || checkLessThan60ForB 
   let checkGreaterThan80ForA = a>80
    let checkGreaterThan80ForB = b>80 
     let conditionTwo = checkGreaterThan80ForA || checkGreaterThan80ForB 
     
     let finalCondition = conditionFirst && conditionTwo
     //console.log(finalCondition)
     if(finalCondition) {
         return "True"
     }
     else {
         return "False"
     }
    
    
}
let resultForcheckTwoNumbers =checkTwoNumbers(200,500)
// console.log(resultForcheckTwoNumbers)

// Task = given two numbers , check sum and product should be less than 3 digits

const sumProductCheck = (a,b) => {
    let sumOfTwoNumbers = a+b 
    let checkSumLesssThandigit = sumOfTwoNumbers<1000 
    let productOfTwoNumbers = a*b 
    let checkproductLesssThandigit = productOfTwoNumbers<1000 
    let finalcondition = checkSumLesssThandigit && checkproductLesssThandigit 
    // console.log(finalcondition,sumOfTwoNumbers,productOfTwoNumbers)
      if(finalcondition) {
         return "True"
     }
     else {
         return "False"
     }
    
    
}

let resultForsumProductCheck= sumProductCheck(55,15)  
// console.log(resultForsumProductCheck)


// Task = reverse the string
// eg = good ======> doog 




const reverseString = (givenString) => {
    //console.log(givenString[0])
    let reverseString = ""
    let lengthOfGivenString = givenString.length
    for(let i=lengthOfGivenString-1;i>=0;){
       
        let eachItem = givenString[i]
         // console.log(eachItem,i)
        reverseString = reverseString+eachItem
        i=i-1
    }
    return reverseString
}

let resultOfreverseString=reverseString("Chandu")   // dooG

console.log(resultOfreverseString)