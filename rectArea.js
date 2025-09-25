function area(d,l){
  return (d <= l) ? 'Not a rectangle' :
  +(l * Math.sqrt(d*d -l*l)).toFixed(2)
}