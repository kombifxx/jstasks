function sumDigits(number) {
  let count = 0
  let arr = number.toString().replace(/\D/g, '').split('')
  for (let elem of arr){
    count += +elem
  }
  return count
}
