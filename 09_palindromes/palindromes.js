const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    
    const reverseString = string.toLowerCase().split('').filter((character) => alphanumerical.includes(character)).reverse().join('');

    const compareString = reverseString.split('').reverse().join('');

    return compareString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
