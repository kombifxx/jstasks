function factorial(n) {
  if (n < 0 || n > 12) {
    throw new RangeError('n must be in range 0..12');
  }
  if (n === 0) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
