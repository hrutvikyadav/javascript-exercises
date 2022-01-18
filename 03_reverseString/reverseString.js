const reverseString = function(str) {
    let prevIndex = str.length-1;
    let newIndex = 0,
        reversedString = '',
        extractedElement;
    for(let i = 0; i <= str.length-1; i++) {
        extractedElement = str.charAt(prevIndex);
        reversedString += `${extractedElement}`;
        prevIndex--;
        newIndex++;
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
