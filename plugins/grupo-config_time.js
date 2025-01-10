
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

/* Creditos a https://github.com/ALBERTO9883/NyanCatBot-MD */

let handler = async (m, { conn, isAdmin, isOwner, args, usedPrefix, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
try{
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let isClose = {
'open': 'not_announcement',
'abrir': 'not_announcement',
'abierto': 'not_announcement',
'buka': 'not_announcement',
'on': 'not_announcement',
'1': 'not_announcement',
	
'close': 'announcement',
'fechar': 'announcement',	
'fechado': 'announcement',		
'tutup': 'announcement',
'off': 'announcement',
'0': 'announcement',
}[(args[0] || '')]
if (isClose === undefined) {
	
let nombre = [ 
langTOGGLE.smsGrupoTime9() + '1' + langTOGGLE.smsGrupoTime11(), 
langTOGGLE.smsGrupoTime10() + '1' + langTOGGLE.smsGrupoTime11(), 
	
langTOGGLE.smsGrupoTime9() + '2' + langTOGGLE.smsGrupoTime11(), 
langTOGGLE.smsGrupoTime10() + '2' + langTOGGLE.smsGrupoTime11(), 
	
langTOGGLE.smsGrupoTime9() + '3' + langTOGGLE.smsGrupoTime11(), 
langTOGGLE.smsGrupoTime10() + '3' + langTOGGLE.smsGrupoTime11(), 
	
langTOGGLE.smsGrupoTime9() + '4' + langTOGGLE.smsGrupoTime11(), 
langTOGGLE.smsGrupoTime10() + '4' + langTOGGLE.smsGrupoTime11(), 
	
langTOGGLE.smsGrupoTime9() + '5' + langTOGGLE.smsGrupoTime11(), 
langTOGGLE.smsGrupoTime10() + '5' + langTOGGLE.smsGrupoTime11(), 
	
langTOGGLE.smsGrupoTime9() + '6' + langTOGGLE.smsGrupoTime11(), 
langTOGGLE.smsGrupoTime10() + '6' + langTOGGLE.smsGrupoTime11(), 
	
langTOGGLE.smsGrupoTime9() + '7' + langTOGGLE.smsGrupoTime11(), 
langTOGGLE.smsGrupoTime10() + '7' + langTOGGLE.smsGrupoTime11(), 
	
langTOGGLE.smsGrupoTime9() + '10' + langTOGGLE.smsGrupoTime11(),
langTOGGLE.smsGrupoTime10() + '10' + langTOGGLE.smsGrupoTime11(),

langTOGGLE.smsGrupoTime9() + '12' + langTOGGLE.smsGrupoTime11(),
langTOGGLE.smsGrupoTime10() + '12' + langTOGGLE.smsGrupoTime11(),

langTOGGLE.smsGrupoTime9() + '24' + langTOGGLE.smsGrupoTime11(),
langTOGGLE.smsGrupoTime10() + '24' + langTOGGLE.smsGrupoTime11()]

let descripción = [ 
langTOGGLE.smsGrupoTime12() + '1' + langTOGGLE.smsGrupoTime11(), 
langTOGGLE.smsGrupoTime13() + '1' + langTOGGLE.smsGrupoTime11() + '\n', 
	
langTOGGLE.smsGrupoTime12() + '2' + langTOGGLE.smsGrupoTime11(), 
langTOGGLE.smsGrupoTime13() + '2' + langTOGGLE.smsGrupoTime11() + '\n', 
	
langTOGGLE.smsGrupoTime12() + '3' + langTOGGLE.smsGrupoTime11(), 
langTOGGLE.smsGrupoTime13() + '3' + langTOGGLE.smsGrupoTime11() + '\n',  
	
langTOGGLE.smsGrupoTime12() + '4' + langTOGGLE.smsGrupoTime11(), 
langTOGGLE.smsGrupoTime13() + '4' + langTOGGLE.smsGrupoTime11() + '\n', 
	
langTOGGLE.smsGrupoTime12() + '5' + langTOGGLE.smsGrupoTime11(), 
langTOGGLE.smsGrupoTime13() + '5' + langTOGGLE.smsGrupoTime11() + '\n', 
	
langTOGGLE.smsGrupoTime12() + '6' + langTOGGLE.smsGrupoTime11(), 
langTOGGLE.smsGrupoTime13() + '6' + langTOGGLE.smsGrupoTime11() + '\n', 
	
langTOGGLE.smsGrupoTime12() + '7' + langTOGGLE.smsGrupoTime11(), 
langTOGGLE.smsGrupoTime13() + '7' + langTOGGLE.smsGrupoTime11() + '\n', 
	
langTOGGLE.smsGrupoTime12() + '10' + langTOGGLE.smsGrupoTime11(),
langTOGGLE.smsGrupoTime13() + '10' + langTOGGLE.smsGrupoTime11() + '\n', 

langTOGGLE.smsGrupoTime12() + '12' + langTOGGLE.smsGrupoTime11(),
langTOGGLE.smsGrupoTime13() + '12' + langTOGGLE.smsGrupoTime11() + '\n', 

langTOGGLE.smsGrupoTime12() + '24' + langTOGGLE.smsGrupoTime11(),
langTOGGLE.smsGrupoTime13() + '24' + langTOGGLE.smsGrupoTime11()]

let comando = [ 
"open 1", "fechar 1", 
"open 2", "fechar 2",
"open 3", "fechar 3",
"open 4", "fechar 4",
"open 5", "fechar 5",
"open 6", "fechar 6",
"open 7", "fechar 7",
"open 10", "fechar 10",
"open 12", "fechar 12",
"open 24", "fechar 24"]

let sections = Object.keys(nombre, descripción, comando).map((v, index) => ({ title: `${langTOGGLE.smsParaAdmins()}`,
rows: [{ title: `${nombre[v]}`, description: `${descripción[v]}`, rowId: usedPrefix + command + ' ' + comando[v], }], }))

let caption = `${langTOGGLE['smsAvisoMG']()}
${langTOGGLE['smsMalused']()}
${langTOGGLE['smsGrupoTime1']()}
*${usedPrefix + command} ${langTOGGLE.lenguaje() == 'en' ? 'open' : 'abrir'} 1*
${langTOGGLE['smsGrupoTime2']()}
*${usedPrefix + command} ${langTOGGLE.lenguaje() == 'en' ? 'close' : 'fechar'} 1*`

const listMessage = {
text: `${wm}`,
footer: `${caption}`,
title: null,
buttonText: `⚙️ ${langTOGGLE.smsConfi1()} ⚙️`,
sections }

await conn.reply(m.chat, `${langTOGGLE['smsAvisoMG']()} ${langTOGGLE['smsMalused']()} 
${langTOGGLE['smsGrupoTime1']()}
*${usedPrefix + command} ${langTOGGLE.lenguaje() == 'en' ? 'open' : 'abrir'} 1*
${langTOGGLE['smsGrupoTime2']()}
*${usedPrefix + command} ${langTOGGLE.lenguaje() == 'en' ? 'close' : 'fechar'} 1*`, fkontak, m)
//await conn.sendMessage(m.chat, caption, {quoted: fkontak})
throw false
}
let timeoutset = 86400000 * args[1] / 24 //Una Hora 86400000
await conn.groupSettingUpdate(m.chat, isClose).then(async _=> {
m.reply(`${langTOGGLE['smsAvisoRG']()}╭━━━━━━━━━⬣
${langTOGGLE['smsGrupoTime3']()}* *${isClose == 'announcement' ? langTOGGLE.smsGrupoTime4() : langTOGGLE.smsGrupoTime5()}* ${args[1] ? `*${langTOGGLE['smsGrupoTime6']()} ${clockString(timeoutset)}*` : ''}
╰━━━━━━━━━━━━━━━━━━⬣`)
})
if (args[1]) {
setTimeout(async () => {
await conn.groupSettingUpdate(m.chat, `${isClose == 'announcement' ? 'not_announcement' : 'announcement'}`).then(async _=>{
conn.reply(m.chat, `${isClose == 'not_announcement' ? langTOGGLE.smsGrupoTime7() : langTOGGLE.smsGrupoTime8()}!!`)
})
}, timeoutset)}

} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, langTOGGLE['smsMalError3']() + '#report ' + usedPrefix + command, null, [[langTOGGLE.smsMensError1(), `#reporte ${langTOGGLE['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${langTOGGLE['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.command = /^(grouptime|gctime|gc)$/i
handler.botAdmin = false
handler.group = true 
handler.admin = true

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
