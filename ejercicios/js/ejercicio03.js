function area(){
    const base = parseFloat(document.getElementById("base").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const areaFinal = (base * altura)/2;

    document.getElementById("area").innerHTML = "El area del triangulo es: " + areaFinal + "u";
}