import R from 'ramda'
import { expect } from 'chai'
import Section, * as S from './Section'
import Text from './Text'

describe('Section', () => {
  const section = Section(10, { color: 'red' }, [
    { text: 'hello' },
    { text: 'goodbye', style: { color: 'blue' } },
    { text: 'goodbye', size: 20 }
  ])

  it('should have multiple Texts', () =>
    expect(section).to.eql([
      Text(10, { color: 'red' }, 'hello'),
      Text(10, { color: 'blue' }, 'goodbye'),
      Text(20, { color: 'red' }, 'goodbye')
    ])
  )

  describe('textAt', () => {
    it('should be a lens over the text at the specified index', () =>
      expect(R.view(S.textAt(0), section)).to.eql(
        Text(10, { color: 'red' }, 'hello')
      ))
  })

  describe('allText', () => {
    it('should be a lens over all of the text in the section', () =>
      expect(R.view(S.allText, section)).to.eql([
        Text(10, { color: 'red' }, 'hello'),
        Text(10, { color: 'blue' }, 'goodbye'),
        Text(20, { color: 'red' }, 'goodbye'),
      ]))
  })
})
