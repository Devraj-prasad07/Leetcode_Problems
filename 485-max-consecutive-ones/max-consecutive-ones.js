/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let min = 0;
    let max = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 1){
            min++;
        }else{
          max = Math.max(min,max);
          min = 0
        }
    }
    return Math.max(min,max);
};