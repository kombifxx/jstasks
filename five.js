function dontGiveMeFive(start, end){
  let arr = []
  for (let i = start; i <= end; i++){
    arr.push(i)
  }
  arr = arr.filter(elem => !elem.toString().includes('5'));

return arr.length
}