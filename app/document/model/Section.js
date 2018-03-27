import R from 'ramda'
import Text from './Text'

const Section = R.curryN(3, (sectionSize, sectionStyle, texts) =>
  R.map(({ text, size, style }) => Text(
    size || sectionSize,
    style ? R.merge(sectionStyle, style) : sectionStyle,
    text
  ), texts)
)

export default Section

export const textAt = R.lensIndex
export const allText = R.lens(R.identity, R.identity)
