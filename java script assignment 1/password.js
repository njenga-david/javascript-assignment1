function generatePassword(firstName, lastName) {
    if (!firstName || !lastName) {
        return "Both first name and last name are required.";
    }
    
    let firstPart = firstName.slice(0, 3);
    
    let lastPart = lastName.slice(-3);
    
    return firstPart + lastPart + "@2024";
}

// Test the function
let firstName = "David";
let lastName = "Njenga";
let password = generatePassword(firstName, lastName);
console.log(password); 
