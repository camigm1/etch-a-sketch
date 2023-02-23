let divContainer = document.getElementById("container");
let popup = document.getElementById("popup");

let defaultNum = 256;
function gridMaker(number) {
  for (let i = 1; i <= number; i++) {
    let div = document.createElement("div");
    div.className = "squares";
    div.style.backgroundColor = "#6f7bf7";
    divContainer.appendChild(div);
    div.addEventListener("mouseenter", function (e) {
      let squares = e.target;
      squares.style.backgroundColor = "#9bf8f4";
    });
    div.addEventListener("click", function () {
      div.style.backgroundColor = "#6f7bf7";
    });
  }
}

popup.addEventListener("click", function () {
  divContainer.innerHTML = "";
  let number = prompt(
    "How many squares in your grid?. 16 would be 16X16 = 256. (Limit is 100)"
  );
  let squaresNumber = number * number;
  if (number <= 100) {
    gridMaker(squaresNumber);
  } else {
    alert("Needs to be 100 or less, try again");
  }
});

gridMaker(defaultNum);
