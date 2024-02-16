function deretPurba(n: number): number {
  let ans = 3;
  for (let i = 0; i < n; i++) {
    ans += 2 * i;
  }
  return ans;
}

console.log(deretPurba(100)); // 9903
