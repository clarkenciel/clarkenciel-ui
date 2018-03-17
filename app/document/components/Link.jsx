import React from 'react'
import { merge } from 'ramda'
import Text from './Text'
import linkStyle from './styles/linkStyle'

const Link = ({ text, url, onHover, style }) => (
  <a href={url}>
    <Text text={text} onHover={onHover} style={merge(linkStyle, style)} />
  </a>
)

export default Link
