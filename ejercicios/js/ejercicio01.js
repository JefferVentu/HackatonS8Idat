function sumar() {
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;

    const num1 = parseInt(numero1);
    const num2 = parseInt(numero2);

    const resultado = num1 + num2;

    document.getElementById("resultado").innerHTML = "El resultado es: " + resultado;
}