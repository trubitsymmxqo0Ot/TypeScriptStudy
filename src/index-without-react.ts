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

//Надтип (super type) и подтип (subtype)

type SuperType = {
  name: string;
};
type SubType = {
  name: string;
  age: number;
};

const subType: SubType = { name: "name", age: 123 };
const superType: SuperType = subType;

/*
      Тут SubType (подтип) имеет какие-то поля, которые есть у SuperType (супер тип), но при этом добавляет какие-то свои поля, то есть, он как бы расширяется
      от супер типа, пускай явно это тут и не указано.

      То есть, грубо говоря, несмотря на то, что мы сначала в subType занесли тип, у которого в типизации name и age, мы все равно может передать его 
      в тип superType, у которого есть только поле name, вся причина в том, что они похожи, SubType (подтип) просто расширяет SuperType (надтип), грубо
      говоря, от большего к меньшему идти можно, мы присвоили какой-то тип нашему объекту, он взял только нужное, а лишнее как бы отрбсоил, но не наоборот:
*/

type SuperType2 = {
  name: string;
};
type SubType2 = {
  name: string;
  age: number;
};

const subType2: SuperType2 = { name: "name" };
// const superType2: SubType2 = subType2; Тут уже будет ошибка

/*
      Если подводить итог: 
      подтип включает все свойства и/или методы надтипа, также может добавлять свои
      надпит может содержать меньше свойств и/или методов, чем подтип
      объект подтипа может быть присвоем переменной надтипа, обратное действие не всегда возможно без приведения типов
*/
