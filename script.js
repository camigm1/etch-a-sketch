let divContainer = document.getElementById("container");
// console.log(divContainer);
let boxes = new Array();
boxes.length = 16;
// let specialBox = boxes[3];
// specialBox.textContent = "special";
for (let i = 1; i <= 16; i++) {
  let div = document.createElement("div");
  div.className = "squares";
  div.textContent = "is this working";
  divContainer.appendChild(div);
  console.log(divContainer);
}

console.log(divContainer);
