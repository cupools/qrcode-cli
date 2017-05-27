const qrcode = require('./qrcode')
const fs = require('fs')

const defaultOptions = {
  output: null,
  logo: null,
  level: 'H',
  size: 128,
  margin: 4
}

exports.generate = function (text, opts = {}) {
  const buffer = qrcode.generate(text, { ...defaultOptions, ...opts })
  if (opts.output) return fs.writeFileSync(opts.output, buffer, { encode: 'binary' })
  return buffer
}
