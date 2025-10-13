function smallEnough(a, limit){
for (let elem of a){
  if( elem > limit )
  return false
}
  return true
}