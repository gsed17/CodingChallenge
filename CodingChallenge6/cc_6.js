// Task 1: Function Declaration - Business Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);
}

// Test Cases
calculateProfit(20, 30, 100); // Expected: Total Profit: $1000
calculateProfit(50, 70, 200); // Expected: Total Profit: $4000
// Task 2: Function Expression - Sales Tax Computation
const calculateSalesTax = function(amount, taxRate) {
    let tax = amount * taxRate;
    console.log(`Sales Tax: $${tax}`);
};

// Test Cases
calculateSalesTax(100, 0.07); // Expected: Sales Tax: $7
calculateSalesTax(500, 0.1);  // Expected: Sales Tax: $50
