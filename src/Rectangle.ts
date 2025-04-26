import Shape from "./Shape";

export default class Rectangle implements Shape {
   constructor(private _width: number, private _heigth: number) {

   }
   get width() {
    return this._width
   }

   get height() {
    return this._heigth
   }
    square(): number {
        return this._width + this._heigth
    }
    perimeter(): number {
       return 2 * (this._width + this._heigth)
    }

}

