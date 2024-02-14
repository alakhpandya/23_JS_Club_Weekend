// Parent Class
class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    intro(){
        console.log(`Hey! I am ${this.name} and I am ${this.age} years old!`);
    }
}

// Child Class
class Programmer extends Human{
    constructor(name, age, language){
        super(name, age);
        this.language = language;
    }

    code(){
        console.log(`${this.name} is coding on ${this.language}...`);
    }
}

let h1 = new Human("Nishith", 31);
h1.intro();
let p1 = new Programmer("Anuj", 29, "JavaScript");
p1.intro();
// h1.code();
p1.code()
const staff = [
    new Programmer("Shreya", 25, "C++"),
    new Programmer("Samir", 29, "NodeJS"),
    new Programmer("Krishna", 30, "React"),
    new Programmer("Tejas", 31, "Java")
]

function ITCompany(arr){
    // for(let i = 0; i < arr.length; i++){
    for(programmer of staff){
        programmer.code();
    }
}

ITCompany(staff);