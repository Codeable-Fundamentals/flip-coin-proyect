// elementos del DOM
const coinImg = document.getElementById("coin");
const flipButton = document.getElementById("flip-button");
const resultText = document.getElementById("result");

// imagenes
const headImg = "./assets/coin-head.png";
const tailImg = "./assets/coin-tail.png";

// lanzar moneda
function flipCoin() {
  let result;

  if (Math.random() < 0.5) {
    result = "heads"; // cara
    coinImg.src = headImg; //imagen "heads"
  } else {
    result = "tails"; // cruz
    coinImg.src = tailImg; //imagen "tails"
  }

  // texto del resultado
  resultText.textContent = result;
}

// eventos
coinImg.addEventListener("click", flipCoin);
flipButton.addEventListener("click", flipCoin);
