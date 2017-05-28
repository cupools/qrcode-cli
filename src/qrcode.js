const qrcode = require('qr-image')
const images = require('images')

const basicSize = 21

/**
 * generate QRCode
 * @param {string} text - text to generate QRCode
 * @param {Opt} opts - options
 * @param {number} opts.size - output size
 * @return {Buffer} buffer
 */
function generate(text, opts) {
  const { size, margin } = opts
  const qrSize = Math.ceil(size / basicSize)
  const outputSize = qrSize * basicSize
  const buffer = qrcode.imageSync(text, {
    ec_level: opts.level,
    size: qrSize,
    margin: 0
  })

  // create blank canvas
  const img = images(size, size).fill(255, 255, 255, 1)
  const qrimg = images(buffer)

  // draw logo
  if (opts.logo) {
    const logo = images(opts.logo)
    const logoSize = outputSize / 5
    const pos = (outputSize - logoSize) / 2
    qrimg.draw(logo.resize(logoSize, logoSize), pos, pos)
  }

  img.draw(qrimg.resize(size - margin * 2), margin, margin)

  return img.resize(size).encode('png')
}

exports.generate = generate
