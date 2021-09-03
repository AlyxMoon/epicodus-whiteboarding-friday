import solution from '@/lib/problem4'

describe('problem 4', () => {
  it('returns true for an empty string', () => {
    expect(solution('')).toEqual(true)
  })

  it('returns true for a string with all unique values', () => {
    expect(solution('abcdefghijklmnopqrstuvwxyz')).toEqual(true)
  })

  it('returns false for a string with a consecutive duplicate value', () => {
    expect(solution('abcdefa')).toEqual(false)
  })

  it('returns false for a string with a non-consecutive duplicate value', () => {
    expect(solution('abcdeaf')).toEqual(false)
  })
})
