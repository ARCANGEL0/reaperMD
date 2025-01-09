
//⌬───────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬──────────────────

import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import { smsg } from './lib/simple.js'
import { format } from 'util'
import { fileURLToPath } from 'url'
import path, { join } from 'path'
import { unwatchFile, watchFile } from 'fs'
import chalk from 'chalk'   
import fetch from 'node-fetch' 
  import { registerFont, createCanvas, loadImage } from 'canvas'

/**
 * @type {import('@adiwajshing/baileys')}  
 */
const { proto } = (await import('@whiskeysockets/baileys')).default
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(function () {
const isNumber = x => typeof x === 'number' && !isNaN(x)
clearTimeout(this)
resolve()
}, ms))

/**
 * Handle messages upsert
 * @param import('@adiwajshing/baileys').BaileysEventMap<unknown>['messages.upsert']} groupsUpdate 
 */
export async function handler(chatUpdate) {




this.msgqueque = this.msgqueque || [];
this.uptime = this.uptime || Date.now();
if (!chatUpdate) {
return;
}
this.pushMessage(chatUpdate.messages).catch(console.error);
let m = chatUpdate.messages[chatUpdate.messages.length - 1];
if (!m) {
return;
}

const processedMessages = new Set();

    if (processedMessages.has(m.key.id)) {
        return; // Skip duplicate message
    }

    processedMessages.add(m.key.id);
    setTimeout(() => processedMessages.delete(m.key.id), 5000); // Remove from cache after 5 seconds

 
    
if (global.db.data == null) await global.loadDatabase()
/*------------------------------------------------*/	     
if (global.chatgpt.data === null) await global.loadChatgptDB()
/*------------------------------------------------*/	
try {
m = smsg(this, m) || m;
if (!m) {
return;
}
global.mconn = m 
m.exp = 0
m.limit = false
m.money = false
try {
// TOD⁶O: use loop to insert data instead of this
let user = global.db.data.users[m.sender]



/*------------------------------------------------*/	            
let chatgptUser = global.chatgpt.data.users[m.sender];
const isNumber = x => typeof x === 'number' && !isNaN(x)
if (typeof chatgptUser !== "object")
global.chatgpt.data.users[m.sender] = [];		
/*------------------------------------------------*/
if (typeof user !== 'object')
global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.exp)) user.exp = 0


if (!isNumber(user.money)) user.money = 150
if (!isNumber(user.limit)) user.limit = 2     
if (!isNumber(user.nsfwAdv)) user.nsfwAdv = 0     
if (!isNumber(user.adv)) user.adv = 2     
	
if (!isNumber(user.counterPrivate)) user.counterPrivate = 0	                    		    
if (!isNumber(user.afk)) user.afk = -1
//if (!('autolevelup' in user))  user.autolevelup = true
if (!isNumber(user.reporte)) user.reporte = 0
if (!('role' in user)) user.role = '𝘼𝙥𝙧𝙚𝙣𝙙𝙞𝙯 🕯️'

if (!isNumber(user.antispam)) user.antispam = 0
if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0

if (!isNumber(user.level)) user.level = 0
if (!isNumber(user.tentativasRoubo)) user.tentativasRoubo = 5
if (!isNumber(user.limit)) user.limit = 15


if (!isNumber(user.money)) user.money = 150
if (!isNumber(user.spammer)) user.spammer = 0
 if (!user.lbars) user.lbars = '[▒▒▒▒▒▒▒▒▒]'
 if (!user.usuariosRoubados) user.usuariosRoubados = []

}
else
global.db.data.users[m.sender] = {
counterPrivate: 0,
afk: -1,
afkReason: '',
role: '',
reporte: 0,
name: m.name,
age: m.age,
genero: m.genero,
identidade: m.identidade,
hobby: m.hobby,
tempo: m.tempo,
estado: m.estado,	
descricao: m.descricao,
antispam: 0,
antispamlastclaim: 0,
silenced: false,
banned: false,
BannedReason: '',
Banneduser: false,
lbars: '[▒▒▒▒▒▒▒▒▒]',
legendary: 0,
level: 0,
limit: 0,
exp:0,
}



let chat = global.db.data.chats[m.chat]
if (typeof chat !== 'object')
global.db.data.chats[m.chat] = {}
		
if (chat) {
if (!('isBanned' in chat)) chat.isBanned = false                    
if (!('firstTime' in chat)) chat.firstTime = true       
if (!('antiCallGp' in chat)) chat.antiCallGp = true
if (!('nsfw' in chat)) chat.nsfw = true                    
if (!('expira' in chat)) chat.expira = '2000-01-01T00:00:00.000Z'                    
if (!('welcome' in chat)) chat.welcome = true                    
if (!('detect' in chat)) chat.detect = true                    
if (!('acoes' in chat)) chat.acoes = true                    
if (!('sWelcome' in chat)) chat.sWelcome = ''                    
if (!('sBye' in chat)) chat.sBye = ''                    
if (!('sPromote' in chat)) chat.sPromote = ''                    
if (!('sDemote' in chat)) chat.sDemote = '' 
if (!('language' in chat)) chat.language = 'en' 
if (!('delete' in chat))
chat.delete = true                    
if (!('modohorny' in chat)) chat.modohorny = true                    
if (!('stickers' in chat)) chat.stickers = false                   
if (!('autosticker' in chat)) chat.autosticker = false                      
if (!('audios' in chat)) chat.audios = true                     
if (!('antiver' in chat)) chat.antiver = true                  
if (!('antiLink' in chat)) chat.antiLink = true
if (!('antiLink2' in chat)) chat.antiLink2 = false
if (!('antiTiktok' in chat)) chat.antiTiktok = false
if (!('antiYoutube' in chat)) chat.antiYoutube = false
if (!('antiTelegram' in chat)) chat.antiTelegram = false
if (!('antiFacebook' in chat)) chat.antiFacebook = false
if (!('antiInstagram' in chat)) chat.antiInstagram = false
if (!('antiTwitter' in chat)) chat.antiInstagram = false
if (!('antifake' in chat)) chat.antifake = true
if (!('antiSpam' in chat)) chat.antiSpam= true
if (!('name' in chat)) chat.name= await conn.getName(m.chat)
if (!('desc' in chat)) chat.desc=await this.groupMetadata(m.chat).desc?.toString()
if (!('reaction' in chat)) chat.reaction = true    
if (!('viewonce' in chat)) chat.viewonce = true       
if (!('modoadmin' in chat)) chat.modoadmin = false           
if (!('antitoxic' in chat)) chat.antitoxic = true 
if (!('simi' in chat)) chat.simi = false
if (!('antiTraba' in chat)) chat.antiTraba = true
if (!('autolevelup' in chat))  chat.autolevelup = true
} else
global.db.data.chats[m.chat] = {
  quiz:{
    "math":false,
          "cp": '',
      "ca": '',
      "cm": '',
      "xp": 0,
      "id": '',
      "time": ''
  },
  users: {},
isBanned: false,
welcome: true,
detect: false,
language: 'en',
sWelcome: '',
sBye: '',
sPromote: '',
sDemote: '', 
delete: true,
jogos: true,
gpt: true,
expira:'2000-01-01T00:00:00.000Z',
acoes:true,
busca:true,
midia: true,
xadrez:true,
admafk: false,
downloads: true,
modohorny: false,
stickers: true,
autosticker: false,
audios: false,
antiSpam: true,
antiver: true,
antiLink: true,
antiLink2: true,
antiTiktok: false,
antiYoutube: false,
antiTelegram: false,
antiFacebook: false,
antiInstagram: false,
antiTwitter: false,
antifake: true,
reaction: true,
viewonce: true,
modoadmin: false,
antitoxic: true,
simi: false,
antiTraba: true,
autolevelup: true,
edgar: true,
reply: true,
expired: 0,
}

