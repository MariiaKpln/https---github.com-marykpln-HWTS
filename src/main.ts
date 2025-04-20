type KeyValuePair<K, V> = {
  key: K;
  value: V;
};

let keyValuePairs = { key: 1, value: "value" };
let keyValuePairs1: KeyValuePair<string, number> = { key: "abc", value: 100 };

function findByAgeOrName<T extends { age: number; name: string }>(
  ar: T[],
  field: "age" | "name",
  value: unknown
): T[] {
  return ar.filter((item: any) => item[field] === value);
}

const data = [
  { name: "Jane", age: 20, gender: "female" },
  { name: "John", age: 25, gender: "male" },
  { name: "Doe", age: 30, gender: "male" },
];

const result = findByAgeOrName(data, "age", 20);
