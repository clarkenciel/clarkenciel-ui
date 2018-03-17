import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect } from 'chai'
import { spy } from 'sinon'

import Text from './Text'
import Letter from './Letter'

describe('<Text />', () => {
  it('should render the text', () => {
    const text = mount(<Text text="hello there" />)
    expect(text.text()).to.eql('hello there')
  })

  it('should wrap children in a <span />', () => {
    const text = shallow(<Text text="hello there" />)
    expect(text.find('span')).to.have.length(1)
  })

  it('should render a string as a sequence of <Letter />s', () => {
    const text = shallow(<Text text="hello there" />)
    expect(text.find(Letter)).to.have.length("hello there".length)
  })

  it('should pass onHover to each child', () => {
    const onHover = spy()
    const text = mount(<Text
      text="hello there"
      onHover={onHover}
    />)

    text.find(Letter).forEach(component =>
      component.simulate('mouseOver'))

    expect(onHover.callCount).to.equal("hello there".length)
  })

  it('should pass any style on to each child', () => {
    const style = { color: 'blue' }
    const text = shallow(<Text
      text="hello there"
      style={style}
    />)

    text.find(Letter).forEach(letter =>
      expect(letter.prop('style')).to.eql(style))
  })
})
