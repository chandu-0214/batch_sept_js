console.log("class 6")
// Task => write a function which gives the true when the given value is even or else it gives you false 
const givenValue = 0
// function tellUsEvenValue (value) {
//     let isEven = value%2 === 0
//     console.log(isEven)
//     if(isEven) {
//         return "Even Number"
//     }
//     else {
//         return "Odd NUmber"
//     }
// }
// let result = tellUsEvenValue(givenValue)
// console.log(result)

// Task Tellus positive or negative
// function tellUsPositive (value) {
//     let isPositive = value>0
//     console.log(isPositive)
//     if (isPositive) {
//         return "Positive NUmber"
//     }
//     else {
//         if (value === 0) {
//             return "Niether positive nor Negative"
//         }
//         else {
//             return "Negative NUmber"

//         }
//     }
// }


// 2. Function expression 
// const tellUsPositive = function (value) {
//     let isPositive = value>0
//     console.log(isPositive)
//     if (isPositive) {
//         return "Positive NUmber"
//     }
//     else {
//         if (value === 0) {
//             return "Niether positive nor Negative"
//         }
//         else {
//             return "Negative NUmber"

//         }
//     }
// }

const tellUsPositive = (value) => {
    let isPositive = value>0
    console.log(isPositive)
    if (isPositive) {
        return "Positive NUmber"
    }
    else {
        if (value === 0) {
            return "Niether positive nor Negative"
        }
        else {
            return "Negative NUmber"

        }
    }
}

let result = tellUsPositive(givenValue)

console.log(result)









