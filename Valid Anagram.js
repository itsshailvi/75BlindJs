An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

var isAnagram = function(s, t) {
    s = s.split('').sort().join('')
    t = t.split('').sort().join('')
    if(s.length != t.length) return false
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] != t[i]) return false
    }
    return true
};
