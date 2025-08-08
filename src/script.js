function flipCoin() {
  const result = Math.random() < 0.5 ? "Heads" : "Tails";

  if (result === "Tails") {
    document.querySelector("#coin").src = "./assets/coin-tail.png";
    document.querySelector("#result").textContent = "tails";
  } else {
    document.querySelector("#coin").src = "./assets/coin-head.png";
    document.querySelector("#result").textContent = "heads";
  }
}

document.querySelector("#flip-button").addEventListener("click", flipCoin);