if(!global.db.data.chats[m.chat].language) global.db.data.chats[m.chat].language = 'en'


if(!global.db.data.chats[m.chat].expira)
{
   global.db.data.chats[m.chat].expira = '2000-01-01T00:00:00.000Z'
}
let settings = global.db.data.settings[this.user.jid]

if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
if (settings) {
if (!('desativado' in settings)) settings.self = false
if (!('autoread' in settings)) settings.autoread = false
if (!('autoread2' in settings)) settings.autoread2 = false
if (!('restrict' in settings)) settings.restrict = false
if (!('temporal' in settings)) settings.temporal = false
if (!('antiPrivate' in settings)) settings.antiPrivate = false
if (!('antiCall' in settings)) settings.antiCall = true

if (!('antiSpam' in settings)) settings.antiSpam = true 
if (!('modoia' in settings)) settings.modoia = true
if (!('jadibotmd' in settings)) settings.jadibotmd = true  
} else global.db.data.settings[this.user.jid] = {
desativado: false,
autoread: true,
autoread2: true,
restrict: true,
temporal: true,
antiPrivate: true,
antiCall: true,
antiSpam: false,
modoia: true, 
jadibotmd: true,
}} catch (e) {
console.error(e)
}
if (opts['nyimak']) return

if (opts['pconly'] && m.chat.endsWith('g.us')) return
if (opts['gconly'] && !m.chat.endsWith('g.us')) return
if (opts['swonly'] && m.chat !== 'status@broadcast') return
if (typeof m.text !== 'string')
m.text = ''

const isROwner = [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || m.fromMe
const isOwner = isROwner

global.isROwner = isROwner 
global.isOwner = isOwner || m.sender == global.cocriador || m.fromMe
const isAllowed = [conn.decodeJid(global.conn.user.id), ...global.permitido.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

const isCriadora = [conn.decodeJid(global.conn.user.id), ...global.criadora.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)

//const s = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
// Assuming global.db.data.users[m.sender] is defined




if (m.isBaileys) return
m.exp += Math.ceil(Math.random() * 10)
let usedPrefix
let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch(_ => null)) : {}) || {}
const participants = (m.isGroup ? groupMetadata.participants : []) || []
const user = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) === m.sender) : {}) || {} // User Data
const bot = (m.isGroup ? participants.find(u => conn.decodeJid(u.id) == this.user.jid) : {}) || {}
const isRAdmin = m.sender == global.cocriador || user?.admin == 'superadmin' || false
const isAdmin = isRAdmin || user?.admin == 'admin' || false //user admins? 
const isBotAdmin = bot?.admin || false //Detecta sin el bot es admin

  let username = conn.getName(m.sender)
  const groupAdmins = participants.filter(p => p.admin)
 
  let admins =[]
  const listAdmin = groupAdmins.map((v, i) =>
  admins.push(v.id))
  

  
  let admcheck = admins.includes(m.sender)
	if(!global.db.data.chats[m.chat]){
  global.db.data.chats[m.chat]={}
}
if(!global.db.data.chats[m.chat].users){
  global.db.data.chats[m.chat].users={}
}
if(!global.db.data.chats[m.chat].users[m.sender]){
  global.db.data.chats[m.chat].users[m.sender]={
    exp: 0,
        limit:0,
        role:'⌥ 𝚜𝚌𝚛𝚒𝚙𝚝 𝚔𝚒𝚍𝚍𝚒𝚎',
        money:0,
        level:0,
        adm: admcheck,
        legendary: false,
        banned:false,
        adv:0,
        tentativasRoubo: 5,
        silenced: false,
        maxlevel: false,
        cocriador: false,
  }
}
if(!global.db.data.chats[m.chat].users[conn.user.jid]){
  global.db.data.chats[m.chat].users[conn.user.jid]={
    exp: 0,
        limit:0,
        role:'',
        money:0,
        level:100,
        adm: admcheck,
        legendary: true,
        banned:false,
        adv:0,
        tentativasRoubo: 5,
        silenced: false,
        maxlevel: true,
        cocriador: false,
  }
}

if(!global.db.data.chats[m.chat].except)
{
  global.db.data.chats[m.chat].except = false
}


