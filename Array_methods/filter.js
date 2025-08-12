//Definition : creates a new array with element that pass a condition

//syntax : array.filter((element, index, array)=> condition)

//example

const number = [21,32,12]
const big = number.filter(num=> num > 20)
console.log(big)