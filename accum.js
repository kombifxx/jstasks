function accum(s) {
 s = s.toLowerCase().split("")
  let changed = s.map(function(x, i){
    x = x.repeat(i + 1)
    return x[0].toUpperCase() + x.slice(1)
})
  return changed.join("-")
}