if(!isOwner && (m.quoted?.sender || m.mentionedJid) == global.criador  && global.db.data.users[global.criador].ocupado && !global.db.data.chats[m.chat].except) {
  console.log("ok below...")
  console.log("nao me perturbe...")
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  
  



function getTimePassedMessage(dateStart, language) {
  let now = new Date(); // Current date and time
  let elapsedTime = now - dateStart; // Difference in milliseconds

  let seconds = Math.floor(elapsedTime / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  // Construct the message based on the elapsed time
  if (days > 0) {
    return language === "pt"
      ? ` ${days} dias, ${hours % 24} horas, ${minutes % 60} minutos, e ${seconds % 60} segundos.`
      : ` ${days} days, ${hours % 24} hours, ${minutes % 60} minutes, and ${seconds % 60} seconds.`;
  } else if (hours > 0) {
    return language === "pt"
      ? ` ${hours} horas, ${minutes % 60} minutos, e ${seconds % 60} segundos.`
      : ` ${hours} hours, ${minutes % 60} minutes, and ${seconds % 60} seconds.`;
  } else if (minutes > 0) {
    return language === "pt"
      ? ` ${minutes} minutos e ${seconds % 60} segundos.`
      : ` ${minutes} minutes and ${seconds % 60} seconds.`;
  } else {
    return language === "pt"
      ? `${seconds} segundos.`
      : `${seconds} seconds.`;
  }
}

let startd = new Date(global.db.data.users[global.criador]?.offlineStart); // Replace with your actual start date in UTC
let language = global.db.data.chats[m.chat].language || 'en'

let txtt = language === "pt" 
  ? `┌──[root@arcangelo]──[~] 
└─► cat /var/log/afk.log | grep arcangelo
> ‎ 
> Request *timeout* for icmp_seq 1
> --- Status ---
> 1 pacotes transmitidos, 0 recebidos, 100% perda de pacotes
> ⚠️ Host está atualmente INDISPONÍVEL.
> ‎ 
> [+] ÚLTIMA VEZ LOGADO: ${getTimePassedMessage(startd, language)}
> ‎ 
> [==============================]
> | [!] Ocupado no momento.      |
> | $ Retornarei assim que possível. |
> | $ Para emergências, me chame no pv. |
> [==============================]
> ‎ 
┌──[root@arcangelo]──[~] 
└─► _`
  : 
  `┌──[root@arcangelo]──[~] 
└─► cat /var/log/afk.log | grep arcangelo
> ‎ 
> Request *timeout* for icmp_seq 1
> --- Status ---
> 1 packets transmitted, 0 received, 100% packet loss
> ⚠️ Host is currently UNAVAILABLE.
> ‎ 
> [+] LAST TIME LOGGED IN: ${getTimePassedMessage(startd, language)}
> ‎ 
> [==============================]
> | [!] Busy at the moment.      |
> | $ Will return ASAP.         |
> | $ For emergencies, DM me.  |
> [==============================]
> ‎ 
┌──[root@arcangelo]──[~] 
└─► _`;
  let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
      
     m.react('🔕')
  console.log(DELETEMESSAGE.message.protocolMessage.key.id)
  
  if(!global.db.data.chats[m.chat].ignored)
  {
    global.db.data.chats[m.chat].ignored =[]
  }
  global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)
  
  
  
return m.reply(txtt)

}
if(!isOwner && (m.quoted?.sender || m.mentionedJid) == global.criador  &&
global.db.data.users[global.criador].ghost &&
!global.db.data.chats[m.chat].except && m.sender !== '5513997626809@s.whatsapp.net')
{
  console.log("ok below...")
  console.log("nao me perturbe...")
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  
  



  const { fromMe, id, participant } = m
   
   
  
  
  
  
  
  
  let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
      
     m.reply('🔕')
  console.log(DELETEMESSAGE.message.protocolMessage.key.id)
  
  if(!global.db.data.chats[m.chat].ignored)
  {
    global.db.data.chats[m.chat].ignored =[]
  }
  global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)
  
   global.db.data.chats[m.chat].users[m.sender].silenced = true;
  
     
  // Set a timeout to reset back to false
  setTimeout(() => {
    global.db.data.chats[m.chat].users[m.sender].silenced = false;
  
  }, 1 * 60 * 1000);
    

  
  
  
  }




let userValue = global.db.data.chats[m.chat].users[m.sender].money;

if (isNaN(userValue)) {
  global.db.data.chats[m.chat].users[m.sender].money = 50;
}

if (m.msg && global.db.data.chats[m.chat].users[m.sender].silenced && !isOwner) {
  
   

//No longer available
let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
    
   
console.log(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)

 return
 
} 

if (m.msg && global.db.data.chats[m.chat].acoes &&
!global.db.data.chats[m.chat].users[m.sender].adm && global.db.data.chats[m.chat].users[m.sender].morto
&& !(isOwner || m.fromMe)) {
console.log( global.db.data.chats[m.chat].users[m.sender].name + '  esta morto')
  
  if (typeof global.db.data.chats[m.chat].users[m.sender].elixirs=== 'undefined') {
  global.db.data.chats[m.chat].users[m.sender].elixirs = 0;
}
    
    
if(global.db.data.chats[m.chat].users[m.sender].elixirs>=1) {
global.db.data.chats[m.chat].users[m.sender].morto = false
global.db.data.chats[m.chat].users[m.sender].elixirs -=1

let userLanguage = global.db.data.chats[m.chat].language; // Assume this gets the user's language

let recuper;

if (userLanguage === 'pt') 
{ recuper = "Você se recuperou usando um AV ⛨"; } 
else { recuper = "You recovered using an AV ⛨"; }



return m.reply(recuper)
        
}

let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
    
    
    
console.log(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)

return
} 
if (m.msg && global.db.data.chats[m.chat].acoes &&
global.db.data.chats[m.chat].users[m.sender].mortoDemonio && !(isOwner || m.fromMe)) {
  

   
 
let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
    
    
    
console.log(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)

return
} 

if(m.msg && global.db.data.chats[m.chat].users[m.sender].isKicked && !isOwner)

{



 m.react("🏴‍☠️")

await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
return
}

const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins')
global.dirname = ___dirname

for (let name in global.plugins) {
let plugin = global.plugins[name]
if (!plugin)
continue
if (plugin.disabled)
continue
const __filename = join(___dirname, name)
if (typeof plugin.all === 'function') {
try {
await plugin.all.call(this, m, {
  isROwner,
chatUpdate,
__dirname: ___dirname,
__filename
})
} catch (e) {
// if (typeof e === 'string') continue
console.error(e)
for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
if (data.exists)
m.reply(`${lenguajeGB['smsCont1']()}\n\n${lenguajeGB['smsCont2']()}\n*_${name}_*\n\n${lenguajeGB['smsCont3']()}\n*_${m.sender}_*\n\n${lenguajeGB['smsCont4']()}\n*_${m.text}_*\n\n${lenguajeGB['smsCont5']()}\n\`\`\`${format(e)}\`\`\`\n\n${lenguajeGB['smsCont6']()}`.trim(), data.jid)
}}}
if (!opts['restrict'])
if (plugin.tags && plugin.tags.includes('admin')) {
// global.dfail('restrict', m, this)
continue
}
const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix

