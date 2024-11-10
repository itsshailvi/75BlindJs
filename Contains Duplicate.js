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
