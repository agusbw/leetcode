function RecursiveRandomNumberGenerator(n: number, seed = 1): number {
  const a = 1103;
  const c = 1234;
  const m = Math.pow(2, 31);

  if (n === 0) return seed;

  const previousNumber = RecursiveRandomNumberGenerator(n - 1, seed);

  const newNumber = (a * previousNumber + c) % m;

  return newNumber;
}

const ans = RecursiveRandomNumberGenerator(100);
console.log("n = 100:", ans); //1794069505

let a = 5;
for (let i = 1; i <= 10; i++) {
  a = a * 2;
}

console.log(a);
