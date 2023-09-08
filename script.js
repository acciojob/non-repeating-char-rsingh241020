function firstNonRepeatedChar(str) {
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) {
            return char;
        }
    }
    return null; // If no non-repeated character is found
}
