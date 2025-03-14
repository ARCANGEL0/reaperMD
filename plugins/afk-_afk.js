
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────





let handler = m => m 
handler.before = async function (m, { text, args, usedPrefix, command, conn } ) {
let user = global.db.data.users[m.sender]
// Initialize user object if it doesn't exist


if (!user.afkInfo) {
  user.afkInfo = {};
}

if (!user.afkInfo[m.chat]) {
  user.afkInfo[m.chat] = {
    afkTime:-2,
    number: m.sender,
    afkReason: ''
  };
}

if(!global.db.data.chats[m.chat]) {
   global.db.data.chats[m.chat] ={}
}
if(!global.db.data.users[m.mentionedJid]) {
   global.db.data.users[m.mentionedJid] ={}
}
if(m.quoted && !global.db.data.users[m.quoted.sender]) {
   global.db.data.users[m.quoted.sender] ={}
}
if(!global.db.data.chats[m.chat].afks)
{
   global.db.data.chats[m.chat].afks =[]
}




console.log("afk event")

if (user.afkInfo[m.chat].afkTime > -1) {


 
const backAfk = global.idioma == 'en' ? 

`┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]──[~] 
└─► rm -rf ~/AFK_STATUS && cat .messagerc
> ‎  ‎ 
> [🟢] @${m.sender.split("@")[0]} ɪꜱ ɴᴏᴡ *ᴏɴʟɪɴᴇ*
> ‎ . . . . . . . . . . . . . . . . .
> *𝛌 OFFLIИΞ TIMΞ*:
> ${(new Date - user.afkInfo[m.chat].afkTime).toTimeString ()}
> ‎ `
:
`┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]──[~] 
└─► rm -rf ~/AFK_STATUS && cat .messagerc
> ‎ 
> [🟢] @${m.sender.split("@")[0]} *ᴏɴʟɪɴᴇ* ɴᴏᴠᴀᴍᴇɴᴛᴇ
> ‎ . . . . . . . . . . . . . . . . .
> *𝛌 TΞMPO AUSΞИTΞ:*
> ${(new Date - user.afkInfo[m.chat].afkTime).toTimeString ()}
> ‎ `



await conn.reply(m.chat, backAfk, m, { mentions: [m.sender] });


const numero = m.sender; 
delete user.afkInfo[m.chat]
// global.db.data.chats[m.chat].chatafk = global.db.data.chats[m.chat].chatafk.filter(element => element !== numero);
  delete global.db.data.chats[m.chat].afks[m.sender]


}
if (
    global.db.data.chats &&
    global.db.data.chats[m.chat] &&
    global.db.data.chats[m.chat].afks &&
  global.db.data.chats[m.chat].afks[m.mentionedJid] &&
  global.db.data.chats[m.chat].afks[m.mentionedJid].afkTime > -1
  
  
)
 
 //   && global.db.data.chats[m.chat].afks.includes(m.mentionedJid.toString())
 {

  console.log(global.db.data.chats[m.chat].afks[m.mentionedJid])

  
 


 let reason = global.db.data.users[m.mentionedJid.toString()].afkInfo[m.chat].afkReason ? global.db.data.users[m.mentionedJid.toString()].afkInfo[m.chat].afkReason : ''

let time = global.db.data.users[m.mentionedJid.toString()].afkInfo[m.chat].afkTime

let nams = global.db.data.users[m.mentionedJid.toString()].name



const afkStatus = idioma == 'en' ? 
`┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]──[~] 
└─► rm -rf ~/AFK_STATUS && journalctl
> [!] ᴜꜱᴇʀ ɪꜱ ᴏꜰꜰʟɪɴᴇ 🔴
> ‎ . . . . . . . . . . . . . . . . .
> [!] ᴛɪᴍᴇ ᴏꜰꜰʟɪɴᴇ: ${(new Date - time).toTimeString()}
> [+] ʀᴇᴀꜱᴏɴ:
${reason}
> ‎    `

: 

`┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]──[~] 
└─► rm -rf  ~/AFK_STATUS && journalctl
> [!] ᴜꜱᴜᴀʀɪᴏ ᴇꜱᴛᴀ ᴏꜰꜰʟɪɴᴇ 🔴
> ‎ . . . . . . . . . . . . . . . . .
> [!] ᴛᴇᴍᴘᴏ ᴏꜰꜰʟɪɴᴇ: ${(new Date - time).toTimeString()}
> [+] ᴍᴏᴛɪᴠᴏ:
${reason}
> ‎ `



  await m.reply(reason);
  return false
}
if (
    global.db.data.chats &&
    global.db.data.chats[m.chat] &&
    global.db.data.chats[m.chat].afks &&
    m.quoted
    &&  global.db.data.chats[m.chat].afks[m.quoted.sender] &&
  global.db.data.chats[m.chat].afks[m.quoted.sender].afkTime > -1
  
  
)
 
 //   && global.db.data.chats[m.chat].afks.includes(m.mentionedJid.toString())
 {
console.log(m.quoted.sender)
  console.log(global.db.data.chats[m.chat].afks)

  
 

function formatParagraphs(inputString) {
  return inputString.split('\n').map(p => p.trim()).filter(Boolean).map(p => `> ${p}`).join('\n');
}


 let reason2 = global.db.data.users[m.quoted.sender.toString()].afkInfo[m.chat].afkReason ? global.db.data.users[m.quoted.sender.toString()].afkInfo[m.chat].afkReason : ''
let reason = text ? formatParagraphs(reason2) : '> 404'

let time = global.db.data.users[m.quoted.sender.toString()].afkInfo[m.chat].afkTime

let nams = global.db.data.users[m.quoted.sender.toString()].name



const afkStatus2 = idioma == 'en' ? 
`┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]──[~] 
└─► rm -rf ~/AFK_STATUS && journalctl
> ‎ 𝚄̷𝚂̷𝙴̷𝚁̷ 𝙸̷𝚂̷ 𝙾̷𝙵̷𝙵̷𝙻̷𝙸̷𝙽̷𝙴̷ 🟠
> ‎ . . . . . . . . . . . . . . . . .
> [!] ᴛɪᴍᴇ ᴏꜰꜰʟɪɴᴇ: ${(new Date - time).toTimeString()}
> [+] ʀᴇᴀꜱᴏɴ:
${reason}
> ‎    `

: 

`┌──[ 𝗥𝝣𝝠𝗣𝗘𝗥 𝑣${vs} ]──[~] 
└─► rm -rf  ~/AFK_STATUS && journalctl
> ‎ 𝚄̷𝚂̷𝚄̷𝙰̷𝚁̷𝙸̷𝙾̷ 𝙴̷𝚂̷𝚃̷𝙰̷ 𝙾̷𝙵̷𝙵̷𝙻̷𝙸̷𝙽̷𝙴̷ 🟠
> ‎ . . . . . . . . . . . . . . . . .
> [!] ᴛᴇᴍᴘᴏ ᴏꜰꜰʟɪɴᴇ: ${(new Date - time).toTimeString()}
> [+] ᴍᴏᴛɪᴠᴏ:
${reason}
> ‎ `



  await m.reply(afkStatus2);
  return false
}



}
export default handler
/*
let handler = m => m 
handler.before = async function (m, { text, args, usedPrefix, command, conn } ) {
let user = global.db.data.users[m.sender]
if (user.afk > -1) {await conn.reply(m.chat, `${langTOGGLE['smsAvisoEG']()} ❖─┅──┅ *A F K* ⚰️─┅──┅❖ 
      *@${m.sender.split("@")[0]}*
      ${langTOGGLE['smsAfkM1']()}
      ${user.afkReason ? `\n${langTOGGLE['smsAfkM2']()}🕯️ ` +user.afkReason : ''}

      ${langTOGGLE['smsAfkM3']()}\n *${(new Date - user.afk).toTimeString()}*`.trim(), m, { mentions: [m.sender] });

user.afk = -1
user.afkReason = ''
}
let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted] : [])])]
for (let jid of jids) {
let user = global.db.data.users[jid]
if (!user)
continue
let afkTime = user.afk
if (!afkTime || afkTime < 0)
continue
let reason = user.afkReason || ''
await conn.reply(m.chat, `${langTOGGLE['smsAvisoAG']()}
╭━━━━━━━━━⬣ 💀 ⬣━━━━━━━━━━━

🕯️ ${langTOGGLE['smsAfkM4']()}\n${reason ? `${langTOGGLE['smsAfkM5']()}` + '──┅❖  ' + reason : `${langTOGGLE['smsAfkM6']()}`}

${langTOGGLE['smsAfkM3']()}\n──┅❖ *${(new Date - user.afk).toTimeString()}*

╰━━━━━━━━━━━━━━━━━━⬣`.trim(), m);

}
return true
}
export default handler

*/