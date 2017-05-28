const fs = require('fs')
const path = require('path')
const mkdirp = require('mkdirp')
const qrcode = require('./qrcode')

const defaultOptions = {
  output: null,
  logo: null,
  level: 'H',
  size: 128,
  margin: 4
}

exports.generate = function (text, opts = {}) {
  const buffer = qrcode.generate(text, { ...defaultOptions, ...opts })

  if (opts.output) {
    const dir = path.dirname(opts.output)
    mkdirp.sync(dir)
    fs.writeFileSync(opts.output, buffer, { encode: 'binary' })
  }

  return buffer
}
