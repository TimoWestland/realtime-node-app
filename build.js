const fs = require('fs')
const path = require('path')

const inputDir = './src'
const outputDir = './build'

const copyDir = (src, dest) => {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest)
  }

  const files = fs.readdirSync(src)
  files.forEach((file) => {
    fs.copyFileSync(path.join(src, file), path.join(dest, file))
  })
}

copyDir(inputDir, outputDir)
