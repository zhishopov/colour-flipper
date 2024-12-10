const redButton = document.getElementById("red");
const blueButton = document.getElementById("blue");
const greenButton = document.getElementById("green");
const randomButton = document.getElementById("random");
const body = document.getElementsByTagName("body")[0];

redButton.addEventListener("click", changeToRed);
blueButton.addEventListener("click", changeToBlue);
greenButton.addEventListener("click", changeToGreen);
randomButton.addEventListener("click", changeRandom);

function changeToRed() {
  body.style.backgroundColor = "red";
}

function changeToBlue() {
  body.style.backgroundColor = "blue";
}

function changeToGreen() {
  body.style.backgroundColor = "green";
}

function changeRandom() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  const colour = `rgb(${red}, ${green}, ${blue})`;
  body.style.backgroundColor = colour;
}
