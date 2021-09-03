
const sortByQuick = (input = []) => {
  if (input.length < 2) return input

  const switchElements = (arr, i1, i2) => {
    const temp = arr[i1]
    arr[i1] = arr[i2]
    arr[i2] = temp
  }

  const doQuickSortPartition = (arr, start, end) => {
    const pivotIndex = start
    const pivotElement = arr[start]

    while (start < end) {
      while (start < arr.length && arr[start] <= pivotElement) {
        start++
      }

      while (arr[end] > pivotElement) end--

      if (start < end) switchElements(arr, start, end)
    }

    switchElements(arr, pivotIndex, end)
    return end
  }

  const doQuickSort = (arr, start, end) => {
    if (start < 0 && end < 0) return arr
    if (start >= end) return arr

    const pivotIndex = doQuickSortPartition(arr, start, end)

    doQuickSort(arr, start, pivotIndex - 1)
    doQuickSort(arr, pivotIndex + 1, end)

    return arr
  }

  return doQuickSort(input.slice(), 0, input.length - 1)
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
  if (!Array.isArray(input)) {
    throw new Error('Only arrays are accepted!')
  }

  if (input.some(input => typeof input !== 'number')) {
    throw new Error('There should only be numbers in the array!')
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
