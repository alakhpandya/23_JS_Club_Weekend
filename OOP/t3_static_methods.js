class Rectangle{
    constructor (_width, _height, _color){
        this.width = _width;
        this.height = _height;
        this.color = _color;
    }

    // Instance Methods
    getArea(){
        return this.width*this.height;
    }

    describe(){
        console.log(`Hey, I am a rectangle with ${this.width} width & ${this.height} height!`);
    }

    // Static Methods
    static equal(a, b){
        return a.getArea() == b.getArea();
    }

    // static isSquare(width, height){
    //     return width === height;
    // }

    static isSquare(rectangle){
        return rectangle.width === rectangle.height;
    }
}

let myRectangle = new Rectangle(20, 30, "black");
let yourRectangle = new Rectangle(15, 40, "blue");
// console.log(Rectangle.equal(myRectangle, yourRectangle));
// console.log(Rectangle.isSquare(10, 20))

let ourRectangle = new Rectangle(25, 25, "Red");
console.log(Rectangle.isSquare(myRectangle))
console.log(Rectangle.isSquare(ourRectangle))