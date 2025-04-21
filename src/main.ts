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
