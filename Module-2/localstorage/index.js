// console.log('local Storages')

// // json (js object notation)
// let person = {
//     name:"chandu",
//     role:"FED",
//     sal:100
// }
// let marksArray = [45.87,"chandu"]
// // to convert into JSON (JSON.stringify())  => String
// let strigifyObject = JSON.stringify(marksArray)
// console.log(strigifyObject)
// // json.parse => is used revert the original data type 
// let originalObject = JSON.parse(strigifyObject)
// console.log(originalObject)

// localstrorage (setitem,getitem,removeitem,clear)


// localStorage.setItem('name',JSON.stringify(10))


// let storedItem = localStorage.getItem('name')
// console.log(JSON.parse(storedItem))
// localStorage.removeItem('name')





// code 

let textAreaEl = document.getElementById('textarea')
let saveButtonEl = document.getElementById('save')
let deleteButtonEl = document.getElementById('delete')


const handleSave=()=>{
    const userInputStory = textAreaEl.value
    if(userInputStory!==''){
        localStorage.setItem("Story",JSON.stringify(userInputStory))
        console.log(userInputStory)
        alert("Your Story is successfully saved")
    }
    else{
        alert("Write a story")
    }
   
}
let storedStory = localStorage.getItem("Story")
if(storedStory!==null){
    textAreaEl.value = JSON.parse(storedStory)
}
else{
    textAreaEl.value=''
}

const handleDelete = ()=>{
    let storedValue = JSON.parse(localStorage.getItem('Story'))
    textAreaEl.value=''
    localStorage.removeItem('Story')
    localStorage.clear()
    localStorage.setItem("deletedStory",JSON.stringify(storedValue))
}

saveButtonEl.addEventListener('click',handleSave)
deleteButtonEl.addEventListener('click',handleDelete)
























