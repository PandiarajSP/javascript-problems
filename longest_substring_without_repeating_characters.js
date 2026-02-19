// in-progress
function lengthOfLongestSubstring(s) {
    // Your implementation
    let start = "";
    let result = "";
    for (let i = 0; i < s.length; i++) {
        if (i == 0) {
            start = s[0];
        }
        if (s[i] !== start) {
            result += s[i];
            if (result.includes(s[i])) {
                result = start = s[i];
            }
        } 
    }
    console.log(result);
}
//For the purpose of user debugging.
lengthOfLongestSubstring("abcabcbb");