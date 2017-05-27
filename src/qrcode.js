const qrcode = require('qr-image')
const images = require('images')

/**
 * generate QRCode
 * @param {string} text - text to generate QRCode
 * @param {Opt} opts - options
 * @return {Buffer} buffer
 */
function generate(text, opts = {}) {
  const qrSize = Math.ceil(opts.size / 21)
  const outputSize = qrSize * 21
  const buffer = qrcode.imageSync(text, {
    ec_level: opts.level,
    size: qrSize,
    margin: 0
  })

  const img = images(opts.size, opts.size).fill(255, 255, 255, 1)
  const qrimg = images(buffer)

  if (opts.logo) {
    const logo = images(opts.logo)
    const logoSize = outputSize / 5
    const pos = (outputSize - logoSize) / 2
    qrimg.draw(logo.resize(logoSize, logoSize), pos, pos)
  }

  img.draw(qrimg.resize(opts.size - opts.margin * 2), opts.margin, opts.margin)

  return img.resize(opts.size).encode('png')
}

exports.generate = generate
