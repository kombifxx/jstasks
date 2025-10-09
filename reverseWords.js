function reverseWords(str) {
  return str.replace(/\S+/g, word => word.split("").reverse().join(""));
}
