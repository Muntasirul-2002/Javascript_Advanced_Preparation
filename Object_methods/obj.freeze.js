// prevent modification
const obj = {a:1}
Object.freeze(obj)
obj.a = 4;
console.log(obj)