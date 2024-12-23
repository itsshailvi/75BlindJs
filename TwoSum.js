Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.


 var twoSum = function(nums, target) {
    for(let i = 0 ; i < nums.length; i++){
        for(let j = i+1 ; j < nums.length ; j++){
            let x = nums[i] + nums[j]
            if(x === target) {
                return [i,j]
            }
        }
    }
    return 
};

var twoSum = function(nums, target) {
    let sum = 0
    let value,checkVal
    let totalSum = nums.reduce((a,b) => a+b,0)
    for(let i = 0; i<nums.length; i++){
        value = target - nums[i]
        checkVal = nums.includes(value)
        if(checkVal && nums.indexOf(value) !== i){
            return [i, nums.indexOf(value)]
        }
    }
    return []
};

var twoSum = function(nums, target) {
    let numToIndexMap = {};

    // Loop through the array
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        console.log(diff)
        if (numToIndexMap.hasOwnProperty(diff)) {
            console.log(i, numToIndexMap)
            return [i, numToIndexMap[diff]];
        }
        numToIndexMap[nums[i]] = i;
    }

};
