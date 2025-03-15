
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



import { profanity, CensorType } from '@2toad/profanity';

export async function before(m, { conn, isAdmin, isBotAdmin, isOwner }) {
  const profanity = new Profanity({
    languages: ['en','pt','de','fr','es','ja','ru','ar'],
    wholeWord: true,


});
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
 const listaAdmin = groupAdms.map((v, i) => adms.push(v.id))
 
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


if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup)
return !1
if (global.db.data.chats[m.chat].isBanned)
return !1
  let user = global.db.data.users[m.sender]
  if (!user.warn) {
    user.warn=0
  }
  let chat = global.db.data.chats[m.chat]
 




 const isToxic = profanity.exists(m.text)
    
if (isToxic && chat.antitoxic && !isOwner && !isAdmin) {
global.db.data.chats[m.chat].users[m.sender].adv  += 1


let mention = `@${m.sender.split`@`[0]}`

let userAdv = global.db.data.chats[m.chat].users[m.sender].adv


  let toxicWarn = global.db.data.chats[m.chat].language === 'pt' ?

`${global.heading} ./flush
𓉘ⵑ𓉝  ꜰɪʟᴛʀᴏ ᴀᴛɪᴠᴏ
> ⳼ ${mention} ʀᴇᴄᴇʙᴇᴜ ᴜᴍ ᴀᴠɪsᴏ ${userAdv}/3
> ‎ 
> ⮝  𝐬𝐭𝐝: ᴄᴏɴᴛᴇᴜᴅᴏ ᴀʙᴜsɪᴠᴏ/ᴏꜰᴇɴsɪᴠᴏ ᴅᴇᴛᴇᴄᴛᴀᴅᴏ`
  
    : 
    
`${global.heading} ./flush
𓉘ⵑ𓉝 ᴀᴄᴛɪᴠᴇ ꜰɪʟᴛᴇʀ
> ⳼ ${mention} ʀᴇᴄᴇɪᴠᴇᴅ ᴀ ᴡᴀʀɴɪɴɢ ${userAdv}/3
> ‎ 
> ⮝ 𝐬𝐭𝐝: ᴏꜰꜰᴇɴsɪᴠᴇ ᴏʀ ᴀʙᴜsɪᴠᴇ ᴡᴏʀᴅs ᴅᴇᴛᴇᴄᴛᴇᴅ`


let userBannedTxt = global.db.data.chats[m.chat].language === 'pt' ?
  
`${global.heading} ./flush
𓉘ⵑ𓉝  ꜰɪʟᴛʀᴏ ᴀᴛɪᴠᴏ
> ⨻ ${mention} ꜰᴏɪ ʙᴀɴɪᴅᴏ
> ‎ 
> ⮞ 𝐬𝐭𝐝: ʀᴇᴍᴏᴠᴇɴᴅᴏ ᴘɪᴅ. . .`
    
    : 
    
`${global.heading} ./flush
𓉘ⵑ𓉝 ᴀᴄᴛɪᴠᴇ ꜰɪʟᴛᴇʀ
> ⨻ ${mention} ɪs ɴᴏᴡ ʙᴀɴɴᴇᴅ
> ‎ 
> ⮞ 𝐬𝐭𝐝: ʀᴇᴍᴏᴠɪɴɢ ᴘɪᴅ. . . `



  
let messageExplanation = global.db.data.chats[m.chat].language === 'pt' ?
  
`ᴄᴏɴᴛᴇᴜᴅᴏ ᴀʙᴜsɪᴠᴏ/ᴏꜰᴇɴsɪᴠᴏ ᴅᴇᴛᴇᴄᴛᴀᴅᴏ`
: 
`ᴏꜰꜰᴇɴsɪᴠᴇ ᴏʀ ᴀʙᴜsɪᴠᴇ ᴡᴏʀᴅs ᴅᴇᴛᴇᴄᴛᴇᴅ`


if (global.db.data.chats[m.chat].users[m.sender].adv < 3) await m.reply(toxicWarn, false, { mentions: [m.sender] })


if (global.db.data.chats[m.chat].users[m.sender].adv >= 3) {

 



  await m.reply(userBannedTxt, false, { mentions: [m.sender] })
  

 global.db.data.chats[m.chat].users[m.sender].adv  = 0

  await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
    await tempBanimento(messageExplanation)
  //await this.updateBlockStatus(m.sender, 'block')
  }



} 


return !1
}