let match = (_prefix instanceof RegExp ? // RegExp Mode?
[[_prefix.exec(m.text), _prefix]] :
Array.isArray(_prefix) ? // Array?
_prefix.map(p => {
let re = p instanceof RegExp ? // RegExp in Array?
p :
new RegExp(str2Regex(p))
return [re.exec(m.text), re]
}) :
typeof _prefix === 'string' ? // String?
[[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
[[[], new RegExp]]
).find(p => p[1])
if (typeof plugin.before === 'function') {
if (await plugin.before.call(this, m, {
match,
conn: this,
participants,
groupMetadata,
user,
bot,
isROwner,
isOwner,
isRAdmin,
isAllowed,
isAdmin,
isCriadora,
plugin,
isBotAdmin,
chatUpdate,
__dirname: ___dirname,
__filename
}))
continue
}
if (typeof plugin !== 'function')
continue
if ((usedPrefix = (match[0] || '')[0])) {
let noPrefix = m.text.replace(usedPrefix, '')
let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
args = args || []
let _args = noPrefix.trim().split` `.slice(1)
let text = _args.join` `
command = (command || '').toLowerCase()
let fail = plugin.fail || global.dfail // When failed
let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
plugin.command.test(command) :
Array.isArray(plugin.command) ? // Array?
plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
cmd.test(command) :
cmd === command
) :
typeof plugin.command === 'string' ? // String?
plugin.command === command :
false

if (!isAccept)
continue
m.plugin = name
if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]


if(!m.isGroup && !isAllowed && global.db.data.settings[this.user.jid].antiPrivate &&  global.db.data.chats[m.chat]?.msgCount >= 5){ return !0 }
const scheduledDateTime = new Date( global.db.data.chats[m.chat]);
    const currentDate = new Date();
if(currentDate >= scheduledDateTime){
  global.db.data.chats[m.chat].isBanned = true
  m.react("🚫")
  return !0
}
    // Get the current date and time
    
    
if (!['owner-unbanchat.js'].includes(name) && chat && chat.isBanned && !(isAdmin
|| isOwner|| m.sender==global.cocriador && m.sender == '351927232470@s.whatsapp.net' ))
{
  console.log(" chat banido")
  return // Except this
}
if (name != 'owner-unbanchat.js' && name != 'owner-exec.js' && name != 'owner-exec2.js' && name != 'tool-delete.js' && chat?.isBanned && !isCriadora && !isROwner) {
  console.log("🚽🚽🚽🚽")
  return 
}
if (m.text && global.db.data.chats[m.chat].users[m.sender].banned && !(isCriadora ||isROwner)) {
 
  let userLanguage = global.db.data.chats[m.chat].language; // Assume this gets the user's language

  let banimnentoMsg;
  
  if (userLanguage === 'pt') 
  { banimnentoMsg = `━━━━━━━━━━━━━━━━━━━━━━
> 𝗔𝗟𝗘𝗥𝗧: 𝗕𝗔𝗡𝗡𝗘𝗗
━━━━━━━━━━━━━━━━━━━━━━
> ‎ 
> Você está banido da minha rede.
> Desculpe, garoto
> ‎ 
━━━━━━━━━━━━━━━━━━━━━━`; } 
  else { banimnentoMsg = `━━━━━━━━━━━━━━━━━━━━━━
> 𝗔𝗟𝗘𝗥𝗧: 𝗕𝗔𝗡𝗡𝗘𝗗
━━━━━━━━━━━━━━━━━━━━━━
> ‎ 
> You are banned from my network.
> Sorry, kid.
> ‎ 
━━━━━━━━━━━━━━━━━━━━━━`; }
  

  
if (user.antispam > 2) return
m.reply(banimnentoMsg)
user.antispam++	
return

}
  
  
if (m.text && global.db.data.users[m.sender].blocked && !(isCriadora ||isROwner)) {
  let userLanguage2 = global.db.data.chats[m.chat].language; // Assume this gets the user's language

  let blockedLang;
  
  if (userLanguage2 === 'pt') 
  { blockedLang = `━━━━━━━━━━━━━━━━━━━━━━
> 𝗔𝗟𝗘𝗥𝗧: 𝗕𝗟𝗢𝗖𝗞𝗘𝗗
━━━━━━━━━━━━━━━━━━━━━━
> ‎ 
> Você está bloqueado de usar comandos aqui, garoto.
> Chame um administrador se você acha
> que é injusto, mas a vida é assim.
> ‎ 
━━━━━━━━━━━━━━━━━━━━━━`; } 
  else { blockedLang = `━━━━━━━━━━━━━━━━━━━━━━
> 𝗔𝗟𝗘𝗥𝗧: 𝗕𝗟𝗢𝗖𝗞𝗘𝗗
━━━━━━━━━━━━━━━━━━━━━━
> ‎ 
> You are blocked from executing commands here, kid.
> If you think this is unfair, call an admin. 
> But remember: life isn’t fair.
> ‎ 
━━━━━━━━━━━━━━━━━━━━━━`; }
  

if (user.antispam > 2) return
m.reply(blockedLang)
user.antispam++	
return

}
  
  
}



let hl = _prefix 
let adminMode = global.db.data.chats[m.chat].modoadmin
let gata = `${plugins.botAdmin || plugins.admin || plugins.group || plugins || noPrefix || hl ||  m.text.slice(0, 1) == hl || plugins.command}`
if (adminMode && !isOwner && !isROwner && !isCriadora && m.isGroup && !isAdmin && gata) return   
if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { //número bot owner
fail('owner', m, this)
continue
}
if (plugin.rowner && !isROwner) { //Owner
fail('rowner', m, this)
continue
}
if (plugin.owner && !isOwner) { //Propietario/Owner
fail('owner', m, this)
continue
}
if (plugin.mods && !isMods) { // Moderator
fail('mods', m, this)
continue
}

if (plugin.group && !m.isGroup) { //Solo el grupo
fail('group', m, this)
continue
} else if (plugin.botAdmin && !isBotAdmin) { //Detecta si el bot es admins
fail('botAdmin', m, this)
continue
} else if (plugin.admin && (!isAdmin && !isOwner)) { //admins
fail('admin', m, this)
continue
}
if (plugin.private && m.isGroup) { //Solo chat privado
fail('private', m, this)
continue
}
if (plugin.register == true && _user.registered == false) { // user registrado? 
fail('unreg', m, this)
continue
}

m.isCommand = true

