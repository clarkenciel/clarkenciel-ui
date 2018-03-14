import React from 'react'

const Letter = ({ letter, onHover, style }) =>
  <span
    onMouseOver={() => onHover(letter, style)}
    style={style}>
    { letter }
  </span>

export default Letter
