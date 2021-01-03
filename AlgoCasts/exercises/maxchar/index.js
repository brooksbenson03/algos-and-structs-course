// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {}

  for (let c of str) {
    chars[c] = chars[c] + 1 || 1
  }
 
  const max = Object.keys(chars).reduce((max, c) => {
    return chars[max] > chars[c] ? max : c
  })

  return max
}

module.exports = maxChar;
