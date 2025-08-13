// call, apply, bind are the functional methods that are used to control the this value, usually this depends on how the function is called, these methods give you to control the this value

//call()
// Call a function immediately with a specified this and arguments individually
//example
function greet(city,country){
console.log(`Hello my name is ${this.name} from ${city} ${country}`)
}

const person = {name:"Muntasirul"}
greet.call(person, "Kolkata", "West Bengal")


//apply() 
//same as call() but passed as an array
function greet(city,country){
console.log(`Hello my name is ${this.name} from ${city} ${country}`)
}

const person1 = {name:"Muntasirul"}
greet.apply(person1, ["Kolkata", "West Bengal"])


//bind()
//does not call immediately
// returns a new function with this bound to a give object
const muntasirul = greet.bind(person1, "Kolkata","West Bengal")
muntasirul()

