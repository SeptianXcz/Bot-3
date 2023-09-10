/*
Thanks to Botcahx
Thanks to Betabotz
Thanks to DyLux-FG
Thanks to Subscriber
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['48459088950', 'Ryuhei-', true],
  ['48459088950'], 
  ['48459088950'],
  ['628978613993']
] // Nomor Owner

global.mods = ['48459088950'] 
global.prems = ['48459088950', '48459088950', '628978613993']

// Harus di isi
global.lann = 'isi_dulu' // https://api.betabotz.org
global.btc = 'isi_dulu' // https://api.botcahx.live

// Fitur dari https://api.betabotz.org (global.lann) : remini, toanime openai. mau request fitur? request aja nanti saya buatkan dari api itu

// Fitur dari https://api.botcahx.live (global.btc) : downloader douyin, cecan indo cina, asupan, dl twitter dll (contoh? cek video saya yang nero V3) mau request fitur? request aja nanti saya buatkan dari api itu

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.betabotz.org': 'isi_dulu'
}

// Watermark
global.nama = 'Ryúheii-' // nama owner
global.nomor = '48459088950' // nomor owner
global.nans = 'Ryúheii-' // nama bot 
global.thumb = 'https://i.ibb.co/w4KjD1z/20230813-230848.jpg' // thumbnail bot ( foto menu )
global.dygp = '-' // link group yang ada di menu

// Sticker wm
global.packname = 'Ryvheii' 
global.author = '@Ryúheii' 
global.fgig = '▢ Ikuti saya di Instagram \nhttps://www.instagram.com/sptnhdnta\n'
global.fgsc = 'https://github.com/SeptianXcz' 
global.fgyt = '-'
global.fgpyp = '-'
global.fglog = 'https://i.ibb.co/Csp01NQ/nero-thumbnail.jpg'

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
