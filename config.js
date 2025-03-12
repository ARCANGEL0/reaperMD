
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
["351927285125", '𝙊𝙬𝙣𝙚𝙧 ', true], 
["351927285125"]
]


global.permitido = [
["351927285125"],
["554598527531"],
["351927232470"],
["447598848203"],
]

global.allowed = [
["351927285125"],
["554598527531"],
["351927232470"],
["447598848203"],
 
]
global.criadora = [
"554598527531"
]

global.backupFolder = "drive/Backups"// folder name where you save database backup !! MUST BE ON SAME FOLDER AS PROJET FOLDER
global.backupGithub "https://github.com/ARCANGEL0/drive" // Your separate backup repo where you will store database creds



global.criador = "351927285125@s.whatsapp.net"
global.cocriador = "554598527531@s.whatsapp.net"
//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━⌬

// BOT NUMER)
global.botNumberCode = "+7 900 164-37-52" //example: +59309090909
global.confirmCode = "+7 900 164-37-52"

global.mods = []
global.prems = ["528451003894"]
//key de violetics
global.Key360 = ["964f-0c75-7afc"]
   
  
//⊱ ━━━━━.⋅ LANGUAGE ⋅.━━━━ ⊰ 

//Add the language you want 


//  en = English         pt = Português 

global.arcangeloAPI = "https://40d7-89-117-96-108.ngrok-free.app/"
global.langTOGGLE = en
global.defaultLang = 'en'
//━━━━━━━━━━━━━━━━━━━━⏣
global.openaiKey = process.env.OPENAI_API_KEY 
global.keysZens = ["LuOlangNgentot", "c2459db922", "37CC845916", "6fb0eff124", "hdiiofficial", "fiktod", "BF39D349845E", "675e34de8a", "0b917b905e6f"]
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ["29d4b59a4aa687ca", "5LTV57azwaid7dXfz5fzJu", "cb15ed422c71a2fb", "5bd33b276d41d6b4", "HIRO", "kurrxd09", "ebb6251cc00f9c63"]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ["5VC9rvNx", "cfALv5"]
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = "9cc7786eaa1e0dbea0179e50"
global.miftah = "Edg67X"
global.neoxr = "u6MXRU"
global.botcahx = 'esroWYIE'
global.maelyn ="GC69DuhN8w"
global.itsrose = "Rk-3b78f4b1ca5993ae3c727eb07b91f68e"
global.baileys = "@whiskeysockets/baileys"
global.rapidapi= '5d5bc622a0msh2ccc53929ee80c5p1d5115jsn48fc9f744a85'
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
  'https://violetics.pw': 'beta',
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren'
};




/*************************/
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment

//⊱ ━━━━━.⋅ Version | Name | Links ⋅.━━━━ ⊰

global.official = [ // SET BOT OWNER
["351927285125", 'Henry 💻', 1]
]
global.mail = 'henry.arcangello@gmail.com' //SET YOUR EMAIL
global.desc = '' //description 
global.desc2 = '' // Longer description 
global.country = 'PT' //Your country 
global.author = "ΒYƬΣSΞC-MĐ" // sticker description
global.packname = "👓 MЯ.ЯӨBӨƬ "

//⊱ ━━━━━.⋅ Version | Name | Links ⋅.━━━━ ⊰

global.vs = "1.6.1"
global.vsJB = global.vs
global.yt = "https://www.instagram.com/h.arcangelo"
global.gt = "ΒYƬΣSΞC-MĐ"
global.ig = "https://www.instagram.com/h.arcangelo"
global.md = "https://github.com/ARCANGEL0/reaperMD"


global.fb = "https://www.facebook.com/profile.php?id=100089128511446"

global.nna = ' '//CANAL UPDATE
global.nn2 = '' //UPDATE
global.nna2 = '' //Help
global.nn = '' //Grupo 1
global.nnn = ''
global.nnnt = '' //Grupo 3
global.nnntt = ''//Grupo 4
global.nnnttt = ''
global.nnnttt1 = ''
global.nnnttt2 = ''
global.nnnttt3 = ''
global.nnnttt4 = '' //Grupo 9 COL
global.nnnttt5 = '' //A.T.M.me

global.paypal = 'https://paypal.me/henryarcangelo'
global.asistencia = 'Wa.me/351927285125'

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
global.nomorown = "351927285125"
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

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ฅ^•ﻌ•^ฅ


global.multiplier = 60 // | The higher it is, The harder levelup 


let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  import(`${file}?update=${Date.now()}`);
});
