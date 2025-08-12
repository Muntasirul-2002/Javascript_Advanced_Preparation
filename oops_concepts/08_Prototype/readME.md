## Definition
In js, prototype is a mechanism by which objects inherit properties and method from another object

## example/syntax
```
function person(name){
    this.name name;
}
person.prototype.greet = function(){
    console.log(`hello, i'm ${this.name}`)
}
const p1 = new person("Muntasirul")
p1.greet()
```