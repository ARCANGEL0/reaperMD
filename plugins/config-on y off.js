
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch'
import fs from 'fs' 
import schedule from 'node-schedule'

function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, text }) => { 
//try{
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'
process.env.TZ = 'America/Sao_Paulo';



  const horaatual = moment().tz('America/Sao_Paulo').format('HH:mm')
  const scheduledTime = new Date();
  
  
  /*
let titulo = [ 
langTOGGLE.smsParaAdmins() + ' ' + `${m.isGroup ? chat.welcome ? '🌕' : '🌒' : langTOGGLE.smsNoGg()}`, 
langTOGGLE.smsParaAdmins() + ' ' + `${m.isGroup ? chat.detect ? '🌕' : '🌒' : langTOGGLE.smsNoGg()}`,  
langTOGGLE.smsParaAdmins() + ' ' + `${m.isGroup ? chat.autolevelup ? '🌕' : '🌒' : langTOGGLE.smsNoGg()}`,   
langTOGGLE.smsParaOw() + ' ' + `${bot.restrict ? '🌕' : '🌒'}`,    
langTOGGLE.smsParaOw() + ' ' + `${bot.antiCall ? '🌕' : '🌒'}`,
langTOGGLE.smsParaOw() + ' ' + `${bot.antiSpam ? '🌕' : '🌒'}`,	
langTOGGLE.smsParaOw() + ' ' + `${global.opts['self'] ? '🌒' : '🌕'}`,    
langTOGGLE.smsParaAdmins() + ' ' + `${m.isGroup ? chat.modoadmin ? '🌕' : '🌒' : langTOGGLE.smsNoGg()}`,  
langTOGGLE.smsParaOw() + ' ' + `${global.opts['autoread'] ? '🌕' : '🌒'}`, 
langTOGGLE.smsParaOw() + ' ' + `${bot.temporal ? '🌕' : '🌒'}`,      
langTOGGLE.smsParaAdmins() + ' ' + `${m.isGroup ? chat.stickers ? '🌕' : '🌒' : langTOGGLE.smsNoGg()}`,   
langTOGGLE.smsParaAdmins() + ' ' + `${m.isGroup ? chat.autosticker ? '🌕' : '🌒' : langTOGGLE.smsNoGg()}`,   
langTOGGLE.smsParaAdmins() + ' ' + `${m.isGroup ? chat.reaction ? '🌕' : '🌒' : langTOGGLE.smsNoGg()}`,    
langTOGGLE.smsParaAdmins() + ' ' + `${m.isGroup ? chat.audios ? '🌕' : '🌒' : langTOGGLE.smsNoGg()}`,  
langTOGGLE.smsParaAdmins() + ' ' + `${m.isGroup ? chat.modohorny ? '🌕' : '🌒' : langTOGGLE.smsNoGg()}`,   
langTOGGLE.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antitoxic ? '🌕' : '🌒' : langTOGGLE.smsNoGg()}`,   
langTOGGLE.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiver ? '🌕' : '🌒' : langTOGGLE.smsNoGg()}`,  
langTOGGLE.smsParaAdmins() + ' ' + `${m.isGroup ? chat.delete ? '🌕' : '🌒' : langTOGGLE.smsNoGg()}`,  
langTOGGLE.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antifake ? '🌕' : '🌒' : langTOGGLE.smsNoGg()}`,  
langTOGGLE.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiLink ? '🌕' : '🌒' : langTOGGLE.smsNoGg()}`,   
langTOGGLE.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiLink2 ? '🌕' : '🌒' : langTOGGLE.smsNoGg()}`,    
langTOGGLE.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiTiktok ? '🌕' : '🌒' : langTOGGLE.smsNoGg()}`,    
langTOGGLE.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiYoutube ? '🌕' : '🌒' : langTOGGLE.smsNoGg()}`,    
langTOGGLE.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiTelegram ? '🌕' : '🌒' : langTOGGLE.smsNoGg()}`,    
langTOGGLE.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiFacebook ? '🌕' : '🌒' : langTOGGLE.smsNoGg()}`,   
langTOGGLE.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiInstagram ? '🌕' : '🌒' : langTOGGLE.smsNoGg()}`,    
langTOGGLE.smsParaAdmins() + ' ' + `${m.isGroup ? chat.antiTwitter ? '🌕' : '🌒' : langTOGGLE.smsNoGg()}`,    
langTOGGLE.smsParaOw() + ' ' + `${global.opts['pconly'] ? '🌕' : '🌒'}`,  
langTOGGLE.smsParaOw() + ' ' + `${global.opts['gconly'] ? '🌕' : '🌒'}`]

let nombre = [ langTOGGLE.smsWel1(), langTOGGLE.smsDete1(), langTOGGLE.smsANivel1(), langTOGGLE.smsRestri1(), langTOGGLE.smsLlamar1(), langTOGGLE.smsAntiSp1(), langTOGGLE.smsModP1(), langTOGGLE.smsModAd1(), langTOGGLE.smsLect1(), langTOGGLE.smsTempo1(), langTOGGLE.smsStik1(), langTOGGLE.smsStickA1(), langTOGGLE.smsReacc1(), langTOGGLE.smsAudi1(), langTOGGLE.smsModHor1(), langTOGGLE.smsAntitoc1(), langTOGGLE.smsModOb1(), langTOGGLE.smsAntiEli1(), langTOGGLE.smsAntiInt1(), langTOGGLE.smsAntiE1(), langTOGGLE.smsAntiEE1(), langTOGGLE.smsAntiTT1(), langTOGGLE.smsAntiYT1(), langTOGGLE.smsAntiTEL1(), langTOGGLE.smsAntiFB1(),
langTOGGLE.smsAntiIG1(), langTOGGLE.smsAntiTW1(), langTOGGLE.smsSOLOP1(), langTOGGLE.smsSOLOG1()]

let descripción = [ langTOGGLE.smsWel2(), langTOGGLE.smsDete2(), langTOGGLE.smsANivel2(), langTOGGLE.smsRestri2(), langTOGGLE.smsLlamar2(), langTOGGLE.smsAntiSp2(), langTOGGLE.smsModP2(), langTOGGLE.smsModAd2(), langTOGGLE.smsLect2(), langTOGGLE.smsTempo2(), langTOGGLE.smsStik2(), langTOGGLE.smsStickA2(), langTOGGLE.smsReacc2(), langTOGGLE.smsAudi2(), langTOGGLE.smsModHor2(), langTOGGLE.smsAntitoc2(), langTOGGLE.smsModOb2(), langTOGGLE.smsAntiEli2(), langTOGGLE.smsAntiInt2(), langTOGGLE.smsAntiE2(), langTOGGLE.smsAntiEE2(), langTOGGLE.smsAntiTT2(), langTOGGLE.smsAntiYT2(), langTOGGLE.smsAntiTEL2(), langTOGGLE.smsAntiFB2(),
langTOGGLE.smsAntiIG2(), langTOGGLE.smsAntiTW2(), langTOGGLE.smsSOLOP2(), langTOGGLE.smsSOLOG2()]

let comando = [ "welcome", "detect", "autolevelup", "restrict", "anticall", "antispam", "public", "modoadmin", "autoread", "temporal", "stickers", "autosticker", "reaction", "audios", "modohorny", "antitoxic", "antiviewonce", "antidelete", "antifake", "antilink", "antilink2", "antitiktok", "antiyoutube", "antitelegram", "antifacebook",
"antinstagram", "antitwitter", "pconly", "gconly"]

let sections = Object.keys(titulo, nombre, descripción, comando).map((v, index) => ({ title: `${titulo[v]}`,
rows: [{ title: `${nombre[v]} : ${command} ${comando[v]}`, description: `${1 + index}. ${descripción[v]}`, rowId: usedPrefix + command + ' ' + comando[v], }], }))

let name = await conn.getName(m.sender)
/*const listMessage = {
text: `${langTOGGLE.smsConfi10()}`,
footer: `╭━━━🪶 *${langTOGGLE.smsConfi1()}* 🪶━━━━⬣
┃
┃🌟 ${langTOGGLE.smsConfi2()} *${name}*
┃
${langTOGGLE.smsConfi3()}
${langTOGGLE.smsConfi4()}
┃
${langTOGGLE.smsConfi5()}
${langTOGGLE.smsConfi6()}
${langTOGGLE.smsConfi7()}
${langTOGGLE.smsConfi8()}
${m.isGroup ? `┃` : `┃\n${langTOGGLE.smsConfi9()}`}
╰━━━━━🪶 *${vs}* 🪶━━━━⬣
${wm}`,
title: null,
buttonText: `⚙️ ${langTOGGLE.smsConfi1()} ⚙️`,
sections }*/

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false

switch (type) {
case 'welcome': case 'bienvenida':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
    
case 'detect': case 'avisos':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
		
case 'antidelete': case 'antieliminar': case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
    
    case 'modoia':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.db.data.settings[conn.user.jid].modoia =isEnable
break
case 'public': case 'desativado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.desativado =isEnable
break
    
case 'ausente':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.db.data.users[global.criador].ausente =isEnable
break
case 'ghost':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.db.data.users[global.criador].ghost =isEnable
break
case 'ocupado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.db.data.users[global.criador].offlineStart = new Date()
global.db.data.users[global.criador].ocupado =isEnable
break
case 'except':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.db.data.chats[m.chat].semrestricao =isEnable
break


case 'sleep': case 'zzz':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.db.data.users[global.criador].dormindo =isEnable
break
    
case 'antizap': case 'antiwhats':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
    
case 'antilink': case 'antihttp':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
		
case 'antitiktok': case 'antitk': case 'antitik':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTiktok = isEnable 
break
		
case 'antiyoutube': case 'antiyt':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiYoutube = isEnable 
break
		
case 'antitelegram': case 'antitl': case 'antitele': case 'antitg': case 'antitel':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTelegram = isEnable 
break
		
case 'antifacebook': case 'antifb': case 'antifbook':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiFacebook = isEnable 
break
		
case 'antiinstagram': case 'antinstagram': case 'antiig': case 'antig': case 'antiinsta': case 'antinsta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiInstagram = isEnable 
break
		
case 'antitwitter': case 'antitw': case 'antitwit': case 'antitwter': case 'antitwiter': case 'antiTwr':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTwitter = isEnable 
break
    

    
case 'stickers':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.stickers = isEnable          
break
    
case 'temporal':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.temporal = isEnable
break
		
case 'autolevelup': case 'autonivel': case 'nivelautomatico':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autolevelup = isEnable          
break
    
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
    
case 'reaction': case 'reaccion': case 'emojis': case 'antiemojis': case 'reacciones': case 'reaciones':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.reaction = isEnable          
break
		
case 'antitoxic': case 'antitoxicos': case 'antimalos':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antitoxic = isEnable
break
    
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
    
case 'antiver': case 'modover': case 'modoobservar': case 'modobservar': case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiver = isEnable 
break
case 'nsfw': case '18': case '+18': case '18+': case 'NSFW':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.nsfw = isEnable 
break
		
case 'antiinternacional': case 'antinternacional': case 'antinternational': case 'antifake': case 'antifalsos': case 'antivirtuales': case 'antiextranjeros':		
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antifake = isEnable          
break
		
case 'jadibotmd': case 'modojadibot': case 'serbotmd': case 'modoserbot': 
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.jadibotmd = isEnable
break 
    
case 'restrict': case 'restringir':
isAll = true
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
bot.restrict = isEnable
break
    
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
    
case 'autoread': case 'autovisto':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}

bot.autoread = isEnable  
break
    
case 'anticall': case 'antichamadas':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
		
case 'antispam':
isAll = true
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
chat.antiSpam = isEnable
break
 
case 'modoadmin': case 'sembot': case 'mutebot': case 'offbot':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
  
  if (args[1] && args[1].includes(':')) {
    
    if(isEnable){
   
    chat.modoadmin=false
    const currentDateTime = new Date();

const currentHours = currentDateTime.getHours();

const currentMinutes = currentDateTime.getMinutes();
const currentSeconds = currentDateTime.getSeconds();

let timeoutset;
    
   
  // User input is in the format HH:mm or HH:mm:ss
  const [hours, minutes, seconds] = args[1].split(':').map(Number);

  // Check if seconds are present, otherwise default to 0
  const totalSeconds = isNaN(seconds) ? 0 : seconds;

  timeoutset = (hours * 3600 + minutes * 60 + totalSeconds) * 1000; // Convert hours, minutes, and seconds to milliseconds

    
    
    

    
    const newScheduledTime = new Date(currentDateTime.getTime() + timeoutset);




let tempo = formatTime(timeoutset)

   m.reply(`${eg} ⚠️ BOT SERÁ DESATIVADO⚠️ \n 
❖─┅──┅\n💀 COMANDOS DISPONÍVEIS DURANTE ${tempo}\n─┅──┅❖ 

  -- 𝓔𝓭𝓰𝓪𝓻 𝓐. 🐈‍⬛`) 
  const horarioBot = new Date();
horarioBot.setHours(newScheduledTime.getHours(), newScheduledTime.getMinutes(),newScheduledTime.getSeconds() , 0)

 schedule.scheduleJob(horarioBot, async () => {

  console.log('Executing scheduled task...');

  
  chat.modoadmin = true 
m.reply(`${eg} ❖─┅──┅\n🌕👁️ BOT DESATIVADO 𓄿\n─┅──┅❖ 

${pickRandom([ 
 "Adeus, como uma sombra que se dissipa com o nascer do sol, parto para o além.",
  "Assim como o vento leva as folhas secas, minha despedida é suave, mas inevitável.",
  "Parto desta existência como um barco que se afasta silenciosamente no crepúsculo.",
  "Da encruzilhada da vida, escolho o caminho da despedida, deixando para trás memórias e mistérios.",
  "Como um eco que desvanece na distância, minha presença se desvanece no horizonte do adeus.",
  "Na penumbra da despedida, deixo para trás a trama intricada da vida para encontrar o desconhecido.",
  "Assim como a última nota de uma melodia, minha despedida ressoa no silêncio que se segue.",
  "Deixo este palco como um ator após sua última cena, desaparecendo nas cortinas do destino.",
  "Como as sombras da noite que se retiram com a luz da aurora, eu me despeço da escuridão.",
  "Nas asas da despedida, como um corvo solitário, alço voo para longe dos domínios conhecidos."
])}
-- 𝓔𝓭𝓰𝓪𝓻 𝓐.  🐈‍⬛`)
  }); 
  
  return !0
 
  }
    else if (!isEnable){
   
    chat.modoadmin=true
    
    const currentDateTime = new Date();

const currentHours = currentDateTime.getHours();

const currentMinutes = currentDateTime.getMinutes();
const currentSeconds = currentDateTime.getSeconds();

let timeoutset;
    
   
  // User input is in the format HH:mm or HH:mm:ss
  const [hours, minutes, seconds] = args[1].split(':').map(Number);

  // Check if seconds are present, otherwise default to 0
  const totalSeconds = isNaN(seconds) ? 0 : seconds;

  timeoutset = (hours * 3600 + minutes * 60 + totalSeconds) * 1000; // Convert hours, minutes, and seconds to milliseconds

    
    
    

    
    const newScheduledTime = new Date(currentDateTime.getTime() + timeoutset);




let tempo = formatTime(timeoutset)

   m.reply(`${eg} ⚠️ BOT DESATIVADO ⚠️ \n 
❖─┅──┅\n💀 COMANDOS INDISPONÍVEIS POR ${tempo}\n─┅──┅❖ 

${pickRandom([ 
 "Adeus, como uma sombra que se dissipa com o nascer do sol, parto para o além.",
  "Assim como o vento leva as folhas secas, minha despedida é suave, mas inevitável.",
  "Parto desta existência como um barco que se afasta silenciosamente no crepúsculo.",
  "Da encruzilhada da vida, escolho o caminho da despedida, deixando para trás memórias e mistérios.",
  "Como um eco que desvanece na distância, minha presença se desvanece no horizonte do adeus.",
  "Na penumbra da despedida, deixo para trás a trama intricada da vida para encontrar o desconhecido.",
  "Assim como a última nota de uma melodia, minha despedida ressoa no silêncio que se segue.",
  "Deixo este palco como um ator após sua última cena, desaparecendo nas cortinas do destino.",
  "Como as sombras da noite que se retiram com a luz da aurora, eu me despeço da escuridão.",
  "Nas asas da despedida, como um corvo solitário, alço voo para longe dos domínios conhecidos."
])}
  -- 𝓔𝓭𝓰𝓪𝓻 𝓐. 🐈‍⬛`) 
  const horarioBot = new Date();
horarioBot.setHours(newScheduledTime.getHours(), newScheduledTime.getMinutes(),newScheduledTime.getSeconds() , 0)

 schedule.scheduleJob(horarioBot, async () => {

  console.log('Executing scheduled task...');

  
  chat.modoadmin =false 
m.reply(`${eg} ❖─┅──┅\n📜✒️ BOT REATIVADO NOVAMENTE\n─┅──┅❖ 

${pickRandom([

"Voltei do vale da sombra da morte para contemplar mais uma vez a luz do dia.",
  "Como um corvo que retorna ao seu poleiro, estou de volta para encarar os enigmas da existência.",
  "Dos abismos sombrios emergi, pronto para saudar novamente o mundo dos vivos.",
  "Do limiar entre o sono e a vigília, regresso à realidade com olhos reavivados.",
  "As portas do desconhecido se abriram e eu, como um espectro ressurgido, retorno à vida.",
  "Após vagar por terras obscuras, retorno como uma fênix, pronto para renascer das cinzas.",
  "Das profundezas do esquecimento, retornei para reescrever minha própria história.",
  "As sombras da ausência dissiparam-se, e estou de volta para abraçar a luz da presença.",
  "Como um viajante perdido retorna à senda certa, aqui estou eu, de volta aos caminhos familiares.",
  "Das trevas do exílio, retorno com palavras de reconciliação e boas-vindas."
])}
-- 𝓔𝓭𝓰𝓪𝓻 𝓐.  🐈‍⬛`)
  }); 
  
  return !0
 
    }
    
  }  else if(args[1] && !args[1].includes(':') ){
  m.reply(`𝙵𝚘𝚛𝚖𝚊𝚝𝚘 𝚝𝚎𝚖𝚙𝚘𝚛𝚊𝚕 𝚎𝚛𝚛𝚊𝚍𝚘... 𝚞𝚜𝚎 𝚗𝚊 𝚜𝚎𝚐𝚞𝚒𝚗𝚝𝚎 𝚜𝚒𝚗𝚝𝚊𝚡𝚎...    𝙷𝚘𝚛𝚊:𝙼𝚒𝚗𝚞𝚝𝚘𝚜:𝚂𝚎𝚐𝚞𝚗𝚍𝚘𝚜      𝙴𝚡: 𝟸 𝚑𝚘𝚛𝚊𝚜, 𝟸𝟽 𝚖𝚒𝚗𝚞𝚝𝚘𝚜 𝚎 𝟷𝟹 𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜 𝚝𝚘𝚛𝚗𝚊𝚖-𝚜𝚎    *.𝚘𝚗/𝚘𝚏𝚏 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝟶𝟸:𝟸𝟽:𝟷𝟹*`)
  
  return !0
  }
  else if (!args[1]){
    chat.modoadmin = isEnable
    
  }
}
     
