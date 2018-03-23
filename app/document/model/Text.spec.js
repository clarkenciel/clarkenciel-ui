import Text, { shrink, addStyles, removeStyles, enlarge } from './Text'
import Letter from './Letter'
import { expect } from 'chai'

describe('Text', () => {
  it('should have a sequence of characters', () =>
    expect(Text(10, { color: 'red' }, 'hello world')).to.eql(
      'hello world'.split('').map(c => Letter(10, { color: 'red' }, c))
    ))

  describe('enlarge', () => {
    const text = Text(10, {}, 'a')

    it('should increase the size by 1', () =>
      expect(enlarge(text)).to.eql([
        Letter(11, {}, 'a')
      ]))
  })

  describe('shrink', () => {
    const text = Text(10, {}, 'a')

    it('should decrease the size by 1', () =>
      expect(shrink(text)).to.eql([
        Letter(9, {}, 'a')
      ]))
  })

  describe('addStyles', () => {
    const text = Text(10, { color: 'red' }, 'a')

    it('should add a property to the style of the text', () => {
      const restyled = addStyles({ textDecoration: 'underline' }, text)

      expect(restyled).to.eql([
        Letter(10, { color: 'red', textDecoration: 'underline' }, 'a')
      ])
    })
  })

  describe('removeStyles', () => {
    const text = Text(10, { color: 'red' }, 'a')

    it('should remove a set of properties from the style of the text', () =>
      expect(removeStyles(['color'], text).style).to.not.eql([
        Letter(10, {}, 'a')
      ]))
  })
})
