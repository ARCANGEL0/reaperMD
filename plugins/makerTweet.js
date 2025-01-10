
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
  
  
  if (!text && !m.quoted) return conn.reply(m.chat, `${langTOGGLE['smsAvisoMG']()}
   ━━━━━━━━━⬣🌕⬣━━━━━━━━
𝗗𝗶𝗴𝗮-𝗺𝗲 𝗾𝘂𝗮𝗹 𝗵𝘂𝗺𝗼𝗿 𝘃𝗶𝘀𝗰𝗲𝗿𝗮𝗹 𝗳𝗹𝗼𝗿𝗲𝘀𝗰𝗲 𝗱𝗲 𝘀𝘂𝗮 𝗺𝗲𝗻𝘁𝗲 𝗲 𝗳𝗼𝗿𝗻𝗲𝗰𝗮 𝗺𝗲 𝗼𝘀 𝘁𝗲𝘅𝘁𝗼 
   ━━━━━━━━━⬣🌒⬣━━━━━━━━
  `, m)
  
	const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
	
  
  let nome = global.db.data.users[who].name
    let js = await fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${nome}&text=${text || m.quoted?.text}`)
    let resultt = await js.json()
    console.log(resultt)
    
   await conn.sendFile(m.chat, resultt.message, "error.jpg", "")
    
}

handler.help = ['memepooh']
handler.tags = ['maker']
handler.level = 7 
handler.command = ['tweet']
handler.limit = false

export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}