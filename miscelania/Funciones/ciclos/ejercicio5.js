let suma = 0;

for (let numero = 1; numero <= 100; numero++) {
    const cuadrado = numero * numero;
    suma += cuadrado;
}

console.log(`La suma de los cuadrados de los cien primeros números naturales es: ${suma}`);