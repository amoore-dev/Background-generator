var css = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random");

function setGradient() {
  body.style.background = 
  "linear-gradient(to right, " 
  + color1.value 
  + ", " 
  + color2.value 
  + ")";

  css.textContent = body.style.background + ";";
}

function getRndNum(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function colorGenerator() {
  var randColor = getRndNum(0, 255).toString(16);
  if (randColor.length === 1) {
    randColor = "0" + randColor;
  }
  return randColor;
}

function setRandomBackground() {

  color1.value = "#"+colorGenerator()+colorGenerator()+colorGenerator();
  color2.value = "#"+colorGenerator()+colorGenerator()+colorGenerator();

  setGradient();
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click",setRandomBackground);

