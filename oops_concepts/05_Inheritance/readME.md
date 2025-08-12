## Definition
A mechanism where one class can acquire properties and methods of another class

## example
```
class Animal{
speak(){
    console.log("Animal sound)
}
}

class Dog extends Animal{
    speak(){
        console.log("Bark)
    }
}
const d = new Dog();
d.speak()
```