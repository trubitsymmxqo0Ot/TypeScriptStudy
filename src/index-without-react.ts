//Utility types
/*
  Утилитарные типы - это упрощение для кода, их существует очень много и ознакомиться с ними можно в документации ts, сейчас будет перечисление лишь
  некоторых из них 

  Awaited<Type> - утилитарный тип, который рекурсивно разворачивает промисы достает их внутренности. Грубо говоря, у нас есть
  обычный await для промисов в js, это тоже самое, но для типов

  Partial - Делает для типа все поля опциональными (в прошлом коммите уже писали аналог)

  Required - делает все поля обязательными 

  Readonly - ну readonly и в Африке readonly, делает все поля только для чтения 

  Pick - позволяет точечно забрать какие-то поля из типа или интерфейса 
*/

interface User {
  age: number;
  userName: string;
  text: string;
  info: string;
}

type NewType = Pick<User, "userName" | "age" | "text">; //Теперь мы имеем поля userName, age и text внутри NewType

//Omit - противополность Pick, он копирует типизацию из типа или интерфейса, но исключает указанные поля

type NewOmitType = Omit<User, "age" | "userName" | "text">; //Теперь мы имеем только поле info

//Но если нам нужно вытащить какое-то 1 поле, то мы просто можем написать так:

type EaseType = User["age"];

//Exclude - позволяет убрать какие-то типы, но из утилитарных типов данных, а не из типов или интерфейса
type UtilTypes = "red" | "green" | "yellow" | "blue" | "white" | "black";
type NewUtilType = Exclude<UtilTypes, "red" | "green" | "yellow">; //Получим "white" | "black" | "blue"

//Extract - позволяет достать какие-то определенные типы из утилизартных типов данных
type NewUtilType2 = Extract<UtilTypes, "white" | "black">; //Получим только "white" | "black"

//ReturnType - позволяет достать тип из функции
function fn(arg: number): string {
  return "";
}
type ReturnTypeFn = ReturnType<typeof fn>;
//Часто такой кейс используется, когда нам нужно что-то достать из библиотеки, условно ReturnType<typeof React.render>

//Parameters - получаем тип аргументов функции
function fn2(arg: number, props: string): string {
  return "";
}
type ReturnParametersFn = Parameters<typeof fn2>; //Получим [arg: number, props: string]

/*
  Uppercase - позволяет сделать все буквы большими
  Lowercase - позволяет сделать все буквы маленькими
  Capitalize - позволяет сделать первую букву начала слова большой
  Uncapitalize - позволяет сделать первую букву начала слова маленькой

  Эти утилитарные типы служат для того, чтобы как-то видоизменять ключи типов
*/

//Record - нужна для работы с объектами. Позволяет изменить литеральный тип таким образом, чтобы значения этого типа стали ключами для объекта
type Color = "red" | "green" | "white";
const object: Record<Color, string[]> = {
  red: ["123"],
  green: ["123"],
  white: ["sdfs"],
};
//Первый аргумент - литеральный тип, а второй аргумент - это тип данных, которые мы помещаем в виде значения для ключей

//Patial - уже рассматривали. делает поля опциональными, но мы можем миксовать утилитарные типы:
const object2: Partial<Record<Color, string[]>> = {
  red: ["123123"],
  green: ["sadasdas"],
};
//Таким образом, мы литеральный тип в ключи объекта, задали тип данных, которые хранят эти ключи и плюс к этому сделали эти пары опциональными
