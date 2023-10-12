console.log('Hello Project')

 let url = 'https://restcountries.com/v2/all'
 let countriesData = []
 let countriesCountaier = document.getElementById('container')
let inputEl = document.getElementById('input')


const createUI = (eachCountryname)=>{
    const {name,capital,flag,population}=eachCountryname

    let divEl = document.createElement('div')
    let nameEl = document.createElement('h2')
    nameEl.textContent='Country Name ='+name
    divEl.appendChild(nameEl)

    let capitalEl = document.createElement('p')
    capitalEl.textContent='Capital Name ='+capital
    divEl.appendChild(capitalEl)

    let populationEl = document.createElement('p')
    populationEl.textContent='populationEl ='+population
    divEl.appendChild(populationEl)

    let imageEl = document.createElement('img')
    imageEl.src=flag
    imageEl.style.width='250px'
    imageEl.style.height='200px'
    imageEl.classList='image'

    divEl.appendChild(imageEl)
    countriesCountaier.appendChild(divEl)

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
    countriesData=data
    renderTheData(data)
 })
 .catch((error)=>console.log(error,"error"))
 }
 fetchingTheData(url)


 const handleInput=(event)=>{
    let uservalue = event.target.value
    if(uservalue !== ''){
        const filteredData = countriesData.filter((eachItem)=>{
            return (eachItem.name).toLowerCase().includes(uservalue.toLowerCase())
        })
        if(filteredData.length>0){
            countriesCountaier.textContent=''
            renderTheData(filteredData)
        }
        else{
            countriesCountaier.textContent='This country is not found' 
        }
        console.log(filteredData)
    }
    else{
        countriesCountaier.textContent=''
        renderTheData(countriesData)
    }
    console.log(uservalue)

 }
 inputEl.addEventListener('keyup',handleInput)







