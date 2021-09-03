
const removeDuplicatesIterative = (input) => {
  const used = new Map()
  const retval = []

  for (const val of input) {
    if (used.has(val)) continue

    used.set(val, true)
    retval.push(val)
  }

  return retval
}

const removeDuplicatesRecursion = (input, index = 0, retval = []) => {
  if (index === input.length) return retval

  const isNew = retval.every(val => val !== input[index])

  return removeDuplicatesRecursion(
    input,
    index + 1,
    isNew ? [...retval, input[index]] : [...retval],
  )
}

const solution = (input, { recursion = false } = {}) => {
  return recursion
    ? removeDuplicatesRecursion(input)
    : removeDuplicatesIterative(input)
}

export default solution
