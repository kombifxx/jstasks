function gimme (triplet) {
let arr = triplet.slice().sort((a, b) => a - b)
let a = arr[1]
return triplet.indexOf(a)
}