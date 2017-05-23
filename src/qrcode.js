const qrcode = require('qrcode')
const images = require('images')

function generateRawQRCode(text, opts) {
  return new Promise((resolve, reject) => {
    qrcode.toDataURL(text, opts, (err, dataURL) => {
      if (err) reject(err)
      const buffer = new Buffer(dataURL.split(',')[1], 'base64')
      resolve(buffer)
    })
  })
}

/**
 * generate QRCode
 * @param {string} text - text to generate QRCode
 * @param {Opt} opts - options
 * @return {Promise<Buffer>} promise
 */
async function generate(text, opts) {
  const buffer = await generateRawQRCode(text, opts)
  if (!opts.logo) return buffer

  const img = images(buffer)
  const logo = images(opts.logo)
  const width = img.width()
  const logoSize = Math.ceil(width / 5)
  const pos = (width - logoSize) / 2

  logo.resize(logoSize)
  img.draw(logo, pos, pos)
  return img.encode('png')
}

exports.generate = generate
