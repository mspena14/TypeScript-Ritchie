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
let user = { id: 1, name: "John" };
console.log(user);
;
const car = { marca: "Toyota", modelo: "Plus", año: 2000 };
console.log(car.marca);
console.log(car.modelo);
console.log(car.año);
function aumentarAño(car) {
    return car.año = car.año + 1;
}
aumentarAño(car);
console.log(car);
function add(a, b) {
    return a + b;
}
;
let arrayOfNumbers = [0, 20, 9, 1, 10, 11, 2];
function retornarMayor(array) {
    return array.reduce((a, b) => {
        if (a > b) {
            return a;
        }
        else {
            return b;
        }
    });
}
console.log(retornarMayor(numbersToSum));
console.log(retornarMayor(arrayOfNumbers));
function validarParametros(...params) {
    if (!(params.length >= 2)) {
        throw new Error("Se necesitan al menos 2 parametros para poder comparar.");
    }
    const [param1, param2] = params;
    if (typeof param1 !== typeof param2) {
        throw new Error("Los tipos de los dos primeros parametros no son correctos ");
    }
    const validarConEvery = params.every(param => typeof param === typeof param1);
    if (!validarConEvery) {
        throw new Error("Uno o más de los parametros tiene un tipo diferente.");
    }
    return "Todo esté bien, la lista de parametros cumple los requisitos!";
}
try {
    console.log(validarParametros(2, 1, 1, 10, 11, 2));
}
catch (err) {
    console.error("Error:", err.message);
}
// Tarea 3: Define una funcion que reciba una matriz cuadrada de numeros como parametros y devuelva la matriz gira 90 grados en sentido horario. (2 Riwi points)
let matriz = [
    ["a", "b"],
    ["c", "d"]
];
function invertir90Grados(matriz) {
    let newMatriz = [
        ["", ""],
        ["", ""]
    ];
    for (let i = matriz.length - 1; i >= 0; i--) {
        for (let j = 0; j < matriz.length; j++) {
            newMatriz[i][j] = matriz[(matriz.length - 1) - i][j];
        }
    }
    return newMatriz;
}
console.log(invertir90Grados(matriz));
class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I'm ${this.age} years old.`;
    }
}
let person1 = new Person1("Alice", 30);
console.log(person1.greet());
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        return `${this.name} makes a sound.`;
    }
}
class Dog extends Animal {
    speak() {
        return `${this.name} barks.`;
    }
}
let dog = new Dog("Buddy");
console.log(dog.speak()); // Output: Buddy barks.
class Circle1 {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius ** 2;
    }
}
let circle1 = new Circle1(5);
console.log(circle1.area()); // Output: 78.54
class EmailNotificationService {
    sendNotification(message) {
        console.log(`Sending email notification: ${message}`);
    }
}
class SMSNotificationService {
    sendNotification(message) {
        console.log(`Sending SMS notification: ${message}`);
    }
}
class OrderService {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    placeOrder(orderId) {
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
    static sum(a, b) {
        return a + b;
    }
}
console.log(MathUtils.sum(5, 10)); // Output: 15
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
}
let circle = new Circle(5);
console.log(circle.radius); // Output: 5
// circle.radius = 10; // Error: Cannot assign to 'radius' because it is a read-only property.
function addMetadata(target, key) {
    // Add metadata to the target or key
}
function log(target, key) {
    console.log(`Property ${key} has been accessed.`);
}
class Person {
    constructor(name) {
        this.name = name;
    }
}
let person = new Person("Alice");
console.log(person.name); // Output: Property name has been accessed.
class DatabaseConnection {
    beginTransaction() {
        console.log("Transaction started");
    }
    commitTransaction() {
        console.log("Transaction committed");
    }
    rollbackTransaction() {
        console.log("Transaction rolled back");
    }
}
function Transactional(target, propertyName, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const dbConnection = new DatabaseConnection();
        dbConnection.beginTransaction();
        try {
            const result = originalMethod.apply(this, args);
            dbConnection.commitTransaction();
            return result;
        }
        catch (error) {
            dbConnection.rollbackTransaction();
            throw error;
        }
    };
    return descriptor;
}
class UserService {
    // @Transactional
    createUser(username, email) {
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
}
catch (error) {
    console.error("Transaction failed:", error.message);
}
try {
    userService.createUser("jane_doe", "jane.doeexample.com");
}
catch (error) {
    console.error("Transaction failed:", error.message);
}
