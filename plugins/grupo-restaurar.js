
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

let handler = async (m, { conn, text, usedPrefix, command,args, isOwner,isAdmin, participants}) => {
let user, number, bot, bant, ownerNumber, aa, users, usr, q, mime, img

let texto = `─┅──┅❖ ❖─┅──┅
_Marque ou responda a pessoa que deseja restaurar para estes reinos digitais

*Exemplo:*
${usedPrefix + command} 55139880374
─┅──┅❖ ❖─┅──┅`

  if(!args[0] ){
await m.reply(texto)

}
if(args[0] && /^\d+$/.test(args[0])){
  user = args[0] + '@s.whatsapp.net'
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
  global.db.data.chats[m.chat].users[user].isKicked=false
}
global.db.data.chats[m.chat].users[user].isKicked=false
m.react("✅")
}
}
handler.command = /^restaurar/i
handler.rowner = false
handler.admin = true
export default handler