// longestPalindrome = function (s) {
//     //your code here
//     //if (s.length === 1) return 1;
//     let palindrome = "";

//     function checkPalindrome(array) {
//         const reversed = array.reverse();
//         return reversed.join("").equals(array.join(""));
//     }

//     //   for (let i = 0; i < s.length; i++) {
//     //     for (let j = s.length; j >= i; j--) {
//     //       if (j - i < palindrome.length) break;
//     //       const currentString = s.substring(i, j);
//     //       if (!checkPalindrome(currentString)) continue;
//     //       if (currentString.length > palindrome.length) palindrome = currentString;
//     //       break;
//     //     }
//     //   }
//     s = s.split('');
//     for (let i = s.length; i >= 0; i--) {
//         for (let j = 0; j <= s.length - i; j++) {
//             const currentString = s.substring(j, i);
//             console.log(currentString);
//             if (checkPalindrome(currentString)) return i;
//         }
//     }

//     //   if (!palindrome) return 0;
//     //   return palindrome.length;
// };


longestPalindrome = function(s){
    if (!s) return 0;
    for (let i = s.length; i > 0; i--) {
      for (let j = 0; j <= s.length - i; j++) {
        var currentString = s.substring(j, i);
        if (currentString === currentString.split('').reverse().join('')) return i;
      }
    }
  }


longestPalindromeCharacter = function(s){
  var longestPalindrome = '';
  if (s.length === 1) return 1;
  for (let i = 0; i < s.length; i++) {
    let currentLetter = s[i];
    let firstOccurance;
    for (let j = i + 1; j < s.length; j++) {
      if (currentLetter === s[j]) {
        firstOccurance = j;
        let subString = s.slice(i, firstOccurance + 1);
        if (subString.length > longestPalindrome.length && subString === subString.split('').reverse().join('')) {
          longestPalindrome = subString;
        }
      }
    }
  }
  return longestPalindrome.length;
};