// converting to string solution
function isPalindrome(x: number): boolean {
  return x.toString() === x.toString().split("").reverse().join("");
}

console.log(isPalindrome(1221));
