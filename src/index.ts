type Direction = "up" | "down" | "left" | "right";
function move(direction: Direction) {
  const moved = "Движение: ";
  switch (direction) {
    case "down":
      return moved + "down";
    case "left":
      return moved + "left";
    case "right":
      return moved + "right";
    case "up":
      return moved + "up";
  }
}
console.log(move("down"));

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
type ApiEndpoint = {
  api: string;
  url: string;
  subLayout: number;
};

function fetchData(method: HTTPMethod, endpoint: ApiEndpoint) {
    return `Вызван метод: ${method}, запрос на ${endpoint.api}${endpoint.url}${endpoint.subLayout}`;
}

console.log(fetchData("GET", { api: "api", url: "user", subLayout: 123 }));
console.log(fetchData("POST", { api: "api", url: "user", subLayout: 123 }));
console.log(fetchData("PUT", { api: "api", url: "shop", subLayout: 1 }));
console.log(fetchData("DELETE", { api: "api", url: "empty", subLayout: 0 }));

type Status = "adle" | "loading" | "success" | "error";
type Result =
  | { status: "adle" }
  | { status: "loading" }
  | { status: "success"; data: string }
  | { status: "error"; error: string };

function handleResult(result: Result) {
  if (result.status === "success") {
    return `Type: ${result.status}, data: ${result.data}`;
  } else if (result.status === "error") {
    return `Type: ${result.status}, error: ${result.error}`;
  } else {
    return result.status;
  }
}

console.log(handleResult({ status: "adle" }));
console.log(handleResult({ status: "error", error: "some error" }));
console.log(handleResult({ status: "loading" }));
console.log(handleResult({ status: "success", data: "some data" }));

type Color = "red" | "blue" | "green";
type Size = "small" | "medium" | "large";
type ClassName = `btn-${Color}-${Size}`;

function applyClass(className: ClassName) {
	return `Применен класс: ${className}`
}
console.log(applyClass('btn-green-medium'));
console.log(applyClass('btn-blue-large'));

type EventType = "click" | "hover" | "scroll";
type EventHandlers = Record<`on${Capitalize<EventType>}`, () => void>
function setupHandlers(handlers: EventHandlers) {
	return handlers.onClick();
} 
console.log(setupHandlers({ 
	onClick: () => {},
	onHover: () => {},
	onScroll: () => {},
}))

type Routes = `/admin/${string}`;

function navigate(route: Routes){
	return `Переход на ${route}`;
}
navigate(`/admin/dashboard`);