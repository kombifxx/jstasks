function killcount(counselors, jason){
  let killed = []
 for(let murder of counselors){
   if (murder[1] < jason){
     killed.push(murder[0])
   }
 } return killed
}