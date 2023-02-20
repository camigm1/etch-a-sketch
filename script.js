let divContainer = document.getElementById("container");
let squares = document.querySelector(".squares");

for (let i = 1; i <= 256; i++) {
  let div = document.createElement("div");
  div.className = "squares";
  div.style.backgroundColor = "#ff8989";
  divContainer.appendChild(div);
}
