//Optional и no-null assertion операторы

/*
  Optional оператор позволяет просто безопасно пройтись по объекту, если вдруг что-то будет null или undefined, то мы получим undefined, но не получим
  ошибку, это просто как бы проверка на null или undefined.

  Цепочка может быть вложенна без ограничений name?.age?.text?.someVariable?.section

  Мы также можем обрабатывать через эту цепоку и массивы, и функции
*/

interface Person {
  name: string;
  address?: {
    city: string;
  };
  someFun?: () => string;
  array?: string[];
}

function someAnswer(user: Person) {
  console.log(user.address?.city); //Объект
  console.log(user.someFun?.()); //Функция
  console.log(user.array?.[0]); //Массив
}
someAnswer({ name: "12312" });

/*
  no-null assertion лучше не использовать. Если мы используем optional оператор как безопасную проверку на null или undefined, то no-null assertion выступает
  в роли затычки, чтобы просто заткнуть TS и он не ругался на ошибку, которая может возникнуть при обращении к полю, которое может быть
  потенциально undefined или null. 

  Такое, естественно, в проде лучше не использовать
*/

interface Person2 {
  name: string;
  address?: {
    city: string;
  };
  someFn?: () => number;
  array?: number[];
}
function someAnswer2(user: Person) {
  console.log(user.address!.city);
}
someAnswer2({ name: "asdfasdf" });

/*
  В целом, такую запись следует рассматривать как тот же ts-ignore, его лучше не использовать именно в продакш коде, но и такая запись может быть
  валидна в некоторых случаях.

  Например, если мы пишем какой-то конфиг на webpack и точно знаем, что мы типизировали то или иное и нам нужно сделать так, чтобы ts не ругался,
  тогда мы спокойно может использовать оператор.

  Либо, опять же, в мы можем использовать этот оператор в тестах, если это будет нужно по кейсу, но в проде такое мы не используем

*/
