function createEmployee() {
    let salary = 20000;

    return (amount) => {
        salary = salary + amount;
        return salary;
    };
}

let updateSalary = createEmployee();

console.log(updateSalary(5000));  
console.log(updateSalary(3000));  
console.log(updateSalary(2000));  
console.log(updateSalary(5000));  

function createStock() {
    let stock = 10;

    return {
        addStock: (quantity) => {
            stock = stock + quantity;
            return stock;
        },

        sellProduct: (quantity) => {
            if (quantity > stock) {
                return "Not enough stock";
            }

            stock = stock - quantity;
            return stock;
        }
    };
}

let product = createStock();

console.log(product.addStock(5));       
console.log(product.sellProduct(3));    
console.log(product.sellProduct(2));    
console.log(product.addStock(10));      
console.log(product.sellProduct(5));    
console.log(product.sellProduct(20));   