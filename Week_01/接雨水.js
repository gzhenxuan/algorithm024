/**
 * 接雨水
 * 思路：
 * 按柱子的左右最大边计算，求面积
 * 耗时较多，待进一步研究
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    //如果length === 0
    const n = height.length
    if(n === 0) return 0

    let res = 0
    let leftMax = [], rightMax = []
    //计算左边的最大边
    leftMax[0] = height[0]
    for(let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i])
    }
    //计算右边的最大边
    rightMax[n - 1] = height[n - 1]
    for(let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i])
    }
    //左右两边取最小值，减去柱子高度，就是这个柱子能装水的面积
    for(let i = 0; i < n; i++) {
        res += Math.min(leftMax[i], rightMax[i]) - height[i]
    }
    return res
};