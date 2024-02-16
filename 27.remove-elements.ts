// elements should be removed in-place (without requiring extra space), modified the given array

function removeElement(nums: number[], val: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums[i] = -1;
    }
  }

  nums.sort((a, b) => b - a);

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === -1) {
      nums.pop();
    }
  }

  return nums.length;
}
