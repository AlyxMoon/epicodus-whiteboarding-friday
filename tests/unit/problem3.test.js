import solution from '@/lib/problem3'

describe.only('problem 3', () => {
  const tests = [
    {
      description: 'should work with an empty string',
      input: '',
      output: '',
    },
    {
      description: 'should return the same string if no repeated characters',
      input: 'abc',
      output: 'abc',
    },
    {
      description: 'should correctly compress repeated characters',
      input: 'aaaabc',
      output: '4abc',
    },
    {
      description: 'should correctly compress different repeated characters',
      input: 'aabbzzzzzcc',
      output: '2a2b5z2c',
    },
    {
      description: 'should correctly compress the same repeated character when separated',
      input: 'aabbaaa',
      output: '2a2b3a',
    },
  ]

  describe('iterative', () => {
    tests.forEach(({ description, input, output }) => {
      it(description, () => {
        expect(solution(input)).toEqual(output)
      })
    })
  })

  describe('recursive', () => {
    tests.forEach(({ description, input, output }) => {
      it(description, () => {
        expect(solution(input, { recursion: true })).toEqual(output)
      })
    })
  })
})
