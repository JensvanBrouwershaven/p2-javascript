let paragraaf = document.getElementById("para1")
let paragraaf2 = document.getElementById("para2")
let paragraaf3 = document.getElementById("para3")
const winkelmand = ["Bananen", "Chips", "Bonen", "Aardappelen",]
let length = winkelmand.length;
let p3 = winkelmand[3];
paragraaf.innerText = "er zitten " + length + " producten in uw winkelmand"
paragraaf2.innerText = "Uw producten zijn: "+ winkelmand
paragraaf3.innerText = p3+ " staat op de 4e plek in uw winkelmand"
