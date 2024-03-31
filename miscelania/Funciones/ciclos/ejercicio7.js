let suma = 0;
let numero;

do {
    numero = (("Ingrese un número (ingrese 0 para finalizar):"));
    suma += numero;
} while (numero !== 0);

console.log(`La suma total de los números ingresados es: ${suma}`);