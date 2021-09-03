
const turnStringsToUrlsIterative = (string) => {
  let result = ''

  for (const char of string) {
    result += char === ' ' ? '%20' : char
  }

  return result
}

const turnStringsToUrlsRecursion = (string, index = 0) => {
  if (index === string.length) return string

  const char = string[index] === ' ' ? '%20' : string[index]
  return turnStringsToUrlsRecursion(
    string.slice(0, index) + char + string.slice(index + 1),
    index + 1,
  )
}

const solution = (input, { recursion = false } = {}) => {
  return recursion
    ? turnStringsToUrlsRecursion(input)
    : turnStringsToUrlsIterative(input)
}

export default solution
