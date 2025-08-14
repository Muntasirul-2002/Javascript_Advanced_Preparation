## Definition
A higher order function is a function that takes another function as an argument or return a function as its result

### Example
```
function greet(name){
    return `Hello ${name}`
}
function userInput(callback){
    const name = "Muntasirul"
    console.log(callback(name))
}
userInput(greet)

```
### How JS uses these
1. Array methods like `map`,`filter`,`reduce`
2. `setTimeout()`
3. Promise then() / catch() / finally()
// above all is a higher order function because they take function as an argument
### example of above one
```
[1,2,3].map(num=>num*2);
//map take a function and applies it to each element
```

### How They Work in Background Execution
1. Higher order function stores the reference to the callback
2. when it needs to run it, it invoke the function with given parameter
3. Execution context for the callback is created
4. The returned value is used in the higher order function's logic

### Real life project where HOFs use

```
//event handling
document.getElementById("btn").addEventListener("click",()=>{
    console.log("Button Clicked")
})
```