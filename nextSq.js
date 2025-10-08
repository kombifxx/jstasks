function findNextSquare(sq) {
  let root = Math.sqrt(sq)
   if (Number.isInteger(root)){ 
       return (root + 1) ** 2
} else {
  return -1
}

 
}