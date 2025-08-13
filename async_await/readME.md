## Definition

Async await keyword used to handle asynchronous function / operations during execution phase.

> It always returns a promise

### Why use Async/Await

Normally, when we work with asynchronous operations for example fetch data ,api call etc, then we use promise or callback. But these can lead to callback hell(to many nested callbacks), or .then() chaining, to solve this we use async await.

### How it works

1. `async` keyword declared a function that return a promise
2. `await` keyword pause the execution inside an async function until the promise resolves. then return the resolved value

### Example

```
// With promise

function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("data Fetched)
        },4000)
    })
}
fetchData()
.then((data)=>{
    console.log(data);
    return "Next step"
})
.then((step)=> console.log(step))
.catch((err)=> console.log(err))
```

```
// With async await

const getData = async()=>{
    try{
const response = await fetch("api call")
const data = response.json()
    }catch{
console.log("error)
    }
}
```
