Example 1:
Input: nums = [1,2,3,1]
Output: true
Explanation:
The element 1 occurs at the indices 0 and 3.

Example 2:
Input: nums = [1,2,3,4]
Output: false
Explanation:
All elements are distinct.

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true


var containsDuplicate = function(nums) {
    for(let i = 0 ; i < nums.length ; i++){
        for(let j = i+1 ; j< nums.length ; j++){
            if(nums[i] === nums[j]) return true
        }
        
    }
    return false
};

var containsDuplicate = function(nums) {
    const checkDupli = {};
    for(let i = 0 ; i < nums.length ; i++){
        if(checkDupli.hasOwnProperty(nums[i])){
            return true;
        }else{
            checkDupli[nums[i]]=i
        }
    }
    return false
};
