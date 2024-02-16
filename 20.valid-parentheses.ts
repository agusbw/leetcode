function isValid(s: string): boolean {
  let arr: string[] = [];

  let pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    if (["(", "{", "["].includes(s[i])) {
      arr.push(s[i]);
    }

    if (["]", "}", ")"].includes(s[i])) {
      if (s[i] === pairs[arr[arr.length - 1]]) {
        arr.pop();
      } else {
        return false;
      }
    }
  }

  return arr.length > 0 ? false : true;
}

console.log(isValid("()"));
