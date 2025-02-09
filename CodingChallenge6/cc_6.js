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
// Task 3: Arrow Function - Employee Bonus Calculation
const calculateBonus = (salary, performanceRating) => {
    let bonus = 0;
    if (performanceRating === "Excellent") bonus = salary * 0.2;
    else if (performanceRating === "Good") bonus = salary * 0.1;
    else if (performanceRating === "Average") bonus = salary * 0.05;
    console.log(`Bonus: $${bonus}`);
};

// Test Cases
calculateBonus(5000, "Excellent"); // Expected: Bonus: $1000
calculateBonus(7000, "Good");      // Expected: Bonus: $700
// Task 4: Subscription Pricing Model
function calculateSubscriptionCost(plan, months, discount = 0) {
    let pricing = { "Basic": 10, "Premium": 20, "Enterprise": 50 };
    let totalCost = (pricing[plan] * months) - discount;
    console.log(`Total Cost: $${totalCost}`);
}

// Test Cases
calculateSubscriptionCost("Basic", 6, 10);  // Expected: Total Cost: $50
calculateSubscriptionCost("Premium", 12, 0); // Expected: Total Cost: $240
