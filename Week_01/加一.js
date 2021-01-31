/**
 * 加一
 * 思路：
 * 遍历，相加后数值是没项否超过10，没超过直接返回，如果最后一项也超过了10，新建一个数组，设置第一项为1，其余项为0
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let n = digits.length
    for(let i = n -1; i >= 0; i--) {
        digits[i]++
        if((digits[i] %= 10) !== 0) {
            return digits
        }
    }
    digits = [...Array(n + 1)].map(() => 0)
    digits[0] = 1
    return digits
};