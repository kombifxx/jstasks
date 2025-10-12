var capitals = function (word) {
  let arr = word.split('')
	let answ = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === arr[i].toUpperCase()){
      answ.push(i)
    }
  }
  return answ
};