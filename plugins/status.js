
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

/**
POR FAVOR TENGAN LA AMABILIDAD Y BONDAD DE NO CAMBIAR MÍNIMAMENTE LOS CRÉDITOS DE reaperMD, 
SI VAS A AÑADIR TUS DATOS O CRÉDITOS, ESTA BIEN. PERO NO QUITEN LOS QUE YA ESTAN DE reaperMD, GRACIAS 
**/

/** PLEASE BE KIND AND KINDNESS NOT TO MINIMALLY CHANGE reaperMD CREDITS, 
IF YOU ARE GOING TO ADD YOUR DATA OR CREDITS, IT'S OK. BUT DO NOT REMOVE THOSE THAT ARE ALREADY FROM reaperMD, THANK YOU **/
let handler = async (m, { conn, command,  usedPrefix,participants,groupMetadata}) => {
let picture = './media/concept/concept2.jpg'
let name = m.pushName || await conn.getName(m.sender) 
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}


let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let uptime = clockString(_uptime)

let shell = `${global.heading} journalctl`
let greetTxt = global.db.data.chats[m.chat].language === 'en' ? 
`ᴜsᴇʀ:`
:
`ᴜsᴜᴀʀɪᴏ:`

let project = `> ///𝗥.𝝣.𝝠.𝗣.𝗘.𝗥 Pʀᴏᴊᴇᴄᴛ
> v${vs}`

let isStatus 

if(global.db.data.chats[m.chat].isBanned && global.db.data.chats[m.chat].language == 'pt') {
    isStatus = '⚠︎ Ｂｌｏｑｕｅａｄｏ'
  }
  else if(global.db.data.chats[m.chat].isBanned && global.db.data.chats[m.chat].language == 'en') {
    isStatus = '⚠︎ Ｂｌｏｃｋｅｄ'
  }
  // inactive
  else if(global.db.data.chats[m.chat].desativado && global.db.data.chats[m.chat].language == 'pt') {
    isStatus = '⚠︎ Ｄｅｓａｔｉｖａｄｏ'
  }
  else if(global.db.data.chats[m.chat].desativado && global.db.data.chats[m.chat].language == 'en') {
    isStatus = '⚠︎ Ｄｅａｃｔｉｖａｔｅｄ'
  }
  //admin
  else if(global.db.data.chats[m.chat].modoadmin && global.db.data.chats[m.chat].language == 'pt') {
    isStatus = '⚠︎ Ａｐｅｎａｓ ａｄｍｉｎ'
  }
  else if(global.db.data.chats[m.chat].modoadmin && global.db.data.chats[m.chat].language == 'en') {
    isStatus = '⚠︎ Ａｄｍｉｎ ｏｎｌｙ'
  }
  else {
    if(global.db.data.chats[m.chat].language == 'en') {
   isStatus = '𓉘𝆺𝅥𓉝 Ｏｎｌｉｎｅ'
    }
    else if(global.db.data.chats[m.chat].language == 'pt') {
   isStatus = '𓉘𝆺𝅥𓉝 Ｏｎｌｉｎｅ'
    }
  }

let status2 = global.db.data.chats[m.chat].language === 'en' ? 
global.opts['self'] ? '𝙥𝙧𝙞𝙫𝙖𝙩𝙚' : '𝙥𝙪𝙗𝙡𝙞𝙘'
:
global.opts['self'] ? '𝙥𝙧𝙞𝙫𝙖𝙙𝙤' : '𝙥𝙪́𝙗𝙡𝙞𝙘𝙤'
let botstatus = `[ ʙᴏᴛ ᴍᴏᴅᴇ: ${status2}` 
let groupstatus = `sᴛᴀᴛᴜs: ${isStatus}`
let timeActive  = global.db.data.chats[m.chat].language === 'en' ? 
`> [ ᴜᴘᴛɪᴍᴇ↴
> ${uptime}`
:
`> [ ᴛᴇᴍᴘᴏ ᴀᴛɪᴠᴏ↴
> ${uptime}`



 let totalChats =  global.db.data.chats[m.chat].language === 'pt'

      ? 
