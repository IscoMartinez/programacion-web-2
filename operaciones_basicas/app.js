var num1 = parseInt(prompt("Ingresa el primer numero num1: "));
var num2 = parseInt(prompt("Ingresa el segundo numero num2: "));

if (num1 > 0 && num2 > 0) {
    console.log("Ambos números son positivos");
}
if (num1 > num2 || num2 > num1) {
    console.log("Los números son diferentes");
}
if (!(num1 < 0)) {
    console.log("El primer número no es negativo");
}