function convertirDolar(){
    const soles = parseFloat(document.getElementById("cantidadSoles").value);
  
    const conversion= soles * 3.69;

    document.getElementById("conversion").innerHTML = "La cantidad en dolar es: $" + conversion.toFixed(2);
}