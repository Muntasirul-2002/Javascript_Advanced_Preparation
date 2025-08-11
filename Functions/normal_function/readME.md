#Normal Funcation
### Defination
A normal function is defined with ```function``` keyword, it has its own ```this```, ```arguments```, and can be used as ```constructor```

### Syntax
function name(){}

### how it works
1. get its own ```this``` when it called
2. When used with ```new```, then creates a new object and binds ```this``` to it

### Benifits
1. Normal function is better for Object method
2. Constructor Function
3. Functions that rely on their own ```this```

### If It’s Multi-thread Then How JS Deals With Single Thread
> Normal function is a single thread, when its comes to async function then it exectue via event loop
