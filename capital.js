function capitalize(s){
  let split = s.split('')
  for(let i = 0; i < s.length; i += 2){
    split[i] = split[i].toUpperCase()
  }
  let reverse = [...split]
  for (let i = 0; i < reverse.length; i++) {
  if (reverse[i] === reverse[i].toUpperCase()) {
    reverse[i] = reverse[i].toLowerCase();
  } else {
    reverse[i] = reverse[i].toUpperCase();
  }
}
  return [split.join(""), reverse.join('')];
};