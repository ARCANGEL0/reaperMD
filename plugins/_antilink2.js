let linkRegex = /https:/i
export async function before(m, { isAdmin, isBotAdmin, text, participants }) { 
if (m.isBaileys && m.fromMe)
return !0
  if(!global.db.data.chats[m.chat].initialBoot) return !1

if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
const user = `@${m.sender.split`@`[0]}`;
const groupAdmins = participants.filter(p => p.admin)


let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)


if (!isBotAdmin) {
  return m.reply(global.notAdmin)
  } else if (!bot.restrict) {
  return m.reply(global.notOwner)
  }
else if (chat.antiLink2 && isGroupLink && !isAdmin) {
  console.log('bot e admin?')
  console.log(isBotAdmin =='admin')
if (isBotAdmin=='admin') {
const linkThisGroup = `https://`
const linkThisGroup2 = `www.`
const linkThisGroup3 = `https://youtu.be/`

if (m.text.includes(linkThisGroup) || m.text.includes(linkThisGroup2) || m.text.includes(linkThisGroup3)) {
  
  if(!global.db.data.chats[m.chat].users[m.sender].advLink){
  global.db.data.chats[m.chat].users[m.sender].advLink = 1
  }
  if(global.db.data.chats[m.chat].users[m.sender].advLink == 1) 
  {
      
let warnLinks;

if (global.db.data.chats[m.chat].language === 'pt') {
    warnLinks = `
> robot@bytesec: #~ journalctl
> ---------------------------------------

[!] 0x8007000E: Violação de Regras
────────────────────────────────
> Não mande links neste grupo. 
> Isso é estritamente proibido pelas regras.
> Qualquer desafio a esta ordem resultará em 
> consequências imediatas.
> ‎ 
> # Monitoração ativa por ByteSec.
────────────────────────────────
    `;
} else if (global.db.data.chats[m.chat].language === 'en') {
    warnLinks = `
> robot@bytesec: #~ journalctl
> ---------------------------------------

[!] WARNING: Rule Violation
────────────────────────────────
> Do not send links in this group.
> It is strictly banned by defined rules.
> Any challenge to this order will result in 
> immediate consequences.
> ‎ 
> # Active monitoring by ByteSec.
────────────────────────────────
    `;
}
    
 await conn.sendMessage(m.chat, {text: warnLinks, mentions: [m.sender]}, {quoted: m})
 global.db.data.chats[m.chat].users[m.sender].advLink++ 
 
 return !0
    
  }
  
  else if(global.db.data.chats[m.chat].users[m.sender].advLink==2) {
    
let linksBAN; 

if (global.db.data.chats[m.chat].language === 'pt') {
    linksBAN = `
> robot@bytesec: #~/groups/ uafw && ./remove -l || grep -r '@${m.sender.split('@')[0]}'
> ---------------------------------------

>>> [!] ʀᴇᴍᴏᴠɪɴɢ ᴘɪᴅ 
────────────────────────────────
> [+] Você achou que poderia ignorar minhas instruções?
> [+] Links não são permitidos aqui.
> [+] Agora, você decidiu se arriscar. A consequência? 
> [+] Você será removido do sistema. 

> Adeus, ${global.db.data.users[m.sender].name}. 
> # Monitoração ativa por ByteSec. 
────────────────────────────────
    `;
}
else if (global.db.data.chats[m.chat].language === 'en') {
  linksBAN = `
> robot@bytesec: #~/groups/ uafw && ./remove -l || grep -r '@${m.sender.split('@')[0]}'
> ---------------------------------------

[!] ʀᴇᴍᴏᴠɪɴɢ ᴘɪᴅ
────────────────────────────────
> [+] You thought you could just ignore my orders?
> [+] Links are strictly forbidden here.
> [+] You chose to take a risk. The consequence? 
> [+] You’re getting erased from the system. 

> Goodbye, ${global.db.data.users[m.sender].name}. 
> # Active monitoring by ByteSec. 
────────────────────────────────
  `;
}
 await conn.sendMessage(m.chat, {text: linksBAN, mentions: [m.sender]}, {quoted: m})
 
//No longer available
let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
    
   
console.log(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)
  
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
global.db.data.chats[m.chat].users[m.sender].advLink = 0 

return !0
  }
  
  
  
  
}
}    
//await conn.sendButton(m.chat, `${langTOGGLE['smsEnlaceWatt']()} ${await this.getName(m.sender)} ${isBotAdmin ? '' : `\n\n${langTOGGLE['smsAvisoFG']()}${langTOGGLE['smsAllAdmin']()}`}`, wm, [`${langTOGGLE['smsApagar']()}`, '/disable antilink'], m)    
if (!isBotAdmin) {
  return m.reply(global.notAdmin)
  } else if (!bot.restrict) {
  return m.reply(global.notOwner)
  }
return !0
}

}