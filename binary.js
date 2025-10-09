function addBinary(a,b) {
let sum = a + b
if (sum === 0){return "0"}
let answ = []
while(sum > 0){
  answ.push(sum % 2)
  sum = Math.floor(sum / 2)
}

     return answ.reverse().join("")
}