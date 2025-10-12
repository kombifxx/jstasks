function calculateYears(principal, interest, tax, desired) {
  if (principal === desired){return 0}
  let count = 0
  for(let i = 0; principal < desired; i++){
    principal = principal + (principal * interest) * (1 - tax) 
    count++
  }
  return count
}