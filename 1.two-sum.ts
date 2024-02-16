// leetcode two sum

//o(n^2)
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [0, 0];
}

// o(n)

//pake map simpen value => index, jangan pake array karena di map aksesnya bisa 0(1)
function twoSumSimplified(nums: number[], target: number): number[] {
  const numbersMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];

    let diff = target - number;

    if (numbersMap.has(diff)) return [numbersMap.get(diff), i];

    numbersMap.set(number, i);
  }

  return [0, 0];
}
console.log(twoSumSimplified([2, 7, 11, 15], 9));
