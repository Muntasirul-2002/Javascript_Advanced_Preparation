## Definition
Different classes can define methods with same name but different behavior

## example
```
class Shape{
    draw(){
        console.log("Drawing Shape)
    }
}
class Circle extends Shape{
    draw(){
        console.log("Drawing Circle")
    }
}
class Square extends Circle{
    draw(){
        console.log("Drawing Square")
    }
}
const shapes = new [new Circle(), new Square()]
shapes.forEach(s=> s.draw())
```