function friend(friends){
  let bff = []
  for(let name of friends){
    if (name.length === 4){
      bff.push(name)
    }
  }
  return bff
}