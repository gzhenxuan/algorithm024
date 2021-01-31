/**
 * 删除排序数组中的重复项
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //return this.solution_1(nums)
    return this.solution_2(nums)
}

/**
 * 题意没理解透彻 忽略了"你不需要考虑数组中超出新长度后面的元素"
 * 遍历数组，如果当前项与前一项相等，那么删除当前项并继续按当前索引值继续比较，反之索引加1后 继续比较
 * 提交后感觉耗时较高，问题应该出现在splice这个方法操作数组里
 * @param {number[]} nums
 * @returns {number}
 */
function solution_1(nums){
    for(let i = 1; i < nums.length;) {
        if(nums[i] !== nums[i - 1]) {
            i++
        }else {
            nums.splice(i, 1)
        }
    }
    return nums.length
}

/**
 * 遍历整个数组，比较前后两项是否相等，记录重复值出现次数，如不相等，把当前值付给 （当前位置 - 重复值的数量）的位置
 * @param {number[]} nums
 * @returns {number}
 */
function solution_2(nums){
    let count = 0
    const n = nums.length
    for(let i = 1; i < n; i++) {
        if(nums[i] !== nums[i - 1]) {
            nums[i - count] = nums[i]
        }else{
            count++
        }
    }
    return nums.length - count
}