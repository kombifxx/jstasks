function removeChar(str){
  if(str.length <= 2){return ""}
let arr = str.split("")
arr.pop()
arr.shift()
  return arr.join('')
};
