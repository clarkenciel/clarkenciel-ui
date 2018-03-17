import Letter, { enlarge, shrink, addStyles, removeStyles } from './Letter'
import { expect } from 'chai'

describe('Letter', () => {
  it('should have a character', () =>
    expect(Letter('a', 10, { color: 'red' })).to.have.property('character', 'a'))

  it('should have a style', () =>
    expect(Letter('a', 10, { color: 'red' }).style).to.have.property('color', 'red'))

  it('should have a size', () =>
    expect(Letter('a', 10, { color: 'red' })).to.have.property('size', 10))
})

describe('enlarge', () => {
  const letter = Letter('a', 10, {})

  it('should increase the size by 1', () =>
    expect(enlarge(letter)).to.have.property('size', 11))

})

describe('shrink', () => {
  const letter = Letter('a', 10, {})

  it('should decrease the size by 1', () =>
    expect(shrink(letter)).to.have.property('size', 9))
})

describe('addStyles', () => {
  const letter = Letter('a', 10, { color: 'red' })

  it('should add a property to the style of the letter', () => {
    const restyled = addStyles({ textDecoration: 'underline' }, letter)

    expect(restyled.style).to.have.property('color', 'red')
    expect(restyled.style).to.have.property('textDecoration', 'underline')
  })
})

describe('removeStyles', () => {
  const letter = Letter('a', 10, { color: 'red' })

  it('should remove a set of properties from the style of the letter', () =>
    expect(removeStyles(['color'], letter).style).to.not.have.property('color'))
})
