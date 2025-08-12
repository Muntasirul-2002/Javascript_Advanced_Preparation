## Definition
Class are the blue print to create an object with properties & methods

## example 
class person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    greet(){
        console.log(`hello, i'm ${this.name} & my age is, ${this.age}`)
    }

}
const p1 = new person("Muntasirul",23)
p1.greet()
```