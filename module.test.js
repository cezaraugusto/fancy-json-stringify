/* global describe, test, expect */
const fancyJsonStringify = require('./module')
const os = require('os')

describe('fancyJsonStringify', () => {
  test('output value with defaults when args are not specified', () => {
    expect(fancyJsonStringify({ hello: 'world' }))
      .toEqual(JSON.stringify({ hello: 'world' }, null, 2) + os.EOL)
  })
  test('output value with args when args are specified', () => {
    expect(fancyJsonStringify({ hello: 'world' }, null, 4))
      .toEqual(JSON.stringify({ hello: 'world' }, null, 4) + os.EOL)
  })
})
