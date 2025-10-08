function longest(s1, s2) {
  const uniq =  [...new Set(s1 + s2)]
  return uniq.sort().join("")
}