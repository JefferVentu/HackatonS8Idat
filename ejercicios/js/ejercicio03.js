function area(){
    const base = parseFloat(document.getElementById("base").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const areaFinal = (base * altura);

    document.getElementById("area").innerHTML = "El area del rectangulo es: " + areaFinal + "u";
}