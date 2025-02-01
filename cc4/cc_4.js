// Task 1: If Statements - Customer Discounts
// Frodo is buying supplies for his journey to Mordor
let purchaseAmount = 120;
if (purchaseAmount > 100) {
    purchaseAmount *= 0.9; // Gandalf applies a 10% discount for noble quests
}
console.log(`Final amount after discount: $${purchaseAmount} (Gondorian Gold)`);
// Task 2: For Loop - Sales Report
// The dwarves of Erebor are calculating their total treasure sales
let sales = [120, 85, 200, 150, 90];
let totalSales = 0;
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
}
console.log(`Total sales from Erebor's market: $${totalSales} (Gold Coins)`);