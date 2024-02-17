function isAlphanumeric(str) {
  return /^[a-zA-Z0-9]+$/.test(str);
}

function isPalindrome(str: string): boolean {
  return (
    str
      .toLowerCase()
      .split("")
      .filter((char) => isAlphanumeric(char))
      .join("") ===
    str
      .toLowerCase()
      .split("")
      .filter((char) => isAlphanumeric(char))
      .reverse()
      .join("")
  );
}

console.log(isPalindrome("0P"));
