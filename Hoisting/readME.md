## Definition
Hoisting in js is a default behavior of moving declaration(variable or functions) to the top of their scope before code execution.
> Only the declarations are hoisted not the initialization

### Syntax & Example 
```
console.log(a); // undefined because of hoisting
var a = 14;

sayHello() //function hoisted
function sayHello(){
    console.log("Hello)
}
```

### How It Works in the Background
1. All variables and function declarations are registered in the memory
2. `function` declarations get the entire function definition hoisted
3. `var` variables are returned `undefined`
4. `let` and `const` are hoisted but kept in Temporal dead zone(TDZ).

### In Projects Where It’s Needed to Use
1. Function declaration at the bottom of the file but still accessible anywhere in the file
2. Conditional execution where function definition appear later

