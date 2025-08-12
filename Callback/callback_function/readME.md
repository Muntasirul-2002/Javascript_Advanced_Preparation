# Callback Function

### Defination 
A function that is passed as an argument to another function is called callback function

### syntax
```
function doSomething(callback){
    console.log("Task added)
    callback()
}
doSomething(function(){
    console.log("Task finished)
})

```

### How It Works in the Background
1. In JavaScript, functions are first-class citizens, so you can pass them as arguments.
2. If a callback is used for async operations (e.g., setTimeout, file reading, API calls), the function is registered in the Web APIs environment.

### How JS use callback
1. Timer(setTimeout, setInterval)
2. Api calls(fetch)

### If It’s Multi-thread Then How JS Deals With Single Thread
1. Js is single threaded, so it doesn't run multiple callbacks at the time.
2. Long running task are handle by the event loop web apis to the browser

### In Projects Where It’s Needed to Use
1. user interaction handling (button cliks)
2. Fetching data from apis