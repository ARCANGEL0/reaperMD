
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────


let handler = async (m, { conn, text }) => {
function no(number){
return number.replace(/\s/g,'').replace(/([@+-])/g,'')}
text = no(text)

if(isNaN(text)) {
var number = text.split`@`[1]
} else if(!isNaN(text)) {
var number = text
}

if(!text && !m.quoted) return conn.reply(m.chat, `*MARQUE O USUARIO, ESCREVA O NUMERO OU RESPONDA UMA MENSAGEM PARA DESBANIR*`, m)
if(isNaN(number)) return conn.reply(m.chat, `*O NÚMERO QUE DIGITOU NÃO É VÁLIDO PARA DESBANIR*`, m)
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}} catch (e) {
} finally {
  
let groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : {}
let participants = m.isGroup ? groupMetadata.participants : []
let users = m.isGroup ? participants.find(u => u.jid == user) : {}
let number = user.split('@')[0]
  
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
if(!global.db.data.chats[m.chat].users[user].silenced) {
  conn.reply(m.chat, `*❖─┅──┅\n🕯️ Este usuário já encontra-se desmutado. Peitido a ecoar suas palavras nos recintos deste grupo.\n─┅──┅❖*`, null, { mentions: [user] })
}
else if(global.db.data.chats[m.chat].users[user].silenced){
global.db.data.chats[m.chat].users[user].silenced = false
    
console.log(global.db.data.chats[m.chat].users[user].silenced )


conn.reply(m.chat, `*❖─┅──┅\nDas sombras do exílio, o usuário @${number} emerge, como um corvo outrora aprisionado, liberto para ecoar suas palavras pelos recantos digitais. O expurgo do silêncio, como um manto sombrio, foi dissipado, e agora, como um conto ressurgido, pode novamente proclamar suas palavras.\n─┅──┅❖*`, null, { mentions: [user] })
}
  
  
}
  
}


handler.tags = ['owner']
handler.command = [ 'desmutar', 'darvoz'] 
handler.owner = false
handler.admin = true

export default handler
