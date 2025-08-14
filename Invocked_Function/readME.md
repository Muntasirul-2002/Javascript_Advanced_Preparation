## Definition
An invoked function is a function that executes immediately after it's defined, without needing to be called the function
> Use to Emulate block scope with var
### Syntax
```
(function(){
    console.log("Muntasirul")
})()

// with arrow function
(()=>{
    console.log("Muntasirul")
})
```

### Example
```
(function(name){
    console.log(`Hello ${name}`)

})("Muntasirul")

```
> JS engine use the same scoping rules to isolate variables in closures inside an IIFE(Immediately Invoked Function Expression)