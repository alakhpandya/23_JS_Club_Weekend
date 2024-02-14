// Polymorphism: creating variables/methods in child classes which will overrun/extend the same variable/method of parent class

class Animal{
    constructor(name){
        this.name = name;
    }

    makeSound(){
        // console.log("A typical animal sound.");
        console.log("I'd like to say:");
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }
    
    makeSound(){
        super.makeSound();
        console.log("Woof! Woof!");
    }
}

let a1 = new Animal("Example");
// a1.makeSound();
let d1 = new Dog("Frisky");
d1.makeSound();