function hallarEdad(){
    const anioNacimiento = parseFloat(document.getElementById("anioNacimiento").value);
  
    const edad = 2024 - anioNacimiento;

    document.getElementById("edadUsuario").innerHTML = "La edad del usuario es: " + edad;
}