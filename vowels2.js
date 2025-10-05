function disemvowel(str) {
  let vowels = "euoiaEUOIA"
    for(let vowel of vowels){
      str = str.replaceAll(vowel, "")
  }
  return str;
}