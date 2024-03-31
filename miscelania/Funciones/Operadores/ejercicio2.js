console.log("2. Ingrese numeros a sumar : ");
console.log("Ingrese el primer numero: ");
let numero1 = 10;
console.log("Ingrese el segundo numero");
let numero2 = 16;


//proceso
let resultado = numero1 + numero2;

//salida
console.log(resultado);

function sumarNumeros() {
    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.getElementById("numero2").value);
    const resultado = numero1 + numero2;
    document.getElementById("resultado").innerHTML = `El resultado de la suma es: ${resultado}`;
    return false;
}