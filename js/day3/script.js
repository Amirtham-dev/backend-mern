function createBankAccount() {
    let balance = 5000;

    function checkBalance() {
        console.log("Account Balance:", balance);
    }

    return checkBalance;
}

let balance = 100000;

let account = createBankAccount();

console.log("Outside Balance:", balance);

account();


function createAccount() {
    let balance = 1000;

    function deposit(amount) {
        balance = balance + amount;
    }

    function getBalance() {
        console.log(balance);
    }

    return {
        deposit: deposit,
        getBalance: getBalance
    };
}

let isAccount = createAccount();

isAccount.deposit(500);
isAccount.deposit(200);

isAccount.getBalance();


function createCounter() {
    let count = 0;

    function increment() {
        count++;
    }

    function decrement() {
        count--;
    }

    function getCount() {
        console.log(count);
    }

    return {
        increment: increment,
        decrement: decrement,
        getCount: getCount
    };
}

let counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.decrement();

counter.getCount();

let count = 100;

console.log("Outside Count:", count);
counter.getCount();

function createEmployee(name, initialSalary) {
    let salary = initialSalary;

    function getName() {
        return name;
    }

    function getSalary() {
        return salary;
    }

    function increaseSalary(amount) {
        if (amount >= 0) {
            salary = salary + amount;
        }
    }

    return {
        getName: getName,
        getSalary: getSalary,
        increaseSalary: increaseSalary
    };
}

let employee = createEmployee("Arun", 25000);

employee.increaseSalary(5000);

console.log(employee.getName());
console.log(employee.getSalary());

let salary = 100000;

console.log("Outside Salary:", salary);
console.log("Employee Salary:", employee.getSalary());