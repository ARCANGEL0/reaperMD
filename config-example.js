
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────╯
import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"
import fs from "fs"
import cheerio from "cheerio"
import fetch from "node-fetch"
import axios from "axios"
import moment from "moment-timezone"
import { en, pt } from "./lib/idiomas/total-idiomas.js"
import dotenv from 'dotenv';
dotenv.config();


//⊱ ━━━━━.Owners .⋅.━━━━ ⊰  

global.owner = [
["YOUR NUMBER", '𝙊𝙬𝙣𝙚𝙧 ', true]
]




global.permitido = global.allowed
global.criadora = global.owner[0][0]


global.backupFolder = ""// folder name where you save database backup !! MUST BE ON SAME FOLDER AS PROJET FOLDER
global.backupGithub "https://github.com/yourRepoHere" // Your separate backup repo where you will store database creds

global.criador = global.owner[0][0] + '@s.whatsapp.net'
global.cocriador = "" // co-owner 
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━⌬

// BOT NUMER)
global.botNumberCode = "+7 900 164-37-52" //example: +59309090909
global.confirmCode = global.botNumberCode

global.mods = []
global.prems = ["528451003894"]
//key de violetics
global.Key360 = [""]
global.langTOGGLE = en
global.defaultLang = 'en'
//━━━━━━━━━━━━━━━━━━━━⏣
global.openaiKey = process.env.OPENAI_API_KEY 
global.keysZens = [""]
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = [""]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = [""]
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ""
global.miftah = ""
global.neoxr = ""
global.botcahx = ''
global.maelyn =""
global.arcangeloAPI = "https://40d7-89-117-96-108.ngrok-free.app/"
global.itsrose = "e"
global.baileys = "@whiskeysockets/baileys"
global.rapidapi= ''
global.APIs = { 
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://ti.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',	
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',	
  rose: 'https://api.itsrose.site',
  popcat : 'https://api.popcat.xyz',
  xcoders : 'https://api-xcoders.site'
},
global.APIKeys = { 
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': `${lolkeysapi}`,
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': '',
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': '',
  'https://api.botcahx.biz.id': '',
  'https://api.ibeng.tech/docs': '',
  'https://api.itsrose.site': '',
  'https://api-xcoders.site': ''
};




/*************************/
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment

//⊱ ━━━━━. INFORMATION FOR STICKERS ⋅.━━━━ ⊰

global.official = [ // SET BOT OWNER
[global.owner[0][0], 'YOUR NAME', 1]
]
global.mail = '' //SET YOUR EMAIL
global.desc = '' //description 
global.desc2 = '' // Longer description 
global.country = 'PT' //Your country 
global.author = "" // sticker description
global.packname = "" // name on sticker

//⊱ ━━━━━.⋅ Version | Name | Links ⋅.━━━━ ⊰

global.vs = "1.0.0"
global.vsJB = global.vs
global.yt = "" // youtube
global.gt = "" // tw
global.ig = "" // instagram 
global.md = "" // github


global.fb = "" // facebook

global.nna = ' '//CANAL UPDATE
global.nn2 = '' //UPDATE
global.nna2 = '' //Help
global.nn = '' //Group 1
global.nnn = ''
global.nnnt = '' //Group 3
global.nnntt = ''//Group 4
global.nnnttt = ''
global.nnnttt1 = ''
global.nnnttt2 = ''
global.nnnttt3 = ''
global.nnnttt4 = '' //Group 9 
global.nnnttt5 = '' //

global.paypal = '' // paypall
global.asistencia = 'Wa.me/' + global.owner[0][0]

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━━━━━━━━━.⋅ Data ⋅.━━━━━━━━━━━━━━ ⊰

global.rg = '> 𓉘✓𓉝 '
global.resultado = rg

global.ag = '> 𓉘!𓉝 '
global.advertencia = ag

global.iig = '> 𓉘🞡𓉝 '
global.informacion = iig

global.fg = '> 𓉘⤫𓉝 '
global.fallo = fg

global.mg = '> 𓉘⤫𓉝 '
global.mal = mg

global.eeg =  '> 𓉘⎔𓉝 '
global.envio = eeg

global.eg = '> 𓉘✓𓉝 '
global.exito = eg



