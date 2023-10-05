console.log('forms')
// Aceesing all HTML elemts

let nameEle = document.getElementById('input')
let emailEle = document.getElementById('email')
let numberEle = document.getElementById('number')
let dobEle = document.getElementById('dob')
let GenderOthersEle = document.getElementById('GenderOthers')
let GenderFeMaleEle = document.getElementById('GenderFeMale')
let GenderMaleEle = document.getElementById('GenderMale')
let roleEle = document.getElementById('role')


const dataRuntimeForm ={
    name:"",
    email:"",
    contactNo:"",
    dob:"",
    gender:"",
    role:""
}
const handleName=(event)=>{
    console.log(event.target.value)
    dataRuntimeForm.name=event.target.value
    console.log(dataRuntimeForm)

}
const handleEmail=(event)=>{
    console.log(event.target.value)
    dataRuntimeForm.email=event.target.value
    console.log(dataRuntimeForm)

}
const handleNumber=(event)=>{
    console.log(event.target.value)
    dataRuntimeForm.contactNo=event.target.value
    console.log(dataRuntimeForm)

}
const handledob=(event)=>{
    console.log(event.target.value)
    dataRuntimeForm.dob=event.target.value
    console.log(dataRuntimeForm)

}
const handleGender=(event)=>{
    console.log(event.target.value)
    dataRuntimeForm.gender=event.target.value
    console.log(dataRuntimeForm)

}
const handlerole=(event)=>{
    console.log(event.target.value)
    dataRuntimeForm.role=event.target.value
    console.log(dataRuntimeForm)

}
// add event listerners to all html elements 
nameEle.addEventListener('change',handleName)
emailEle.addEventListener('change',handleEmail)
numberEle.addEventListener('change',handleNumber)
dobEle.addEventListener('change',handledob)

GenderOthersEle.addEventListener('change',handleGender)
GenderFeMaleEle.addEventListener('change',handleGender)
GenderMaleEle.addEventListener('change',handleGender)
roleEle.addEventListener('change',handlerole)
nameEle.addEventListener('change',handleName)






