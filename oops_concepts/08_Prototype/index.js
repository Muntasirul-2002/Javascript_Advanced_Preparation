//example

function Person(name){
    this.name = name
}
Person.prototype.greet = function(){
    console.log(`Hello my name is ${this.name}`)
}
const p1 = new Person("Muntasirul")
p1.greet()