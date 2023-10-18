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
let myFormId = document.getElementById('myForm')
let nameErrorEl = document.getElementById('nameError')
console.log(myFormId)

const dataRuntimeForm ={
    name:"",
    email:"",
    contactNo:"",
    dob:"",
    gender:"Male",
    role:"Full-stack Developer"
}
const handleName=(event)=>{
    dataRuntimeForm.name=event.target.value
}
const handleEmail=(event)=>{
    dataRuntimeForm.email=event.target.value
}
const handleNumber=(event)=>{
    dataRuntimeForm.contactNo=event.target.value
}
const handledob=(event)=>{
    dataRuntimeForm.dob=event.target.value
}
const handleGender=(event)=>{
    dataRuntimeForm.gender=event.target.value
}
const handlerole=(event)=>{
    dataRuntimeForm.role=event.target.value

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

const validation=()=>{
    // name is greater than 5
    // email should includes @
    // contact no. equals to 10
    // dob should not be empty

    let isnameValid = dataRuntimeForm.name.length>5 
    let isEmailValid = dataRuntimeForm.email.includes("@")
    let isContactValid = dataRuntimeForm.contactNo.length>1
    let isDobValid= dataRuntimeForm.dob !==""
    console.log(isnameValid,isEmailValid,isContactValid,isDobValid)

    return isnameValid && isEmailValid && isContactValid && isDobValid

}
function convertObjectToCSV(objArray) {
    const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
    let str = '';

    for (let i = 0; i < array.length; i++) {
        let line = '';
        for (const index in array[i]) {
            if (line !== '') line += ',';
            line += array[i][index];
        }
        str += line + '\r\n';
    }

    return str;
}

function downloadCSV(data, filename) {
    const csvContent = "data:text/csv;charset=utf-8," + convertObjectToCSV(data);
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const handleformSubmit = (event)=>{
    event.preventDefault()  // It stops all the default activites which was done by browser
    const isValid = validation()
    if(isValid){
        console.log(dataRuntimeForm)
        // fetch call
        alert('Form is Successfully submitted')
        // below lines used to make the form empty after submitting successfully
        //downloadCSV([dataRuntimeForm], 'data.csv');
downloadPDF();

        // nameEle.value=''
        // emailEle.value=''
        // numberEle.value=''
        // dobEle.value=''
        

    }
    else{
        console.log("Form is Invalid")
        alert('Form is Invalid')
    }
     
}
myFormId.addEventListener('submit',handleformSubmit)


const handleNameValidation=(event)=>{
    console.log('blur is triggered for name')
    let valueInTheName = event.target.value
    let isnameValid= valueInTheName.length<6
    console.log(isnameValid)
    if(isnameValid){
        nameErrorEl.textContent='Name should be greater than 5'
        nameErrorEl.style.color='red'
    }else{
        nameErrorEl.textContent=''
        nameErrorEl.style.color=''
    }
    console.log(valueInTheName)

}
nameEle.addEventListener('blur',handleNameValidation)

// 1. fetch 
// 2. download the form detials eg. pdf,excel,csv(comma seprated values)


