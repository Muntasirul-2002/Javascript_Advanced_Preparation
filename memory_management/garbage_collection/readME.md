## Definition
Garbage collection is a process where javascript automatically frees the memory by removing objects that are no longer reachable.
> You don't control it manually, JS engine handle it

### Example
```
let user = {name: "muntasirul"}
user = null //now eligible for garbage collection
```

### Why use
> Prevent memory leaks