if(!m.fromMe && typeof global.db.data.chats[m.chat].initialBoot == 'undefined'){
   let getLang = await m.reply(`robot@bytesec:~# lang-config
╭ . . . . . . . . . . . . . . . . . . . . . . .
> [!] system >>> ${global.db.data.chats[m.chat].language}
> [+] LANG CONFIG
> -----------------------
> ‎ 
> ⁅1⁆ 🇧🇷 Português
> ⁅2⁆ 🇺🇸 English
> ‎ 
╰─────────
`)

 global.db.data.chats[m.chat].langChangeID = getLang.key.id
  
 
 return !0
  
  
}
if (!m.fromMe && !(isCriadora ||isROwner) && global.db.data.settings[this.user.jid].desativado) {
 m.react("🔏")
  return !0
  
  } 
     if(global.db.data.chats[m.chat].isBanned && !isOwner && !m.sender ==
     global.cocriadora && m.sender=='351927232470@s.whatsapp.net' && global.db.data.chats[m.chat].firstTime)
 {

  const offlineBot = global.db.data.chats[m.chat].language === 'en' ? `
━━━━━━━━━━━━━━━━━━━━━━
> 𝗔𝗟𝗘𝗥𝗧: 𝗕𝗢𝗧 𝗜𝗡𝗔𝗖𝗧𝗜𝗩𝗘
━━━━━━━━━━━━━━━━━━━━━━
𝙷𝚎𝚢 𝚔𝚒𝚍, 𝙸'𝚖 𝚜𝚝𝚒𝚕𝚕 𝚘𝚏𝚏𝚕𝚒𝚗𝚎. 𝚈𝚘𝚞'𝚟𝚎 𝚐𝚘𝚝𝚝𝚊 𝚙𝚊𝚢 𝚏𝚘𝚛 𝚖𝚢 𝚜𝚎𝚛𝚟𝚒𝚌𝚎𝚜. 

💵 𝙇𝙚𝙩'𝙨 𝙙𝙤 𝙨𝙤𝙢𝙚 𝙢𝙖𝙩𝙝... 𝙗𝙖𝙨𝙚𝙙 𝙤𝙣 𝙩𝙝𝙚 𝙣𝙪𝙢𝙗𝙚𝙧 𝙤𝙛 𝙪𝙨𝙚𝙧𝙨 𝙝𝙚𝙧𝙚, 𝙞𝙩'𝙡𝙡 𝙘𝙤𝙨𝙩 𝙮𝙖 𝙨𝙤𝙢𝙚𝙩𝙝𝙞𝙣𝙜 𝙡𝙞𝙠𝙚 *R$ ${global.db.data.chats[m.chat].boleto}* 𝙤𝙧 𝙞𝙣 𝙐𝙎𝘿 *$${global.db.data.chats[m.chat].boleto * 6.30}*.

𝙸'𝚟𝚎 𝚐𝚘𝚝 𝚊 𝚝𝚛𝚎𝚊𝚜𝚞𝚛𝚎 𝚝𝚛𝚘𝚟𝚎 𝚘𝚏 𝚝𝚘𝚘𝚕𝚜 𝚏𝚘𝚛 𝚏𝚞𝚗, 𝚑𝚊𝚌𝚔𝚒𝚗𝚐, 𝚊𝚗𝚍 𝚞𝚝𝚒𝚕𝚒𝚝𝚒𝚎𝚜. 
> ‎ 
*Here’s what I offer:*
> 𝄕 *𝄕Group Management Tools:* Keep your community organized and engaged.
> 𝄕 *Fun & Games:* Spice up your chats with interactive games.
> 𝄕 *Developer & Network Tools:* Enhance your coding and networking experience.
> 𝄕 *Utilities & Downloaders:* Get the tools you need at your fingertips.
> 𝄕 *PDF Library:* Access a vast collection of resources.
> 𝄕 *AI Integration:* Leverage cutting-edge AI to elevate your interactions.

📞 *_Ready to embrace the darkness? Contact me to get started:_*
> +351 927 285 125  
━━━━━━━━━━━━━━━━━━━━━━
` :`
━━━━━━━━━━━━━━━━━━━━━━
> 𝗔𝗟𝗘𝗥𝗧: 𝗕𝗢𝗧 𝗜𝗡𝗔𝗖𝗧𝗜𝗩𝗘
━━━━━━━━━━━━━━━━━━━━━━
𝙴𝚒 𝚐𝚊𝚛𝚘𝚝𝚘, 𝚎𝚜𝚝𝚘𝚞 𝚘𝚏𝚏𝚕𝚒𝚗𝚎. 𝚅𝚘𝚌𝚎 𝚙𝚛𝚎𝚌𝚒𝚜𝚊 𝚙𝚊𝚐𝚊𝚛 𝚙𝚎𝚕𝚘𝚜 𝚖𝚎𝚞𝚜 𝚜𝚎𝚛𝚟𝚒𝚌𝚘𝚜.

𝙑𝙖𝙢𝙤𝙨 𝙛𝙖𝙯𝙚𝙧 𝙪𝙢𝙖 𝙢𝙖𝙩𝙚𝙢𝙖𝙩𝙞𝙘𝙖 𝙖𝙦𝙪𝙞... 𝙗𝙖𝙨𝙚𝙖𝙙𝙤 𝙣𝙤 𝙣𝙪𝙢𝙚𝙧𝙤 𝙙𝙚 𝙪𝙨𝙪𝙖𝙧𝙞𝙤𝙨 𝙣𝙚𝙨𝙨𝙚 𝙜𝙧𝙪𝙥𝙤, 𝙫𝙖𝙞 𝙩𝙚 𝙘𝙪𝙨𝙩𝙖𝙧 𝙖𝙡𝙜𝙤 𝙥𝙤𝙧 𝙫𝙤𝙡𝙩𝙖 𝙙𝙚 *R$ ${global.db.data.chats[m.chat].boleto}* 𝙤𝙪 𝙚𝙢 𝙐𝙎𝘿 *$${global.db.data.chats[m.chat].boleto * 6.30}.*

𝚃𝚎𝚗𝚑𝚘 𝚞𝚖 𝚊𝚛𝚜𝚎𝚗𝚊𝚕 𝚍𝚎 𝚏𝚎𝚛𝚛𝚊𝚖𝚎𝚗𝚝𝚊𝚜 𝚙𝚊𝚛𝚊 𝚟𝚘𝚌𝚎, 𝚍𝚎𝚜𝚍𝚎 𝚓𝚘𝚐𝚘𝚜, 𝚑𝚊𝚌𝚔𝚒𝚗𝚐, 𝚞𝚝𝚒𝚕𝚒𝚍𝚊𝚍𝚎𝚜, 𝚍𝚘𝚠𝚗𝚕𝚘𝚊𝚍𝚎𝚛𝚜 𝚎 𝚏𝚞𝚗𝚌𝚘𝚎𝚜 𝚙𝚊𝚛𝚊 𝚐𝚛𝚞𝚙𝚘𝚜
> ‎ 
Aqui está o que eu ofereço:
> 𝄕 *Ferramentas de Gestão de Grupos:* Mantenha sua comunidade organizada e engajada. 
> 𝄕 *Diversão e Jogos:* Apimente suas conversas com jogos interativos. 
> 𝄕 *Ferramentas para Desenvolvedores e Redes:* Aprimore sua experiência de codificação e networking. 
> 𝄕 *Utilitários e Downloaders:* Tenha as ferramentas que você precisa ao seu alcance. 
> 𝄕 *Biblioteca de PDFs:* Acesse uma vasta coleção de recursos.
> 𝄕 *Integração de IA:* Aproveite a IA de ponta para elevar suas interações.

📞 Pronto para abraçar a escuridão? Entre em contato comigo para começar:
> +351 927 285 125  
━━━━━━━━━━━━━━━━━━━━━━`

  return m.reply(offlineBot)
 }

