const qrcode = require('./qrcode')

class QRCode {
  constructor(config) {
    this._config = config || {}
  }

  size(size) {
    return new QRCode({ ...this._config, size })
  }

  generate() {
    const { text, ...opts } = this._config
    return qrcode(text, opts)
  }

  output() {
    return this.generate()
  }
}

module.exports = new QRCode()
