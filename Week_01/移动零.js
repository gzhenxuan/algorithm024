/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // this.solution_1(nums)
    this.solution_2(nums)
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function solution_1(nums){
    for(let i = 0; i < nums.length;) {
        if(nums[i] === 0){
            nums.push(nums.splice(i,1))
        }else{
            i++
        }
    }
}

/**
 * 思路简单
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function solution_2(nums){
    nums.sort((a, b) => b ? 0 : -1)
}
