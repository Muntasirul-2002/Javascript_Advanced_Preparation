## Definition
It helps to bundling properties and methods inside a class and restricting direct access to some of the data.

## example
```
class BankAccount{
    #balance = 0; // private property
    deposit(amount){
        this.#balance += amount
    }
    getBalance(){
        return this.#balance
    }
}
const acc = new BankAccount();
acc.deposit(50);
console.log(getBalance())
```