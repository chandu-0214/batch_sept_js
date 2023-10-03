console.log("basic")
let buttonElement = document.getElementById('button')
let headingElement = document.getElementById('heading')
let paraElement = document.getElementById('para')
let buttonContainerElememt = document.getElementById('buttonContainer')
let newButtonElemet = document.createElement('button')


function headingChange(){
    buttonElement.textContent="Change Page"
    headingElement.textContent='Heading Changes'
    headingElement.style.color='blue'
    headingElement.style.backgroundColor='yellow'
    headingElement.style.textDecoration='underline'

    paraElement.textContent="Paragraph got accesed by JS"
    newButtonElemet.textContent="Original Page"
    newButtonElemet.id='Original Page'
    buttonContainerElememt.appendChild(newButtonElemet)
}

function handleOriginalPage(){
    console.log('original ')
    buttonElement.textContent="Click"
    headingElement.textContent='Basic'
    headingElement.style.color=''
    headingElement.style.backgroundColor=''
    headingElement.style.textDecoration=''
    paraElement.textContent="This is para"
    buttonContainerElememt.removeChild(newButtonElemet)
}

//headingChange()

// adding event Listerners 

buttonElement.addEventListener('click',headingChange)

newButtonElemet.addEventListener('click',handleOriginalPage)




