if(plugin!= null && global.db.data.chats[m.chat].isBanned ){
  console.log("🐛 chat bloqueado")
  if(m.sender==global.criador || m.sender==global.cocriador && m.sender=='351927232470@s.whatsapp.net'
  ){
    console.log("Permitindo criador...")
 
  }
  else {
    m.react("❗")
   console.log('blocked')
    return !0 
  }
}
let xp = 0
if (xp > 2000)
m.reply('Exp limit') // Hehehe
else               
if (plugin.money && global.db.data.chats[m.chat].users[m.sender].money < plugin.money * 1) {


  const noMoney = global.db.data.chats[m.chat].language === 'en' ? `𝙔𝙤𝙪 𝙙𝙤𝙣'𝙩 𝙝𝙖𝙫𝙚 ʙʏᴛᴇᴄᴏɪɴꜱ!` : `𝙑𝙤𝙘𝙚 𝙚𝙨𝙩𝙖 𝙨𝙚𝙢 ʙʏᴛᴇᴄᴏɪɴꜱ!`
  this.reply(m.chat , `> ${noMoney}`, m)
continue     
}

			
	if(!global.db.data.chats[m.chat]){
  global.db.data.chats[m.chat]={}
}
if(!global.db.data.chats[m.chat].users){
  global.db.data.chats[m.chat].users={}
}
if(!global.db.data.chats[m.chat].users[m.sender]){
  global.db.data.chats[m.chat].users[m.sender]={
    exp: 0,
        limit:0,
        role:'⌥ 𝚜𝚌𝚛𝚒𝚙𝚝 𝚔𝚒𝚍𝚍𝚒𝚎',
        money:0,
        level:0,
        adm: admcheck,
        legendary: false,
        banned:false,
        slots:3,
        silenced: false,
  }
}


  if(isOwner){
  console.log("dono mandando mensagem!")
  
if(!global.db.data.chats[m.chat].users[m.sender]){
  global.db.data.chats[m.chat].users[m.sender]={
      exp: 0,
        limit:600000000000000,
        role:'༒︎ 𝕹𝖊𝖛𝖊𝖗𝖒𝖔𝖗𝖊 ﮩ٨ـﮩ\n𝔐𝔢𝔰𝔱𝔯𝔢 𝔡𝔬𝔰 𝔠𝔬𝔯𝔳𝔬𝔰 ♱',
        money:60000000000000,
        level:666,
        adm: isAdmin,
        legendary: true,
        coadmin:false,
        maxlevel: true,
        slots: 666,
        tentativasRoubo: 666,
        usuariosRoubados: [],
  }
  
  
}
global.db.data.chats[m.chat].users[m.sender].limit=660000000000066
  global.db.data.chats[m.chat].users[m.sender].money=666000000000000066
  global.db.data.chats[m.chat].users[m.sender].level = 666
  global.db.data.chats[m.chat].users[m.sender].legendary=true
  global.db.data.chats[m.chat].users[m.sender].coadmin=false
  global.db.data.chats[m.chat].users[m.sender].slots=666
  global.db.data.chats[m.chat].users[m.sender].name=`Henry Arcangelo 𖤍`
  global.db.data.chats[m.chat].users[m.sender].age=`23 anos`
 
  global.db.data.chats[m.chat].users[m.sender].morada=`Rio Tinto, Porto.  Portugal`
  global.db.data.chats[m.chat].users[m.sender]. profissao=`Desenvolvedor fullstack`
  global.db.data.chats[m.chat].users[m.sender].instagram=`https://instagram.con/henryy.xn`
  global.db.data.chats[m.chat].users[m.sender].website=`https://arcangelo.net`
  global.db.data.chats[m.chat].users[m.sender].links=`https://github.com/ARCANGEL0`
  global.db.data.chats[m.chat].users[m.sender].biografia=`Sem informações sobre mim`
  global.db.data.chats[m.chat].users[m.sender].hobbies=`Ler e ouvir música`
  global.db.data.chats[m.chat].users[m.sender].relacionamento=`❔`
  global.db.data.chats[m.chat].users[m.sender].tentativasRoubo=666
  global.db.data.chats[m.chat].users[m.sender].usuariosRoubados = []
  
  global.db.data.chats[m.chat].users[m.sender].role=`𝑵𝒆𝒗𝒆𝒓𝒎𝒐𝒓𝒆 ༒︎\n𝙼𝚎𝚜𝚝𝚛𝚎 𝚍𝚘𝚜 𝚌𝚘𝚛𝚟𝚘𝚜`
    
    
    
  }

  

