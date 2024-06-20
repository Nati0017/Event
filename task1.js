
function js_style () {
    let text = document.getElementById ("text"); 


nuevosEstilos = {
    fontFamily: "Cursive",
    fontSize: "80px", 
    color: "Purple",
    border: "double, black, 10px",
}

Object.assign(text.style, nuevosEstilos)
}