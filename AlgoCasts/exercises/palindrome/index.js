// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false\

const reverse = require('../reversestring')

function palindrome(str) {
  const reversed = reverse(str)
  return str === reversed
}

function alternative(str) {
  const arr = str.split``.reverse()
  return str.split``.every((s, i) => arr[i] === s)
}

module.exports = palindrome;