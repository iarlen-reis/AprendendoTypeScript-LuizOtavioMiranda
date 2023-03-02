"use strict";
/*
Aprendendo composição entre classes:
- É uma relação onde uma classe tem outra classe com parte dela.

- Ela é muito mais forte que as relações anteriores, mais aclopada.

- Se uma classe deixa de existir, a outra também deixa, pois uma é criada dentro
    da outra.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motor = exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car() {
        this.motor = new Motor();
    }
    Car.prototype.turnOn = function () {
        this.motor.turnOn();
    };
    Car.prototype.turnOff = function () {
        this.motor.turnOff();
    };
    Car.prototype.speedUp = function () {
        this.motor.speedUp();
    };
    Car.prototype.toStop = function () {
        this.motor.toStop();
    };
    return Car;
}());
exports.Car = Car;
var Motor = /** @class */ (function () {
    function Motor() {
    }
    Motor.prototype.turnOn = function () {
        console.log("Motor está ligando...");
    };
    Motor.prototype.turnOff = function () {
        console.log("Motor está desligando...");
    };
    Motor.prototype.speedUp = function () {
        console.log("Acelerando...");
    };
    Motor.prototype.toStop = function () {
        console.log("Parando...");
    };
    return Motor;
}());
exports.Motor = Motor;
var carro = new Car();
carro.turnOn();
carro.speedUp();
carro.toStop();
carro.turnOff();
