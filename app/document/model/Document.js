import R from 'ramda'

const Document = () => ({})

export default Document

export const section = R.lensProp
export const sections = R.lens(R.values, R.values)
