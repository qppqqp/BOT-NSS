global.owner = ['529984907794'] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b'
}

// Sticker WM
global.packname = 'โ ๐ฟ๐ ๐๐๐๐๐๐๐๐๐ ๐๐ ๐๐  ๐๐ ๐๐๐๐๐ก๐๐ฃ๐...\nโ ๐๐ฌ ๐๐ฅ ๐๐๐ฆ๐ข๐ง๐จ\n\nโ ๏น๏น๐บ๏น๏น๏น๐ป๏น๏น โ \nโญโโโผโฅ๐ธ๐พแทค๐พอฃ๊ฏญ๐พ๊ฏญ๐พอซ๐ฝอง๐นโโพโโโฎ\nโฝ โโโโโโโโโโโโ โ\nโ โ\nโ โโโโโโโโโโโโค โ\nโ โ\nโ โโโโโโโโโโโโค โ\nโ โ    \nโฟ โโโโโโโโโโโโ โฟ\nโฐโโจโ๐ฎ๐ฎโ โ โโฏ '
global.author = '\n\n\n\n\n๐ธ๐ด๐ ๐๐๐๐๐ ๐๐  ๐๐ผ ๐ฉ๐๐๐  ๐๐ ๐ ๐ ๐๐๐๐ ๐๐๐ ๐๐ ๐๐๐ ๐๐๐๐๐ผ๐ ,\n๐๐ ๐๐ ๐๐๐ ๐๐๐  ๐๐๐๐๐๐๐๐๐๐ ๐๐๐ ๐ ๐๐๐๐๐ผ๐ . \n\n\n\n\n\n๐ป๐๐๐ ๐๐๐๐๐๐๐๐๐๐ ๐๐๐๐ ๐๐๐ ๐๐๐๐๐๐๐๐๐๐\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
