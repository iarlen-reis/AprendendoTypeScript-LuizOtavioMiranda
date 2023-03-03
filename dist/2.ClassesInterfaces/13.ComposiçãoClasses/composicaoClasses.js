"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motor = exports.Car = void 0;
class Car {
    constructor() {
        this.motor = new Motor();
    }
    turnOn() {
        this.motor.turnOn();
    }
    turnOff() {
        this.motor.turnOff();
    }
    speedUp() {
        this.motor.speedUp();
    }
    toStop() {
        this.motor.toStop();
    }
}
exports.Car = Car;
class Motor {
    turnOn() {
        console.log("Motor está ligando...");
    }
    turnOff() {
        console.log("Motor está desligando...");
    }
    speedUp() {
        console.log("Acelerando...");
    }
    toStop() {
        console.log("Parando...");
    }
}
exports.Motor = Motor;
const carro = new Car();
carro.turnOn();
carro.speedUp();
carro.toStop();
carro.turnOff();
