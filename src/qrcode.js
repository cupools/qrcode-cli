const qrcode = require('qr-image')
const images = require('images')

function generateRawQRCode(text, opts) {
  const size = Math.ceil(opts.size / 23)
  const buffer = qrcode.imageSync(text, {
    ec_level: opts.level,
    size,
    margin: opts.margin
  })
  return buffer
}

/**
 * generate QRCode
 * @param {string} text - text to generate QRCode
 * @param {Opt} opts - options
 * @return {Buffer} buffer
 */
function generate(text, opts = {}) {
  const buffer = generateRawQRCode(text, opts)
  const img = images(buffer).resize(opts.size)

  if (!opts.logo) return img.encode('png')

  const logo = images(opts.logo)
  const width = img.width()
  const logoSize = Math.ceil(width / 5)
  const pos = (width - logoSize) / 2

  logo.resize(logoSize)
  img.draw(logo, pos, pos)
  return img.encode('png')
}

exports.generate = generate
