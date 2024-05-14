function calculateTotalCost(items) {
    let totalCost = 0;

    // Loop through each item in the array
    for (let i = 0; i < items.length; i++) {
        // Add the price of the current item to the total cost
        totalCost += items[i].price;
    }

    return totalCost;
}

// Example shopping cart items
let items = [
    { price: 10.99 },
    { price: 5.99 },
    { price: 29.99 }
];

// Calculate the total cost of the items
let totalCost = calculateTotalCost(items);

console.log("Total cost:", totalCost.toFixed(2)); // Output the total cost with two decimal places
