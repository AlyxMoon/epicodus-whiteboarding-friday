
const checkForUniqueness = (input) => {
  const used = new Map()
  for (let i = 0; i < input.length; i++) {
    if (used.has(input[i])) return false
    used.set(input[i], true)
  }

  return true
}

const solution = (input) => {
  return checkForUniqueness(input)
}

export default solution
