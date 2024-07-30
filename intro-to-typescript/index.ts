let age: number = 30;
const firstName: string = "Alice";

type User = {
  id: number;
  username: string;
};

type Producto = {
    id: number;
    nombre: string;
    precio: number;
};

let sum: number = 5 + 10;
let isValid: boolean = sum > 10 && sum < 20;

function esPar(numero:number): boolean {
    return numero % 2 == 0
};

esPar(2)
esPar(10)
esPar(5)


let value: number = 10;
if (value > 5) {
  console.log("Value is greater than 5");
} else {
  console.log("Value is 5 or less");
}

switch (value) {
  case 10:
    console.log("Value is 10");
    break;
  default:
    console.log("Value is not 10");
}

let numero: number = 0;

if (numero > 0) {
    console.log("El número es positivo");
} else if(numero < 0) {
    console.log("El número es negativo");
} else {
    console.log("El número es cero");
};

switch (numero) {
    case 1: 
        numero > 0
        console.log("Es positivo");
        break;
    case -1:
        console.log("Es negativo");
        break;
    default:
        console.log("Es cero");
        break;
};

let numbers: number[] = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
};

numbers.forEach(num => console.log(num));
let squares = numbers.map(num => num * num);
squares.forEach(square => console.log(square));

let nombres: string[] = ["Marlon", "Nicolas", "Yanina", "Lucho"];
nombres.forEach(nombre => console.log(nombre));

let fruits: string[] = ["apple", "banana", "cherry"];

let numbersToSum: number[] = [1, 2, 3, 4, 5, 6];
let sumOfNumber: number = numbersToSum.reduce((a,b) => a+b)
console.log(sumOfNumber);

console.log(fruits.join(""));



const users: User[] = [
    {id: 1, username: "Marlon"},
    {id: 2, username: "Yanina"},
    {id: 3, username: "Node"},
    {id: 4, username: "TypeScript"}
]

users.forEach(user => console.log(user.username)
);

interface UserInterface {
    id: number;
    name: string;
}

let user: UserInterface = { id: 1, name: "John" };

