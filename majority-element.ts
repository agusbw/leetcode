function majorityElement(nums: number[]): number {
  const element = {};
  for (let i = 0; i < nums.length; i++) {
    if (element[nums[i]]) {
      element[nums[i]]++;
    } else {
      element[nums[i]] = 1;
    }
  }

  for (const props in element) {
    if (element[props] >= nums.length / 2) {
      return Number(props);
    }
  }

  return 0;
}

console.log(majorityElement([3, 2, 3]));
