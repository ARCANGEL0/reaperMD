
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async (m, { conn, text, usedPrefix, command,args, isOwner,isAdmin, participants}) => {
  
let user, number, bot, bant, ownerNumber, aa, users, usr, q, mime, img


if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}

let texto = `─┅──┅❖ ❖─┅──┅
_Marque ou responda a pessoa que deseja expurgar destes reinos digitais para o exilio_

*Exemplo:*
${usedPrefix + command} numero 55139880374
${usedPrefix + command} @usuario
─┅──┅❖ ❖─┅──┅`
try {
function no(number){
return number.replace(/\s/g,'').replace(/([@+-])/g,'')}
if(args[1]!='numero'){
text = no(text)
if(isNaN(text)) {
number = text.split`@`[1]
} else if(!isNaN(text)) {
number = text
}}

bot = conn.user.jid.split`@`[0] 
bant = langTOGGLE.smsPropban1(usedPrefix, command, bot)
if (!text && !m.quoted) return conn.reply(m.chat, texto, null, { mentions: [user] })               
try {
  if(args[0]== 'numero'){
    if(!args[1]){
      return conn.reply(m.chat, texto)  
      return !0
    }
    user = args[1] + '@s.whatsapp.net'
    let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
    
   
console.log(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)

console.log('---------')

    await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
    global.db.data.chats[m.chat].users[user].isKicked=true
    
// user = args[1]
  }
else if(/^\d+$/.test(text)) {
user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
user = m.quoted.sender
} else if(m.mentionedJid) {
user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {
number = user + '@s.whatsapp.net'
if(user.includes('@')){
  number = user.split('@')[0]
}
if(user === conn.user.jid) return conn.reply(m.chat, langTOGGLE.smsPropban2(bot), null, { mentions: [user] })   
for (let i = 0; i < global.owner.length; i++) {
ownerNumber = global.owner[i][0];
if (user.replace(/@s\.whatsapp\.net$/, '') === ownerNumber) {
aa = ownerNumber + '@s.whatsapp.net'
await conn.reply(m.chat, langTOGGLE.smsPropban3(ownerNumber), null, { mentions: [aa] })
return
}}
users = global.db.data.users
await conn.sendMessage(m.chat, { delete: m.key })
if(args[0]!= 'numero'){
  await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
}

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
  global.db.data.chats[m.chat].users[user]={exp: 0,
        limit:0,
        role:'𝚜𝚌𝚛𝚒𝚙𝚝 𝚔𝚒𝚍𝚍𝚒𝚎',
        money:0,
        level:0,
        isKicked:true,
        adm: admcheck,
        legendary: false,
        banned:false,
        adv:0,
        silenced: false,
        maxlevel: false,
        cocriador: false,
        slots:3,
 
       
  }
}
usr = m.sender.split('@')[0]     
if(!global.db.data.chats[m.chat].users[user].isKicked){
  global.db.data.chats[m.chat].users[user].isKicked=true
}
global.db.data.chats[m.chat].users[user].isKicked=true
//await conn.reply(user, langTOGGLE.smsPropban6(number, usr), null, { mentions: [user, m.sender] })
}} catch (e) {
  if(args[0]!='numero'){
await conn.reply(m.chat, langTOGGLE.smsPropban7(usedPrefix, command, number), null, m)}

console.log(e) 
}


  
  /* m.reply(`⎔⎓────────────
┃  ▂▃▅ 𝚂𝚎𝚛𝚟𝚒𝚌𝚘 𝚒𝚗𝚍𝚒𝚜𝚙𝚘𝚗𝚒𝚟𝚎𝚕 ▅▃▂
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ঔৣ _𝐃𝐞𝐯𝐢𝐝𝐨 𝐚𝐬 𝐦𝐮𝐝𝐚𝐧𝐜𝐚𝐬 𝐧𝐨 𝐚𝐥𝐠𝐨𝐫𝐢𝐭𝐦𝐨 𝐝𝐚 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐈𝐧𝐜. 𝐍𝐚̃𝐨 𝐞́ 𝐦𝐚𝐢𝐬 𝐩𝐨𝐬𝐬𝐢𝐯𝐞𝐥 𝐚𝐝𝐢𝐜𝐢𝐨𝐧𝐚𝐫 𝐨𝐮 𝐫𝐞𝐦𝐨𝐯𝐞𝐫 𝐦𝐞𝐦𝐛𝐫𝐨𝐬 𝐚𝐭𝐫𝐚𝐯𝐞𝐬 𝐝𝐨 𝐄𝐝𝐠𝐚𝐫._
╰─...⎔⎓─────────`) */
}
handler.command = /^kick|remover|expulsar$/

export default handler