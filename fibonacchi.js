function getLastDigit(index) {
  let smallI = index % 60
  let a = 0
  let b = 1
    for(let i = 2; i <= smallI; i++){
      let next = (a + b) % 10
      a = b
      b = next
      
    }
 return b
}