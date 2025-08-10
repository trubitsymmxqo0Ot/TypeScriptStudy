/*
      Generics - это как аргумент для типа. Представим, что у нас есть какая-то коробка, но мы не знаем её содержимое и не знаем, что туда будет помещено.
      Вместо того, чтобы указывать какой-нибудь unknown или any, нужно работать с дженериками.

      К примеру, мы делаем запрос на бэкенд и в целом, он всегда один и тот же, мы имеем какой-нибудь статус запроса, какие-нибудь метаданные и само тело
      запроса, куда мы получаем какие-то данные, но таких запросов у нас несколько, тела разные, хотя остальные данные статичны. Как тогда выйти из ситуации?
      Писать каждый раз новый тип только из-за того, что там отличается тело - не очень валидно, писать каждый раз новое тело, а затем подставлять его
      в общий тип со статичными данными тоже не выход, тут мы можем юзануть дженерики.
*/

type User = {
  userName: string;
  email: string;
  numberPhone: string;
  age: number;
};

type Article = {
  user: User;
  title: string;
  text: string;
};

interface MetaData {
  image: string;
}
interface ApiResponse<T> {
  status: "success" | "error" | "pending";
  meta?: MetaData;
  data: T;
}

const response1: ApiResponse<User> = {
  status: "success",
  data: {
    userName: "user",
    email: "user@gmail.com",
    numberPhone: "+9384757274",
    age: 18,
  },
};

/*
      Проще говоря, дженерики являются динамичными данными, которые мы можем прокинуть куда-либо и затем на основе типа или интерфейса использовать,
      сами дженерики можно перечислять через запятую, можно сразу писать какие-то инлайн типы {timestap: string}, таким образом, мы делаем
      наш тип очень универсальным, так как может передавать динамичные данные.
*/

type ObjFun = {
  name: string;
  age: number;
};

function fn3<T>(arg: T): T {
  return arg;
}
const data = fn3<ObjFun>({ name: "userName", age: 12 });
/*
      Важная оговорка, что если мы используем JSX, то перед аргументами функции тут(agrs), если мы пишем дженерик, 
      то React может воспринимать это как компонент, в таком случае нужно писать просто запятую (<T,>), у меня почему-то prettier удаляет эту запятую

      Также, мы можем заранее ограничить типы, которые мы будем использовать в дженериках:
*/

function genericFun1<T extends { id: number; createdAt: string }>(arg: T) {
  return arg.id;
}

/*
      Также, очень важно для понимания, что первый дженерик genericFun1<Этот>() у нас существует для типизации второго дженерика, который передается в
      аргументы genericFun<T>(arg: <Этот>), а последний дженерик genericFun<T>(arg: T): Этот у нас существует для того, чтобы определить тип 
      данных, которые возращаются из функции.

      genericFun1<Определяем тип для аргументов>(arg: Уже опредленные типы для аргументов): Возращаемый из функции тип 
*/

//Дженерики также можно использовать и внутри классов:

class Order<T> {
  private data: T;
  constructor(arg: T) {
    this.data = arg;
  }
}

//Также, их можно использовать и в React компонентах

interface SelectOption<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

export const SomeFunction = <T extends string>(props: SelectProps<T>) => {
  //...
};

//А затем передаем в родительском компоненте нужный нам тип, очень важно, сейчас будет именно родитель, где используется данный компонент!:
type ArticleType = {
  someInfo: string;
};
let options = "some options";
let select = "some select";
let some = "some some";
let onChange = "some onChange";

// <SomeFunction<ArticleType>
//   options={options}
//   select={select}
//   some={some}
//   onChange={onChangeSpot}
// />;

//Ts такой синтаксис не воспринимает, но в jsx это будет считаться валидным

//В дженериках также мы можем указывать и какой-то дефолт, но можем также и поменять запись на лету:

type User2 = {
  userName: string;
};

interface ApiResponse2<T = User2> {
  status?: "error" | "success";
  data: T;
}

const response2: ApiResponse2<string> = {
  status: "error",
  data: "asdasd",
};

const response3: ApiResponse2 = {
  status: "success",
  data: {
    userName: "123123",
  },
};

//Условные типы - это когда мы можем прям условие в дженерик закинуть:

type RandomName<T> = T extends string ? { value: string } : number;
const randomVariable: RandomName<string> = {
  value: "123123",
};
const randomVariable2: RandomName<boolean> = 123;

//Более наглядно:

type UserType = {
  age: number;
};
type SomeType<T> = T extends UserType
  ? { userName: string; age: number; userPhone: string }
  : string[];

const firstSome: SomeType<User> = {
  userName: "user",
  userPhone: "13124345346534",
  age: 2,
};

const secondSome: SomeType<unknown> = ["string", "hello", "why"];
