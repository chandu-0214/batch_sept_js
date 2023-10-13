console.log("wiki")
let wikiURL = "https://apis.ccbp.in/wiki-search?search=";
let searchedData={}

let inputEl = document.getElementById('input')
let containerEl = document.getElementById('container')


const createUI = (eachItem)=>{
    const {description,link,title}=eachItem

    let divEl = document.createElement('div')
    let titleEl = document.createElement('h2')
    titleEl.textContent=title
    divEl.appendChild(titleEl)

    let anchorTagEl = document.createElement('a')
    anchorTagEl.href=link
    anchorTagEl.textContent=link
    anchorTagEl.setAttribute("target",'_blank')
    divEl.appendChild(anchorTagEl)

    let descriptionEl = document.createElement('p')
    descriptionEl.textContent=description
    divEl.appendChild(descriptionEl)

    divEl.style.width='250px'
    divEl.style.height='250px'
    divEl.classList='card'
    divEl.style.margin='5px'
    divEl.style.padding='5px'



    containerEl.appendChild(divEl)

}

const renderTheData = (data)=>{
    data.map(eachitem=>{
        createUI(eachitem)
    })
}

const fetchingTheData = (url)=>{
    fetch(url)
 .then((response)=>response.json())
 .then((data)=>{
    console.log(data.search_results)
    searchedData=data
    renderTheData(data.search_results)
 })
 .catch((error)=>console.log(error,"error"))
 }


const handleInput=(event)=>{
    let userInputValue = event.target.value
    if(userInputValue !=='' && event.key==="Enter"){
        console.log(userInputValue)
        let url = wikiURL+userInputValue
        console.log(url)
        containerEl.textContent=''
        fetchingTheData(url)
    }else{
        // code for no search
    }

}

inputEl.addEventListener('keyup',handleInput)










