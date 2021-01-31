/**
 * 合并两个有序数组
 * 思路：
 * 先算出目标数组的长度，倒叙遍历数组，比较值的大小，大的放到目标数组的队尾并减少length，遍历完n如果还大于0，放到目标数数组前面
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let count = m + n
    while(m > 0 && n > 0){
        nums1[--count] = nums1[m-1] < nums2[n-1] ? nums2[--n] : nums1[--m]
    }
    if(n > 0){
        nums1.splice(0, n, ...nums2.slice(0,n))
    }
};