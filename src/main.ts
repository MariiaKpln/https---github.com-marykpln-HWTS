import "./style.css";
//JS standart types
let a = 10; //infering type
// a = "kuku" static types no allowed updating type
let b: number;
let s: string = "10";
let bl: boolean;
bl = !!s;
let n: null = null;
let obj: { a: string } = { a: "kuku" };
if (obj) {
  //always true
}
// obj.a = 10 not works
obj.a = "10";
const c = "a";
obj[c];
//alias
type Person = { id: number; name: string; city: string; age: number };
let person: Person = {
  id: 123,
  age: 25,
  city: "LOd",
  name: "Lox",
};
console.log(person.age);

function createPerson(
  id: number,
  name: string,
  city: string,
  age: number
): Person {
  return { id, name, city, age };
}

const person1: Person = createPerson(123, "Lox", "bobrovsk", 30);
person1.age = 40;
function displayPersonAge(person: Person): void {
  console.log(person.age);
}
function displayPersonName(person: Person): void {
  console.log(person.name);
}
function displayKuku(num: number): number {
  console.log(num);
  return 5;
}
let displayPersonField: (person: Person) => void;
displayPersonField = displayPersonAge;
displayPersonField(person1);
// displayPersonField = displayKuku; //zaluppppa
displayPersonField(person);
