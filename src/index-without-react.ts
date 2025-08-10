//Ловушка с Object, object
/*
      Важно понимать, что если мы укажем Object в типе данных, то по сути мы будем принимать практически любой тип данных на вход, так как это тип данных
      из которых строится многое в js, но если мы укажем именно object, то в таком случае мы будем ожидать только ссылочные объекты и ничего 
      больше: 
*/
type EmptyObject = {};
const obj1: EmptyObject = { age: 123 };
const obj2: EmptyObject = 1;
const obj3: EmptyObject = "";
const obj4: EmptyObject = () => {};
const obj5: EmptyObject = null;
const obj6: EmptyObject = undefined;

const obj7: Object = {};
const obj8: Object = 1;
const obj9: Object = "";
const obj10: Object = () => {};
const obj11: Object = null;
const obj12: Object = undefined;

const obj13: object = {};
const obj14: object = () => {};
const obj15: object = new Date();

// const obj16: object = 1; тут такое ts не примет, т.к. это не ссылочные типы данных
// const obj17: object = ""; тут такое ts не примет, т.к. это не ссылочные типы данных
const obj18: object = null;
const obj19: object = undefined;
