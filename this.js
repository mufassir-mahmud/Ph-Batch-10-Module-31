class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    work(){
        console.log(`${this.name} is working`);
    }
}

const person1 = new person('Mufassir', 23);
console.log(person1);
person1.work()

const person2 = new person('Fahim', 18);;
person2.work();
console.log(person2);