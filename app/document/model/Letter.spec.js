import Letter, { enlarge, shrink, addStyles, removeStyles } from './Letter'
import { expect } from 'chai'

describe('Letter', () => {
  it('should have a character', () =>
    expect(Letter(10, { color: 'red' }, 'a')).to.have.property('character', 'a'))

  it('should have a style', () =>
    expect(Letter(10, { color: 'red' }, 'a').style).to.have.property('color', 'red'))

  it('should have a size', () =>
    expect(Letter(10, { color: 'red' }, 'a')).to.have.property('size', 10))

  describe('enlarge', () => {
    const letter = Letter(10, {}, 'a')

    it('should increase the size by 1', () =>
      expect(enlarge(letter)).to.have.property('size', 11))

  })

  describe('shrink', () => {
    const letter = Letter(10, {}, 'a')

    it('should decrease the size by 1', () =>
      expect(shrink(letter)).to.have.property('size', 9))
  })

  describe('addStyles', () => {
    const letter = Letter(10, { color: 'red' }, 'a')

    it('should add a property to the style of the letter', () => {
      const restyled = addStyles({ textDecoration: 'underline' }, letter)

      expect(restyled.style).to.have.property('color', 'red')
      expect(restyled.style).to.have.property('textDecoration', 'underline')
    })
  })

  describe('removeStyles', () => {
    const letter = Letter(10, { color: 'red' }, 'a')

    it('should remove a set of properties from the style of the letter', () =>
      expect(removeStyles(['color'], letter).style).to.not.have.property('color'))
  })
})
