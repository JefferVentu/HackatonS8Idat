function calcularBono(){
    const anioAntiguedad = parseInt(document.getElementById("anioAntiguedad").value);
    let bono;

    if (anioAntiguedad <= 5) {
        bono = anioAntiguedad * 100;
    } else {
        bono = 1000;
    }

    document.getElementById("bono").innerHTML = "El bono a recibir es: $" + bono;
}