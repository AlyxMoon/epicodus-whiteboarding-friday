
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
  const mergeLists = (left, right) => {
    const result = []

    let [iLeft, iRight] = [0, 0]
    while (iLeft < left.length && iRight < right.length) {
      if (left[iLeft] <= right[iRight]) {
        result.push(left[iLeft])
        iLeft++
      } else {
        result.push(right[iRight])
        iRight++
      }
    }

    for (; iLeft < left.length; iLeft++) result.push(left[iLeft])
    for (; iRight < right.length; iRight++) result.push(right[iRight])

    return result
  }

  const doMergeSort = (arr) => {
    if (arr.length < 2) return arr

    const left = doMergeSort(arr.slice(0, Math.floor(arr.length / 2)))
    const right = doMergeSort(arr.slice(Math.floor(arr.length / 2)))

    return mergeLists(left, right)
  }

  return doMergeSort(input.slice())
}

const sortByHeap = (input = []) => {
  const swapElements = (arr, i1, i2) => {
    const temp = arr[i1]
    arr[i1] = arr[i2]
    arr[i2] = temp
  }

  const makeHeap = (arr, size, index) => {
    let largestNode = index
    const leftNode = 2 * index + 1
    const rightNode = 2 * index + 2

    if (leftNode < size && arr[leftNode] > arr[largestNode]) {
      largestNode = leftNode
    }

    if (rightNode < size && arr[rightNode] > arr[largestNode]) {
      largestNode = rightNode
    }

    if (largestNode !== index) {
      swapElements(arr, index, largestNode)
      makeHeap(arr, size, largestNode)
    }
  }

  const doSortByHeap = (arr) => {
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
      makeHeap(arr, arr.length, i)
    }

    for (let i = arr.length - 1; i > 0; i--) {
      swapElements(arr, 0, i)
      makeHeap(arr, i, 0)
    }

    return arr
  }

  return doSortByHeap(input.slice())
}

const sortByInsert = (input = []) => {
  const swapElements = (arr, i1, i2) => {
    const temp = arr[i1]
    arr[i1] = arr[i2]
    arr[i2] = temp
  }

  const doInsertSort = (arr, index = 0) => {
    if (index >= arr.length) return arr

    let i = index
    while (i > 0 && arr[i - 1] > arr[i]) {
      swapElements(arr, i - 1, i)
      i--
    }

    return doInsertSort(arr, index + 1)
  }

  return doInsertSort(input.slice())
}

const sortByBubble = (input = []) => {
  const swapElements = (arr, i1, i2) => {
    const temp = arr[i1]
    arr[i1] = arr[i2]
    arr[i2] = temp
  }

  const doBubbleSort = (arr) => {
    let swapped = false

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] <= arr[i + 1]) continue
      swapped = true
      swapElements(arr, i, i + 1)
    }

    return swapped ? doBubbleSort(arr) : arr
  }

  return doBubbleSort(input.slice())
}

const sortBySelection = (input = []) => {
  const swapElements = (arr, i1, i2) => {
    const temp = arr[i1]
    arr[i1] = arr[i2]
    arr[i2] = temp
  }

  const doSelectionSort = (arr, index = 0) => {
    if (index === arr.length) return arr

    let minIndex = index
    for (let i = minIndex + 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) minIndex = i
    }

    swapElements(arr, index, minIndex)
    return doSelectionSort(arr, index + 1)
  }

  return doSelectionSort(input.slice())
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
