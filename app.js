const redButton = document.getElementById("red");
const blueButton = document.getElementById("blue");
const greenButton = document.getElementById("green");

redButton.addEventListener("click", changeToRed);
blueButton.addEventListener("click", changeToBlue);
greenButton.addEventListener("click", changeToGreen);

function changeToRed() {
  const body = document.getElementsByTagName("body")[0];
  body.style.backgroundColor = "red";
}

function changeToBlue() {
  const body = document.getElementsByTagName("body")[0];
  body.style.backgroundColor = "blue";
}

function changeToGreen() {
  const body = document.getElementsByTagName("body")[0];
  body.style.backgroundColor = "green";
}
