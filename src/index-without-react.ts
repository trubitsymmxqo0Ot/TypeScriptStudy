//Сужение типов - это когда мы сначала объединили типы, но затем. в какой-то момент, нам нужно их отделить друг от друга и использовать как независимые типы

//Первый способ для примитивов:

function fn1(arg: number | string | boolean) {
  if (typeof arg === "number") {
    return arg; //Тут мы с arg можем работать только как с числом
  } else if (typeof arg === "string") {
    return arg; //Тут мы с arg можем работать только как с строкой
  }
  return arg; //Тут просто вернется boolean
}

//Первый способ, проверка на точные значения
function fn2(arg: number | string | null) {
  if (arg === null) {
    console.log("this is null");
    return console.log(arg);
  } else {
    console.log("this is not null");
    return console.log(arg);
  }
}
fn2(null);

/*
      Также, typescript умен, если мы будем сравинвать между собой arg: number | string | null и какой-нибудь arg2: number, то в такой if будет попадать только
      number, так как ts видит, что они равны
*/

//Третий способ, поиск по конкретным полям
type User1 = {
  userName: string;
};
type User2 = {
  firstName: string;
  lastName: string;
};
function fn3(args: User1 | User2) {
  if ("userName" in args) {
    return args; //Тут будет только User1 type
  }
  if ("firstName" in args) {
    return args; //Тут будет уже User2 type
  }
  return args; //тут будет never, т.к. мы с помощью userName и fristName обработали оба поля
}

//Четертвый способ, работает только с классами
class BMW {
  isBmw() {}
}
class Audi {
  isAudi() {}
}
const bwm = new BMW();
const audi = new Audi();

function f4(args: BMW | Audi) {
  if (args instanceof BMW) {
    args.isBmw();
  }
  if (args instanceof Audi) {
    args.isAudi();
  }
}

//Пятый способ, очень часто используемый:
interface BaseCar {
  numberCar: number;
  description: string;
}

interface Bmw extends BaseCar {
  type: "bmw";
  bmwString: string;
}
interface Toyota extends BaseCar {
  type: "toyota";
  toyotaString: string;
}
interface Audi extends BaseCar {
  type: "audi";
  audiString: string;
}
interface Lada extends BaseCar {
  type: "lada";
  ladaString: string;
}
type Car = Bmw | Toyota | Audi | Lada;
function fn5(args: Car) {
  switch (args.type) {
    case "bmw":
      args.bmwString; //bmw + BaseCar
      break;
    case "toyota":
      args.toyotaString; //toyota + BaseCar
      break;
    case "audi": //audi + BaseCar
      args.audiString;
      break;
    default:
      args; //Lada
  }
  args; //Car
}
