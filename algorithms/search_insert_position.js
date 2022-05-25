/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    if(nums.includes(target)){
      var index = nums.indexOf(target);
      return index;
    } else {
      var newList = [...nums, target];
      var sortList = newList.sort(function(a,b){return a-b;});
      var indexOf = sortList.indexOf(target);
      return indexOf;
    }
};