
const prompt = require('prompt-sync')();

// Pedir los tres números
let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));
let num3 = parseInt(prompt("Ingresa el tercer número:"));

// Verificar si todos los números son iguales y tambien si uno es mayor que otros o uno es menor 
if (num1 === num2 && num2 === num3) {
  console.log("Los tres números son iguales:", num1, num2, num3);
} else {
  if (num1 >= num2 && num1 >= num3) {
    mayor = num1;
    if (num2 >= num3) {
      medio = num2;
      menor = num3;
    } else {
      medio = num3;
      menor = num2;
    }
  } else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
    if (num1 >= num3) {
      medio = num1;
      menor = num3;
    } else {
      medio = num3;
      menor = num1;
    }
  } else {
    mayor = num3;
    if (num1 >= num2) {
      medio = num1;
      menor = num2;
    } else {
      medio = num2;
      menor = num1;
    }
  }

  // Mostrar los resultados
  console.log("Orden de mayor a menor:", mayor, medio, menor);
  console.log("Orden de menor a mayor:", menor, medio, mayor);
}