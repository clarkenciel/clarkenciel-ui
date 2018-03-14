import React from 'react'
import { mount, shallow } from 'enzyme'
import { spy } from 'sinon'
import { expect } from 'chai'

import Letter from './Letter'

describe('<Letter />', () => {
  it('should wrap the letter in a <span />', () => {
    const letter = shallow(<Letter letter="a" />)
    expect(letter.find('span').text()).to.eql('a')
  })

  it('should pass the letter and style to the onHover callback', () => {
    const check = spy()
    const letter = mount(<Letter
      letter="a"
      style={{ color: 'red' }}
      onHover={check}
    />)
    letter.simulate('mouseOver')

    expect(check).to.have.been.calledWith(
      'a',
      { color: 'red' }
    )
  })
})
