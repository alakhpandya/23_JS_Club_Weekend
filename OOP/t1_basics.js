class Rectangle{
    // constructor methods are going to be called/exectued only once in the lifetime of an object/instance and that is when we create it.
    /*
    constructor (){
        console.log("Hey, I am a rectangle!");
        this.intro = "Hey, I am a rectangle!";
        this.width = 10;
        this.height = 5;
        this.color = 'brown';
    }
    */

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
}

// let myRectangle = new Rectangle();
// console.log(myRectangle.intro);
// console.log(myRectangle);

let yourRectangle = new Rectangle(20, 10, 'Red');
console.log(yourRectangle);
yourRectangle.describe();
console.log(yourRectangle.getArea());