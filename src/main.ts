// HW30

const data = [
  { name: "Jane", age: 20, gender: "female" },
  { name: "John", age: 25, gender: "male" },
  { name: "Doe", age: 30, gender: "male" },
];

function find<T extends { [key: string]: unknown }>(
  array: T[],
  value: T[keyof T]
): T[] {
  return array.filter((item) =>
    Object.values(item).some((val) => val === value)
  );
}

console.log(find(data, "male"));

type MyObj<T> = {
  [P in keyof T]?: T[P];
};

function update<T>(original: T, updates: MyObj<T>): T {
  const objNew = { ...original, ...updates };
  for (let key in objNew) {
    original[key] = objNew[key];
  }
}

console.log(
  update({ id: 123, age: 25, city: "Lod" }, { age: 26, city: "Rehovot" })
);
