/*
Aprendendo composição entre classes:
- É uma relação onde uma classe tem outra classe com parte dela.

- Ela é muito mais forte que as relações anteriores, mais aclopada. 

- Se uma classe deixa de existir, a outra também deixa, pois uma é criada dentro
    da outra.
*/

export class Car {
  private readonly motor = new Motor();

  turnOn(): void {
    this.motor.turnOn();
  }

  turnOff(): void {
    this.motor.turnOff();
  }

  speedUp(): void {
    this.motor.speedUp();
  }

  toStop(): void {
    this.motor.toStop();
  }
}

export class Motor {
  turnOn(): void {
    console.log("Motor está ligando...");
  }

  turnOff(): void {
    console.log("Motor está desligando...");
  }

  speedUp(): void {
    console.log("Acelerando...");
  }

  toStop(): void {
    console.log("Parando...");
  }
}

const carro = new Car();

carro.turnOn();
carro.speedUp();
carro.toStop();
carro.turnOff();
