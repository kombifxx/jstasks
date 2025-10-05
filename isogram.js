function isIsogram(str){
  str = str.toLowerCase();
  if (str.length === 0){ 
    return true
  } else {
    let seen = new Set()
    for(let char of str){
      if (seen.has(char)){
        return false
      }
      seen.add(char)
    }
    return true
  }
  
}