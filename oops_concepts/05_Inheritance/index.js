//example
class Animal{
    speak(){
        console.log("Animal bark")
    }
}
let a = new Animal()
a.speak()

class Dog extends Animal{
    speak(){
        console.log("Bark")
    }
}
let d = new Dog()
d.speak()