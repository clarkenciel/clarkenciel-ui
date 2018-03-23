import R from 'ramda'
import Letter, * as L from './Letter'

const Text = R.curryN(3, (size, style, characters) =>
  R.map(Letter(size, style), characters))

export default Text

export const shrink = R.map(L.shrink)
export const enlarge = R.map(L.enlarge)
export const addStyles = R.curryN(2, (styles, text) =>
  R.map(L.addStyles(styles), text))

export const removeStyles = R.curryN(2, (styles, text) =>
  R.map(L.removeStyles(styles), text))
