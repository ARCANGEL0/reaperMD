
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch'
import axios from 'axios'
import cheerio from 'cheerio'
import vm from 'node:vm'
import qs from 'qs'
const handler = async (m, {conn,isAdmin,isOwner, text, args, usedPrefix, command}) => {
  if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].download===false){
   m.react("❌")
   
   return !0;
 } 
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"
}
const twitterUrlRegex = /^https?:\/\/(www\.)?twitter\.com\/(\w+)\/status\/(\d+)$/i
if (!text) return conn.reply(m.chat, `${langTOGGLE['smsAvisoMG']()}
╭━━━━━━━━━⬣
┃
┃ 🕯️💀 𝐑𝐞𝐯𝐞𝐥𝐚-𝐦𝐞 𝐨 𝐞𝐥𝐨 𝐩𝐚𝐫𝐚 𝐨 
┃ 𝐯𝐢𝐝𝐞𝐨 𝙏𝙒𝙄𝙏𝙏𝙀𝙍 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐣𝐚𝐢𝐬 
┃ 𝐛𝐚𝐢𝐱𝐚𝐫, 𝐞 𝐚𝐬𝐬𝐢𝐦, 𝐝𝐚𝐬 
┃ 𝐩𝐫𝐨𝐟𝐮𝐧𝐝𝐞𝐳𝐚𝐬 𝐝𝐚 𝐨𝐛𝐬𝐜𝐮𝐫𝐢𝐝𝐚𝐝𝐞 
┃ 𝐯𝐢𝐫𝐭𝐮𝐚𝐥, 𝐭𝐫𝐚𝐫𝐞𝐢 𝐨 𝐚𝐫𝐪𝐮𝐢𝐯𝐨 
┃ 𝐪𝐮𝐞 𝐚𝐧𝐬𝐞𝐢𝐚𝐬.
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:
┃ *${usedPrefix + command} link*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣ `, fkontak,  m)
try{ 
const apiUrl = `https://api.lolhuman.xyz/api/twitter?apikey=${lolkeysapi}&url=${encodeURIComponent(text)}`
const response = await fetch(apiUrl)
const jsonData = await response.json()
const tweetData = jsonData.result
const tweetTitle = tweetData.title
const tweetVideoUrl = tweetData.media[0].url
const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${text}`)).text()
const tweetTitleWithoutUrl = tweetTitle.replace(/https?:\/\/t\.co\/\w+/i, '').trim()
const txt1 = `🖤 ${tweetTitleWithoutUrl}\n\n🔗 *URL:*\n• _${shortUrl1}_`.trim()
await conn.sendFile(m.chat, tweetVideoUrl, 'error.mp4', txt1, fkontak)
} catch (e) {
console.log(e)
}}

handler.command = ['tw']
handler.level = 6
export default handler
