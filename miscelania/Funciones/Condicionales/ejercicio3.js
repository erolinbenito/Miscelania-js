let num1 = 5; 
let num2 = 9; 
let num3 = 1; 

let menor, mayor;

if (num1 <= num2 && num1 <= num3) {
  menor = num1;
} else if (num2 <= num1 && num2 <= num3) {
  menor = num2;
} else {
  menor = num3;
}

if (num1 >= num2 && num1 >= num3) {
  mayor = num1;
} else if (num2 >= num1 && num2 >= num3) {
  mayor = num2;
} else {
  mayor = num3;
}

console.log("El número menor es: " + menor);
console.log("El número mayor es: " + mayor);