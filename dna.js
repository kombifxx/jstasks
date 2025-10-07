function dnaStrand(dna) {
  dna = dna.replace(/A/g, "t")
           .replace(/T/g, "a")
           .replace(/C/g, "g")
           .replace(/G/g, "c");
  return dna.toUpperCase();
}
