const button = document.getElementById("flip-button");

const result = document.getElementById("result");

function flipTheCoin() {
  const textResult = Math.random() < 0.5 ? "Heads" : "Tails";

  result.textContent = textResult;
}

button.addEventListener("click", flipTheCoin);


