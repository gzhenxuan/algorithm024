/**
 * 旋转数组
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // return this.solution_1(nums, k)
    // return this.solution_2(nums, k)
    return this.solution_3(nums, k)
};


/**
 * 遍历 k , 每次从数组末尾删除值，把该值添加到数组头部
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function solution_1(nums, k){
    for(let i = 0; i < k; i++) {
        nums.unshift(nums.pop())
    }
}

/**
 * api 优化版
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function solution_2(nums, k){
    nums.splice(0,0, ...nums.splice(-(k % nums.length), k))
}

/**
 * 补位
 * 思路：
 * 1. k 取模
 * 2. 倒序遍历数组，如果当前index 大于 k, 向数组 index + k 插入当前值， 如果小于等于k，替换当前值 为 数组长度+i 位置的值
 * 3. 整理数组长度
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function solution_3(nums, k){
    let n = i = nums.length
    if((k %= n) ===0) return
    while(i--) {
        nums[i + k] = nums[i]
        if(i <= k) nums[i + k] = nums[i]
    }
    nums.length = n
}
