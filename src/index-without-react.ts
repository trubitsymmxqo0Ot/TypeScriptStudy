/*
      Операторы typeof и keyof
      Вообще существует 2 оператора typeof: первый - работает в real time и это стандартный оператор js, он позволяет узнать тип данных в моменте и что-то
      с этой инофрмацией сделать, второй же typeof работает почти также, но с некоторыми исключениями.

      Мы также получаем тип данных чего-либо засчет typeof в TS, то мы можем вложить эту информацию в тип и затем использовать собственно сам тип для
      типизации:
*/

const obj = {
  age: 23,
  name: "some name",
};
type Person = typeof obj;
const obj2: Person = {
  age: 1,
  name: "My name is...",
};

//Также, мы можем использовать и на обычные типы данных этот оператор
const color = "red"; //Очень важно сделать его неизменяемым либо через cont color ..., либо через as const (сделать его readonly)
type Color = typeof color;
const green: Color = "red";

//Ещё мы можем доставать типизацию функции
function getTypeFunction(age: number): string {
  return "Sdasd";
}
type TypeFunction = typeof getTypeFunction;
const someFun = (many: number): TypeFunction => {
  return (many) => "masadasdasdny";
};

//Можно достать значение тип из функции, который возращается в return
function getTypeFunctionReturn(user: string): string {
  return user;
}
type TypeFunctionReturn = ReturnType<typeof getTypeFunctionReturn>;
const someString: TypeFunctionReturn = "someasdasd";

//Можно даже достать аргументы функции в качестве типов и использовать их
function getTypeFunctionArgs(user: string, age: number, text: string) {
  return {
    user,
    age,
    text,
  };
}
type TypeFunctionArgs = Parameters<typeof getTypeFunctionArgs>;
const objType: TypeFunctionArgs = ["some user", 123, "text"];
//Важно, что он создает кортеж параметров функции, массив, соответственно, с массивом нам и нужно работать

//keyof - позволяет достать ключи из объекта

const obj4 = {
  name: "123123",
  text: "fdgdsghfg",
  info: "onog09fdg",
};
type PersonKey = keyof typeof obj4; //Мы достаем ключи и преобразуем их в типы данных

//Тут мы из дженерика T достали ключи с помощью дженерика K
function getByKey<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
getByKey(obj4, "info");
