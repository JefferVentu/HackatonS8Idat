function promedio(){
    const exam01 = parseInt(document.getElementById("exam01").value);
    const exam02 = parseInt(document.getElementById("exam02").value);
    const exam03 = parseInt(document.getElementById("exam03").value);
    const exam04 = parseInt(document.getElementById("exam04").value);

    const sumaExam = exam01 + exam02 + exam03 + exam04;

    const prom = sumaExam / 4;

    document.getElementById("promExam").innerHTML = "El promedio de los examenes es: " + prom;
}