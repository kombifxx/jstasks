function twoOldestAges(ages) {
  let arr = [];
  let max = Math.max(...ages);
  arr.push(max);
  ages.splice(ages.indexOf(max), 1);
  let max2 = Math.max(...ages);
  arr.push(max2);
  return arr.reverse();
}