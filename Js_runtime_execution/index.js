// Example
console.log("Start") // Synchronous, runs first

setTimeout(()=>{
console.log("Timeout")  //execute fourth
},3000)

Promise.resolve().then(()=>{   //execute third
    console.log("Promise")
})

console.log("End") //Synchronous runs second


// Promises will comes in microtask queue which has high priority to execute rather than callback task queue
// SeTimeout return a callback function and callback functions are comes under callback queue which can only execute when microtask queue has not empty.