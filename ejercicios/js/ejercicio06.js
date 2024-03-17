function calcularSueldo() {
    const horasTrabajadas = parseFloat(document.getElementById("horasTrabajadas").value);
    const salarioHora = parseFloat(document.getElementById("salarioHora").value);

    if (horasTrabajadas <= 0 || salarioHora <= 0) {
      alert("Ingrese valores válidos (mayores a 0) para las horas trabajadas y el salario por hora");
      return;
    }

    const sueldo = horasTrabajadas * salarioHora;

    document.getElementById("resultado").innerHTML = "El sueldo del trabajador es: " + sueldo.toFixed(2);
  }
  