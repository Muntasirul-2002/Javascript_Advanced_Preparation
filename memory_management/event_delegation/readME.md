## Definition
Event Delegation is a technique where instead of adding event listeners to multiple child element, you can attach a single event listeners to the parent and use event bubbling to handle events for the children.

### Syntax 
```
parentElement.addEventListener("eventType", function(event){
    if(event.target.matches("childSelector")){
        //handle event
    }
})
```

### Why use
> Dynamic Content : Works for elements added later via js
> Performance