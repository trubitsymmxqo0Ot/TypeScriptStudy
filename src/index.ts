let a: any;
let b: unknown;
let c: string;

a = "hello";
b = 42;
c = a;
// c = b;

function throwError(msg: string): never {
  throw new Error(msg);
}

const result: string = throwError("Все сломалось1");
console.log(result);

function noReturn(): void {
  console.log("Я ничего не возращаю!");
}
// const x: undefined = noReturn();

type A = never;
type B = string;

type C = A | B;
type D = A & B;

type U = unknown | string;
type I = unknown & { x: number };


