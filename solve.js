function solve(s){
  let arr = s.split("")
  let up = 0
  let low = 0
for(let i = 0; i < s.length; i++){
  if (arr[i] === arr[i].toLowerCase()){
    low++
  } else {
    up++
  }
}
  return (low >= up) ? s.toLowerCase() : s.toUpperCase()
}