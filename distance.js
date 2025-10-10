function euclideanDistance(point1, point2){
  let n = point1.length
  let dist = 0
  for(let i = 0; i < n; i++){
    dist += (point2[i] - point1[i]) ** 2
  }
  return +Math.sqrt(dist).toFixed(2)
}