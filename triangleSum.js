function rowSumOddNumbers(n) {
	let firstN = n * (n - 1) + 1
  let sum = 0 
  for (let i = 0; i < n; i++){
    sum += firstN 
    firstN += 2
  }
  return sum
}