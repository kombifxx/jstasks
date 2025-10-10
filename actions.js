function whatListAmIOn(actions) {
  let nau = ["b", "f", "k"];
  let nice = ["n", "s", "g"];
  let good = 0;
  let bad = 0;

  for (let action of actions) {
    let first = action[0].toLowerCase();
    if (nau.includes(first)) {
      bad++;
    } else if (nice.includes(first)) { 
      good++;
    }
  }

  if ((good === bad) || (bad > good)) {
    return 'naughty';
  } else {
    return "nice";
  }
}