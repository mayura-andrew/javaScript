function fearNotLetter(str) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let startingPosition = alphabet.indexOf(str[0]);
  console.log(startingPosition);
  for(let i = startingPosition; i < startingPosition + str.length; i += 1) {
    console.log(i);
    if (alphabet[i] != str[i - startingPosition]) {
      return alphabet[i];
    };
  }
}

console.log(fearNotLetter("mnopqr"));
