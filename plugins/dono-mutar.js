
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async (m, { conn, text, participants,usedPrefix, command}) => {
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

const groupAdmins = participants.filter(p => p.admin)
 
  let admins =[]
  const listAdmin = groupAdmins.map((v, i) =>
  admins.push(v.id))
  
   let admcheck = admins.includes(user)

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
        role:'𝚜𝚌𝚛𝚒𝚙𝚝 𝚔𝚒𝚍𝚍𝚒𝚎',
        money:0,
        level:0,
        adm: admcheck,
        legendary: false,
        banned:false,
        adv:0,
        silenced: false
  }
}

if(global.db.data.chats[m.chat].users[user].morto)
{
  const mensagensMorto = [
  `𝑼𝒔𝒖𝒂𝒓𝒊𝒐 𝒆𝒔𝒕𝒂 𝒎𝒐𝒓𝒕𝒐, 𝒏𝒂𝒐 𝒑𝒐𝒅𝒆 𝒔𝒆𝒓 𝒔𝒊𝒍𝒆𝒏𝒄𝒊𝒂𝒅𝒐!`,
  `𝑽𝒐𝒄𝒆 𝒏𝒂𝒐 𝒑𝒐𝒅𝒆 𝒔𝒊𝒍𝒆𝒏𝒄𝒊𝒂𝒓 𝒖𝒎 𝒆𝒔𝒑𝒊𝒓𝒊𝒕𝒐!`,
  `𝑻𝒆𝒏𝒕𝒂𝒕𝒊𝒗𝒂 𝒇𝒂𝒍𝒉𝒐𝒖: 𝒐 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 𝒋𝒂 𝒆𝒔𝒕𝒂 𝒎𝒐𝒓𝒕𝒐.`,
  `𝑶 𝒔𝒊𝒍𝒆𝒏𝒄𝒊𝒐 𝒏𝒂𝒐 𝒂𝒍𝒄𝒂𝒏𝒄𝒂 𝒐𝒔 𝒎𝒐𝒓𝒕𝒐𝒔.`,
  `𝑺𝒐𝒎𝒆𝒏𝒕𝒆 𝒐𝒔 𝒗𝒊𝒗𝒐𝒔 𝒑𝒐𝒅𝒆𝒎 𝒔𝒆𝒓 𝒔𝒊𝒍𝒆𝒏𝒄𝒊𝒂𝒅𝒐𝒔, 𝒏𝒂𝒐 𝒐𝒔 𝒎𝒐𝒓𝒕𝒐𝒔.`,
  `𝑨 𝒎𝒐𝒓𝒕𝒆 𝒊𝒎𝒑𝒆𝒅𝒆 𝒒𝒖𝒂𝒍𝒒𝒖𝒆𝒓 𝒕𝒆𝒏𝒕𝒂𝒕𝒊𝒗𝒂 𝒅𝒆 𝒔𝒊𝒍𝒆𝒏𝒄𝒊𝒐.`,
  `𝑬𝒔𝒑𝒊𝒓𝒊𝒕𝒐𝒔 𝒏𝒂𝒐 𝒑𝒐𝒅𝒆𝒎 𝒔𝒆𝒓 𝒔𝒊𝒍𝒆𝒏𝒄𝒊𝒂𝒅𝒐𝒔.`,
  `𝑼𝒔𝒖𝒂𝒓𝒊𝒐 𝒋𝒂 𝒆𝒔𝒕𝒂 𝒂𝒍𝒆𝒎 𝒅𝒆𝒔𝒕𝒆 𝒑𝒍𝒂𝒏𝒐 𝒆 𝒏𝒂𝒐 𝒑𝒐𝒅𝒆 𝒔𝒆𝒓 𝒔𝒊𝒍𝒆𝒏𝒄𝒊𝒂𝒅𝒐.`,
  `𝑶𝒔 𝒎𝒐𝒓𝒕𝒐𝒔 𝒏𝒂𝒐 𝒄𝒐𝒏𝒉𝒆𝒄𝒆𝒎 𝒐 𝒔𝒊𝒍𝒆𝒏𝒄𝒊𝒐.`,
  `𝑵𝒂𝒐 𝒔𝒆 𝒑𝒐𝒅𝒆 𝒄𝒂𝒍𝒂𝒓 𝒖𝒎𝒂 𝒂𝒍𝒎𝒂 𝒋𝒂 𝒑𝒂𝒓𝒕𝒊𝒅𝒂.`
];
m.reply(`┏━── *「️♱」*  ─━┓
${mensagensMorto.getRandom()}
┗━── *「️ִ𖤐」*  ─━┛`)
  }
  if (global.db.data.chats[m.chat].users[user].silenced=== true) conn.reply(m.chat, langTOGGLE.smsPropban4(number), null, { mentions: [user] }) 

global.db.data.chats[m.chat].users[user].silenced = true

console.log(global.db.data.chats[m.chat].users[user].silenced)
user = m.sender.split('@')[0]     
await conn.reply(m.chat, langTOGGLE.smsPropban5(), null, { mentions: [user] })   
//await conn.reply(user, langTOGGLE.smsPropban6(number, usr), null, { mentions: [user, m.sender] })
}} catch (e) {
await conn.reply(m.chat, langTOGGLE.smsPropban7(usedPrefix, command, number), null, m)
console.log(e) 
}}
handler.command = /^mute|silenciar|silence$/i
handler.rowner = false
handler.admin = true
export default handler