const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0;
  
  let sum = 0;
  for (let current = begin; current <= end; current += step) {
    sum += current;
  }
  
  return sum;
}