break  


case 'interacoes': case 'inter':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
  
  if (args[1] && args[1].includes(':')) {
    
    if(!isEnable){
   
      global.db.data.chats[m.chat].ricksan = true; 
chat.downloads = true;    
chat.midia = true;    
chat.gpt = true;    
chat.jogos = true;    
chat.busca = true;    
chat.reply = true;
chat.iaAtiva =true;
chat.acoes = true
    const currentDateTime = new Date();

const currentHours = currentDateTime.getHours();

const currentMinutes = currentDateTime.getMinutes();
const currentSeconds = currentDateTime.getSeconds();

let timeoutset;
    
   
  // User input is in the format HH:mm or HH:mm:ss
  const [hours, minutes, seconds] = args[1].split(':').map(Number);

  // Check if seconds are present, otherwise default to 0
  const totalSeconds = isNaN(seconds) ? 0 : seconds;

  timeoutset = (hours * 3600 + minutes * 60 + totalSeconds) * 1000; // Convert hours, minutes, and seconds to milliseconds

    
    
    

    
    const newScheduledTime = new Date(currentDateTime.getTime() + timeoutset);




let tempo = formatTime(timeoutset)

   m.reply(`${eg} ⚠️ AS INTERAÇÕES SERÃO DESLIGADAS⚠️ \n 
❖─┅──┅\n💀 COMANDOS E FUNÇÕES DISPONÍVEIS DURANTE ${tempo}\n─┅──┅❖ 

  -- 𝓔𝓭𝓰𝓪𝓻 𝓐. 🐈‍⬛`) 
  const horarioBot = new Date();
horarioBot.setHours(newScheduledTime.getHours(), newScheduledTime.getMinutes(),newScheduledTime.getSeconds() , 0)

 schedule.scheduleJob(horarioBot, async () => {

  console.log('Executing scheduled task...');

  global.db.data.chats[m.chat].ricksan =false; 
chat.downloads =false;    
chat.midia =false;    
chat.gpt =false;    
chat.jogos =false;    
chat.busca =false;    
chat.reply =false;
chat.iaAtiva =false;
chat.acoes =false;

  
m.reply(`${eg} ❖─┅──┅\n🪶💀 INTERAÇÕES DESATIVADAS ༒︎\n─┅──┅❖ 

${pickRandom([ 
 "Adeus, como uma sombra que se dissipa com o nascer do sol, parto para o além.",
  "Assim como o vento leva as folhas secas, minha despedida é suave, mas inevitável.",
  "Parto desta existência como um barco que se afasta silenciosamente no crepúsculo.",
  "Da encruzilhada da vida, escolho o caminho da despedida, deixando para trás memórias e mistérios.",
  "Como um eco que desvanece na distância, minha presença se desvanece no horizonte do adeus.",
  "Na penumbra da despedida, deixo para trás a trama intricada da vida para encontrar o desconhecido.",
  "Assim como a última nota de uma melodia, minha despedida ressoa no silêncio que se segue.",
  "Deixo este palco como um ator após sua última cena, desaparecendo nas cortinas do destino.",
  "Como as sombras da noite que se retiram com a luz da aurora, eu me despeço da escuridão.",
  "Nas asas da despedida, como um corvo solitário, alço voo para longe dos domínios conhecidos."
])}
-- 𝓔𝓭𝓰𝓪𝓻 𝓐.  🐈‍⬛`)
  }); 
  
  return !0
 
  }
    else if (isEnable){
   
      global.db.data.chats[m.chat].ricksan =false; 
chat.downloads =false;    
chat.midia =false;    
chat.gpt =false;    
chat.jogos =false;    
chat.busca =false;    
chat.reply =false;
chat.iaAtiva =false;
chat.acoes =false;
    
    const currentDateTime = new Date();

const currentHours = currentDateTime.getHours();

const currentMinutes = currentDateTime.getMinutes();
const currentSeconds = currentDateTime.getSeconds();

let timeoutset;
    
   
  // User input is in the format HH:mm or HH:mm:ss
  const [hours, minutes, seconds] = args[1].split(':').map(Number);

  // Check if seconds are present, otherwise default to 0
  const totalSeconds = isNaN(seconds) ? 0 : seconds;

  timeoutset = (hours * 3600 + minutes * 60 + totalSeconds) * 1000; // Convert hours, minutes, and seconds to milliseconds

    
    
    

    
    const newScheduledTime = new Date(currentDateTime.getTime() + timeoutset);




let tempo = formatTime(timeoutset)

   m.reply(`${eg} ⚠️ INTERAÇÕES DESATIVADAS⚠️ \n 
❖─┅──┅\n💀 INTERAÇÃO E FUNÇÕES DO POE DESLIGADAS POR ${tempo}\n─┅──┅❖ 

${pickRandom([ 
 "Adeus, como uma sombra que se dissipa com o nascer do sol, parto para o além.",
  "Assim como o vento leva as folhas secas, minha despedida é suave, mas inevitável.",
  "Parto desta existência como um barco que se afasta silenciosamente no crepúsculo.",
  "Da encruzilhada da vida, escolho o caminho da despedida, deixando para trás memórias e mistérios.",
  "Como um eco que desvanece na distância, minha presença se desvanece no horizonte do adeus.",
  "Na penumbra da despedida, deixo para trás a trama intricada da vida para encontrar o desconhecido.",
  "Assim como a última nota de uma melodia, minha despedida ressoa no silêncio que se segue.",
  "Deixo este palco como um ator após sua última cena, desaparecendo nas cortinas do destino.",
  "Como as sombras da noite que se retiram com a luz da aurora, eu me despeço da escuridão.",
  "Nas asas da despedida, como um corvo solitário, alço voo para longe dos domínios conhecidos."
])}
  -- 𝓔𝓭𝓰𝓪𝓻 𝓐. 🐈‍⬛`) 
  const horarioBot = new Date();
horarioBot.setHours(newScheduledTime.getHours(), newScheduledTime.getMinutes(),newScheduledTime.getSeconds() , 0)

 schedule.scheduleJob(horarioBot, async () => {

  console.log('Executing scheduled task...');

  
  global.db.data.chats[m.chat].ricksan = true; 
chat.downloads = true;    
chat.midia = true;    
chat.gpt = true;    
chat.jogos = true;    
chat.busca = true;    
chat.reply = true;
chat.iaAtiva = true;
chat.acoes = true ;
m.reply(`${eg} ❖─┅──┅\n📜✒️ INTERACOES REATIVADAS NOVAMENTE\n─┅──┅❖ 

${pickRandom([

"Voltei do vale da sombra da morte para contemplar mais uma vez a luz do dia.",
  "Como um corvo que retorna ao seu poleiro, estou de volta para encarar os enigmas da existência.",
  "Dos abismos sombrios emergi, pronto para saudar novamente o mundo dos vivos.",
  "Do limiar entre o sono e a vigília, regresso à realidade com olhos reavivados.",
  "As portas do desconhecido se abriram e eu, como um espectro ressurgido, retorno à vida.",
  "Após vagar por terras obscuras, retorno como uma fênix, pronto para renascer das cinzas.",
  "Das profundezas do esquecimento, retornei para reescrever minha própria história.",
  "As sombras da ausência dissiparam-se, e estou de volta para abraçar a luz da presença.",
  "Como um viajante perdido retorna à senda certa, aqui estou eu, de volta aos caminhos familiares.",
  "Das trevas do exílio, retorno com palavras de reconciliação e boas-vindas."
])}
-- 𝓔𝓭𝓰𝓪𝓻 𝓐.  🐈‍⬛`)
  }); 
  
  return !0
 
    }
    
  }  else if(args[1] && !args[1].includes(':') ){
  m.reply(`𝙵𝚘𝚛𝚖𝚊𝚝𝚘 𝚝𝚎𝚖𝚙𝚘𝚛𝚊𝚕 𝚎𝚛𝚛𝚊𝚍𝚘... 𝚞𝚜𝚎 𝚗𝚊 𝚜𝚎𝚐𝚞𝚒𝚗𝚝𝚎 𝚜𝚒𝚗𝚝𝚊𝚡𝚎...    𝙷𝚘𝚛𝚊:𝙼𝚒𝚗𝚞𝚝𝚘𝚜:𝚂𝚎𝚐𝚞𝚗𝚍𝚘𝚜      𝙴𝚡: 𝟸 𝚑𝚘𝚛𝚊𝚜, 𝟸𝟽 𝚖𝚒𝚗𝚞𝚝𝚘𝚜 𝚎 𝟷𝟹 𝚜𝚎𝚐𝚞𝚗𝚍𝚘𝚜 𝚝𝚘𝚛𝚗𝚊𝚖-𝚜𝚎    *.𝚘𝚗/𝚘𝚏𝚏 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝟶𝟸:𝟸𝟽:𝟷𝟹*`)
  return !0
  }
  else if (!args[1]){
      global.db.data.chats[m.chat].ricksan = isEnable; 
chat.downloads = isEnable;    
chat.midia = isEnable;    
chat.gpt = isEnable;    
chat.jogos = isEnable;    
chat.busca = isEnable;    
chat.reply = isEnable;
chat.iaAtiva = isEnable;
chat.acoes = isEnable
   
  }
}
     
