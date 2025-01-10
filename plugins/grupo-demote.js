
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async (m, { conn,usedPrefix, text, command ,isAdmin,isOwner}) => {
  
  if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}

let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if(isNaN(text) && !text.match(/@/g)){
	
}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}
	
if (!text && !m.quoted) return conn.sendButton(m.chat, wm, langTOGGLE['smsMalused3']() + `*${usedPrefix + command} @${global.owner[0][0]}*`, null, [[langTOGGLE.smsConMenu(), `${usedPrefix}menu`]], fkontak, m)
if (number.length > 13 || (number.length < 11 && number.length > 0)) return conn.sendButton(m.chat, wm, langTOGGLE['smsDemott']() + `*${usedPrefix + command} @${global.owner[0][0]}*`, null, [[langTOGGLE.smsConMenu(), `${usedPrefix}menu`]], fkontak, m)
  
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'demote')
conn.reply(m.chat, langTOGGLE['smsAvisoEG']() + langTOGGLE['smsDemott3'](), fkontak, m)
}}
handler.command = /^(demote|quitarpoder|tiraradmin)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
