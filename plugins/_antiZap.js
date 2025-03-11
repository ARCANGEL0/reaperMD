let linkRegex = /https:/i
export async function before(m, { isAdmin, isBotAdmin, text, participants }) { 
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
const user = `@${m.sender.split`@`[0]}`;
const groupAdmins = participants.filter(p => p.admin)

let bot = global.db.data.settings[this.user.jid] || {}
const isGroupLink = linkRegex.exec(m.text)



if (chat.antiLink && isGroupLink && !isAdmin) {

if (isBotAdmin=='admin') {
const linkThisGroup = `https://chat.whatsapp`
    

if (m.text.includes(linkThisGroup)) {
  
  if(!global.db.data.chats[m.chat].users[m.sender].advZap){
  global.db.data.chats[m.chat].users[m.sender].advZap = 1
  }
  if(global.db.data.chats[m.chat].users[m.sender].advZap == 1) 
  {
    let warnLinks;

    if (global.db.data.chats[m.chat].language === 'pt') {
      warnLinks = `
  > v@reaper: #~ journalctl
  > ---------------------------------------
  
  [!] 0x8007000E: Violação de Regras
  ────────────────────────────────
  > Não mande links do Whatsapp neste grupo. 
  > Isso é estritamente proibido pelas regras.
  > Qualquer desafio a esta ordem resultará em 
  > consequências imediatas.
  > ‎ 
  > # Monitoração ativa por ByteSec.
  ────────────────────────────────
      `;
  } else if (global.db.data.chats[m.chat].language === 'en') {
      warnLinks = `
  > v@reaper: #~ journalctl
  > ---------------------------------------
  
  [!] WARNING: Rule Violation
  ────────────────────────────────
  > Do not send Whatsapp links in this group.
  > It is strictly banned by defined rules.
  > Any challenge to this order will result in 
  > immediate consequences.
  > ‎ 
  > # Active monitoring by ByteSec.
  ────────────────────────────────
      `;
  }


 await conn.sendMessage(m.chat, {text: warnLinks, mentions: [m.sender]}, {quoted: m})
 global.db.data.chats[m.chat].users[m.sender].advZap++ 
 
 return !0
    
  }
  
  else if(global.db.data.chats[m.chat].users[m.sender].advZap==2) {
    
    let linksBAN; 

if (global.db.data.chats[m.chat].language === 'pt') {
    linksBAN = `
> v@reaper: #~/groups/ uafw && ./remove -l || grep -r '@${m.sender.split('@')[0]}'
> ---------------------------------------

>>> [!] ʀᴇᴍᴏᴠɪɴɢ ᴘɪᴅ 
────────────────────────────────
> [+] Você achou que poderia ignorar minhas instruções?
> [+] Links do whatsapp não são permitidos aqui.
> [+] Agora, você decidiu se arriscar. A consequência? 
> [+] Você será removido do sistema. 

> Adeus, ${global.db.data.users[m.sender].name}. 
> # Monitoração ativa por ByteSec. 
────────────────────────────────
    `;
}
else if (global.db.data.chats[m.chat].language === 'en') {
  linksBAN = `
> v@reaper: #~/groups/ uafw && ./remove -l || grep -r '@${m.sender.split('@')[0]}'
> ---------------------------------------

[!] ʀᴇᴍᴏᴠɪɴɢ ᴘɪᴅ
────────────────────────────────
> [+] You thought you could just ignore my orders?
> [+] Whatsapp Links are strictly forbidden here.
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
global.db.data.chats[m.chat].users[m.sender].advZap = 1

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
}
return !0
}