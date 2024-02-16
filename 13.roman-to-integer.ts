function romanToInt(s: string): number {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  //change string to array of numbers
  let numArr = s.split("").map((v) => roman[v]);
  
  return numArr.reduce(
    (acc, curr, i) => (curr < numArr[i + 1] ? acc - curr : acc + curr),
    0
  );
}

console.log(romanToInt(""));
