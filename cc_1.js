// Task 1 - Employee Information
let employeeName = "John Doe";
const employeeID = 12345;
var isActive = true;

console.log("Employee Name:", employeeName, "- Type:", typeof employeeName);
console.log("Employee ID:", employeeID, "- Type:", typeof employeeID);
console.log("Is Active:", isActive, "- Type:", typeof isActive);
// Task 2 - Product Details
let productName = "Laptop";
const productPrice = 999.99;
var isAvailable = true;

console.log("Product Name:", productName, "- Type:", typeof productName);
console.log("Product Price:", productPrice, "- Type:", typeof productPrice);
console.log("Is Available:", isAvailable, "- Type:", typeof isAvailable);
// Task 3 - Financial Transactions
let accountBalance = 500.00;

console.log("Initial Balance:", accountBalance);

accountBalance += 200; // Deposit
console.log("After Deposit:", accountBalance);

accountBalance -= 50; // Withdrawal
console.log("After Withdrawal:", accountBalance);

accountBalance *= 1.05; // Interest
console.log("After Interest:", accountBalance);

accountBalance /= 2; // Split Balance
console.log("After Split:", accountBalance);
// Task 4 - Customer Messaging
let customerName = "Alice Johnson";
let welcomeMessage = "Welcome, " + customerName + "! Thank you for shopping with us.";

console.log(welcomeMessage);
// Task 5 - Access Control
let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Access granted. Welcome to the system!");
} else {
    console.log("Access denied. Please log in.");
}

let hasPermission = isLoggedIn && true; // Simulate permission check
console.log("Has Permission:", hasPermission);
