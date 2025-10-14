function minValue(values){
  let uniq = [...new Set(values)].sort((a, b) => a - b)
  return +uniq.join('')
}