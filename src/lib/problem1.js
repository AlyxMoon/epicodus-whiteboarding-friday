
const turnStringsToUrlsIterative = (string) => {
  let result = ''

  for (const char of string) {
    result += char === ' ' ? '%20' : char
  }

  return result
}

const turnStringsToUrlsRecursion = (string) => {
  return string
}

const solution = (input, { recursion = false } = {}) => {
  return recursion
    ? turnStringsToUrlsRecursion(input)
    : turnStringsToUrlsIterative(input)
}

export default solution
