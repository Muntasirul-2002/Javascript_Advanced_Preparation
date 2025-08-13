## Definition
in javascript THIS keyword is a special keyword that refers to the object tha is executing current function.

> It's value depends on how and where the function is called not where is defined

## Syntax
```
This; // usage inside a function or object
```
## Example 
```
const person {
    name:"muntasirul",
    age :23,
    greet:function(){
        console.log(this.name)
    }

}
person.greet()
```
##  How It Works in the Background
1. Global context : 
> in browser : `this` -> `window` object
> in node v8 engine: `this` -> `{}` empty object
2. Inside a object method:
> this refers to the object that called the method
3. In a constructor function / class :
> this refers to the newly created object
4. with `bind`, `apply`, `call`
> You can set this value manually
5. In arrow function
> this is lexically inherited from the surrounding scope(doesn't create its own)