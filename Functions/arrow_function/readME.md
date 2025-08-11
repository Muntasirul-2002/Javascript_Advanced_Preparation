# Arrow Function

### Defination :
Arrow function is introduced in ES6 Version of Js, a sorter for writing function, it does not have its own ```this``` & ```arguments```, and cannot be used as constructor.

> An arrow function does required a return key.

### Syntax

``` () => {}
```
`Store in a variable`
```
const name = () => {}
```
### How it works in the background
1. Does not create its own `this`; it lexically inherit this from its surrounding scope.
2. No `arguments` objects


### How JS use arrow function
1. To Simplfy code, short one liners.
2. Preserving  `this` in async function or event listers
3. Callbacks in `maps`, `filter`

### In Project where arrow needed
> Array method
### example
```
[1,2,3].map(num=>num*2)
```
>api call
```
const getData = async()=>{
    const res = await fetch("https://api.data.com/products);
    const data = res.json();
    console.log(data)
}
getData()

```