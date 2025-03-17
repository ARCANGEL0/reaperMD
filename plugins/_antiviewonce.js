
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

let { downloadContentFromMessage } = (await import(global.baileys));

export async function before(m, { isAdmin, isBotAdmin }) {
 const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}

  if(!global.db.data.chats[m.chat].initialBoot) return !1

 
 
 
 
let chat = db.data.chats[m.chat] 
if (/^[.~#/\$,](read)?viewonce/.test(m.text)) return
if (!chat.antiver || chat.isBanned) return
if (global.db.data.chats[m.chat].isBanned) return !1
if (m.mtype == 'viewOnceMessageV2') {
let msg = m.message.viewOnceMessageV2.message
let type = Object.keys(msg)[0]
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])


 const exposedMessage = global.db.data.chats[m.chat].language === 'pt'
    ?  
`${global.heading} steghide extract -sf
𓉘🞢𓉝 ᴍᴇɴsᴀɢᴇᴍ ᴏᴄᴜʟᴛᴀ ᴅᴇᴛᴇᴄᴛᴀᴅᴀ
> ‎ 
> ⮝ 𝐬𝐭𝐝: ᴇxᴛʀᴀɪɴᴅᴏ ᴍᴇᴛᴀᴅᴀᴅᴏs
> ᴜsᴜᴀʀɪᴏ: @${m.sender.split('@')[0]}
${msg[type].caption ? '> '+ msg[type].caption : ''}`

:

`${global.heading} steghide extract -sf
𓉘🞢𓉝 ʜɪᴅᴅᴇɴ ᴍᴇssᴀɢᴇ ɪᴅᴇɴᴛɪꜰɪᴇᴅ
> ‎ 
> ⮝ 𝐬𝐭𝐝: ᴇxᴛʀᴀᴄᴛɪɴɢ ᴍᴇᴛᴀᴅᴀᴛᴀ
> ᴜsᴇʀ: @${m.sender.split('@')[0]}
${msg[type].caption ? '> '+ msg[type].caption : ''}`
  



for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])}
if (/video/.test(type)) {
return this.sendFile(m.chat, buffer, 'error.mp4', exposedMessage.getRandom(), m)
} else if (/image/.test(type)) {
return this.sendFile(m.chat, buffer, 'error.jpg', exposedMessage.getRandom(), m)
}}}
