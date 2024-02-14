class Square{
    constructor (width){
        this.width = width;
        this.height = width;
    }

    // getters are actually methods but they look like properties
    get area(){
        return this.width*this.width;
    }

    set area(newArea){
        this.width = Math.sqrt(newArea);
        this.height = this.width;
    }
}

let mySquare = new Square(25);
console.log(mySquare.area)
mySquare.area = 64;
console.log(mySquare.area);