function breakChocolate(n,m) {
  if ((n < 1 || m < 1) || (m === 1 && n === 1)){
    return 0
  } else {
      return n * m -1
    }

}