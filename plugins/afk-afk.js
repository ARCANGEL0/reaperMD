
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────







let handler = async (m, { text,isAdmin,isOwner, args, usedPrefix, command, conn}) => { 
let user = global.db.data.users[m.sender]
  
  console.log("is afk for adm   " +global.db.data.chats[m.chat].admafk)
if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].admafk===false){
   m.react("❌")
  
 } 
 else{

// Initialize user object if it doesn't exist
if (!user.afkInfo) {
    user.afkInfo = {};
}
if (!user.afkInfo[m.chat]) {
    user.afkInfo[m.chat] = {};
}
console.log(m.sender + "  on set afk code");

// Now you can use afkTime and afkReason as needed
// User is not AFK in this group
// Set AFK information for this group
user.afkInfo[m.chat] = {
    afkTime: +new Date(),
    afkReason: text,
    number: m.sender,
};
if (!global.db.data.chats[m.chat].afks) {
  // If afks array doesn't exist, create it
  global.db.data.chats[m.chat].afks = [];
}

if (!global.db.data.chats[m.chat].afks[m.sender]) {
  // If afks array doesn't exist, create it
  global.db.data.chats[m.chat].afks[m.sender]= {
    afkTime: -2,
    afkReason: '',
    number: m.sender,
}
}
// Your single item to push

global.db.data.chats[m.chat].afks[m.sender]= {
    afkTime: +new Date(),
    afkReason: text,
    number: m.sender,
}
// Push the single item into afks array

console.log( global.db.data.chats[m.chat].afks[m.sender])
// Ensure m.sender is not already in the array before pushing
let DELETEMESSAGE = await conn.sendMessage(m.chat, { delete: m.key })
    
   
console.log(DELETEMESSAGE.message.protocolMessage.key.id)

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}

function formatParagraphs(inputString) {
  return inputString.split('\n').map(p => p.trim()).filter(Boolean).map(p => `> ${p}`).join('\n');
}


global.db.data.chats[m.chat].ignored.push(DELETEMESSAGE.message.protocolMessage.key.id)

let reason = text ? formatParagraphs(text) : '404'

 
const goingAfk = global.idioma == 'en' ? 
`┌──[ BYΓΞSΞC ]──[~] 
└─► touch ~/AFK_STATUS
> ‎ GNU nano 2.6.1          File: AFK_STATUS
> ‎ 
> echo "@${m.sender.split("@")[0]} ʟᴏɢɢᴇᴅ ᴏꜰꜰ ᴛᴇᴍᴘᴏʀᴀʀɪʟʏ ᴀɴᴅ ᴡɪʟʟ ʙᴇ ᴀꜰᴋ ꜰᴏʀ ᴀ ᴡʜɪʟᴇ"
> ‎ . . . . . . . . . . . . . . . . .
> [+] ʀᴇᴀꜱᴏɴ:
${reason}
> ‎ 
> echo -e "$USER" > ~/AFK_STATUS
> sleep $2
> ‎ 
> [^M-U] Undo  [^M-E] Redo  [^K] Cut Text      
> [^O] Write Out  [^U] Uncut Text  [^X] Exit    `

: 

`┌──[ BYΓΞSΞC ]──[~] 
└─► touch ~/AFK_STATUS
> ‎ GNU nano 2.6.1          File: AFK_STATUS
> ‎ 
> echo "@${m.sender.split("@")[0]} ᴅᴇꜱʟᴏɢᴏᴜ ᴛᴇᴍᴘᴏʀᴀʀɪᴀᴍᴇɴᴛᴇ ᴇ ꜰɪᴄᴀʀᴀ ᴀꜰᴋ ᴘᴏʀ ᴜᴍ ᴛᴇᴍᴘᴏ"
> ‎ . . . . . . . . . . . . . . . . .
> [+] ᴍᴏᴛɪᴠᴏ:
${reason}
> ‎ 
> echo -e "$USER" > ~/AFK_STATUS
> sleep $2
> ‎ 
> [^M-U] Undo  [^M-E] Redo  [^K] Cut Text      
> [^O] Write Out  [^U] Uncut Text  [^X] Exit   `





await conn.reply(m.chat, goingAfk, m, { mentions: [m.sender] });

}
}

handler.command = ['afk']
handler.level = 2
export default handler

 /*
let handler = async (m, { text, args, usedPrefix, command, conn}) => { 
let user = global.db.data.users[m.sender]
  
if (args.length >= 1) {
text = args.slice(0).join(" ")
} else if (m.quoted && m.quoted.text) {
text = m.quoted.text
} else return m.reply(`${langTOGGLE['smsAfkQ1'](usedPrefix, command)}`)
  console.log(user)
if (text.length < 10) return m.reply(`${langTOGGLE['smsAfkQ2']()}`)
user.afk = + new Date
user.afkReason = text
await conn.reply(m.chat, `${langTOGGLE['smsAvisoAG']()}*⬣━━━「 AFK ⚰️」━━━⬣*
    *🕯️💀𝕹𝖆𝖔 𝖕𝖊𝖗𝖙𝖚𝖗𝖇𝖊𝐞* *@${m.sender.split("@")[0]}* 
    *「 𝕴𝖗𝖆 𝖉𝖎𝖛𝖆𝖌𝖆𝖗 𝖕𝖊𝖑𝖆𝖘 𝖘𝖔𝖒𝖇𝖗𝖆𝖘 𝖉𝖔 𝖉𝖊𝖘𝖈𝖔𝖓𝖍𝖊𝖈𝖎𝖉𝖔, 𝖘𝖊 𝖆𝖚𝖘𝖊𝖓𝖙𝖆𝖓𝖉𝖔 𝖉𝖊𝖘𝖙𝖊 𝖛𝖆𝖑𝖊 𝖘𝖔𝖒𝖇𝖗𝖎𝖔.」*
  
  *𝕸𝖊𝖗𝖎𝖙𝖚𝖒 𝖈𝖆𝖚𝖘𝖆𝖊:*${text ? '\n ' + text : ''}`, m, { mentions: [m.sender] });

}

handler.command = /^afk$/i
export default handler*/