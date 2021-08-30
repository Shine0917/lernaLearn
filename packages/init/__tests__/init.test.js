'use strict'

const init = require('..')

describe('@lerna2/init', () => {
  it('test lerna2', () => {
    expect(init()).toBe('init')
  })
})
