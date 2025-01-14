
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch';
import path from 'path';
import Client from 'craiyon'
const handler = async (m, {conn, text, usedPrefix, command,isAdmin,isOwner}) => {
  
  
if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].gpt===false){
   m.react("❌")
   
   return !0;
 }  
 if (!(isAdmin || isOwner) && global.db.data.chats[m.chat].users[m.sender].money < 10) {
await m.reply(m.chat , global.db.data.chats[m.chat].language === 'en' ? `> [⚠] ʏᴏᴜ'ʀᴇ ᴏᴜᴛ ᴏꜰ ʙʏᴛᴇᴄᴏɪɴꜱ, ᴋɪᴅ.` : `> [⚠] ᴠᴏᴄᴇ ᴇꜱᴛᴀ ꜱᴇᴍ ʙʏᴛᴇᴄᴏɪɴ ᴀʟɢᴜᴍ, ɢᴀʀᴏᴛᴏ!`, m)
 return !0
 
 }
 
  if (!text) throw `╭━[𝗗𝗔𝗟𝗟 𝗘]━━━━━━━⬣
🕯️📜 𝐒𝐮𝐬𝐬𝐮𝐫𝐫𝐚-𝐦𝐞 𝐨 𝐪𝐮𝐞 𝐡𝐚 𝐞𝐦 𝐬𝐞𝐮𝐬 𝐩𝐞𝐧𝐬𝐚𝐦𝐞𝐧𝐭𝐨𝐬. 𝐋𝐢𝐛𝐞𝐫𝐭𝐞 𝐨𝐬 𝐜𝐨𝐫𝐯𝐨𝐬 𝐝𝐚 𝐢𝐦𝐚𝐠𝐢𝐧𝐚𝐜𝐚𝐨 𝐞 𝐝𝐞𝐢𝐱𝐞 𝐪𝐮𝐞 𝐚 𝐭𝐢𝐧𝐭𝐚 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 𝐭𝐫𝐚𝐜𝐞 𝐚 𝐬𝐢𝐧𝐟𝐨𝐧𝐢𝐚 𝐝𝐨𝐬 𝐠𝐚𝐭𝐨𝐬 𝐩𝐫𝐞𝐭𝐨𝐬 𝐞𝐦 𝐭𝐞𝐮𝐬 𝐝𝐞𝐯𝐚𝐧𝐞𝐢𝐨𝐬.

📜 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:

${usedPrefix + command} Um corvo negro abrindo suas asas
${usedPrefix + command} um gato preto deitado sob uma caveira

╰━━━━━━━━━━━━━━━━━━⬣`


try {
  m.react("⏳")
    await conn.sendMessage(m.chat, {text: `╭━━━━━━━━━⬣
⌛ 𝐀𝐠𝐮𝐚𝐫𝐝𝐞... 𝐞𝐦 𝐛𝐫𝐞𝐯𝐞 𝐫𝐞𝐜𝐞𝐛𝐞𝐫á 𝐨 𝐚𝐫𝐪𝐮𝐢𝐯𝐨, 𝐜𝐨𝐦𝐨 𝐚 𝐩𝐫𝐨𝐦𝐞𝐬𝐬𝐚 𝐬𝐮𝐬𝐬𝐮𝐫𝐫𝐚𝐝𝐚 𝐩𝐨𝐫 𝐞𝐬𝐩𝐞𝐜𝐭𝐫𝐨𝐬 𝐧𝐚𝐬 𝐬𝐨𝐦𝐛𝐫𝐚𝐬 𝐝𝐚 𝐧𝐨𝐢𝐭𝐞.
╰━━━━━━━━━━━━━━━━━━⬣`}, {quoted: m});
let msg = encodeURIComponent(text)
    let res = await fetch(`https://vihangayt.me/tools/photoleap?q=${msg}`)
    console.log(res)
    let data = await res.json()
    console.log(data)
    let buffer = data.data
    m.react("✔️")
    if(global.db.data.chats[m.chat].autolevelup){
global.db.data.chats[m.chat].users[m.sender].money -= 10
await m.reply("༒︎ 80 🜅 ʙʏᴛᴇᴄᴏɪɴꜱ 𝙐𝙎𝘼𝘿𝙊𝙎")
    }
      await conn.sendFile(m.chat, buffer, 'image.png', null, m);
  
    
  } catch(e) {
    console.log(e)
    throw '*Oops! Something went wrong while generating images. Please try again later.*';
  }
  
  
}
handler.level=6
handler.command = ['dalle'];
export default handler;
