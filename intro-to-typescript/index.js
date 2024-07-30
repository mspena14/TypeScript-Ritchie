"use strict";
let age = 30;
const firstName = "Alice";
let sum = 5 + 10;
let isValid = sum > 10 && sum < 20;
function esPar(numero) {
    return numero % 2 == 0;
}
;
esPar(2);
esPar(10);
esPar(5);
let value = 10;
if (value > 5) {
    console.log("Value is greater than 5");
}
else {
    console.log("Value is 5 or less");
}
switch (value) {
    case 10:
        console.log("Value is 10");
        break;
    default:
        console.log("Value is not 10");
}
let numero = 0;
if (numero > 0) {
    console.log("El número es positivo");
}
else if (numero < 0) {
    console.log("El número es negativo");
}
else {
    console.log("El número es cero");
}
;
switch (numero) {
    case 1:
        numero > 0;
        console.log("Es positivo");
        break;
    case -1:
        console.log("Es negativo");
        break;
    default:
        console.log("Es cero");
        break;
}
;
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
;
numbers.forEach(num => console.log(num));
let squares = numbers.map(num => num * num);
squares.forEach(square => console.log(square));
let nombres = ["Marlon", "Nicolas", "Yanina", "Lucho"];
nombres.forEach(nombre => console.log(nombre));
let fruits = ["apple", "banana", "cherry"];
let numbersToSum = [1, 2, 3, 4, 5, 6];
let sumOfNumber = numbersToSum.reduce((a, b) => a + b);
console.log(sumOfNumber);
console.log(fruits.join(""));
const users = [
    { id: 1, username: "Marlon" },
    { id: 2, username: "Yanina" },
    { id: 3, username: "Node" },
    { id: 4, username: "TypeScript" }
];
users.forEach(user => console.log(user.username));
