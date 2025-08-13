// prevents adding/removing properties but allow modification
const obj = {a:1}
Object.seal(obj)
obj.a = 3; //work
delete obj.a; // fail
console.log(obj)