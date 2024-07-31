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

  const [param1, param2]:any = params;

  if (typeof param1 !== typeof param2) {
    throw new Error("Los tipos de los dos primeros parametros no son correctos ");
    
  }

  const validarConEvery: boolean = params.every(param => typeof param === typeof param1)

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


class Person1 {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
  }
}

let person1 = new Person1("Alice", 30);
console.log(person1.greet());


class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): string {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal {
  speak(): string {
    return `${this.name} barks.`;
  }
}

let dog = new Dog("Buddy");

console.log(dog.speak()); // Output: Buddy barks.


interface Shape {
  area(): number;
}

class Circle1 implements Shape {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  area(): number {
    return Math.PI * this.radius ** 2;
  }
}

let circle1 = new Circle1(5);
console.log(circle1.area()); // Output: 78.54

interface NotificationService {
  sendNotification(message: string): void;
}

class EmailNotificationService implements NotificationService {
  sendNotification(message: string): void {
    console.log(`Sending email notification: ${message}`);
  }
}

class SMSNotificationService implements NotificationService {
  sendNotification(message: string): void {
    console.log(`Sending SMS notification: ${message}`);
  }
}

class OrderService {
  private notificationService: NotificationService;

  constructor(notificationService: NotificationService) {
    this.notificationService = notificationService;
  }

  placeOrder(orderId: string): void {
    // Lógica para realizar el pedido
    console.log(`Order ${orderId} placed.`);
    this.notificationService.sendNotification(`Order ${orderId} has been placed.`);
  }
}

const emailService = new EmailNotificationService();
const smsService = new SMSNotificationService();

const orderServiceWithEmail = new OrderService(emailService);
orderServiceWithEmail.placeOrder("1234");

const orderServiceWithSMS = new OrderService(smsService);
orderServiceWithSMS.placeOrder("5678");


class MathUtils {
  static sum(a: number, b: number): number {
    return a + b;
  }
}

console.log(MathUtils.sum(5, 10)); // Output: 15

class Circle {
  readonly radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
}

let circle = new Circle(5);
console.log(circle.radius); // Output: 5
// circle.radius = 10; // Error: Cannot assign to 'radius' because it is a read-only property.

function addMetadata(target: any, key: string) {
  // Add metadata to the target or key
}

function log(target: any, key: string) {
  console.log(`Property ${key} has been accessed.`);
}

class Person {
  // @log
name: string;

  constructor(name: string) {
    this.name = name;
  }
}

let person = new Person("Alice");
console.log(person.name); // Output: Property name has been accessed.



class DatabaseConnection {
  beginTransaction(): void { // Inicia una transacción
    console.log("Transaction started");
  }

  commitTransaction(): void { // Confirma una transacción
    console.log("Transaction committed");
  }

  rollbackTransaction(): void { // Revierte una transacción
    console.log("Transaction rolled back");
  }
}


function Transactional(target: any, propertyName: string, descriptor: TypedPropertyDescriptor<Function>) {
  const originalMethod = descriptor.value!;
  
  descriptor.value = function (...args: any[]) {
    const dbConnection = new DatabaseConnection();
    
    dbConnection.beginTransaction();
    
    try {
      const result = originalMethod.apply(this, args);
      dbConnection.commitTransaction();
      return result;
    } catch (error) {
      dbConnection.rollbackTransaction();
      throw error;
    }
  };
  
  return descriptor;
}

class UserService {
  // @Transactional
  createUser(username: string, email: string): void {
    console.log(`Creating user ${username} with email ${email}`);
    // Simulamos una operación que podría fallar
    if (!email.includes('@')) {
      throw new Error("Invalid email");
    }
    console.log(`User ${username} created successfully`);
  }
}

// Probando la funcionalidad
const userService = new UserService();
try {
  userService.createUser("john_doe", "john.doe@example.com");
} catch (error: any) {
  console.error("Transaction failed:", error.message);
}

try {
  userService.createUser("jane_doe", "jane.doeexample.com");
} catch (error: any) {
  console.error("Transaction failed:", error.message);
}