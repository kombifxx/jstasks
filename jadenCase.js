Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { value :
   function toJadenCase() {
     let jwords = this.split(" ").map(el => el[0].toUpperCase() + el.slice(1))
     return jwords.join(" ");
   }
  }
);