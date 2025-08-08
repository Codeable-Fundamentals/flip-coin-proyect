function flipCoin(){
    console.log("x");
    let coin = document.getElementById("coin"); //<img>
    let p = document.querySelector("#result");
    let result = Math.random() < 0.5 ? "Heads" : "Tails"; //<p>
    if (result=="Heads"){
        coin.src = "./assets/coin-head.png";
        p.innerHTML = "Head";
    } else {
        coin.src = "./assets/coin-tail.png";
        p.innerHTML = "Tail";
    }
}

const boton = document.getElementById("flip-button");
boton.addEventListener("click",flipCoin);