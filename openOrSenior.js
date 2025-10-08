function openOrSenior(data){
  let answ = []
  for (let member of data){
    if (member[0] >= 55 && member[1] > 7){
      answ.push("Senior")
    } else {
      answ.push("Open")
    }
  }
  return answ
}