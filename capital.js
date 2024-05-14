function capitalizeWords(str) {
    // Split the string into an array of words
    let words = str.split(' ');
    
    // Loop through each word
    for (let i = 0; i < words.length; i++) {
        // Capitalize the first letter of each word
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    
    // Join the modified words back into a single string
    let result = words.join(' ');
    
    // Return the resulting string
    return result;
}

// Test the function
let inputString = "why is muhia copying codes and he is a developer";
let capitalizedString = capitalizeWords(inputString);
console.log(capitalizedString); // Output: "Hello World"
