
const compressStringsIterative = (input) => {
  if (!input) return ''
  const groups = [{ char: input[0], count: 1 }]

  for (let i = 1; i < input.length; i++) {
    const char = input[i]

    if (char === groups[groups.length - 1].char) {
      groups[groups.length - 1].count++
    } else {
      groups.push({ char, count: 1 })
    }
  }

  return groups.reduce((retval, { char, count }) => {
    return retval + (count === 1 ? char : count + char)
  }, '')
}

const compressStringsRecursion = (input, index = 0, retval = '') => {
  if (index >= input.length) return retval

  let count = 1
  let endIndex = index + 1
  for (let i = index + 1; i <= input.length; i++) {
    if (input[i] === input[index]) count++
    else {
      endIndex = i
      break
    }
  }

  return compressStringsRecursion(
    input,
    endIndex,
    retval + (count === 1 ? input[index] : (endIndex - index) + input[index]),
  )
}

const solution = (input, { recursion = false } = {}) => {
  return recursion
    ? compressStringsRecursion(input)
    : compressStringsIterative(input)
}

export default solution
