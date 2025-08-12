# ES6 features

## Definition

ES6 is a major javascript update that introduce new syntax and features to make js more powerful

## 1. let & const
> let is a block scoped, and re-assignable
> const is a block scoped, and not re-assignable

## syntax
```
let name = "muntasirul"
const pi = 3.12
```


## 2. Arrow Function
Arrow function is a syntax for writing function, it does not have it's own `this` & `arguments` and cannot be used as `constructor`

## syntax
```
const add = (a,b)=>a+b
console.log(add(2,4))
```


## 3. Template Literals
Template Literals are also known as template string, are the features in js introduce in ES6 that provided a more flexible way to work with string compared to traditional string concatenation.

## Syntax
``
## example
```
const name = "muntasirul"
const age = 23

//traditional string concatenation
const greetingsOld = "Hello, " + name + "your age is, " + age;
console.log(greetingsOld)

// using template literals

const greetingNew = {`Hello, ${name} your age is ${age}`}
console.log(greetingNew)
```

## 4. default parameters
You can give a value to it's parameter

## example
```
function hello(name="muntasirul"){
    console.log(`hello, ${name}`)
}

```

## 5. Destructuring
Destructuring is the powerful features in js es6 which provides convenient way to extract values from an arrays and properties from object into distinct variables. In simple words Destructuring helps to unpack values from an arrays and objects into distinct variables.

## example
```
// with Destructuring
const user = {name:"muntasirul", age:23, city :"west bengal" }
const username = user.name;
const userAge = user.age;
const userCity = user.city;

// without Destructuring
const person = {name:"Muntasirul",age:23}
let {name, age} = person
console.log(name,age)
```


## 6. spread operator & Rest operator

## spread operator definition
spread operator expands element of an array/object into individual element

## Syntax
```
let arr2 = [...arr1]
let obj2 = {...obj1}

```
## example
```
//with array
let arr = [1,2,3,4]
let newArr = [...arr,4,5]
console.log(newArr)

//with obj
let obj = {name:"muntasirul",age:23}
let newObj = {...obj, city:"kolkata"}
console.log(newObj)
```
## why js used spread operator `...`
> Used to cloning an array/object
> Merging an array/object
> expanding data structure

## In projects where spread operator `...` used 
1. Passing array as an argument `[...arr]`
2. merging multiple arrays/objects


## Rest operator definition
Collects multiple element into a single array/object

## syntax
```
function sum(...nums){}
const {a,...restProps} = obj
```
## Example
```
function addNumbers(...numbers){
    return numbers.reduce((acc,num)=> acc + num,0);
}
console.log(addNumbers(1,2,3,4))
```

## 7. Classes
Classes are the blueprint of an object

## syntax/example
```
class Person{
    constructor(name){this.name = name};
    greet(){console.log(`HI, i'm ${this.name}`)}
}
new Person("Muntasirul).greet()

```


## 8.Import/export
```
//export 
export const PI = 2.3;
export function add (a,b){return a+b}

//import 
import {PI,add} from './file-name'
console.log(PI,add(2,3))
```

## 9.Promises
In js, promises is an object representation the eventual completion or failure of an async operation.
it has 3 states
> Pending
> Fulfilled
> Rejected
promises takes 2 keywords
> resolve
> reject

promises always return an object

## syntax
```
let promise = new Promise((resolve,reject)=>{
    setTimeout(()=> console.log("Done"),2000)
    resolve("success);
});
promise.then(msg=> console.log(msg))
```