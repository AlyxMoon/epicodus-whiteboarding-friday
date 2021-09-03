
const sortByQuick = (input = []) => {
  return input
}

const sortByMerge = (input = []) => {
  return input
}

const sortByHeap = (input = []) => {
  return input
}

const sortByInsert = (input = []) => {
  return input
}

const sortByBubble = (input = []) => {
  return input
}

const sortBySelection = (input = []) => {
  return input
}

const solution = (input, { type = '' } = {}) => {
  if (typeof input === 'number') {
    throw new Error('Only numbers are accepted!')
  }

  switch (type) {
    case 'quick': return sortByQuick(input)
    case 'merge': return sortByMerge(input)
    case 'heap': return sortByHeap(input)
    case 'insert': return sortByInsert(input)
    case 'bubble': return sortByBubble(input)
    case 'selection': return sortBySelection(input)
    default: return input
  }
}

export default solution
