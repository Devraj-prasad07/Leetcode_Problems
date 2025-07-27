/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let right = nums.length-1;
    let left = 0;
    while (left <= right){
        let middle = Math.floor((right + left)/2)
        if(target === nums[middle]){
            return middle;
        } else if(target < nums[middle]){
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;
};