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
let undoButtonEl = document.getElementById('undo')


const handleSave=()=>{
    const userInputStory = textAreaEl.value
    if(userInputStory!==''){
        localStorage.setItem("Story",JSON.stringify(userInputStory))
        alert("Your Story is successfully saved")
        localStorage.removeItem('deletedStory')

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
    let deletedStory = localStorage.getItem("Story")
    let parsedDeletedStory = JSON.parse(deletedStory)
    textAreaEl.value=''
    localStorage.removeItem('Story')
    localStorage.setItem('deletedStory',JSON.stringify(parsedDeletedStory))
}

const handleUndo=()=>{
    let storedStory = localStorage.getItem("deletedStory")
    if(storedStory!==null){
        textAreaEl.value = JSON.parse(storedStory)
    }
    else{
        textAreaEl.value=''
    }
}

saveButtonEl.addEventListener('click',handleSave)
deleteButtonEl.addEventListener('click',handleDelete)
undoButtonEl.addEventListener('click',handleUndo)

















