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
// Task 3: Array Manipulation
let mostWanted = ["Joker", "Two-Face", "Bane"];

mostWanted.push("Scarecrow");  
mostWanted.pop();  
mostWanted.unshift("Riddler");  
mostWanted.shift();  

console.log(mostWanted);
// Task 4: Map Method
const speeds = [100, 150, 200]; 
const boostedSpeeds = speeds.map(speed => speed * 1.2);

console.log(boostedSpeeds);
// Task 5: Filter Method
const cases = [3, 0, 5, 0, 7]; 
const activeCases = cases.filter(c => c > 0);

console.log(activeCases);
// Task 6: Reduce Method
const revenue = [500000, 300000, 200000, 400000]; 
const totalRevenue = revenue.reduce((sum, amount) => sum + amount, 0);

console.log(`Wayne Enterprises Revenue: $${totalRevenue}`);
