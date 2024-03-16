function area(){
    const radio = parseFloat(document.getElementById("radio").value);
  
    const areaFinal= Math.PI * Math.pow(radio,2);

    document.getElementById("area").innerHTML = "El area del círculo es: " + areaFinal.toFixed(2) + "u";
}