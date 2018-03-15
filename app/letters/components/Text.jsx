import React from 'react'
import Letter from './Letter'

const Text = ({ text, style, onHover }) => (
  <span>
    { text.split('').map((character, idx) => <Letter
      key={idx}
      onHover={onHover}
      letter={character}
      style={style}
    />)
    }
  </span>
)

export default Text
