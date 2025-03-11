
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────╯
import fetch from 'node-fetch'  
const isLinkTik = /tiktok.com/i 
const isLinkYt = /youtube.com|youtu.be/i 
const isLinkTel = /telegram.com/i 
const isLinkFb = /facebook.com|fb.me/i 
const isLinkIg = /instagram.com/i 
const isLinkTw = /twitter.com/i 

export async function before(m, {isMods,participants, groupMetadata, conn, args, usedPrefix, command, isAdmin, isBotAdmin }) {  
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
  if(!global.db.data.chats[m.chat].initialBoot) return !1

if (global.db.data.chats[m.chat].isBanned) return !1
let chat = global.db.data.chats[m.chat]
if (chat.antiLink2) return !1
let bot = global.db.data.settings[this.user.jid] || {}
let delet = m.key.participant
let bang = m.key.id
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'
    
const isAntiLinkTik = isLinkTik.exec(m.text)
const isAntiLinkYt = isLinkYt.exec(m.text)
const isAntiLinkTel = isLinkTel.exec(m.text)
const isAntiLinkFb = isLinkFb.exec(m.text)
const isAntiLinkIg = isLinkIg.exec(m.text)
const isAntiLinkTw = isLinkTw.exec(m.text)
  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  function getDataAtual() {
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Mês começa do zero, então é necessário adicionar 1
    const ano = hoje.getFullYear();

    return `${dia}/${mes}/${ano}`;
}
function generateRandomCode() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let code = '';

    // Generate 4 random numbers
    for (let i = 0; i < 4; i++) {
        code += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    // Generate 1 random letter
    code += letters.charAt(Math.floor(Math.random() * letters.length));

    return code;
}
 let tempBanimento = async (motivo) => {
   global.db.data.chats[m.chat].users[m.sender].tempBan = true
   
   console.log('1🌙')
     const groupAdms = participants.filter(p => p.admin)
 
  let adms =[]
  const listaAdmin = groupAdms.map((v, i) =>
  adms.push(v.id))
  
   console.log('2🌙')
  console.log(adms)
// Example usage:
adms = adms.filter(adm => adm !== conn.user.jid);
const adminAleatorio = adms.getRandom()
let destino = global.db.data.chats[m.chat].reportchat || adminAleatorio

   console.log('3🌙')

  let teks;

  if (global.db.data.chats[m.chat].language === 'pt') {
          teks = `
> v@reaper: /root/users/ cat ${generateRandomCode()}.log
> ---------------------------------------
*𓉘!𓉝* 𝗨𝘀𝘂𝗮́𝗿𝗶𝗼 𝗕𝗮𝗻𝗶𝗱𝗼
────────────────────────────────
> Pʀᴏᴛᴏᴄᴏʟᴏ: ${generateRandomCode()}
> Dᴀᴛᴀ: ${getDataAtual()}
>>> 𝘿𝙀𝙏𝘼𝙇𝙃𝙀𝙎 𝘿𝙊 𝙐𝙎𝙐𝘼́𝙍𝙄𝙊
────────────────────────────────
> [+] Nᴏᴍᴇ: ${m.name}
> [+] Cᴏɴᴛᴀᴛᴏ: @${m.sender.split`@`[0]}
> [+] Gʀᴜᴘᴏ: ${groupMetadata.subject}
> ‎ 
>>> ᴍ̲ᴏ̲ᴛ̲ɪ̲ᴠ̲ᴏ̲
────────────────────────────────
> ${motivo}
> ‎ 
> ⚊ 〔𝗥𝝣𝝠𝗣𝗘𝗥 v${vs}〕 ⚊ 
────────────────────────────────
`;
} else if (global.db.data.chats[m.chat].language === 'en') {
    teks = `
> v@reaper: /root/users/ cat ${generateRandomCode()}.log
> ---------------------------------------
*𓉘!𓉝* 𝗨𝘀𝗲𝗿 𝗕𝗮𝗻𝗻𝗲𝗱
────────────────────────────────
> Pʀᴏᴛᴏᴄᴏʟ: ${generateRandomCode()}
> Dᴀᴛᴇ: ${getDataAtual()}
>>> 𝙐𝙎𝙀𝙍 𝘿𝙀𝙏𝘼𝙄𝙇𝙎
────────────────────────────────
> [+] Nᴀᴍᴇ: ${m.name}
> [+] Cᴏɴᴛᴀᴄᴛ: @${m.sender.split`@`[0]}
> [+] Gʀᴏᴜᴘ: ${groupMetadata.subject}
> ‎ 
>>> ʀ̲ᴇ̲ᴀ̲s̲ᴏ̲ɴ̲
────────────────────────────────
> ${motivo}
> ‎ 
> ⚊ 〔𝗥𝝣𝝠𝗣𝗘𝗥 v${vs}〕 ⚊ 
────────────────────────────────
    `;
}
   
   m.reply(teks,destino)


//No longer available
let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
    
   
console.log(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)


await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')

return !0
 }
if (chat.antiTiktok && isAntiLinkTik) {  
if (isBotAdmin && bot.restrict) {


  if(!global.db.data.chats[m.chat].users[m.sender].advTik){
  global.db.data.chats[m.chat].users[m.sender].advTik = 1
  }
  if(global.db.data.chats[m.chat].users[m.sender].advTik == 1) 
  {
  
//No longer available
let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
    
   
console.log(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)


let warn;

if (global.db.data.chats[m.chat].language === 'pt') {
    warn = `
> v@reaper: #~ journalctl
> ---------------------------------------
*𓉘!𓉝* 𝟬𝘅𝟴𝟬𝟬𝟳𝟬𝟬𝟬𝗘: 𝗥𝘂𝗹𝗲 𝗩𝗶𝗼𝗹𝗮𝘁𝗶𝗼𝗻
────────────────────────────────
> Lɪɴᴋs ᴅᴏ TɪᴋTᴏᴋ sᴀ̃ᴏ ᴘʀᴏɪʙɪᴅᴏs.
> O ɴᴀ̃ᴏ ᴄᴜᴍᴘʀɪᴍᴇɴᴛᴏ ʀᴇsᴜʟᴛᴀʀᴀ́ ᴇᴍ ʀᴇᴍᴏᴄ̧ᴀ̃ᴏ ɪᴍᴇᴅɪᴀᴛᴀ.
> Pᴏʀ ꜰᴀᴠᴏʀ, sɪɢᴀ ᴀs ʀᴇɢʀᴀs ᴇsᴛᴀʙᴇʟᴇᴄɪᴅᴀs ɴᴏ ɢʀᴜᴘᴏ.
> ‎ 
> ⚊ 〔𝗥𝝣𝝠𝗣𝗘𝗥 v${vs}〕 ⚊ 
────────────────────────────────
    `;
} else if (global.db.data.chats[m.chat].language === 'en') {
    warn = `
> v@reaper: #~ journalctl
> ---------------------------------------
*𓉘!𓉝* 𝟬𝘅𝟴𝟬𝟬𝟳𝟬𝟬𝟬𝗘: 𝗥𝘂𝗹𝗲 𝗩𝗶𝗼𝗹𝗮𝘁𝗶𝗼𝗻
────────────────────────────────
> TɪᴋTᴏᴋ ʟɪɴᴋs ᴀʀᴇ ᴘʀᴏʜɪʙɪᴛᴇᴅ ɪɴ ᴛʜɪs ɢʀᴏᴜᴘ.
> Nᴏɴ-ᴄᴏᴍᴘʟɪᴀɴᴄᴇ ᴡɪʟʟ ʀᴇsᴜʟᴛ ɪɴ ɪᴍᴍᴇᴅɪᴀᴛᴇ ᴀᴄᴛɪᴏɴ.
> Pʟᴇᴀsᴇ ᴀᴅʜᴇʀᴇ ᴛᴏ ᴛʜᴇ ᴄᴏᴍᴍᴜɴɪᴛʏ ʀᴜʟᴇs.
> ‎ 
> ⚊ 〔𝗥𝝣𝝠𝗣𝗘𝗥 v${vs}〕 ⚊ 
────────────────────────────────
    `;
}
    
 await conn.sendMessage(m.chat, {text: warn, mentions: [m.sender]}, {quoted: m})
 global.db.data.chats[m.chat].users[m.sender].advTik++ 
 
 return !0
    
  }
  
  let tikDetected 
  if(global.db.data.chats[m.chat].language === 'en') {
    tikDetected= 'Tiktok link detected! Anti-Link protocol activated.'
  }
  else if (global.db.data.chats[m.chat].language === 'pt') {    
    
tikDetected= 'Link Tiktok detectado! Protocolo Anti-Link aplicado.'
  }


  if(global.db.data.chats[m.chat].users[m.sender].advTik == 2) {
    let tikTokBAN;

    if (global.db.data.chats[m.chat].language === 'pt') {
        tikTokBAN = `
> v@reaper: ./remove.sh -u '@${m.sender.split('@')[0]}'
> ---------------------------------------
>>> *𓉘!𓉝* ʀᴇᴍᴏᴠɪɴɢ ᴘɪᴅ 
────────────────────────────────
> [𝗔𝗟𝗘𝗥𝗧] ʟɪɴᴋ ᴅᴏ TɪᴋTᴏᴋ ᴅᴇᴛᴇᴄᴛᴀᴅᴏ
> *𓉘!𓉝* ᴏ ᴜsᴜᴀ́ʀɪᴏ ᴠɪᴏʟᴏᴜ ᴀs ʀᴇɢʀᴀs ᴅᴏ ɢʀᴜᴘᴏ.​
> .  .  .  .  .  .  .  .  .  .  .  .  .  .  .
> // 𝙍𝙚𝙢𝙤𝙫𝙚𝙣𝙙𝙤 ${global.db.data.users[m.sender].name}... 
> ‎ 
> ⚊ 〔𝗥𝝣𝝠𝗣𝗘𝗥 v${vs}〕 ⚊  
────────────────────────────────
`;
    }
    else if (global.db.data.chats[m.chat].language === 'en') {
      tikTokBAN = `
> v@reaper: ./remove.sh -u '@${m.sender.split('@')[0]}'
> ---------------------------------------
>>> *𓉘!𓉝* ʀᴇᴍᴏᴠɪɴɢ ᴘɪᴅ
────────────────────────────────
> [𝗔𝗟𝗘𝗥𝗧] TɪᴋTᴏᴋ ʟɪɴᴋ ᴅᴇᴛᴇᴄᴛᴇᴅ
> *𓉘!𓉝* ᴜsᴇʀ ʜᴀs ᴠɪᴏʟᴀᴛᴇᴅ ɢʀᴏᴜᴘ ʀᴜʟᴇs
> .  .  .  .  .  .  .  .  .  .  .  .  .  .  .
> // 𝙍𝙚𝙢𝙤𝙫𝙞𝙣𝙜 ${global.db.data.users[m.sender].name}...
> ‎ 
> ⚊ 〔𝗥𝝣𝝠𝗣𝗘𝗥 v${vs}〕 ⚊ 
────────────────────────────────
`;
  }
  
await conn.reply(m.chat, tikTokBAN, null, { mentions: [aa] }
)
global.db.data.chats[m.chat].users[m.sender].advTik = 0 
await tempBanimento(tikDetected)
}
    
  } else if (!isBotAdmin) {
return m.reply(global.notAdmin)
} else if (!bot.restrict) {
return m.reply(global.notOwner)
}}
    
if (chat.antiYoutube && isAntiLinkYt) {
if (isBotAdmin && bot.restrict) {
  
  
  if(!global.db.data.chats[m.chat].users[m.sender].advYt){
  global.db.data.chats[m.chat].users[m.sender].advYt = 1
  }
  if(global.db.data.chats[m.chat].users[m.sender].advYt == 1) 
  {
   
//No longer available
let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
    
   
console.log(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)

let warnYt;

if (global.db.data.chats[m.chat].language === 'pt') {
    warnYt = `
> v@reaper: #~ journalctl
> ---------------------------------------

*𓉘!𓉝* 0x8007000E: Violação de Regras
────────────────────────────────
> Não mande links do Youtube neste grupo. 
> Isso é estritamente proibido pelas regras.
> Qualquer desafio a esta ordem resultará em 
> consequências imediatas.
> ‎ 
> # Monitoração ativa por ByteSec.
────────────────────────────────
    `;
} else if (global.db.data.chats[m.chat].language === 'en') {
    warnYt = `
> v@reaper: #~ journalctl
> ---------------------------------------

*𓉘!𓉝* WARNING: Rule Violation
────────────────────────────────
> Do not send Youtube links in this group.
> It is strictly banned by defined rules.
> Any challenge to this order will result in 
> immediate consequences.
> ‎ 
> # Active monitoring by ByteSec.
────────────────────────────────
    `;
}
    
   
 await conn.sendMessage(m.chat, {text: warnYt, mentions: [m.sender]}, {quoted: m})
 global.db.data.chats[m.chat].users[m.sender].advYt++ 
 
 return !0
    
  }
  
  if(global.db.data.chats[m.chat].users[m.sender].advYt == 2) {
    let YtBAN;

    if (global.db.data.chats[m.chat].language === 'pt') {
        YtBAN = `
    > v@reaper: #~/groups/ uafw && ./remove -l || grep -r '@${m.sender.split('@')[0]}'
    > ---------------------------------------
    
    >>> *𓉘!𓉝* ʀᴇᴍᴏᴠɪɴɢ ᴘɪᴅ 
    ────────────────────────────────
    > [+] Você achou que poderia ignorar minhas instruções?
    > [+] Links do Youtube não são permitidos aqui.
    > [+] Agora, você decidiu se arriscar. A consequência? 
    > [+] Você será removido do sistema. 
    
    > Adeus, ${global.db.data.users[m.sender].name}. 
    > # Monitoração ativa por ByteSec. 
    ────────────────────────────────
        `;
    }
    else if (global.db.data.chats[m.chat].language === 'en') {
      YtBAN = `
  > v@reaper: #~/groups/ uafw && ./remove -l || grep -r '@${m.sender.split('@')[0]}'
  > ---------------------------------------
  
  *𓉘!𓉝* ʀᴇᴍᴏᴠɪɴɢ ᴘɪᴅ
  ────────────────────────────────
  > [+] You thought you could just ignore my orders?
  > [+] Youtube links are strictly forbidden here.
  > [+] You chose to take a risk. The consequence? 
  > [+] You’re getting erased from the system. 
  
  > Goodbye, ${global.db.data.users[m.sender].name}. 
  > # Active monitoring by ByteSec. 
  ────────────────────────────────
      `;
  }

await conn.reply(m.chat, YtBAN, null, { mentions: [aa] }
)
global.db.data.chats[m.chat].users[m.sender].advYt = 0 
let ytDetected 
if(global.db.data.chats[m.chat].language === 'en') {
  ytDetected= 'Youtube link detected! Anti-Link protocol activated.'
}
else if (global.db.data.chats[m.chat].language === 'pt') {    
  
ytDetected= 'Link do Youtube detectado! Protocolo Anti-Link aplicado.'
}

await tempBanimento(ytDetected)
}
    
    
} else if (!isBotAdmin) {
return m.reply(global.notAdmin)
} else if (!bot.restrict) {
return m.reply(global.notOwner)
}}  
    
if (chat.antiTelegram && isAntiLinkTel) {
if (isBotAdmin && bot.restrict) {
  
  
  
  if(!global.db.data.chats[m.chat].users[m.sender].advTel){
  global.db.data.chats[m.chat].users[m.sender].advTel= 1
  }
  if(global.db.data.chats[m.chat].users[m.sender].advTel == 1) 
  {
      
//No longer available
let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
    
   
console.log(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)


let warnTg;

if (global.db.data.chats[m.chat].language === 'pt') {
    warnTg = `
> v@reaper: #~ journalctl
> ---------------------------------------

*𓉘!𓉝* 0x8007000E: Violação de Regras
────────────────────────────────
> Não mande links do Telegram neste grupo. 
> Isso é estritamente proibido pelas regras.
> Qualquer desafio a esta ordem resultará em 
> consequências imediatas.
> ‎ 
> # Monitoração ativa por ByteSec.
────────────────────────────────
    `;
} else if (global.db.data.chats[m.chat].language === 'en') {
    warnTg = `
> v@reaper: #~ journalctl
> ---------------------------------------

*𓉘!𓉝* WARNING: Rule Violation
────────────────────────────────
> Do not send Telegram links in this group.
> It is strictly banned by defined rules.
> Any challenge to this order will result in 
> immediate consequences.
> ‎ 
> # Active monitoring by ByteSec.
────────────────────────────────
    `;
}
 


 await conn.sendMessage(m.chat, {text: warnTg, mentions: [m.sender]}, {quoted: m})
 global.db.data.chats[m.chat].users[m.sender].advTel++ 
 
 return !0
    
  }
  
  if(global.db.data.chats[m.chat].users[m.sender].advTel == 2) {

    let TgBAN;

    if (global.db.data.chats[m.chat].language === 'pt') {
        TgBAN = `
    > v@reaper: #~/groups/ uafw && ./remove -l || grep -r '@${m.sender.split('@')[0]}'
    > ---------------------------------------
    
    >>> *𓉘!𓉝* ʀᴇᴍᴏᴠɪɴɢ ᴘɪᴅ 
    ────────────────────────────────
    > [+] Você achou que poderia ignorar minhas instruções?
    > [+] Links do Telegram não são permitidos aqui.
    > [+] Agora, você decidiu se arriscar. A consequência? 
    > [+] Você será removido do sistema. 
    
    > Adeus, ${global.db.data.users[m.sender].name}. 
    > # Monitoração ativa por ByteSec. 
    ────────────────────────────────
        `;
    }
    else if (global.db.data.chats[m.chat].language === 'en') {
      TgBAN = `
  > v@reaper: #~/groups/ uafw && ./remove -l || grep -r '@${m.sender.split('@')[0]}'
  > ---------------------------------------
  
  *𓉘!𓉝* ʀᴇᴍᴏᴠɪɴɢ ᴘɪᴅ
  ────────────────────────────────
  > [+] You thought you could just ignore my orders?
  > [+] Telegram links are strictly forbidden here.
  > [+] You chose to take a risk. The consequence? 
  > [+] You’re getting erased from the system. 
  
  > Goodbye, ${global.db.data.users[m.sender].name}. 
  > # Active monitoring by ByteSec. 
  ────────────────────────────────
      `;
  }

await conn.reply(m.chat, TgBAN, null, { mentions: [aa] }
)
global.db.data.chats[m.chat].users[m.sender].advTel = 0 

let tgDetected 
if(global.db.data.chats[m.chat].language === 'en') {
  tgDetected= 'Telegram link detected! Anti-Link protocol activated.'
}
else if (global.db.data.chats[m.chat].language === 'pt') {    
  
tgDetected= 'Link Telegram detectado! Protocolo Anti-Link aplicado.'
}

await tempBanimento(tgDetected)
}
    
    
    
} else if (!isBotAdmin) {
return m.reply(global.notAdmin)
} else if (!bot.restrict) {
return m.reply(global.notOwner)
}}    
    
if (chat.antiFacebook && isAntiLinkFb) {
if (isBotAdmin && bot.restrict) {
  
  
  
  
  if(!global.db.data.chats[m.chat].users[m.sender].advFb){
  global.db.data.chats[m.chat].users[m.sender].advFb = 1
  }
  if(global.db.data.chats[m.chat].users[m.sender].advFb == 1) 
  {
  
//No longer available
let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
    
   
console.log(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)

let warnFb;

if (global.db.data.chats[m.chat].language === 'pt') {
    warnFb = `
> v@reaper: #~ journalctl
> ---------------------------------------

*𓉘!𓉝* 0x8007000E: Violação de Regras
────────────────────────────────
> Não mande links do Facebook neste grupo. 
> Isso é estritamente proibido pelas regras.
> Qualquer desafio a esta ordem resultará em 
> consequências imediatas.
> ‎ 
> # Monitoração ativa por ByteSec.
────────────────────────────────
    `;
} else if (global.db.data.chats[m.chat].language === 'en') {
    warnFb = `
> v@reaper: #~ journalctl
> ---------------------------------------

*𓉘!𓉝* WARNING: Rule Violation
────────────────────────────────
> Do not send Facebook links in this group.
> It is strictly banned by defined rules.
> Any challenge to this order will result in 
> immediate consequences.
> ‎ 
> # Active monitoring by ByteSec.
────────────────────────────────
    `;
}
 
    
 await conn.sendMessage(m.chat, {text: warnFb, mentions: [m.sender]}, {quoted: m})
 global.db.data.chats[m.chat].users[m.sender].advFb++ 
 
 return !0
    
  }
  
  if(global.db.data.chats[m.chat].users[m.sender].advFb == 2) {
    let FbBAN;

    if (global.db.data.chats[m.chat].language === 'pt') {
        FbBAN = `
    > v@reaper: #~/groups/ uafw && ./remove -l || grep -r '@${m.sender.split('@')[0]}'
    > ---------------------------------------
    
    >>> *𓉘!𓉝* ʀᴇᴍᴏᴠɪɴɢ ᴘɪᴅ 
    ────────────────────────────────
    > [+] Você achou que poderia ignorar minhas instruções?
    > [+] Links do Facebook não são permitidos aqui.
    > [+] Agora, você decidiu se arriscar. A consequência? 
    > [+] Você será removido do sistema. 
    
    > Adeus, ${global.db.data.users[m.sender].name}. 
    > # Monitoração ativa por ByteSec. 
    ────────────────────────────────
        `;
    }
    else if (global.db.data.chats[m.chat].language === 'en') {
      FbBAN = `
  > v@reaper: #~/groups/ uafw && ./remove -l || grep -r '@${m.sender.split('@')[0]}'
  > ---------------------------------------
  
  *𓉘!𓉝* ʀᴇᴍᴏᴠɪɴɢ ᴘɪᴅ
  ────────────────────────────────
  > [+] You thought you could just ignore my orders?
  > [+] Facebook links are strictly forbidden here.
  > [+] You chose to take a risk. The consequence? 
  > [+] You’re getting erased from the system. 
  
  > Goodbye, ${global.db.data.users[m.sender].name}. 
  > # Active monitoring by ByteSec. 
  ────────────────────────────────
      `;
  }
await conn.reply(m.chat, FbBAN, null, { mentions: [aa] }
)
global.db.data.chats[m.chat].users[m.sender].advFb = 0 

let fbDetected 
if(global.db.data.chats[m.chat].language === 'en') {
  fbDetected= 'Facebook link detected! Anti-Link protocol activated.'
}
else if (global.db.data.chats[m.chat].language === 'pt') {    
  
fbDetected= 'Link de Facebook detectado! Protocolo Anti-Link aplicado.'
}

await tempBanimento(fbDetected)
}
    
    
    
} else if (!isBotAdmin) {
return m.reply(global.notAdmin)
} else if (!bot.restrict) {
return m.reply(global.notOwner)
}}  
    
if (chat.antiInstagram && isAntiLinkIg) {
if (isBotAdmin && bot.restrict) {
  
  if(!global.db.data.chats[m.chat].users[m.sender].advIg){
  global.db.data.chats[m.chat].users[m.sender].advIg= 1
  }
  if(global.db.data.chats[m.chat].users[m.sender].advIg == 1) 
  {
   
//No longer available
let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
    
   
console.log(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)


let warnIg;

if (global.db.data.chats[m.chat].language === 'pt') {
    warnIg = `
> v@reaper: #~ journalctl
> ---------------------------------------

*𓉘!𓉝* 0x8007000E: Violação de Regras
────────────────────────────────
> Não mande links do Instagram neste grupo. 
> Isso é estritamente proibido pelas regras.
> Qualquer desafio a esta ordem resultará em 
> consequências imediatas.
> ‎ 
> # Monitoração ativa por ByteSec.
────────────────────────────────
    `;
} else if (global.db.data.chats[m.chat].language === 'en') {
    warnIg = `
> v@reaper: #~ journalctl
> ---------------------------------------

*𓉘!𓉝* WARNING: Rule Violation
────────────────────────────────
> Do not send Instagram links in this group.
> It is strictly banned by defined rules.
> Any challenge to this order will result in 
> immediate consequences.
> ‎ 
> # Active monitoring by ByteSec.
────────────────────────────────
    `;
}
 
   
 await conn.sendMessage(m.chat, {text:warnIg, mentions: [m.sender]}, {quoted: m})
 global.db.data.chats[m.chat].users[m.sender].advIg++ 
 
 return !0
    
  }
  
  if(global.db.data.chats[m.chat].users[m.sender].advIg == 2) {
let IgBAN;

    if (global.db.data.chats[m.chat].language === 'pt') {
        IgBAN = `
    > v@reaper: #~/groups/ uafw && ./remove -l || grep -r '@${m.sender.split('@')[0]}'
    > ---------------------------------------
    
    >>> *𓉘!𓉝* ʀᴇᴍᴏᴠɪɴɢ ᴘɪᴅ 
    ────────────────────────────────
    > [+] Você achou que poderia ignorar minhas instruções?
    > [+] Links do Instagram não são permitidos aqui.
    > [+] Agora, você decidiu se arriscar. A consequência? 
    > [+] Você será removido do sistema. 
    
    > Adeus, ${global.db.data.users[m.sender].name}. 
    > # Monitoração ativa por ByteSec. 
    ────────────────────────────────
        `;
    }
    else if (global.db.data.chats[m.chat].language === 'en') {
      IgBAN = `
  > v@reaper: #~/groups/ uafw && ./remove -l || grep -r '@${m.sender.split('@')[0]}'
  > ---------------------------------------
  
  *𓉘!𓉝* ʀᴇᴍᴏᴠɪɴɢ ᴘɪᴅ
  ────────────────────────────────
  > [+] You thought you could just ignore my orders?
  > [+] Instagram links are strictly forbidden here.
  > [+] You chose to take a risk. The consequence? 
  > [+] You’re getting erased from the system. 
  
  > Goodbye, ${global.db.data.users[m.sender].name}. 
  > # Active monitoring by ByteSec. 
  ────────────────────────────────
      `;
  }
await conn.reply(m.chat, IgBAN, null, { mentions: [aa] }
)
global.db.data.chats[m.chat].users[m.sender].advIg = 0 

let igDetected 
if(global.db.data.chats[m.chat].language === 'en') {
  igDetected= 'Instagram link detected! Anti-Link protocol activated.'
}
else if (global.db.data.chats[m.chat].language === 'pt') {    
  
igDetected= 'Link de Instagram detectado! Protocolo Anti-Link aplicado.'
}

await tempBanimento(igDetected)
}
    
    
    
    
} else if (!isBotAdmin) {
return m.reply(global.notAdmin)
} else if (!bot.restrict) {
return m.reply(global.notOwner)
}

}
    
if (chat.antiTwitter && isAntiLinkTw) {
if (isBotAdmin && bot.restrict) {
  
  
  if(!global.db.data.chats[m.chat].users[m.sender].advTw){
  global.db.data.chats[m.chat].users[m.sender].advTw = 1
  }
  if(global.db.data.chats[m.chat].users[m.sender].advTw == 1) 
  {
  
//No longer available
let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
    
   
console.log(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)

let warnTw;

if (global.db.data.chats[m.chat].language === 'pt') {
    warnTw = `
> v@reaper: #~ journalctl
> ---------------------------------------

*𓉘!𓉝* 0x8007000E: Violação de Regras
────────────────────────────────
> Não mande links do Twitter/X neste grupo. 
> Isso é estritamente proibido pelas regras.
> Qualquer desafio a esta ordem resultará em 
> consequências imediatas.
> ‎ 
> # Monitoração ativa por ByteSec.
────────────────────────────────
    `;
} else if (global.db.data.chats[m.chat].language === 'en') {
    warnTw = `
> v@reaper: #~ journalctl
> ---------------------------------------

*𓉘!𓉝* WARNING: Rule Violation
────────────────────────────────
> Do not send Twitter/X links in this group.
> It is strictly banned by defined rules.
> Any challenge to this order will result in 
> immediate consequences.
> ‎ 
> # Active monitoring by ByteSec.
────────────────────────────────
    `;
}
    
 await conn.sendMessage(m.chat, {text: warnTw, mentions: [m.sender]}, {quoted: m})
 global.db.data.chats[m.chat].users[m.sender].advTw++ 
 
 return !0
    
  }
  
  if(global.db.data.chats[m.chat].users[m.sender].advTw == 2) {

let TwBAN; 

    if (global.db.data.chats[m.chat].language === 'pt') {
        TwBAN = `
    > v@reaper: #~/groups/ uafw && ./remove -l || grep -r '@${m.sender.split('@')[0]}'
    > ---------------------------------------
    
    >>> *𓉘!𓉝* ʀᴇᴍᴏᴠɪɴɢ ᴘɪᴅ 
    ────────────────────────────────
    > [+] Você achou que poderia ignorar minhas instruções?
    > [+] Links do Twitter/X não são permitidos aqui.
    > [+] Agora, você decidiu se arriscar. A consequência? 
    > [+] Você será removido do sistema. 
    
    > Adeus, ${global.db.data.users[m.sender].name}. 
    > # Monitoração ativa por ByteSec. 
    ────────────────────────────────
        `;
    }
    else if (global.db.data.chats[m.chat].language === 'en') {
      TwBAN = `
  > v@reaper: #~/groups/ uafw && ./remove -l || grep -r '@${m.sender.split('@')[0]}'
  > ---------------------------------------
  
  *𓉘!𓉝* ʀᴇᴍᴏᴠɪɴɢ ᴘɪᴅ
  ────────────────────────────────
  > [+] You thought you could just ignore my orders?
  > [+] Twitter/X links are strictly forbidden here.
  > [+] You chose to take a risk. The consequence? 
  > [+] You’re getting erased from the system. 
  
  > Goodbye, ${global.db.data.users[m.sender].name}. 
  > # Active monitoring by ByteSec. 
  ────────────────────────────────
      `;
  }
await conn.reply(m.chat, TwBAN, null, { mentions: [aa] }
)
global.db.data.chats[m.chat].users[m.sender].advTw = 0 


let igDetected 
if(global.db.data.chats[m.chat].language === 'en') {
  igDetected= 'Twitter link detected! Anti-Link protocol activated.'
}
else if (global.db.data.chats[m.chat].language === 'pt') {    
  
igDetected= 'Link do Twitter detectado! Protocolo Anti-Link aplicado.'
}


await tempBanimento()
}
    
    
    
    
    
} else if (!isBotAdmin) {
return m.reply(global.notAdmin)
} else if (!bot.restrict) {
return m.reply(global.notOwner)
}}
return !0
}