break    
   
case 'pconly': case 'privado': case 'soloprivados':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.pconly = isEnable

break
    
case 'gconly': case 'grupos': case 'sologrupos':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.gconly= isEnable
break

case 'antiprivado':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break

case 'antitravas':
case 'antitrava':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break

case 'simi':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.simi = isEnable
break

case 'quiz':
case 'quizxp':
case 'competicao':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
bot.quizxp = isEnable;      
break;      

case 'xadrez':
case 'chess':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.xadrez = isEnable;      
break;      

case 'interações':
case 'interacoes':
  
  if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
global.db.data.chats[m.chat].ricksan = isEnable; 
chat.downloads = isEnable;    
chat.midia = isEnable;    
chat.gpt = isEnable;    
chat.jogos = isEnable;    
chat.busca = isEnable;    
chat.reply = isEnable;
chat.iaAtiva = isEnable;
chat.acoes = isEnable;
break;      

case 'reply':
  
  if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.reply = isEnable;
break;      

case 'auto':
  
  if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.iaAtiva = isEnable;
break;      


case 'rick':
case 'ricksanchez':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
global.db.data.chats[m.chat].ricksan = isEnable; 
console.log("test" + global.db.data.chats[m.chat].ricksan ) 
break;      

      case 'downloads':
      case 'dl':
      case 'baixar':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.downloads = isEnable;      
