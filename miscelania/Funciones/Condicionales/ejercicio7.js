var año = 2024; 
var esBisiesto = año % 4 === 0;

if (esBisiesto) {
  console.log(año + ' es un año bisiesto.');
} else {
  console.log(año + ' no es un año bisiesto.');
}