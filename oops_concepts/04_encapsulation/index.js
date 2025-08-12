//example of encapsulation

class BankBalance{
    #balance = 0;
    deposit(amount){
        this.#balance += amount;
    }
    getAmount(){
        return this.#balance;
    }
}
let account = new BankBalance()
account.deposit(400);
console.log(account.getAmount())