break

case 'busca':
      case 'pesquisa':
      case 'google':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.busca = isEnable;      
break

case 'midia':
      case 'conversores':
      case 'midias':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.midia = isEnable;      
break

case 'ia':
      case 'gpt':
      case 'ai':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.gpt = isEnable;      
break

case 'afk':
      case 'admafk':
      case 'afkadm':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.admafk = isEnable;      
break
case 'actions':
      case 'acoes':
      case 'act':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.acoes = isEnable;      
break


case 'jogos':
      case 'games':
      case 'jogo':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn);
throw false;
}}
chat.jogos = isEnable;      
break


case 'swonly': case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command))
return await m.reply(`BYΓΞSΞC: #~ cfs --${command + ' ' + text}
⎓────────
> [!] 500 INTERNAL ERROR
${global.db.data.chats[m.chat].language === 'pt' ? `> [⎔] ENDPOINT INVÁLIDO
> ‎ 
> ᴅɪɢɪᴛᴇ .ᴍᴇɴᴜ ғᴜɴᴄᴏᴇs ᴘᴀʀᴀ ᴠᴇʀ ᴏs ᴍᴇᴛᴏᴅᴏs ᴅɪsᴘᴏɴɪ́ᴠᴇɪs` : `> [⎔] INVALID ENDPOINT 
> ‎ 
> ᴛʏᴘᴇ .ᴍᴇɴᴜ ғᴜɴᴄᴛɪᴏɴs ᴛᴏ sᴇᴇ ᴀᴠᴀɪʟᴀʙʟᴇ ᴍᴇᴛʜᴏᴅs`
}`)



