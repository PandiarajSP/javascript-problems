function isPalindrome(x) {
  if (!Number(x) || !Number.isFinite(x)) return "Invalid input"
  // Negative values never be a palindrome (-121 ==> 121-)
  if(x < 0) return false;
  let original = x;
  let rev = 0;
  while (x > 0) {
    let rem = x % 10;
    // existing reversed number should be multiplied by 10 and remainder needs to add.
    rev = (rev * 10) + rem;
    x = Math.floor(x / 10);
  }
  if (original === rev) return true;
  else return false;
}

console.log(isPalindrome(1234));
console.log(isPalindrome("1234"));
console.log(isPalindrome("ARA"));
console.log(isPalindrome(121));
console.log(isPalindrome(false));
console.log(isPalindrome(null));
console.log(isPalindrome(undefined));
console.log(isPalindrome(Number));
console.log(isPalindrome([]));
console.log(isPalindrome(""));
