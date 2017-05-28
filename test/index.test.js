/* eslint-env mocha */
const fs = require('fs')
const Chai = require('chai')
const qrcode = require('../src/index')

Chai.should()

describe('qrcode', () => {
  it('should work', () => {
    const buffer = qrcode.generate('test', { size: 23, margin: 1 })
    buffer.toString('base64').should.be.equal('iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAA5ElEQVRIibVVSxbEMAgyfbn/lZmVfcQB46Zumh9K0NgFAPGR7YiItZY9AODYz3ldV7jNk2oJVgEmuK0WFahj6nCPPG3AGaCTg23kPNlwkIkdsnSgLokO9zrvrsqO+XvD7Rvj3GeHN8Zph+bJIpPGcxVMYXn8p3lNmkpi1R+AlKl9oV0SO+ZpshSVxlWiypbn+X2qU+Ww3uT2enP8KKdqjVne2kTaqCuqRNcbqfGoKzp5OpkiRJ27xlSTp3CV1FHnztwLdcEkc2eqLN0NOD+jruh+dar2OeioKyqgIsXBAMT68u//A0IT70v151t5AAAAAElFTkSuQmCC')
  })

  it('should output qrcode', () => {
    qrcode.generate('test', { size: 23, margin: 1, output: 'test/tmp/test.png' })
    fs.readFileSync('test/tmp/test.png').toString('base64').should.be.equal(
      fs.readFileSync('test/fixtures/test.png').toString('base64')
    )
  })

  it('should create qrcode with logo', () => {
    qrcode.generate('test', { size: 128, margin: 4, output: 'test/tmp/logo.png', logo: 'test/fixtures/images/0.png' })
    fs.readFileSync('test/tmp/logo.png').toString('base64').should.be.equal(
      fs.readFileSync('test/fixtures/logo.png').toString('base64')
    )
  })
})
