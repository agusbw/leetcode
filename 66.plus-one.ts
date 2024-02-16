//manual
function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === digits.length - 1) {
      digits[i] += 1;
    }

    if (digits[i] === 10) {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
      } else {
        digits[i - 1] += 1;
      }
    }
  }

  return digits;
}

// function plusOne(digits: number[]): number[] {
//   return [...(BigInt(digits.join("")) + BigInt(1)).toString()].map((v) =>
//     Number(v)
//   );
// }

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
