function descendingOrder(n){
  let nums = String(n).split('').map(Number)
  nums.sort((a, b) => b - a)
 return +nums.join('')
}