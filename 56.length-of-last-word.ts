function lengthOfLastWord(s: string): number {
  return s.trim().split(" ").reverse()[0].length;
}

console.log(lengthOfLastWord("   fly me   to   the moon  "));
