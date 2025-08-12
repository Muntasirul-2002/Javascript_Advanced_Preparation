//example

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hello my name is ${this.name} & my age ${this.age}`)
    }
}

let p1 = new Person("Muntasirul", 23)
p1.greet()