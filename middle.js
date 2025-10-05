function getMiddle(s) {
 s = s.split("")
  let newS =[]
  if (s.length % 2 === 0){
    newS.unshift(s[s.length / 2 - 1], s[s.length / 2])
} else {
    newS.unshift(s[Math.floor(s.length / 2)])
  }
  return newS.join('')
}