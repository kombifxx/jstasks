function removeSmallest(numbers) {
   let arr = [...numbers]
 if (arr.length > 0){
   let min = arr.indexOf(Math.min(...arr))
   arr.splice(min, 1)
   return arr
 } else {
   return []
 }
}