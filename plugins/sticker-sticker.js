
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'
// Add this line at the top of your code


// Before using FFmpeg commands, set the path to the FFmpeg executable


let handler = async (m, { conn, args, usedPrefix, command, text }) => {
  let stiker = false

  let packText = `- ${global.packname} -
⌥ Vᴇʀsɪᴏɴ ${vs} 
📂 Rᴇǫᴜᴇsᴛᴇᴅ ʙʏ: ${m.pushName}
🌐 ɢʀᴏᴜᴘ: ${global.db.data.chats[m.chat].name}`
  let user = db.data.users[m.sender]
  let time = user.lastmining + 10000 //tiempo de espera en min (new Date - user.lastmiming < 10000) return await conn.reply(m.chat, `*ESPERA ALGUNS MINUTOS PARA USAR O COMANDO*`,  m)
  try {
  	
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    
    if (/webp|image|video/g.test(mime)) {
      if (/video/g.test(mime)) if ((q.msg || q).seconds > 11) return m.reply('╰⊱*𝗔𝗩𝗜𝗦𝗢 * ⊱⚠️⊱╮\𝗻\𝗻𝗢 𝗩𝗜𝗗𝗘𝗢 𝗡𝗔𝗢 𝗗𝗘𝗩𝗘 𝗗𝗨𝗥𝗔𝗥 𝗠𝗔𝗜𝗦 𝗗𝗘 *𝟳* 𝗦𝗘𝗚𝗨𝗡𝗗𝗢𝗦')
      let img = await q.download?.()
      if (!img) throw `╰⊱❗️⊱ *𝗠𝗔𝗟 𝗨𝗦𝗢 𝗗𝗘 𝗖𝗢𝗠𝗔𝗡𝗗𝗢⊱╮\n\n𝗥𝗲𝘀𝗽𝗼𝗻𝗱𝗮 𝗮 𝘂𝗺𝗮 𝗶𝗺𝗮𝗴𝗲𝗺, 𝘃í𝗱𝗲𝗼 𝗼𝘂 𝗚𝗜𝗙 𝗱𝗼 𝘁𝗶𝗽𝗼 *.𝗷𝗽𝗴* 𝗽𝗮𝗿𝗮 𝗴𝗲𝗿𝗮𝗿 𝗮 𝗳𝗶𝗴𝘂𝗿𝗶𝗻𝗵𝗮. 𝙍 𝙐𝙎𝙀 *${usedPrefix + command}*_*`
      let out
      try {
        stiker = await sticker(img, false, packText, global.author)
      } catch (e) {
        console.error(e)
      } finally {
      m.react("⏳")
        if (!stiker) {
          if (/webp/g.test(mime)) out = await webp2png(img)
          else if (/image/g.test(mime)) out = await uploadImage(img)
          else if (/video/g.test(mime)) out = await uploadFile(img)
         
          if (typeof out !== 'string') out = await uploadImage(img)
          console.log(out)
          stiker = await sticker(false, out, packText, global.author)
        }
      }
    } 
    else if(m.quoted && m.quoted.text!='') {
  m.react("⏳")
  let normalizedText = m.quoted.text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

// Replace special characters
let cleanedText = normalizedText.replace(/[^\w\s]/gi, '');
let fig = encodeURI(cleanedText)
let stiker = await sticker(false,`https://aemt.me/ttp?text=${fig}`, packText, global.author)
m.react("✔️")
conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, { asSticker: true })}

    
    
    else if (!m.quoted && text) {
      m.react("⏳")
      let normalizedText = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

// Replace special characters
let cleanedText = normalizedText.replace(/[^\w\s]/gi, '');
      let fig = encodeURI(cleanedText)
      let stiker = await sticker(false,`https://aemt.me/ttp?text=${fig}`, packText, global.author)
       conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, { asSticker: true })
      m.react("✔️")
      
    }
    
  
    
    
  } catch (e) {
    console.error(e)
    if (!stiker) stiker = e
  } finally {
     if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, 
       
       
     }}, { quoted: m })
    
  }
user.lastmiming = new Date * 1
}
handler.help = ['sticker']
handler.tags = ['sticker']
handler.command = ['fg'] 
handler.level=1

export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m y " + seconds + " s " 
}

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
