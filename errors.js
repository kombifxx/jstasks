function printerError(s) {
  let err = s.match(/[^a-m]/g)
return (err ? err.length : 0) + "/" + s.length ;
}