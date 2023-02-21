let divContainer = document.getElementById("container");

for (let i = 1; i <= 256; i++) {
  let div = document.createElement("div");
  div.className = "squares";
  div.style.backgroundColor = "#ff8989";
  divContainer.appendChild(div);
  div.addEventListener("mouseenter", function (e) {
    let squares = e.target;
    squares.style.backgroundColor = "#333";
  });
}
