import React from 'react'
import { mount } from 'enzyme'
import { expect } from 'chai'

import Letter from './Letter'

describe('<Letter />', () => {
  it('should wrap the letter in a <span />', () => {
    const letter = mount(<Letter letter="a" />)
    expect(letter.find('span').text()).to.eql('a')
  })
})
