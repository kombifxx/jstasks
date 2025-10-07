function findShort(s){
  let arr = s.split(' ').map(el => el.length)
  return Math.min(...arr)
}