//conn.sendMessage(m.chat, { text: texto }, { quoted: fkontak })
//conn.sendMessage(m.chat, texto, {quoted: fkontak})	
throw false
}

let modoGrupo = global.db.data.chats[m.chat].language === 'pt' ? ` SISTEMA/GRUPO` : ` SYSTEM/GROUP`

let modoBot = global.db.data.chats[m.chat].language === 'pt' ? ' SISTEMA/TODOS' : ' SYSTEM/ALL'
  
let resultado = `BYΓΞSΞC: #~ cfs --${command + ' ' + text}
⎓────────
> [!] ${type}
> ${isEnable ? '[+] 200 OK | ONLINE' : '[-] 200 OK | OFFLINE '}
> [⎔] ${isAll ? modoBot : modoGrupo}`

await conn.reply(m.chat, resultado, fkontak, m)}	
/*await conn.sendButton(m.chat, `${langTOGGLE['smsAvisoRG']()}ღ *_${langTOGGLE['smsMens1']()}_* *|* ${type} 
ღ *_${langTOGGLE['smsMens2']()}_* *|* ${isEnable ? langTOGGLE.smsEncender() : langTOGGLE.smsApagar()} 
ღ *_${langTOGGLE['smsMens3']()}_* *|* ${isAll ? langTOGGLE.smsMens4() : isUser ? '' : langTOGGLE.smsMens5()}`, wm, null, [[`${isEnable ? langTOGGLE.smsApagar() : langTOGGLE.smsEncender()}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], [langTOGGLE.smsConMenu(), '.menu']], fkontak, m)}*/

handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function formatTime(milliseconds) {

  const totalSeconds = Math.floor(milliseconds / 1000);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}