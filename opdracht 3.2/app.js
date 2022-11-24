document.getElementById("paragraph")
const verlanglijst = ["logitech g29/920", "lego set", "hotwheels", "games", "koptelefoons",]
let i = 0;
let len = verlanglijst.length;
let text = "";

for (; i < len; i++) {
  text += verlanglijst[i] + "<br>";
}
document.getElementById("paragraph").innerHTML = text;

