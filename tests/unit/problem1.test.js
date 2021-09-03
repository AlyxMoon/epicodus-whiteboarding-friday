import solution from '@/lib/problem1'

describe('problem 1', () => {
  describe('iterative', () => {
    it('returns an empty string if input empty', () => {
      expect(solution('')).toEqual('')
    })

    it('returns a string exactly the same if no spaces', () => {
      expect(solution('hello-there_friend1')).toEqual('hello-there_friend1')
    })

    it('correctly replaces spaces with %20', () => {
      expect(solution('hello there world')).toEqual('hello%20there%20world')
    })

    it('correctly replaces multiple spaces with %20', () => {
      expect(solution('  hello   there  ')).toEqual('%20%20hello%20%20%20there%20%20')
    })

    it('does not impact existing %20', () => {
      expect(solution('hello%20there ')).toEqual('hello%20there%20')
    })
  })

  describe('recursive', () => {
    it('returns an empty string if input empty', () => {
      const options = ['', { recursion: true }]
      expect(solution(...options)).toEqual('')
    })

    it('returns a string exactly the same if no spaces', () => {
      const options = ['hello-there_friend1', { recursion: true }]
      expect(solution(...options)).toEqual('hello-there_friend1')
    })

    it('correctly replaces spaces with %20', () => {
      const options = ['hello there world', { recursion: true }]
      expect(solution(...options)).toEqual('hello%20there%20world')
    })

    it('correctly replaces multiple spaces with %20', () => {
      const options = ['  hello   there  ', { recursion: true }]
      expect(solution(...options)).toEqual('%20%20hello%20%20%20there%20%20')
    })

    it('does not impact existing %20', () => {
      const options = ['hello%20there ', { recursion: true }]
      expect(solution(...options)).toEqual('hello%20there%20')
    })
  })
})
