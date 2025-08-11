## Defination : 
A Clouser in javascript is the ability of a function to remember and access variables from it's outer scope, in simple words In inner function can access the variables from it's outer function scope in lexical environment even after the function executed.

> Clousers are purely single-threaded, Even when used with async function (setTimeout), the clouser scope is preserved in memory, and the callback is later executed by the event loop in the same thread


### Syntax : 
```
function fn1 () {
    let name = "muntasirul"; //Outer Scope Veriable
    return function fn2(){   //Inner Function
        console.log(`My name is : ${name} `) //can access the outer scope variable
    }
    fn2() // inner function called
}
```

###  Real-Life Example :
1. Your bank balance is private (outer function variable)
2. You can only access the balance through Diposit or Withdraw (inner function)
3. Bank Employee who created you account and goes home, but still you can access you balance through ATM (clouser)

###In Projects where it's needed to use :

> Form validation : Where you store user Input


### How it works in the background : 
> When the function created, it gets a lexical environment, a reference to variable in the scope where it was defined.
> when the outer function finished, js does not delete those variables from the memory if they're still being referenced

