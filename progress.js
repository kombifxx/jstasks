function SeriesSum(n) {
  let sum = 0 
  for (let i = 1; i <= n; i++){
    
    sum += 1 / (1 + 3*(i-1))

  }
  return (n === 0) ? "0.00" : sum.toFixed(2)
}