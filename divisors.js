function divisors(integer) {
  let arr = []
  for (let i = integer -1; i > 1; i--){
    if (integer % i === 0){
      arr.push(i)
    }
  }
  return (arr.length > 0) ? arr.sort((a, b) => a - b) : `${integer} is prime`
}