`> ᕀ ᴛᴏᴛᴀʟ ᴅᴇ ᴄʜᴀᴛs: ${chats.length} 
> ᕀ ᴛᴏᴛᴀʟ ᴅᴇ ᴜsᴜᴀ́ʀɪᴏs: ${Object.keys(global.db.data.users).length} 
> ᕀ ᴛᴏᴛ. ᴄʜᴀᴛs ᴘʀɪᴠᴀᴅᴏs: ${chats.length - groupsIn.length} | 
> ᕀ ᴛᴏᴛ. ᴄʜᴀᴛs ʙᴀɴɪᴅᴏs: ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} | 
> ᕀ ᴛᴏᴛ. ᴜsᴜᴀʀ. ʙʟᴏǫᴜᴇᴀᴅᴏs: ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}`
     
      : 
`> ᕀ ᴛᴏᴛᴀʟ ᴄʜᴀᴛs: ${chats.length} 
> ᕀ ᴛᴏᴛᴀʟ ᴅᴇ ᴜsᴇʀs: ${Object.keys(global.db.data.users).length} 
> ᕀ ᴛᴏᴛ. ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛs: ${chats.length - groupsIn.length} | 
> ᕀ ᴛᴏᴛ. ʙᴀɴɴᴇᴅ ᴄʜᴀᴛs: ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} | 
> ᕀ ᴛᴏᴛ. ʙᴀɴɴᴇᴅ ᴜsᴇʀs: ${Object.entries(global.db.data.users).filter(user => user[1].banned).length}`
        

let groupStats =   global.db.data.chats[m.chat].language === 'pt'
? 
`> ᕀ ᴜsᴜᴀ́ʀɪᴏs: *${participants.length}*
> ᕀ ᴜsᴜᴀ́ʀɪᴏs sɪʟᴇɴᴄɪᴀᴅᴏs: *${silenciados}*
> ᕀ ᴜsᴜᴀ́ʀɪᴏs ᴀᴅᴠᴇʀᴛɪᴅᴏs: *${avisados}* 
> ᕀ ᴜsᴜᴀ́ʀɪᴏs ʙᴀɴɪᴅᴏs: *${banidos}*`
: 

`> ᕀ ᴛᴏᴛᴀʟ ᴜsᴇʀs: *${participants.length}* 
> ᕀ sɪʟᴇɴᴄᴇᴅ ᴜsᴇʀs: *${silenciados}*
> ᕀ ᴡᴀʀɴᴇᴅ ᴜsᴇʀs: *${avisados}* 
> ᕀ ʙʟᴀᴄᴋʟɪsᴛ ᴜsᴇʀs: *${banidos}*`



let message = `${shell}
/// 𓉘Ⲗ𓉝 ${greetTxt} ${name}
> ${project}
> ${botstatus}
${timeActive}
> ‎ 
${totalChats}
⸺⸺⸺⸺⸺⸺
> 𓉘🞡𓉝 ${groupMetadata.subject}
> // ${groupstatus}
> ‎ 
${groupStats}
`


let estado = `╭━━━━[ *𝙎𝙏𝘼𝙏𝙐𝙎* ]━━━━━⬣
┃ *Olá!* ${name}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃𓃠 *Versao de ${gt}*
┃➥ ${vs}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ღ ${global.opts['self'] ? '𝙋𝙍𝙄𝙑𝘼𝘿𝙊' : '𝙋𝙐𝘽𝙇𝙄𝘾𝙊'}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ღ *Ativo Durante* 
┃➥ ${uptime}
┃ღ *Usuario(s) | Users* 
┃➥ ${Object.keys(global.db.data.users).length} 
┃ღ *Chat(s) Proibido(s)*
┃➥ ${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length} 
┃ღ *Usuario(s) Proibido(s)*
┃➥ ${Object.entries(global.db.data.users).filter(user => user[1].banned).length} 
╰━━━━━━━━━━━━━━━━━━⬣`
await conn.sendFile(m.chat, picture, 'stats.png', message, fkontak)

}
handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(status?)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
