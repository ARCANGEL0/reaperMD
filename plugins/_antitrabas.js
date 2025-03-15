
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

import * as fs from 'fs'

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, usedPrefix,groupMetadata, participants }) {
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

  
let teks 

if (global.db.data.chats[m.chat].language === 'pt') {
  teks = `
${global.heading} cat ${generateRandomCode()}.log
> ---------------------------------------
*𓉘!𓉝* 𝗨𝘀𝘂𝗮́𝗿𝗶𝗼 𝗕𝗮𝗻𝗶𝗱𝗼
────────────────────────────────
> Pʀᴏᴛᴏᴄᴏʟᴏ: ${generateRandomCode()}
> Dᴀᴛᴀ: ${getDataAtual()}
>>> 𝘿𝙀𝙏𝘼𝙇𝙃𝙀𝙎 𝘿𝙊 𝙐𝙎𝙐𝘼́𝙍𝙄𝙊
────────────────────────────────
> [+] Nᴏᴍᴇ: ${m.pushName}
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
${global.heading} cat ${generateRandomCode()}.log
> ---------------------------------------
*𓉘!𓉝* 𝗨𝘀𝗲𝗿 𝗕𝗮𝗻𝗻𝗲𝗱
────────────────────────────────
> Pʀᴏᴛᴏᴄᴏʟ: ${generateRandomCode()}
> Dᴀᴛᴇ: ${getDataAtual()}
>>> 𝙐𝙎𝙀𝙍 𝘿𝙀𝙏𝘼𝙄𝙇𝙎
────────────────────────────────
> [+] Nᴀᴍᴇ: ${m.pushName}
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
   
 }
  if (m.isBaileys && m.fromMe)
       return !0
  if (!m.isGroup) return !1
  if (global.db.data.chats[m.chat].isBanned) return !1
  let chat = global.db.data.chats[m.chat]
  let bot = global.db.data.settings[this.user.jid] || {}
  let delet = m.key.participant
  let bang = m.key.id
  let name = await conn.getName(m.sender)
  
   if (chat.antiTraba && m.text.length > 4000) { //
   if (isAdmin || isOwner) return !0

   let msgXt = global.db.data.chats[m.chat].language === 'pt' ?

   `${global.heading} uafw
𓉘ⵑ𓉝 ꜰɪʀᴇᴡᴀʟʟ ᴀᴛɪᴠᴏ
> ⳼ ${mention} sᴇʀᴀ́ ʀᴇᴍᴏᴠɪᴅᴏ
> ‎ 
> ⮝  𝐬𝐭𝐝: ᴅᴇᴛᴇᴄᴛᴇᴅ ᴍᴇssᴀɢᴇ ᴡɪᴛʜ ᴛᴏᴏ ᴍᴀɴʏ ᴄʜᴀʀᴀᴄᴛᴇʀs`
     
       : 
       
   `${global.heading} uafw 
𓉘ⵑ𓉝 ꜰɪʀᴇᴡᴀʟʟ ᴀᴄᴛɪᴠᴇ
> ⳼ ${mention} ᴡɪʟʟ ʙᴇ ʀᴇᴍᴏᴠᴇᴅ
> ‎ 
> ⮝ 𝐬𝐭𝐝: ᴍᴇɴsᴀɢᴇᴍ ᴄᴏᴍ ᴛʀᴀᴠᴀ ᴏᴜ ᴅᴇᴍᴀsɪᴀᴅᴏs ᴄᴀʀᴀᴄᴛᴇʀᴇs ᴅᴇᴛᴇᴄᴛᴀᴅᴏ`
   

   let messageExplanation = global.db.data.chats[m.chat].language === 'pt' ?  `ᴅᴇᴛᴇᴄᴛᴇᴅ ᴍᴇssᴀɢᴇ ᴡɪᴛʜ ᴛᴏᴏ ᴍᴀɴʏ ᴄʜᴀʀᴀᴄᴛᴇʀs` : `ᴍᴇɴsᴀɢᴇᴍ ᴄᴏᴍ ᴛʀᴀᴠᴀ ᴏᴜ ᴅᴇᴍᴀsɪᴀᴅᴏs ᴄᴀʀᴀᴄᴛᴇʀᴇs ᴅᴇᴛᴇᴄᴛᴀᴅᴏ`
   

   await m.reply(msgXt)
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    await tempBanimento(messageExplanation)

    }
    return !0
} 
