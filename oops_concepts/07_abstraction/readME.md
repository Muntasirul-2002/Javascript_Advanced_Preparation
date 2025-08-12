## Definition
Hiding complex implementation details and exposing only necessary details

## example /syntax
```
class CoffeeMachine{
    start(){
        console.log("Staring machine...")
    }
    brewCoffee(){
        console.log("brewing coffee")
    }
}
const cm = new CoffeeMachine()
cm.start()
cm.brewCoffee()

```