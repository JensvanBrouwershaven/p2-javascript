let colors = ["red", "green", "blue"]
function changecolor(){
let random_number = Math.floor(Math.random() * 3)
document.body.style.backgroundColor = colors[random_number]
}
setInterval(changecolor, 1)
