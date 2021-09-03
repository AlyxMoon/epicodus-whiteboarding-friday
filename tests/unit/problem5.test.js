import solution from '@/lib/problem5'

describe('problem 5', () => {
  const tests = [
    {
      description: 'should return an empty array if input empty',
      input: [],
      output: [],
      start: [],
    },
    {
      description: 'should return same array if only one value',
      input: [1],
      output: [1],
      start: [1],
    },
    {
      description: 'should not change array if already sorted',
      input: [1, 2, 3, 4, 10],
      output: [1, 2, 3, 4, 10],
      start: [1, 2, 3, 4, 10],
    },
    {
      description: 'should sort the array 1',
      input: [1, 2, 10, 3, 4],
      output: [1, 2, 3, 4, 10],
      start: [1, 2, 10, 3, 4],
    },
    {
      description: 'should sort the array 2',
      input: [1, 3, 2, 10, 4, 0],
      output: [0, 1, 2, 3, 4, 10],
      start: [1, 3, 2, 10, 4, 0],
    },
    {
      description: 'should sort the array 3',
      input: [1, 3, 2, 10, 4, 0],
      output: [0, 1, 2, 3, 4, 10],
      start: [1, 3, 2, 10, 4, 0],
    },
    {
      description: 'should correctly sort with negatives',
      input: [1, 3, 2, 10, -4, 0, -20],
      output: [-20, -4, 0, 1, 2, 3, 10],
      start: [1, 3, 2, 10, -4, 0, -20],
    },
  ]

  const sortTypes = [
    'quick',
    'merge',
    'heap',
    'insert',
    'bubble',
    'selection',
  ]

  sortTypes.forEach(type => {
    describe(`${type} sort`, () => {
      tests.forEach(({ description, input, output }) => {
        it(description, () => {
          expect(solution(input, { type })).toEqual(output)
        })
      })

      it('did not mutate original arrays', () => {
        tests.forEach(({ input, start }) => expect(input).toEqual(start))
      })
    })
  })
})
