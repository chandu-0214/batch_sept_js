console.log("first")
let headingEl = document.getElementById('heading')
let buttonEl = document.getElementById('button')



function handleButton (){
    headingEl.textContent='Heading changed'

}



buttonEl.addEventListener('click',handleButton)