function sumOfMinimums(arr) {
 let sum = 0
 for (let row of arr){
   sum += Math.min(...row)
 }
  return sum
}