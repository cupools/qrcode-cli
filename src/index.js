const qrcode = require('./qrcode')
const fs = require('fs')

const defaultOptions = {
  dist: null,
  logo: null,
  level: 'M',
  size: 128
}

exports.generate = async function (text, opts = {}) {
  const buffer = await qrcode.generate(text, { ...defaultOptions, ...opts })
  if (opts.dist) return fs.writeFileSync(opts.dist, buffer, { encode: 'binary' })
  return buffer
}
