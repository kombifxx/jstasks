function digitize(n) {
 let chars = n.toString().split("")
 let arr = []
for (let i = chars.length - 1; i >= 0; i--){
  arr.push(Number(chars[i]))
  
}
  return arr;
}