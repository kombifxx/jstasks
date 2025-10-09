function isTriangle(a,b,c){
  let arr = [a, b, c].sort((d, e) => e - d)
  return (arr[0] < arr[1] + arr[2])
}