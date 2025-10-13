function nbDig(n, d) {
  let count = 0
  let arr = []
  for (let i = 0; i <= n; i++){
    arr.push(i ** 2)
  }
  
  for (let square of arr) {
    let digits = square.toString().split('');
    for (let numb of digits){
      if(+numb === d){
        count++
      }
    }
  }
  
  return count
}
