/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    var noSpace = s.trim(" ");
    var getTheWords = noSpace.split(" ");
    var getTheLastWord = getTheWords[getTheWords.length - 1];
    var getTheLength = getTheLastWord.length;  
    return getTheLength;
};