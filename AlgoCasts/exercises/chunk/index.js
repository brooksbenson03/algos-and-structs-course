// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(source, size, chunks = []) {
  if (!source.length) return chunks
  
  return chunk(
    source,
    size,
    [...chunks, source.splice(0, size)]
  )
}

function alternative(array, size) {
  const result = []

  for (let element of array) {
    const last = result[result.length - 1]

    if (!last || last.length === size) {
      result.push([element])
    } else {
      last.push(element)
    }
  }

  return result
}

function alternative2(array, size) {
  const chunks = []
  
  while (array.length) {
    chunks.push(array.splice(0, size))
  }

  return chunks
}

module.exports = alternative2;
