
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

/* 
# Créditos a https://github.com/Undefined17
•• @Azami19 ••
*/
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'
let handler = async (m) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => gataImg.getRandom())
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw `${mg}╭━━━━━━━━━⬣
┃
┃ 💀🕯️𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐚 𝐚 𝐮𝐦𝐚 𝐦í𝐝𝐢𝐚
┃ 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 𝐬𝐞𝐣𝐚 𝐞𝐥𝐚 𝐯í𝐝𝐞𝐨, 𝐟𝐨𝐭𝐨
┃ 𝐨𝐮 á𝐮𝐝𝐢𝐨, 𝐪𝐮𝐞 𝐥𝐡𝐞 𝐫𝐞𝐭𝐨𝐫𝐧𝐚𝐫𝐞𝐢
┃ 𝐮𝐦 𝐥𝐢𝐧𝐤 𝐩𝐚𝐫𝐚 𝐨 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐣𝐚𝐬
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝙼𝚛. 𝚁𝚘𝚋𝚘𝚝 | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`
let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
let caption = `📜 𝙇𝙄𝙉𝙆:\n${link}\n📜 𝙏𝘼𝙈𝘼𝙉𝙃𝙊: ${media.length}\n📜 𝘿𝙐𝙍𝘼𝘾𝘼𝙊: ${isTele ? '' : ''}\n📜 𝙏𝙄𝙉𝙔𝙐𝙍𝙇: ${await shortUrl(link)}`
m.reply(caption)
  
  
}
handler.help = ['tourl']
handler.tags = ['herramientas']
handler.level = 7
handler.command = ['tourl']
export default handler

async function shortUrl(url) {
let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
return await res.text()
}
