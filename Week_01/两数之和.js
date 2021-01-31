/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // return this.solution_1(nums, target)
    return this.solution_2(nums, target)
};

/**
 * 两层循环，暴力破解法， 事件复杂度 O(n^2)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function solution_1(nums, target){
    for(let i = 0; i < nums.length; i++) {
        for(let j = 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target && i!==j){
                return [i, j]
            }
        }
    }
}


/**
 * 优化内层循环，时间复杂度 O(n)
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function solution_2(nums, target){
    let temp = []
    for(let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if(temp[diff] !== undefined) {
            return [temp[diff], i]
        }
        temp[nums[i]] = i
    }
}