if ( plugin.limit && global.db.data.chats[m.chat].users[m.sender].limit < plugin.limit * 1) {
  const noBugs = global.db.data.chats[m.chat].language === 'en' ? `𝙔𝙤𝙪 𝙙𝙤𝙣'𝙩 𝙝𝙖𝙫𝙚 ᴇᴛʜᴇʀᴇᴜᴍ!` : `𝙑𝙤𝙘𝙚 𝙚𝙨𝙩𝙖 𝙨𝙚𝙢 ᴇᴛʜᴇʀᴇᴜᴍ!`
 
  this.reply(m.chat, `> ${noBugs}`, m)
continue //Sin límite
}
if (!isAdmin && global.db.data.chats[m.chat].autolevelup && plugin.level > global.db.data.chats[m.chat].users[m.sender].level) {

  const notLevel = global.db.data.chats[m.chat].language === 'en' ? `
╭──────────╮
>  ⚠︎ ERROR: ACCESS DENIED       
> You need to be Level ${plugin.level} to use this command.    
╰─────────
` : `
╭──────────╮
>  ⚠︎ ERROR: ACESSO NEGADO     
> Você precisa ser nível ${plugin.level} para usar esse comando.    
╰──────────
`





  this.reply(m.chat, notLevel, m)
continue // Si no se ha alcanzado el nivel
}
let extra = {
match,
usedPrefix,
noPrefix,
_args,
args,
command,
text,
conn: this,
participants,
groupMetadata,
user,
bot,
isROwner,
isOwner,
isRAdmin,
isAdmin,
isBotAdmin,
chatUpdate,
__dirname: ___dirname,
__filename
}
try {
await plugin.call(this, m, extra)
return
} 
catch (e) {
// Error occured
m.error = e
console.error(e)
if (e) {
let text = format(e)
for (let key of Object.values(global.APIKeys))
text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
if (e.name)
for (let [jid] of global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number)) {
let data = (await conn.onWhatsApp(jid))[0] || {}
if (data.exists)
m.reply(`${lenguajeGB['smsCont1']()}\n\n${lenguajeGB['smsCont2']()}\n*_${name}_*\n\n${lenguajeGB['smsCont3']()}\n*_${m.sender}_*\n\n${lenguajeGB['smsCont4']()}\n*_${m.text}_*\n\n${lenguajeGB['smsCont5']()}\n\`\`\`${format(e)}\`\`\`\n\n${lenguajeGB['smsCont6']()}`.trim(), data.jid)
}
m.reply(text)
}} finally {
// m.reply(util.format(_user))
if (typeof plugin.after === 'function') {
try {
await plugin.after.call(this, m, extra)
} catch (e) {
console.error(e)
}}
if (m.limit)
m.reply(+m.limit + '-')
}
if (m.money)
m.reply(m.money + ' -')  
break
}}} catch (e) {
console.error(e)
} finally {
if (opts['queque'] && m.text) {
const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id)
if (quequeIndex !== -1)
this.msgqueque.splice(quequeIndex, 1)
}
//console.log(global.db.data.users[m.sender])
let user, stats = global.db.data.stats
if (m) {
  
if (!m.plugin && m.sender && global.db.data.chats[m.chat].autolevelup && (user = global.db.data.chats[m.chat].users[m.sender])) {
    let points = m.text.split(/\s+/).filter(word => word.length > 2).length;
    user.exp += points;
    user.limit -= m.limit * 1;
    user.money -= m.money * 1;
}

let stat
const isNumber = x => typeof x === 'number' && !isNaN(x)

if (m.plugin) {
let now = +new Date
if (m.plugin in stats) {
stat = stats[m.plugin]
if (!isNumber(stat.total))
stat.total = 1
if (!isNumber(stat.success))
stat.success = m.error != null ? 0 : 1
if (!isNumber(stat.last))
stat.last = now
if (!isNumber(stat.lastSuccess))
stat.lastSuccess = m.error != null ? 0 : now
} else
stat = stats[m.plugin] = {
total: 1,
success: m.error != null ? 0 : 1,
last: now,
lastSuccess: m.error != null ? 0 : now
}
stat.total += 1
stat.last = now
if (m.error == null) {
stat.success += 1
stat.lastSuccess = now
}}}

try {
if (!opts['noprint']) await (await import(`./lib/print.js`)).default(m, this)
} catch (e) {
console.log(m, m.quoted, e)}
let settingsREAD = global.db.data.settings[this.user.jid] || {}  
if (opts['autoread']) await this.readMessages([m.key])
if (settingsREAD.autoread2) await this.readMessages([m.key])  
//if (settingsREAD.autoread2 == 'true') await this.readMessages([m.key])    
	    
if (global.db.data.settings[this.user.jid] && !m.isGroup) throw 0
if (!db.data.chats[m.chat]?.reaction && m.isGroup) throw 0

function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}
}}

/**
 * Handle groups participants update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['group-participants.update']} groupsUpdate 
 */
export async function participantsUpdate({ id, participants, action }) {
  console.log('TESTANDO')
  console.log(action)
  console.log('✅✅✅✅✅')
//if (opts['self']) return
// if (id in conn.chats) return // First login will spam
 // if (this.isInit) return
// if (global.db.data == null) await loadDatshadoeabase()
function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}
let chat = global.db.data.chats[id] || {}
 let text = ''
 let isWelcome =false
console.log('%c testing jjj', 'color: yellow; background-color: black; font-size: 16px; font-weight: bold;');
switch (action) {
case 'add':
case 'removed':
if (global.db.data.chats[id].welcome) {
  isWelcome = true
let groupMetadata = await this.groupMetadata(id) || (conn.chats[id] || {}).metadata
for (let user of participants) {
let pp = global.gataImg
try {
const botTt2 = groupMetadata.participants.find(u => this.decodeJid(u.id) == this.user.jid) || {} 
const isBotAdminNn = botTt2?.admin === "admin" || false
;

if (global.db.data.chats[id].language === 'pt') {
    text = `
> BYΓΞSΞC:~$ journalctl --access-log
> --------------

[+] NOVO LOGIN
─────────────────
> Novo usuário detectado: @${user.split('@')[0]}
> [*] Conexão estabelecida
> STATUS 200 OK

>>> ORIENTAÇÕES DO GRUPO
─────────────────
> [+] Bem-vindo(a) ao grupo ${await this.getName(id)}.
> [+] Leia as regras e familiarize-se com as normas do grupo.
> ‎ 
> [!] O monitoramento é mantido pela ByteSec..
─────────────────
    `;
} else if (global.db.data.chats[id].language === 'en') {
    text = `
> BYΓΞSΞC:~$ journalctl --access-log
> ---------------

[+] NEW LOGIN
─────────────────
> New user detected: @${user.split('@')[0]}
> [*] Connection established 
> STATUS 200 OK
 
>>> GROUP GUIDELINES
─────────────────
> [+] Welcome to ${await this.getName(id)}.
> [+] Read the rules and get familiar with group standards.
> ‎ 
> [+] Order is maintained by ByteSec.
─────────────────
    `;
}





console.log(text)
	

let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${user.split('@')[0]}:${user.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }      
if(isWelcome){

   global.conn.sendMessage(id,{text:text,contextInfo: { mentionedJid: [user] }})

}
else{
  this.sendMessage(id, { text: text, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[user],
"externalAdReply": {
"showAdAttribution": false,
"renderLargerThumbnail": false,
"thumbnail": apii.data, 
"title":``,
"containsAutoReply": true,
"mediaType": 1, 
}}}, { quoted: fkontak2 })
}
//this.sendFile(id, apii.data, 'pp.jpg', text, null, false, { mentions: [user] }, { quoted: fkontak2 })

} catch (e) {
  console.log(e)
}}}
			    
