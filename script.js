let divContainer = document.querySelector(".container");
// console.log(divContainer);

for (var i = 0; i <= 15; i++) {
  let div = document.createElement("div");
  div.className = "squares";
  div.textContent = "is this working";
  console.log(div);
  divContainer.appendNode(div);
  console.log(divContainer);
}

// console.log("is this working");
