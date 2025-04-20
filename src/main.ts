//union
function kgToGr(kg: number | string) {
  //Narrowing type
  if (typeof kg === "string") {
    kg = parseFloat(kg);
  }
  return kg * 1000;
}

let a: 50 | 75 | 100 | "abc"; //a can have only 50, 75 or 100 or "abc"

//intersection types
type A = { a: string };
type B = { b: number };
type C = A & B; // C has both properties a and b
let obj: C = { a: "hello", b: 42 };
type D = string & number; // D is never, as str and num are incopatible tipes

type Product = {
  id: number;
  name: string;
  price: number;
};

let productKey: keyof Product; //id name or price
productKey = "id" //valid 
// productKey = "bubu" //unvalid