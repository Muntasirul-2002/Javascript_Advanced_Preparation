## Definition
Scope determine where variables,functions, and object are accessible in you code
IN js scopes are basically 4 types
> Global Scope
> Function Scope
> Block Scope
> Lexical Scope

## Global Scope
1. Variable declared outside of a function or block (globally declare)
2. Accessible anywhere in the program
3. It can cause naming conflicts

### Example
```
var globalVar = "Muntasirul"
function test(){
    console.log(globalVar)
}
function test2(){
    console.log(globalVar)
}
```

## Function Scope
1. Variable declared inside a function using `var` are accessible only inside tha function

### Example
```
function test(){
    var newVar = "Muntasirul"
    console.log(newVar) // Accessible & works
}
example()
console.log(newVar) //return undefined
```


## Block Scope
1. Variable declared with `let` & `const` are scoped to the `{}` they are in.

### example
```
{
    let blockLet = "block scope"
    const blockConst = "Block Scope"
    console.log(blockLet) // works
    console.log(blockConst) //works
}
console.log(blockLet); // return error

```


## Lexical Scope
1. A inner function has access to the variables of an outer function, even after the outer function has finished executing

### example
```
function outer(){
    let name = "muntasirul"
    function inner(){
        console.log(name)
    }
    inner()
}
outer()
```