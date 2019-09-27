// Write a function that returns the broken key(s) of a keyboard. 
// Broken keys should be ordered by when they first appear in the sentence.
// Only one broken key per letter should be listed.
// Letters will all be in lower case.
// If there is no broken key it should return -1.

// The function looks like:
// findBrokenKeys(correct phrase, what you actually typed)

// Examples: 
// findBrokenKeys("hakuna matata", "hqkunq mqtqtq") => return ["a"]


findBrokenKeys = (str1, str2) => {
  let arr = [];
  for (let i = 0; i < str1.length; i++) {
    let letter1 = str1[i];
    let letter2 = str2[i];

    if (letter1 !== letter2) {
      if (!arr.includes(letter1)) {
        arr.push(letter1)
      }
    }
  } 
  if (arr.length === 0) {
    return -1
  }
  return arr;
};

module.exports = findBrokenKeys;