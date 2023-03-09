// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab

// Base Haikal Hw Mods : Copyan Dari Base Dika


const fs = require('fs')
const chalk = require('chalk')


global.wlcmm = []
global.wlcm = []
global.ntnsfw = []
global.ntnsfww = []
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
//=================================================//
//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://www.youtube.com/@kz._'// ubah aia
global.ig = '-' // ubah aja
global.linkgrupss = "-"
global.email = 'popobudak@gmail.com'
global.region = 'Indonesia'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Fayruzi' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = 'NaxyBot' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'Fayruzi' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
// Other
global.owner = ['6288227784891','19709000474'] // ubah aja pake nomor lu
global.premium = ['6288227784891','19709000474'] // ubah aja pake nomor lu
global.packname = 'fayruzi' // ubah aja
global.ownerr = ['Fayruzi'] // ubaha aja
global.author = 'fayruzi' //ubah aja
global.sessionName = 'haikal'
global.prefa = ['','!','.',',','🐤','🗿'] // Gausah Mendingan 
global.sp = '⭔' // Gausah Juga

// Terserah
global.mess = {
    nsfw: '*Fitur NSFW tidak diaktifkan, chat admin grup supaya diaktifkan*_',
    owner: 'Ente Kadang-kadang Ente, Nih Khusus Owner Nih!!!',
    wait: '_*Tunggu bang lagi loading*_',    
    private: 'Fitur yang Digunakan Hanya Untuk Obrolan Pribadi!!! ',
    verif: 'Hai Kakak 👋 Ini Adalah Bot Khusus Group Silahkan Meminta Pasword Terlebih Dahulu Agar Bisa Menggunakan NaxyBot',
}
//=================================================//
//Gausah Di Apa2 in
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
//=================================================//
global.limitawal = {
    premium: "Infinity",
    free: 100
}
   global.rpg = {
   darahawal: 100,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
//=================================================//
//Terserah Kalau Paham 
global.thumb = fs.readFileSync("./baseikal/image/hw.jpg")
global.log0 = fs.readFileSync("./baseikal/image/haikal.jpg")
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})