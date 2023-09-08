function firstNonRepeatedChar(str) {
    // Create an empty object to store character counts
    const charCount = {};

    // Loop through the string and count the occurrences of each character
    for (const char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Loop through the string again and return the first character with a count of 1
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null or any other suitable value
    return null;
}

const input = prompt("Enter a string");
const result = firstNonRepeatedChar(input);

if (result !== null) {
    alert("The first non-repeated character is: " + result);
} else {
    alert("No non-repeated character found.");
}
