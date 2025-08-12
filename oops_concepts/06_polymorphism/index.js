//example
class Shape{
    draw(){
        console.log("drawing shape")
    }
}
class Circle extends Shape{
    draw(){
        console.log("drawing circle")
    }
}
class Square extends Circle{
    draw(){
        console.log("drawing square")
    }
}

let shapes = [new Circle(), new Square(), new Shape()]

shapes.forEach(s=> s.draw())