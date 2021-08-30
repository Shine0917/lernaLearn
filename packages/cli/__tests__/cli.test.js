'use strict'

const cli = require('..')

describe('@lerna2/cli', () => {
  it('test lerna2', () => {
    expect(cli()).toBe('cli')
  })
})
