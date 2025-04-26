import Rectangle from "./Rectangle";
import Shape from "./Shape";
import Square from "./Square";
import Container from "./Container";

const shape: Shape = new Rectangle(3, 4);
console.log(shape.width, shape.square(), shape.perimeter());

const shape2: Shape = new Square(4);
console.log(shape2.height, shape2.perimeter(), shape2.square());
const shape3: Shape = new Container([shape, shape2]);

shape3 instanceof Container && console.log(shape3.size());
shape2 instanceof Container && console.log(shape2.size());
shape instanceof Container && console.log(shape.size());
