
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async (m, { conn, text, usedPrefix, command}) => {
  
  	
	


let user, number, bot, bant, ownerNumber, aa, users, usr, q, mime, img
try {
function no(number){
return number.replace(/\s/g,'').replace(/([@+-])/g,'')}
text = no(text)
if(isNaN(text)) {
number = text.split`@`[1]
} else if(!isNaN(text)) {
number = text
}
user = conn.user.jid.split`@`[0] + '@s.whatsapp.net'
bot = conn.user.jid.split`@`[0] 
bant = langTOGGLE.smsPropban1(usedPrefix, command, bot)
if (!text && !m.quoted) return conn.reply(m.chat, bant, null, { mentions: [user] })               
try {
if(text) {
user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
user = m.quoted.sender
} else if(m.mentionedJid) {
user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {
number = user.split('@')[0]
if(user === conn.user.jid) return conn.reply(m.chat, langTOGGLE.smsPropban2(bot), null, { mentions: [user] })   
for (let i = 0; i < global.owner.length; i++) {
ownerNumber = global.owner[i][0];
if (user.replace(/@s\.whatsapp\.net$/, '') === ownerNumber) {
aa = ownerNumber + '@s.whatsapp.net'
await conn.reply(m.chat, langTOGGLE.smsPropban3(ownerNumber), null, { mentions: [aa] })
return
}}

if(!global.db.data.chats[m.chat]){
  global.db.data.chats[m.chat]={}
}
if(!global.db.data.chats[m.chat].users){
  global.db.data.chats[m.chat].users={}
}
if(!global.db.data.chats[m.chat].users[user]){
  global.db.data.chats[m.chat].users[user]={
    exp: 0,
        limit:0,
        role:'🪶 𝐍𝐨𝐯𝐢𝐜𝐨 𝐄𝐧𝐢𝐠𝐦𝐚𝐭𝐢𝐜𝐨',
        money:0,
        level:0,
        adm: isAdmin,
        legendary: false,
        banned:false,
  }
}
users = global.db.data.chats[m.chat].users
await conn.sendMessage(m.chat, { delete: m.key })
if (users[user].banned === true) conn.reply(m.chat, langTOGGLE.smsPropban4(number), null, { mentions: [user] }) 
users[user].banned = true
usr = user.split('@')[0]     
await conn.reply(m.chat, langTOGGLE.smsPropban5(), null, { mentions: [user] })   
//await conn.reply(user, langTOGGLE.smsPropban6(number, usr), null, { mentions: [user, user] })
}} catch (e) {
await conn.reply(m.chat, langTOGGLE.smsPropban7(usedPrefix, command, number), null, m)
console.log(e) 
}}
handler.command = /^ban$/i
handler.rowner = false
handler.admin = true
export default handler