function isAlphabet(char: string): boolean {
  return char >= "a" && char <= "z";
}

function isPalindrome(str: string): boolean {
  return (
    str
      .toLowerCase()
      .split("")
      .filter((char) => isAlphabet(char))
      .join("") ===
    str
      .toLowerCase()
      .split("")
      .filter((char) => isAlphabet(char))
      .reverse()
      .join("")
  );
}

console.log(isPalindrome("Ma$dam, @.in 3Ede*n, 4I'm-Ada#m"));
