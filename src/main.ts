import "./style.css";

const Person = { id: number; name: string; city: string; age: number };
//any - not recommended
let a: any;
a = 10;
a = "kukhkht";
a.a = 10;
a = {};
//unknown - safed any
// const person: Person = (id: 1222, name: "Pizduk", age: 30, city: "Lox")
function display(obj: unknown) {
  typeof obj === "number" && obj++;
  console.log(obj)
  let sub: string;
 typeof obj === "string" &&  (sub  = obj.substring(1, 2));
}
//index signature
let obj: {[key: string]: string} = {};
obj[1] = "10";
obj[2.6] = "w"
//arrays
let ar: number[] = [11, 123, 10]
// ar.push(...[1, 2])




