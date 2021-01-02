// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
 
function reverse(str, res = '', index = 0) {
  debugger
  if (str.length === res.length) return res

  return reverse(
    str,
    res + str[str.length - 1 - index],
    index + 1
  )
}

reverse('brooks')

module.exports = reverse;
