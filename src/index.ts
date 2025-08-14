type ResponseApi<T> = {
  status: "success" | "error" | "loading";
  data?: T;
  message?: string;
};

function handleResponse(response: ResponseApi<{ user: string }>) {
  if (response.status === "success") {
    return {
      status: response.status,
      data: response.data,
    };
  } else if (response.status === "error") {
    return {
      status: response.status,
      data: response.message,
    };
  } else {
    return {
      status: response.status,
    };
  }
}

console.log(handleResponse({ status: "success", data: { user: "Alice" } }));
console.log(handleResponse({ status: "error", message: "error!" }));

type Config = {
  mode: "light" | "dark" | "custom";
  colors?: {
    primary: string;
    secondary: string;
  };
};

function applyConfig(config: Config) {
  if (config.mode === "dark") {
    return "dark";
  } else if (config.mode === "light") {
    return "light";
  } else {
    return {
      mode: config.mode,
      primary: config.colors,
    };
  }
}
console.log(
  applyConfig({
    mode: "custom",
    colors: { primary: "#fff", secondary: "#000" },
  })
);
console.log(applyConfig({ mode: "dark" }));
console.log(applyConfig({ mode: "light" }));

type User =
  | {
      type: "quest";
      sessionId: string;
    }
  | {
      type: "user";
      id: string;
      name: string;
      role: "admin" | "customer";
    };

function getUser(user: User) {
  if (user.type === "quest") {
    return `Гость: (сессия: ${user.sessionId}`;
  } else {
    return `Имя: ${user.name}, роль: ${user.role}`;
  }
}
console.log(
  getUser({ type: "user", id: "123123", name: "Alice", role: "admin" })
);
console.log(
  getUser({ type: "user", id: "394238", name: "Sergey", role: "customer" })
);
console.log(getUser({ type: "quest", sessionId: "fadf4213" }));

type FormField = {
  value: string;
  isValid: boolean;
  error?: string;
};

function getFieldStatus(field: FormField) {
  if (field.isValid === true) {
    return field.value;
  } else {
    return `${field.value} | ${field.error}`;
  }
}
console.log(getFieldStatus({ value: "some value for true", isValid: true }));
console.log(
  getFieldStatus({
    value: "some value for false",
    isValid: false,
    error: "Some error!",
  })
);

type Draft = {
  state: "draft";
  content: string;
};
type Published = {
  state: "published";
  content: string;
  publishedDate: Date;
};
type Archived = {
  state: "archiver";
  content: string;
  archiveReason: string;
};

type Entity = Draft | Published | Archived;

function logEntity(entity: Entity) {
  if (entity.state === "draft") {
    return `Чернковик: ${entity.content}`;
  } else if (entity.state === "archiver") {
    return `В архиве (${entity.archiveReason}: ${entity.content})`;
  } else {
    return `Опубликовано ${entity.publishedDate}: ${entity.content}`;
  }
}

console.log(logEntity({ state: "draft", content: "Some state" }));
console.log(
  logEntity({
    state: "published",
    content: "some published state",
    publishedDate: new Date(),
  })
);
console.log(
  logEntity({
    state: "archiver",
    content: "some archiver state",
    archiveReason: "yep",
  })
);

type Event2 =
  | { type: "click"; x: number; y: number }
  | { type: "keypress"; key: string }
  | { type: "timer"; duration: number };

function handleEvent(args: Event2){
	if(args.type === 'click'){
		return `Type: ${args.type}, x: ${args.x}, y: ${args.y}`
	} else if(args.type === 'keypress'){
		return `Type: ${args.type}, key: ${args.key}`
	} else {
		return `Type: ${args.type}, duration: ${args.duration}`;
	}
}