(function () {
    class BankAccount {
        #balance;

        constructor(initialBalance) {
            this.#balance = initialBalance;
        }

        deposit(amount) {
            if (amount > 0) {
                this.#balance += amount;
            } else {
               alert('The deposit amount must be positive!');
            }
        }

        withdraw(amount) {
            if (amount > 0 && amount <= this.#balance) {
                this.#balance -= amount;
            } else {
               alert('Insufficient funds or invalid withdrawal amount!');
            }
        }

        getBalance() {
            return this.#balance;
        }
    }

    const account = new BankAccount(1000);
    console.log(account.getBalance())

    account.deposit(500);
    console.log(account.getBalance());

    account.deposit(-500);
    console.log(account.getBalance());

    account.withdraw(200);
    console.log(account.getBalance());

    account.withdraw(2000);
    console.log(account.getBalance());
})()