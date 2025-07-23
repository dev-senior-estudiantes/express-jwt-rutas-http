const fs = require('fs')

const readContent = async (dataPath) => {
  return new Promise(resolve => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err
      }
      let result = data
      if (result === '') {
        result = '[]'
      }
      resolve(JSON.parse(result))
    })
  })
}

const writeContent = async (path, data) => {
  return new Promise(resolve => {
    fs.writeFile(path, data, 'utf-8', (err) => {
      if (err) {
        throw err
      }
      resolve(null)
    })
  })
}

module.exports = {
  readContent,
  writeContent
}
