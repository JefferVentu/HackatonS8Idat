function calcularSalario(){
    let sueldo = 1500;
    let mensaje = "";

    for (let i = 0; i <5; i++){
        sueldo = sueldo * 0.1;
        mensaje = console.log("En el año "+ i + " el profesor recibió S/." + sueldo.toFixed(2) +"\n");
        return mensaje;
    }
}

function calcular() {
    document.getElementById("resultado").innerHTML = mensaje;
  }