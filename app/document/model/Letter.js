import R from 'ramda'

const Letter = R.curryN(3, (size, style, character) => ({ character, size, style }))
export default Letter

const size = R.lensProp('size')
export const enlarge = R.over(size, R.add(1))
export const shrink = R.over(size, R.add(-1))

const style = R.lensProp('style')
export const addStyles = R.curryN(2, (styles, letter) =>
  R.over(style, R.merge(styles), letter))

export const removeStyles = R.curryN(2, (styles, letter) =>
  R.over(style, R.omit(styles), letter))
