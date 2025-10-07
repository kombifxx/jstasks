function XO(str) {
  str = str.toLowerCase()
  let x = 0
  let o = 0
for (let letter of str){
  if (letter === "x"){
    x++
  } else if (letter === "o"){
    o++
  }
 }
  return x === o
}