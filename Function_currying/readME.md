## Definition
Currying is a functional programming technique where a function that takes a multiple arguments is transformed into a sequence of function, each can take one argument

### how it works
```
//instead of 
function (a,b){
    return a+b
}

//we curry it
function curryAdd(a){
    return function (b){
        return a+b
    }
}
```

### Practical
```
// add 2+3+4 using curry

function add(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
const total = add((2)(3)(4))
console.log(total)
```

### with arrow function
```
const add = a => b => c => a*b*c
console.log(add(1)(2)(3))
```

