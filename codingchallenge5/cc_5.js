// Task 1: Object Properties
const batman = {
    name: "Bruce Wayne",
    age: 41,
    email: "batman@gotham.com"
};

console.log(`Name: ${batman.name}`);
console.log(`Age: ${batman.age}`);
console.log(`Email: ${batman.email}`);
// Task 2: Object Methods
const heist = {
    orderId: 56789,
    totalAmount: 5000000,
    status: "In Progress",
    displayHeistDetails: function() {
        console.log(`Heist ID: ${this.orderId}, Loot: $${this.totalAmount}, Status: ${this.status}`);
    }
};

heist.displayHeistDetails();
