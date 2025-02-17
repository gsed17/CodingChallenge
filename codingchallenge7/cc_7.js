// Task 1: Function Declaration - Customer Invoice Calculation
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount;
    return `Total Invoice: $${total.toFixed(2)}`;
}


// Task 2: Function Expression - Employee Hourly Wage Calculation
const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52);
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;
};


// Task 3: Arrow Function - Customer Loyalty Discount
const calculateLoyaltyDiscount = (amount, years) => {
    let discount = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05;
    let discountedPrice = amount * (1 - discount);
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
};


// Task 4: Parameters and Arguments - Product Shipping Cost Calculation
function calculateShippingCost(weight, location, expedited = false) {
    let baseCost = location === "USA" ? 5 + (0.5 * weight) : 10 + (0.7 * weight);
    if (expedited) baseCost += 10;
    return `Shipping Cost: $${baseCost.toFixed(2)}`;
}


// Task 5: Returning Values - Business Loan Interest Calculation
function calculateLoanInterest(principal, rate, years) {
    let interest = principal * rate * years;
    return `Total Interest: $${interest.toFixed(2)}`;
}


// Task 6: Higher-Order Functions - Filtering High-Value Transactions
const transactions = [500, 1200, 3000, 800, 2200];
const filterHighValueTransactions = (transactions, filterFunction) => transactions.filter(filterFunction);


// Task 7: Closures - Budget Tracker
function createBudgetTracker() {
    let balance = 0;
    return function(expense) {
        balance -= expense;
        return `Current Balance: -$${Math.abs(balance)}`;
    };
}



// Task 8: Recursion in JavaScript - Business Growth Projection
function calculateGrowth(years, revenue) {
    if (years >= 10) return `Projected Revenue: $${revenue.toFixed(2)}`;
    return calculateGrowth(years + 1, revenue * 1.05);
}

