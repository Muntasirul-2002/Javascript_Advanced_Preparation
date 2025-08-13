// return key symbols
const sym = Symbol("id")
const obj = {[sym]:123}
console.log(Object.getOwnPropertySymbols(obj))