function votar(){
    const edad = parseFloat(document.getElementById("edad").value);

    if(edad >= 18){
        document.getElementById("voto").innerHTML = "Usted puede votar en las próximas elecciones";
    }
    else{
        document.getElementById("voto").innerHTML = "Lo siento, usted NO puede votar en las próximas elecciones";
    };
}