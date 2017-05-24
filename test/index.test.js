/* eslint-env mocha */
const Chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const qrcode = require('../src/qrcode')

Chai.use(chaiAsPromised)

describe('qrcode', () => {
  it('should work', () => qrcode.generate('123').then(buf => console.log(buf)))
})
