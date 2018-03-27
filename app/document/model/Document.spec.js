import R from 'ramda'
import { expect } from 'chai'
import Document, { section, sections } from './Document'
import Section from './Section'

describe('Document', () => {
  const document = Document(10, { color: 'black' }, {
    'dogs': {
      size: 20,
      contents: 'dogs are good'
    },
    'cats': {
      style: { color: 'blue' },
      contents: [
        { style: { color: 'yellow' }, text: 'cats are' },
        'also good'
      ]
    }
  })

  xit('should apply section-level sizes if provided')

  xit('should apply section-level styles if they are provided')

  xit('should apply document level styles for styles that are not provided')

  describe('section', () => {
    xit('should provide a lens for a specific section')
      // expect(R.view(section('dogs'), document)).to.eql(Section(
      // )))
  })

  describe('sections', () => {
    xit('should provide a lens over all sections of the document')
      // expect(R.view(sections, document)).to.eql([
      //   Section(),
      //   Section()
      // ]))
  })
})