break
case 'promote':
case 'daradmin':
case 'darpoder':
text = (chat.sPromote || this.spromote || conn.spromote || '@user ```agora é Admin```')
case 'demote':
case 'quitarpoder':
case 'quitaradmin':
if (!text)
text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```nao é mais Admin```')
text = text.replace('@user', '@' + participants[0].split('@')[0])
if (chat.detect)
//this.sendMessage(id, { text, mentions: this.parseMention(text) })
break
}
  
  
  //FIMMM
}

/**
 * Handle groups update
 * @param {import('@adiwajshing/baileys').BaileysEventMap<unknown>['groups.update']} groupsUpdate 
 */
export async function groupsUpdate(groupsUpdate) {
if (opts['self'] && !isOwner && !isROwner)
return
for (const groupUpdate of groupsUpdate) {
const id = groupUpdate.id
if (!id) continue
let chats = global.db.data.chats[id], text = ''
if (!chats?.detect) continue
// if (groupUpdate.desc) text = (chats.sDesc || this.sDesc || conn.sDesc || '```Description has been changed to```\n@desc').replace('@desc', groupUpdate.desc)
//if (groupUpdate.subject) text = (chats.sSubject || this.sSubject || conn.sSubject || '```Subject has been changed to```\n@subject').replace('@subject', groupUpdate.subject)
//if (groupUpdate.icon) text = (chats.sIcon || this.sIcon || conn.sIcon || '```Icon has been changed to```').replace('@icon', groupUpdate.icon)
if (groupUpdate.revoke) text = (chats.sRevoke || this.sRevoke || conn.sRevoke || '```Link do grupo mudou para```\n@revoke').replace('@revoke', groupUpdate.revoke)
if (!text) continue
console.log('uodate grupo 🗡️🗡️🗡️🗡️👁️')

await this.sendMessage(id, { text, mentions: this.parseMention(text) })

}}

export async function callUpdate(callUpdate) {

let isAnticall = global.db.data.settings[this.user.jid].antiCall
let isAnticallGp = global.db.data.chats[mconn.chat].antiCallGp
if (!isAnticall) return
console.log(callUpdate)
for (let nk of callUpdate) { 
  
 if (nk.isGroup == true) {
if (nk.status == "offer") {

  console.log("⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️🌙🌙🌙🌙")
  if(nk.isGroup){
    this.reply('351927285125@s.whatsapp.net', 'teste', false , { mentions: [nk.from] })
  }
  else{
let callmsg = await this.reply(nk.from, `${lenguajeGB['smsCont15']()} *@${nk.from.split('@')[0]}*, ${nk.isVideo ? lenguajeGB.smsCont16() : lenguajeGB.smsCont17()} ${lenguajeGB['smsCont18']()}`, false, { mentions: [nk.from] })
//let data = global.owner.filter(([id, isCreator]) => id && isCreator)
//await this.sendContact(nk.from, data.map(([id, name]) => [id, name]), false, { quoted: callmsg })
await this.updateBlockStatus(nk.from, 'block')}
}}}}
 
export async function deleteUpdate(message) {
try {
const { fromMe, id, participant } = message
if (message.fromMe) return 
let msg = conn.serializeM(conn.loadMessage(id))
let chat = global.db.data.chats[msg?.chat] || {}
if (!chat?.delete) return 
if (!msg) return 
if(global.db.data.chats[msg.chat].ignored && global.db.data.chats[msg.chat].ignored.includes(id)) return;
if (!msg?.isGroup) return
let lang = global.db.data.chats[msg.chat].language
const antideleteMessage = `> BYΓΞSΞC:~# extundelete /dev/sda1 -c
. . . . . . . . . . . . . . . . . . . . . . . .

[+] ${lang == 'pt' ? 'Mensagem recuperada' : 'Message recovered'}:
| >>> ${lang == 'pt' ? 'Usuário' : 'User'}: @${participant.split`@`[0]}
> ‎ 
> ${msg.text}
> ‎ 
| ${lang == 'pt' ? 'Adicionado em' : 'Added at'}: /tmp/chats.log
| 
> BYΓΞSΞC:~# _`.trim();

let DELETEMESSAGE = await conn.sendMessage(msg.chat, {text: antideleteMessage, mentions: [participant]}, {quoted: msg})


// conn.copyNForward(msg.chat, msg).catch(e => console.log(e, msg))
} catch (e) {
console.error(e)
}}

global.dfail = (type, m, conn) => {
let msg = {
rowner: lenguajeGB['smsRowner'](),
owner: lenguajeGB['smsOwner'](),
mods: lenguajeGB['smsMods'](),
premium: lenguajeGB['smsPremium'](),
group: lenguajeGB['smsGroup'](),
private: lenguajeGB['smsPrivate'](),
admin: lenguajeGB['smsAdmin'](),
botAdmin: lenguajeGB['smsBotAdmin'](),
unreg: lenguajeGB['smsUnreg'](),
restrict: lenguajeGB['smsRestrict'](),
}[type]
//if (msg) return m.reply(msg)
let tg = { quoted: m, userJid: conn.user.jid }
let prep = generateWAMessageFromContent(m.chat, { extendedTextMessage: { text: msg, contextInfo: { externalAdReply: { title: lenguajeGB.smsAvisoAG().slice(0,-2), body: [wm, '𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛' ,gt,'🐦‍⬛ ','🐈‍⬛ henry@arcangello@gmail.com'].getRandom(), thumbnail: gataImg.getRandom(), sourceUrl: [md, nna, nn, nnn, yt, ig, paypal, fb].getRandom() }}}}, tg)
if (msg) return conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id })
}

const file = global.__filename(import.meta.url, true);
watchFile(file, async () => {
unwatchFile(file);
console.log(chalk.redBright('Update \'handler.js\''));
if (global.reloadHandler) console.log(await global.reloadHandler());
  
if (global.conns && global.conns.length > 0 ) {
const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
for (const userr of users) {
userr.subreloadHandler(false)
}}});