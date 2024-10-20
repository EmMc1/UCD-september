function drawConsolePyramid(height) {
    // Loop through each level of the pyramid
    for (let i = 0; i < height; i++) {
        // Calculate the number of spaces needed for centering
        let spaces = ' '.repeat(height - i - 1);
        
        // Calculate the number of asterisks (or any character) for the current level
        let stars = '*'.repeat(2 * i + 1);
        
        // Combine spaces and stars to create the centered pyramid row
        console.log(spaces + stars);
    }
}

// Example usage
drawConsolePyramid(8);