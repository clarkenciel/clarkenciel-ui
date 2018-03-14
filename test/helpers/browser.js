require('babel-register')()
const { JSDOM } = require('jsdom')

const exposedProperties = ['window', 'navigator', 'document']

const dom = new JSDOM('')
global.document = dom.window.document
global.window = dom.window

Object.keys(document.defaultView).forEach(key => {
  if (typeof global[key] === 'undefined') {
    exposedProperties.push(key)
    global[key] = document.defaultView[key]
  }
})

global.navigator = {
  userAgent: 'node.js'
}

// documentRef = document