global.wm = "ΒYƬΣSΞC-MĐ 𖠑"
global.igfg = "👓 MЯ.ЯӨBӨƬ"
global.wait = "*[25%] |███▒▒▒▒▒▒▒▒▒▒|*"
global.waitt = "*[50%] |██████▒▒▒▒▒▒▒▒|*"
global.waittt = "[75%] |███████████▒▒▒▒|*"
global.waitttt = "*[100%]|████████████████|*"
global.nomorown = global.owner[0][0]
global.pdoc = ["application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.ms-excel", "application/msword", "application/pdf", "text/rtf"];


global.imagen1 = fs.readFileSync("./media/menus/Menu3.jpg")
global.imagen2 = fs.readFileSync("./media/menus/img1.jpg")
global.imagen3 = fs.readFileSync("./media/menus/img2.jpg")
global.imagen4 = fs.readFileSync("./media/menus/img3.jpg")
global.imagen5 = fs.readFileSync("./media/menus/img4.jpg")
global.imagen6 = fs.readFileSync("./media/menus/img5.jpg")
global.imagen7 = fs.readFileSync("./media/menus/img6.jpg")
global.imagen8 = fs.readFileSync("./media/menus/img7.jpg")
global.imagen9 = fs.readFileSync("./media/menus/img8.jpg")
global.imagen10 = fs.readFileSync("./media/menus/img9.jpg")
global.imagen11 = fs.readFileSync("./media/menus/img10.jpg")
global.imagen12 = fs.readFileSync("./media/menus/img11.jpg")
global.imagen13 = fs.readFileSync("./media/menus/img12.jpg")



//━━━━━━━━━━━━━━ imagge ━━━━━━━━━
global.henryprofile = './media/menus/me.jpg'
global.img = './media/menus/img12.jpg'
global.img2 = './media/menus/img11.jpg'

global.img3 = './media/menus/img10.jpg' //prem
global.img4 = './media/menus/img9.jpg' //prem

global.img5 = './media/menus/img8.jpg'
global.img6 = './media/menus/img7.jpg'
global.img7 = './media/menus/img6.jpg'
global.img8 = './media/menus/img5.jpg'
global.img9 = './media/menus/img4.jpg'

global.img10 = './media/menus/img3.jpg'
global.img11 = './media/menus/img2.jpg'
global.img12 = './media/menus/img1.jpg'
global.img13 = './media/menus/img12.jpg'
global.img14 = './media/menus/img5.jpg'
global.img15 = './media/menus/img10.jpg'

global.img16 = './media/menus/img4.jpg' //+18

global.img17 = './media/menus/img2.jpg'
global.img18 = './media/menus/img8.jpg'

global.logogit = './media/menus/img3.jpg'

global.welgata = [ig, md, ig, paypal, ig]
global.redesMenu = [ md, ig, paypal, asistencia]
global.gataMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18]
global.gataVidMenu = ['./media/menus/Menuvid1.mp4', './media/menus/Menuvid2.mp4', './media/menus/Menuvid3.mp4']
global.gataImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13]
global.meProfile = henryprofile

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


//⊱ ━━━━━.⋅ RPG ⋅.━━━━ ⊰



global.cmenut = "❖––––––『"
global.cmenub = "┊✦ "
global.cmenuf = "╰━═┅═━––––––๑\n"
global.cmenua = "\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     "
 
global.dmenut = "*❖─┅──┅〈*"
global.dmenub = "*┊»*"
global.dmenub2 = "*┊*"
global.dmenuf = "*╰┅────────┅✦*"
global.htjava = "⫹⫺"

global.htki = "*⭑•̩̩͙⊱•••• ☪*"
global.htka = "*☪ ••••̩̩͙⊰•⭑*"

global.comienzo = "• • ◕◕════"
global.fin = " • •"

global.botdate = `⫹⫺ Data:  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}`; //Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`;//America/Los_Angeles
global.fgif = {
            key: {
                 participant : '0@s.whatsapp.net'},
            message: { 
                        "videoMessage": { 
                        "title": wm,
                        "h": `Hmm`,
                        'seconds': '999999999', 
                        'gifPlayback': 'true', 
                        'caption': bottime,
                        'jpegThumbnail': fs.readFileSync('./media/menus/Menu2.jpg')
                               }
                              }
                             };



global.multiplier = 60 // | The higher it is, The harder levelup 


let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  import(`${file}?update=${Date.now()}`);
});
