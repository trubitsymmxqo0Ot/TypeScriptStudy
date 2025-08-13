interface Animal {
  name: string;
}
interface Cat extends Animal {
  meow(): void;
}

function isCat(animal: Animal): animal is Cat {
  return "meow" in animal;
}
function handleAnimal(animal: Animal) {
  if (isCat(animal)) {
    return animal.meow();
  } else {
    return "Это не кот";
  }
}

interface Shape {
  color: string;
}

interface Circle extends Shape {
  radius: number;
}

interface Square extends Shape {
  sideLength: number;
}

type Figure = Circle | Square;

function getArea(shape: Figure): number {
  if ("radius" in shape) {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.sideLength ** 2;
  }
}
getArea({
  color: "red",
  radius: 50,
  sideLength: 20,
});

interface Vehicle {
  speed: number;
}
interface Cat extends Vehicle {
  wheels: 4;
  brand: string;
}
interface Bike extends Vehicle {
  wheels: 2;
  isElectic: boolean;
}

type Transport = Bike & Cat; //!

type SuspenseResponse = {
  status: "success";
  data: string;
};

type ErrorResponse = {
  status: "error";
  message: string;
};

type ApiResponse = SuspenseResponse | ErrorResponse;

function handleResponse(data: ApiResponse): string {
  if (data.status === "success") {
    return data.data;
  } else {
    return data.message;
  }
}

interface User {
  id: number;
}
interface Admin extends User {
  role: "admin";
}
interface Moderator extends User {
  role: "moderator";
}

type Staff = Admin | Moderator;

function checkAccess(staff: Staff): boolean {
  return staff.role === "admin";
}

type SubType = {
  name: string;
  age: number;
};
type SuperType = { 
	name: string;
}
const obj1: SubType = {name: 'name', age: 123}
const obj2: SuperType = obj1;

const obj1_2: SuperType = {name: 'string'};
// const obj2_2: SubType = obj1_2;

//Идем от большего к меньшему!