function convertirPulgadas(){
    const metros = parseFloat(document.getElementById("medidaMetros").value);
  
    const conversion= metros * 0.0254;

    document.getElementById("conversion").innerHTML = "La cantidad es: " + conversion.toFixed(2) + " pulgadas.";
}