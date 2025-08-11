//asserts - это тип, с помощью которого мы четко можем сказать ts, что он, например точно не null || не undefined и там что-то есть
function assertNotNull(value: unknown): asserts value {
  if (value === null || value === undefined) {
    throw new Error("Value is null or undefined");
  }
}

assertNotNull(null);
/*
  По сути эта функция выступает как некий валидатор, мы прокидываем какие-то данные и, например, пользователю, может отдать какой-то ответ, 
  что что-то заполненно неправильно или какое-то действие неверно. Например, мы можем как-то логировать через конструкцию try catch
*/
/*
  Тут как бы далее ts понимает, что ниже по коду у нас точно не может быть undefined или null и ругаться на undefined или null не должен, но это
  не точно, примеров использования такого вида записи нет. Такой подход называется asserts condition (не изменяет тип).

  Есть ещё также запись вида asserts value is Type (изменяет тип), такой тип данных проверяет какой-то сценарий, когда у нас тот или иной конкретный тип 
  не соответствует тем данным, которые мы получили:
*/
interface User {
  name: string;
  age: number;
}

function assertIsUser(data: any): asserts data is User {
  if (typeof data !== "object" || data === null) {
    throw new Error("Object expected");
  }
  if (typeof data.name !== "string") {
    throw new Error("Property 'name' must be a string");
  }
  if (typeof data.age !== "number") {
    throw new Error("Property 'age' must be a number");
  }
}

const object = {
  name: "some name",
};

assertIsUser(object);

/*
  Вообще, ошибки не будет, в IDE, несмотря на то, что мы вроде бы не указали age, но все дело в том, что у нас тип name совпадает с тем типом,
  который мы обработали в if, если запустить такой код, то он все равно упадет с ошибкой. В идеале такой код также лучше обработать конструкцией 
  try catch, где в try мы будем запихивать вызов функции assertIsUser, а в catch будем обрабатывать ошибки, если они вдруг возникли
*/
