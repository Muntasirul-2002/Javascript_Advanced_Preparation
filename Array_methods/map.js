// Definition : map() method creates a new array by applying a function to each element of an exiting array
// syntax : array.map((element,index)=> {return something})

//example
const nums = [1,2,3]
const doubled = nums.map(n=> n * 2)
console.log(doubled)