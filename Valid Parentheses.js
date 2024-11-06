Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

//stack logic needed single for loop
var isValid = function(s) {
    const validPar = []
    for (let i = 0 ; i < s.length ; i++){
        if((s[i] == '(') || (s[i] == '[') || (s[i] == '{')){
            validPar.push(s[i])
        }else{
            if( validPar.length > 0 && 
            ((validPar[validPar.length-1] === '(' && s[i] === ')') || 
             (validPar[validPar.length-1] == '[' && s[i] == ']') || 
             (validPar[validPar.length-1] == '{' && s[i] == '}')) 
             ){
                validPar.pop()
            }  
            else {
                return false
            }
        }
    }
        return validPar.length === 0
    }
