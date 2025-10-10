function generatePairs(n) {
  let arr = []
  for (let a = 0; a <= n; a++){
    for (let b = a; b <= n; b++) {
  arr.push([a, b]);
}
  }
  return arr
  
}