let btn = document.getElementById("btn")
let x =  Math.random()* 10000
let p = document.getElementById("p")
let btn2 = document.getElementById("btn2")
let date;
let time;
let pans = document.getElementById("pans")
//zeikerd
console.log("en meneer er staat niet dat ik er voor hoef te zorgen dat als je op het rode klikt dat ik dan te vroeg ben")

btn2.style.display = 'none';
btn.addEventListener("click", () => {
    btn.style.display = 'none';
    document.body.style.backgroundColor = "red";
    setTimeout(function(){
    document.body.style.backgroundColor = "green";
    btn2.style.display = "block";
    btn2.style.color = "white";
    pans.style.display = "none"
    date = Date.now()
    }, x);
    btn2.addEventListener("click",() =>{
    time = Date.now();
    btn2.style.display = 'none';
    console.log(time - date)
    document.body.style.backgroundColor = "white";
    pans.innerText = "U heeft " + (time - date) + "ms";
    btn.style.display = 'block';
    pans.style.display = "block"
    })
});
//mijn hemel, zet je code netjes neer! Dit kan toch niemand normaal lezen (iets met ctrl + s)
