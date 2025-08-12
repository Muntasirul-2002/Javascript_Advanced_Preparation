# Callback hell

### Definition

Call back hell is the situation where callbacks are nested inside multiple level deep, making the code hard to read.

### example
doTask1(function(){
    doTask2(function(){
        doTask3(function(){
            doTask4(function(){
                doTask5(function(){
                    console.log("ALL TASK COMPLETED)
                })
            })
        })
    })
})


### callback hell problem in the project
1. Happens when you have many dependent async calls(first fetch user - then fetch post - then fetch comments)
2. Solution to use Promises or async await for cleaner
