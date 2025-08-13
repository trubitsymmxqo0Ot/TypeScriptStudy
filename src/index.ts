
type TrafficLight = "red" | "green" | "yellow";

function getNextLight(currentLight: TrafficLight) {
  if (currentLight === "red") return "green";
  if (currentLight === "green") return "yellow";
  return "red";
}

type Operation = "add" | "substract" | "multiply" | "divide";
function calculate(a: number, b: number, operation: Operation) {
  switch (true) {
    case operation === "add":
      return a + b;
    case operation === "substract":
      return a - b;
    case operation === "multiply":
      return a * b;
    case operation === "divide":
      return a / b;
    default:
      throw new Error("unknown operation");
  }
}

interface URLParts {
  protocol: "http" | "https";
  hostname: string;
  path: string;
}

function baseUrl(url: string): URLParts {
  const [someUrl, hostname] = url.split("://");
  const protocol = someUrl === "http" ? "http" : "https";
  const path = hostname.split("/");
  return {
    protocol: protocol,
    hostname: path[0],
    path: "/" + path[1],
  };
}
const obj = baseUrl("https://google.com/search");

type PasswordStrength = "weak" | "strong" | "medium";

function getPasswordStrength(password: string): PasswordStrength {
  switch (true) {
    case password.length < 8:
      return "weak";
    case password.length < 12:
      return "medium";
    case password.length > 12:
      return "strong";
    default:
      throw new Error("Error!");
  }
}

type ApiResponse =
  | {
      status: "succes";
      data: string;
    }
  | {
      status: "error";
      message: string;
    };

function handleResponse(response: ApiResponse): string {
  if (response.status === "succes") {
    return response.data;
  } else if (response.status === "error") {
    return `Error ${response.message}`;
  }
}

type BankAccount =
  | {
      type: "savings";
      balance: number;
      interestRate: number;
    }
  | {
      type: "checking";
      balance: number;
      overdraftLimit: number;
    };

function getAccountInfo(account: BankAccount): string {
  if (account.type === "savings") {
    return `Savings account: ${account.balance}, rate: ${account.interestRate}`;
  } else {
    return `"Checking account: ${account.balance}, overdraft: ${account.overdraftLimit}"`;
  }
}

type User = {
  id: string;
  name: string;
};

type Admin = {
  isAdmin: true;
  premission: string[];
};

type SuperType = Admin & User;
function createSuperType(obj: SuperType): SuperType {
  return obj;
}

createSuperType({
  id: "asdfI3",
  name: "Svetlana",
  isAdmin: true,
  premission: ["some", "text"],
});

type Person = {
  name: string;
  age: number;
};
type ReadOnlyPerson = {
  readonly name: string;
  readonly age: number;
};

type ImmutablePerson = Readonly<Person> & ReadOnlyPerson;
let obj2: ImmutablePerson = {
  age: 12,
  name: "Vika",
};

function getUser(): { name: string } {
  return { name: "Alice" };
}

function getAge(): { age: number } {
  return { age: 25 };
}

function getUserWithAge(): { name: string } & { age: number } {
  return { ...getUser(), ...getAge() };
}
console.log(getUserWithAge());

type FormFields = {
  email: string;
  password: string;
};

type FormValidator = {
  isValid: boolean;
  error?: string;
};

type ValidatedForm = FormFields & FormValidator;
const form: ValidatedForm = {
  email: "masd@gmail.com",
  password: "fjsdfjsdjJe8",
  isValid: true,
};

type Config = {
  apiUrl?: string;
  timeout?: number;
  log: (msg: string) => void;
};
type StrictConfig = Required<Pick<Config, "apiUrl" | "timeout">>;

type A = { a: string };
type B = { b: number };
type C = { c: boolean };
type ABC = A & B & C;
const obj3: ABC = {
	a: 'sad',
	b: 123,
	c: false,
}
