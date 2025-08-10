//Type guards - это механизм, который помогает сузить типы, но речь сейчас идет о своих кастомных type guards

interface Car {
  description: string;
  numberCar: number;
}
interface BMW extends Car {
  type: "bmw";
  bwnString: string;
}
interface Audi extends Car {
  type: "audi";
  audiString: string;
}
interface Person {
  name: string;
  age: number;
}

function isCar(value: Car | Person): value is Car {
  return "description" in value && "numberCar" in value;
}
function isPerson(value: Car | Person): value is Person {
  return "name" in value && "age" in value;
}
function isBmw(value: BMW | Audi): value is BMW {
  return value.type === "bmw";
}
function isAudi(value: BMW | Audi): value is Audi {
  return value.type === "audi";
}

function fn(data: Person | Car) {
  if (isCar(data)) {
    return data.numberCar;
  }
  if (isPerson(data)) {
    return data.name;
  }
}
