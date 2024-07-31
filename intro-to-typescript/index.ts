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

console.log(user);

interface Car {
  marca: string;
  modelo: string;
  año: number;
};

const car: Car = { marca:"Toyota", modelo: "Plus", año: 2000};

console.log(car.marca);
console.log(car.modelo);
console.log(car.año);

function aumentarAño(car:Car) {
  return car.año = car.año + 1
}
aumentarAño(car)
console.log(car);

function add(a: number, b: number): number {
  return a + b;
};

let arrayOfNumbers: number[] = [0, 20, 9, 1, 10, 11, 2]

function retornarMayor(array:number[]): number {
  return array.reduce((a,b) => {
    if (a > b) {
      return a
    } else {
      return b
    }
  })
}

console.log(retornarMayor(numbersToSum));
console.log(retornarMayor(arrayOfNumbers));

function validarParametros(...params: any[]): string {

  if (!(params.length >= 2) ) {
    throw new Error("Se necesitan al menos 2 parametros para poder comparar.");
  }

  const [param1, param2] = params;

  if (typeof param1 !== typeof param2) {
    throw new Error("Los tipos de los dos primeros parametros no son correctos ");
    
  }

  const validarConEvery = params.every(param => typeof param === typeof param1)

  if (!validarConEvery) {
    throw new Error("Uno o más de los parametros tiene un tipo diferente.");
  }

    return "Todo esté bien, la lista de parametros cumple los requisitos!"
}

try {
  console.log(validarParametros(2, 1, 1, 10, 11, 2));  
} catch (err: any) {
  console.error("Error:", err.message)
}

// Tarea 3: Define una funcion que reciba una matriz cuadrada de numeros como parametros y devuelva la matriz gira 90 grados en sentido horario. (2 Riwi points)

let matriz: string[][] = [
  ["a", "b"],
  ["c", "d"]
]

function invertir90Grados(matriz:string[][]): string[][] {
  let newMatriz: string[][] = [
    ["",""],
    ["",""]
  ]
  for (let i = matriz.length - 1; i >= 0; i--) {
    for (let j = 0; j < matriz.length; j++) {
      newMatriz[i][j] = matriz[(matriz.length - 1) - i][j]
    }
  }
  return newMatriz
}

console.log(invertir90Grados(matriz));
