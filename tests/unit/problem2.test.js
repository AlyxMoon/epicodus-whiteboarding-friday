import solution from '@/lib/problem2'

describe('problem 2', () => {
  describe('iterative', () => {
    it('does not change an empty array', () => {
      expect(solution([])).toEqual([])
    })

    it('returns equal array if no duplicates', () => {
      expect(solution([1, 3, 5, 'a'])).toEqual([1, 3, 5, 'a'])
    })

    it('removes duplicates', () => {
      expect(solution([1, 3, 5, 3, 'a', 'a'])).toEqual([1, 3, 5, 'a'])
    })

    it('does not remove duplicates of different types (num/string)', () => {
      expect(solution([1, 3, 5, 'a', '3'])).toEqual([1, 3, 5, 'a', '3'])
    })

    it('does not mutate the original array', () => {
      const input = [1, 1, 1, 1]
      expect(solution(input)).toEqual([1])
      expect(input).toEqual([1, 1, 1, 1])
    })
  })

  describe('recursive', () => {
    it('does not change an empty array', () => {
      expect(solution([], { recursion: true })).toEqual([])
    })

    it('returns equal array if no duplicates', () => {
      const options = [[1, 3, 5, 'a'], { recursion: true }]
      expect(solution(...options)).toEqual([1, 3, 5, 'a'])
    })

    it('removes duplicates', () => {
      const options = [[1, 3, 5, 3, 'a', 'a'], { recursion: true }]
      expect(solution(...options)).toEqual([1, 3, 5, 'a'])
    })

    it('does not remove duplicates of different types (num/string)', () => {
      const options = [[1, 3, 5, 'a', '3'], { recursion: true }]
      expect(solution(...options)).toEqual([1, 3, 5, 'a', '3'])
    })

    it('does not mutate the original array', () => {
      const input = [1, 1, 1, 1]
      const options = [input, { recursion: true }]
      expect(solution(...options)).toEqual([1])
      expect(input).toEqual([1, 1, 1, 1])
    })
  })
})
