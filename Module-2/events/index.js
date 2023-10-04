let inputelement = document.getElementById("input")

// change,keydown,keyup,blur

const handleinput=(event)=>{
    // console.log(event.key)
    console.log(event.target.value)
    console.log('change')
}

// keyUp = trigerres when the keyborad key is up
// keydown = trigerres when the keyborad key is down
// change = trigerres when input changes the value
// blur = trigerres when the input looses its focus
inputelement.addEventListener('change',handleinput)












