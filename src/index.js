const button = document.getElementById("flip-button");

const result = document.getElementById("result");

const coinImage = document.getElementById("coin");

function flipTheCoin() {
  const textResult = Math.random() < 0.5 ? "Heads" : "Tails";

  result.textContent = textResult;

  const isHeads = textResult === "Heads";
  
  coinImage.src = isHeads ? "./assets/coin-head.png" : "./assets/coin-tail.png";
}

button.addEventListener("click", flipTheCoin);
