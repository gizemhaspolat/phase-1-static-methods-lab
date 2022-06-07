class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  static sanitize(str) {
    return str.replace(/[^\w,' " "-]/g, "");
  }
  static titleize(sentence) {
    let exceptions = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    let result = [];
    let arrayOfWords = sentence.split(" ");
    for (let n = 0; n < arrayOfWords.length; n++) {
      if (n == 0) {
        result.push(this.capitalize(arrayOfWords[n]));
      } else {
        if (exceptions.includes(arrayOfWords[n])) {
          result.push(arrayOfWords[n]);
        } else {
          result.push(this.capitalize(arrayOfWords[n]));
        }
      }
    }
    return result.join(" ");
  }
}

// (
//   /\b(?!and\b)\b(?!the\b)\b(?!a\b)\b(?!an\b)\b(?!but\b)\b(?!of\b)\b(?!for\b)\b(?!at\b)\b(?!by\b)\b(?!from\b)\w+/g
//   )
