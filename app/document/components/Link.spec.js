import React from 'react'
import { mount, shallow } from 'enzyme'
import { expect } from 'chai'
import { spy } from 'sinon'
import Link from './Link'
import linkStyle from './styles/linkStyle'
import Text from './Text'

describe('<Link />', () => {
  it('should render the link text', () => {
    const link = mount(<Link url={'/home'} text="home" />)
    expect(link.text()).to.eql('home')
  })

  it('should link to the provided url', () => {
    const link = mount(<Link text="home" url="/home" />)
    expect(link.find('a').prop('href')).to.eql('/home')
  })

  it('should pass onHover to its children', () => {
    const onHover = spy()
    const link = shallow(<Link onHover={onHover} />)
    expect(link.find(Text).prop('onHover')).to.equal(onHover)
  })

  it('should merge the expected defined link style with any provided style', () => {
    const style = { background: 'red' }
    const link = shallow(<Link style={style} />)

    expect(link.find(Text).prop('style')).to.have.property('background', 'red')
    expect(link.find(Text).prop('style')).to.have.include(linkStyle)
  })

  it('should allow default style values to be overridden', () => {
    const style = { color: 'red' }
    const link = shallow(<Link style={style} />)

    expect(link.find(Text).prop('style')).to.have.property('color', 'red')
  })
})
