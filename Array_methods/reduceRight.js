//Definition : works like reduce() but processes from right to left

// syntax : arr.reduceRight(callback, initialValue)

//example
const nums = [1,2,3]
const count = nums.reduceRight((acc,val)=> acc+val, "")
console.log(count)