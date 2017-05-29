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

  it('default options should work', () => {
    const buffer = qrcode.generate('default')
    buffer.toString('base64').should.be.equal('iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAADyElEQVR4nO2dYW6kMAxGw2rvBTcj3IyejP3T1VZDPIo3NtB+70n5U6WOYZ5CmnHDdBzHUUCWX3cnAPeCAOIggDi/X38wTdMdeXSTuWTxXLuVx3e7f8wA4iCAOAggDgKIgwDidAtwHMelLYJt28o0TacWcY1ennr/mAHEQQBxEEAcBBDntBXsYd/38vHxMZTAPM9lWZahGFFs29bdd13X4fEecf+OF0opzdai1mr272211mZsTx4WVn4Wnry9MZ56/3gEiIMA4iCAOAggDgJ84WhsqdZa704rFQQQBwHEQQBxEEAcBBBn6LuAJ5FVjr2ua8i+/1NhBhAHAcRBAHEQQJyhReA8z8NbpfM8D/3+X7K2bK2ijYiF4RPu3/RZPPDvB8Zq+nCUGkfwlDy2bWt+SFYeT8m7Nw8eAeIggDgIIA4CiNMtQOt/7DKbl1YMq8w7aszR/J5w/5gBxEEAcRBAHAQQBwHEOX0XcPWW5R1kXuN3u3/MAOIggDgIIA4CiIMA4gwJYJ3DF7HXnv3dQe+YVsVORH7ecwwzYAYQBwHEQQBxEECc01awVUThKYP2lDpbZdfecmlPf+saWzH2fS/7vg+N5x3Tc16hdU5g9+eYcc6dh4gYVt4RZxA+Kb+Ma+QRIA4CiIMA4iCAOENl4aW0z9bzbpGOxrC2T2utrq3WzK3g1jVaf1m1+lrt3WfTAzOAOAggDgKIgwDiIIA4JwEyV6ARK2FPbG+MFrXWtNiZBTW9+TEDiIMA4iCAOAggTvc5ga0Cg1ahhDeGt6AhIrZFa9vXOofPU+BhEXFO4DDNaoIGZfAFh1aLKIqIiu0hIkYEowUrPALEQQBxEEAcBFAncX1yKcWxCIyI0er77nZa/T0xMmAGEAcBxEEAcRBAHAQQ5ySAt9z56hZBZsHF1Xl7vzN5hRlAHAQQBwHEQQBxEECd3j3rq4nIw1ssYY3paZ7YmcUwvfkxA4iDAOIggDgIIM7Q6+OtM/48eEu3I/Bsny7L4srPE9tbVp9C7wrUs8r2tMzS7cz8LEbHy26v8AgQBwHEQQBxEECcHyOA5wxCC6tvRIFHK3ZEs/651Or/yo8RAP4PBBAHAcRBAHEQQBwE+ELWXxLv+vfm8a7cfGQ8BBAHAcRBAHEQQJyhgpCIc+6sc/i8eM74s3K2XhzZwvMizVJ85xh6zxrsHa+U4BdHZnJHHtaYEXm0YniLTUbHa+XNI0AcBBAHAcRBAHV6Fw9PaVcukCJjZN2P0YUkM4A4CCAOAoiDAOIggDjT5woVRGEGEAcBxEEAcf4AQJWNYBzBDOgAAAAASUVORK5CYII=')
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
