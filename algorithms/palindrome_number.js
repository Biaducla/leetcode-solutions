/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    var value = x.toString();
    var valueReverse = x.toString().split('').reverse().join('');
  if(value === valueReverse){
    return true
  } else {
    return false
  }
};