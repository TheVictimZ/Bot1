global.owner = ['62877424664779']  
global.mods = ['62877424664779'] 
global.prems = ['62877424664779']
global.nameowner = 'Chel'
global.numberowner = '62877424664779'
global.mail = 'im@cheliant.shop' 
global.gc = 'https://chat.whatsapp.com/Kpk8DAnmkWU0CaKvNH6pSs'
global.instagram = 'https://instagram.com/chel_hbs'
global.wm = '© Chel Botz'
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made With'
global.author = 'Chel AI'
global.maxwarn = '2' // Peringatan maksimum

//INI WAJIB DI ISI!//
global.lann = 'YOUR_APIKEY_HERE' 
//Daftar terlebih dahulu https://api.betabotz.eu.org

//INI OPTIONAL BOLEH DI ISI BOLEH JUGA ENGGA//
global.btc = 'YOUR_APIKEY_HERE'
//Daftar https://api.botcahx.eu.org 

global.APIs = {   
  lann: 'https://api.betabotz.eu.org',
  btc: 'https://api.botcahx.eu.org'
}
global.APIKeys = { 
  'https://api.betabotz.eu.org': 'APIKEY', 
  'https://api.botcahx.eu.org': 'APIKEY'
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
