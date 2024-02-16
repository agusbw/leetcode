function rotate(nums: number[], k: number): number[] {
  for (let i = 0; i < k; i++) {
    const a = nums.pop() as number;
    nums.unshift(a);
  }
  return nums;
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
