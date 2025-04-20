// type mapping
type Person = {
  name: string;
  age: number;
};

type ReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type Optional<T> = {
  [K in keyof T]?: T[K];
};
const person: Person = {
  name: "Jojo",
  age: 30,
};

const readOnlyPerson: ReadOnly<Person> = {
  name: "Jojo",
  age: 30,
};
