function mostrarnumeroascedentes(numeroMenor, numeroMayor) {
    if (numeroMenor < numeroMayor) {
        for (let i = numeroMenor; i <= numeroMayor; i++) {
            console.log(i);
        }
    } else {
        console.log("El primer número debe ser menor que el segundo.");
    }
}