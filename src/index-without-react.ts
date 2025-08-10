/*
      ts явялется надмножеством над js
      
      union тип - объединение, это когда мы пишем, условно, вот так: let color: 'red' | 'green', либо так: 
      const obj: number | string;
      obj = 2;
      obj = 'string';
      Поговорим подробнее:

      Также, важная теория, типы следует рассматривать как множества. Например, множества строк - 'string1', 'string2' ..., множества чисел - 1,2,3,4...,
      множества булевых значение - true/false, причем булевые значения являются не бесконечным множеством, так как есть всего 2 состояния, либо true, либо
      false
*/

type MainInfo = {
  firstName: string;
  lastName: string;
};
type AdditionalInfo = {
  age: number;
};

type FullInfo = MainInfo | AdditionalInfo;

//В итоге, тут может быть 3 ситуации, в которой мы что-то можем передать в объекты:
const info0: FullInfo = { firstName: "fisrt", lastName: "last", age: 123 }; //Когда мы включаем все множества из двух объединенных типов
const info1: FullInfo = { firstName: "first", lastName: "last" }; //Когда мы включаем множество 1 типа (MainInfo)
const info2: FullInfo = { age: 1231 }; //Когда мы включаем множество 1 типо (AdditionalInfo)

/*
      Пересечение (intersection) - это пересечение обоих типов, но если мы напишем, условно number & string, то это будет недостижимым значением и такой
      тип будет never, т.к. у нас не может быть такого кейса, когда какая-то переменная одновременно может быть и числом, и строкой:
*/

type MainInfo2 = {
  firstName: string;
  lastName: string;
};
type AdditionalInfo2 = {
  age: number;
};
type FullInfo2 = MainInfo2 & AdditionalInfo2;
//В итоге будет только 1 ситуация, это объединение двух типов в 1
const info3: FullInfo2 = { firstName: "first", lastName: "last", age: 123 };

//Проще говоря, union типы стоит понимать как логическое или (или то, или это, или все сразу), а intersection тип стоит понимать как и (одно И второе)
