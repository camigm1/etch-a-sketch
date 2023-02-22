let divContainer = document.getElementById("container");
let popup = document.getElementById("popup");

// let number = prompt("How many squares on each side of the grid?");
// let squaresNumber = number * number;
// console.log(squaresNumber);

popup.addEventListener("click", function () {
  let number = prompt("How many squares on each side of the grid?");
  let squaresNumber = number * number;
  for (let i = 1; i <= squaresNumber; i++) {
    let div = document.createElement("div");
    div.className = "squares";
    div.style.backgroundColor = "#ff8989";
    divContainer.appendChild(div);
    div.addEventListener("mouseenter", function (e) {
      let squares = e.target;
      squares.style.backgroundColor = "#333";
    });
  }
});

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
