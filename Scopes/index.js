// example : Global scope
var name = "muntasirul"
function globalScope(){
    console.log(name);
}
function globalScope2(){
    console.log(name)
}
globalScope()
globalScope2()


//example : Function scope
function functionScope(){
var newFn = "muntasirul"
console.log(newFn) // works
}
functionScope()
console.log(newFn) // return referenceError


// example : Block scope
{
    let myName = "muntasirul"
    const myName2 = "muntasirul islam"
    console.log(myName)
    console.log(myName2)
}
console.log(myName) //ReferenceError
console.log(myName2) //ReferenceError

//example : Lexical scope
function outerFn(){
    let myName = "muntasirul"
    function innerFn(){
        console.log(myName)
    }
    innerFn()
}
outerFn()