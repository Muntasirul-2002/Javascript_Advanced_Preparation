function createCounter(){ // Parent Function Declared
    let count = 0; //Outer function variable(private)
    return function (){ // Child Function Declared (anonymous)
        count ++;
    console.log(`Count is: ${count}`);
    }
}
const counter = createCounter(); // Counter Function Instance
counter();
counter();
counter();