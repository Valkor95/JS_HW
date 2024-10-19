# ДЗ 17.3. Клас "Банківський рахунок"

Створіть клас BankAccount, який буде представляти банківський рахунок. Додайте властивість балансу та методи для внесення та зняття грошей.

_class BankAccount_ {

**// Ваш код тут**

}

_const account1 = new BankAccount(1000)_;

_console.log(account1.getBalance())_; // 1000

_account1.deposit(500)_;

_console.log(account1.getBalance())_; // 1500

_account1.withdraw(200)_;

_console.log(account1.getBalance())_; // 1300