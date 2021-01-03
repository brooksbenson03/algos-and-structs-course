 // --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n1, n2 = 1) {
  if (n1 < n2) return

  let fizzAndOrbuzz = ''

  if (n2 % 3 === 0) fizzAndOrbuzz += 'fizz'
  if (n2 % 5 === 0) fizzAndOrbuzz += 'buzz'

  console.log(fizzAndOrbuzz || n2)

  fizzBuzz(n1, n2 + 1)
}

module.exports = fizzBuzz;
