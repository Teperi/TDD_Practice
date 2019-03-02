const Account = require('./step1.js');

test('create account test', () => {
    const account = new Account();
    expect(account).not.toBeUndefined();
})

test('account Balance test', () => {
    const account1 = new Account(10000);
    const account2 = new Account(0);
    const account3 = new Account(1000);

    expect(account1.balance).toEqual(10000);
    expect(account2.balance).toEqual(0);
    expect(account3.balance).toEqual(1000);
})

test('account deposit test', () => {
    const account1 = new Account(10000);

    account1.deposit(1000);

    expect(account1.balance).toEqual(11000);
})

test('account withdraw test', () => {
    const account1 = new Account(10000);

    account1.withdraw(1000);

    expect(account1.balance).toEqual(9000);
})