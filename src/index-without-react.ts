//Mapped types - это типы, которые позволяют создавать какие-то новые типы на основе уже существующих, при этом создавая новые поля
//Вот как мы можем видоизменять поля:
interface User {
  userName: string;
  age: number;
  info: string;
}
type ReadOnly<T> = {
  //Добавить новое поле мы не сможем, будет any
  readonly [Key in keyof T]?: T[Key];
};
type NewUser = ReadOnly<User>; //Таким образом, теперь все поля interface User у нас не обязательны только для чтения
//Также, мы можем сделать и обратное действие, наоборот убрать readnonly или необязательные поля

type DeleteReadOnly<T> = {
  -readonly [Key in keyof T]-?: T[Key];
};
type NewUserWithoutReadOnly = DeleteReadOnly<NewUser>; //Теперь у нас поля без readnonly и они все обязательны

//Также, мы можем создать и объект, и массив с четко заданными типами
type ArrayAnalog<T> = {
  [Key in number]: T;
};
const obj3: ArrayAnalog<string> = ["123123", "1231", "123"];

type ArrayAnalog2<T> = {
  [Key in string]: T;
};
const obj4: ArrayAnalog2<string> = {
  asdasdasd: "asdasd",
  "123123": "123123",
};

/*
  Также, мы можем исключить что-либо с помощью mapped type какое-либо поле. В этом подходе используется утилитарный тип, который позволяет 
  в целом исключить какое-то поле из type или interface, в этом примере просто для наглядности показывается:
*/
interface User {
  userName: string;
  age: number;
  type: string;
}
interface Car {
  carNumber: string;
  car: string;
  type: string;
}
interface RandomObj {
  someValue: string;
  someNumber: number;
  type: string;
}

type WithoutType<T> = {
  [Key in keyof T as Exclude<Key, "type">]: T[Key];
};
type newUser = WithoutType<User>;
type newCar = WithoutType<Car>;
type newRandomObj = WithoutType<RandomObj>;
//Теперь все новые типы без type

//Также, мы можем и перезаписывать какие-то ключи в полях
interface User2 {
  userName: string;
  age: number;
  type: string;
}
interface Car2 {
  carNumber: string;
  car: string;
  type: string;
}
interface RandomObj2 {
  someValue: string;
  someNumber: number;
  type: string;
}
type NewNames<T> = {
  [Key in keyof T as `get${Capitalize<string & Key>}`]: T[Key];
};
type newUser2 = NewNames<User2>;
type newCar2 = NewNames<Car2>;
type newRandomObj2 = NewNames<RandomObj2>;
//Теперь все названия полей начинаются с get

/*
  Что произошло в этом коде после as? 
  Мы заюзали обратные кавычки, куда вставили новое слово - get
  Далее, с помощью Capitalize мы следующую букву после get сделали заглавной.
  После чего мы типизировали новую строку, где указали, что у нас будет string + T (string И T), где 
  string - наше новое слово get, а T - это наша старая строка, которая была в каком-то интерфейсе, условно, это строка userName из интерфейса User2
*/
