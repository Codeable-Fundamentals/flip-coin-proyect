function boton_funcionando() {
    let imagen_boton = document.getElementById("coin");
    let resultado = document.getElementById("result");

    if (Math.random() < 0.5) {
        imagen_boton.src = "./assets/coin-head.png"; // imagen de cara
        resultado.textContent = "CARITA";
    } else {
        imagen_boton.src = "./assets/coin-tail.png"; // imagen de sello
        resultado.textContent = "SELLITO";
    }
}