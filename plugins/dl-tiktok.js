
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fg from 'api-dylux' 
import axios from 'axios'
import cheerio from 'cheerio'
import { tiktok } from "@xct007/frieren-scraper";
let generateWAMessageFromContent = (await import(global.baileys)).default
import { tiktokdl } from '@bochilteam/scraper'
let handler = async (m, { conn,isOwner,isAdmin, text, args, usedPrefix, command}) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].download===false){
   m.react("❌")
   
   return !0;
 } 
if (!text) return conn.reply(m.chat, `${langTOGGLE['smsAvisoMG']()}
╭━━━━━━━━━⬣
┃
┃ 🕯️💀 𝐑𝐞𝐯𝐞𝐥𝐚-𝐦𝐞 𝐨 𝐞𝐥𝐨 𝐩𝐚𝐫𝐚 𝐨 
┃ 𝐯𝐢𝐝𝐞𝐨 𝐓𝐢𝐤𝐓𝐨𝐤 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐣𝐚𝐢𝐬 
┃ 𝐛𝐚𝐢𝐱𝐚𝐫, 𝐞 𝐚𝐬𝐬𝐢𝐦, 𝐝𝐚𝐬 
┃ 𝐩𝐫𝐨𝐟𝐮𝐧𝐝𝐞𝐳𝐚𝐬 𝐝𝐚 𝐨𝐛𝐬𝐜𝐮𝐫𝐢𝐝𝐚𝐝𝐞 
┃ 𝐯𝐢𝐫𝐭𝐮𝐚𝐥, 𝐭𝐫𝐚𝐫𝐞𝐢 𝐨 𝐚𝐫𝐪𝐮𝐢𝐯𝐨 
┃ 𝐪𝐮𝐞 𝐚𝐧𝐬𝐞𝐢𝐚𝐬.
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:
┃ *${usedPrefix + command} https://vm.tiktok.com
┃ /ZMLEPnruc/?k=1*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝙼𝚛. 𝚁𝚘𝚋𝚘𝚝 | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣ `, fkontak,  m)
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) return conn.reply(m.chat, `${langTOGGLE['smsAvisoFG']()}╭━━━━━━━━━⬣
┃
┃ ❌📜 𝐀 𝐔𝐑𝐋 𝐚𝐩𝐫𝐞𝐬𝐞𝐧𝐭𝐚-𝐬𝐞 𝐜𝐨𝐦𝐨 𝐮𝐦 
┃ 𝐥𝐚𝐛𝐢𝐫𝐢𝐧𝐭𝐨 𝐝𝐢𝐬𝐭𝐨𝐫𝐜𝐢𝐝𝐨, 𝐮𝐦𝐚 
┃ 𝐭𝐞𝐢𝐚 𝐝𝐞 𝐞𝐧𝐠𝐚𝐧𝐨𝐬 𝐪𝐮𝐞 𝐝𝐞𝐬𝐚𝐟𝐢𝐚 
┃ 𝐦𝐢𝐧𝐡𝐚 𝐛𝐮𝐬𝐜𝐚. 𝐕𝐞𝐫𝐢𝐟𝐢𝐪𝐮𝐞𝐚 
┃ 𝐢𝐧𝐭𝐞𝐠𝐫𝐢𝐝𝐚𝐝𝐞 𝐝𝐨 𝐯í𝐧𝐜𝐮𝐥𝐨 𝐞 
┃ 𝐨𝐮𝐬𝐚𝐢 𝐭𝐞𝐧𝐭𝐚𝐫 𝐮𝐦𝐚 𝐯𝐞𝐳 𝐦𝐚𝐢𝐬.
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝙼𝚛. 𝚁𝚘𝚋𝚘𝚝 | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`, fkontak,  m)  
await conn.reply(m.chat, `${langTOGGLE['smsAvisoEG']()}╭━━━━━━━━━⬣
⌛ 𝐀𝐠𝐮𝐚𝐫𝐝𝐞... 𝐞𝐦 𝐛𝐫𝐞𝐯𝐞 𝐫𝐞𝐜𝐞𝐛𝐞𝐫á 𝐨 𝐚𝐫𝐪𝐮𝐢𝐯𝐨, 𝐜𝐨𝐦𝐨 𝐚 𝐩𝐫𝐨𝐦𝐞𝐬𝐬𝐚 𝐬𝐮𝐬𝐬𝐮𝐫𝐫𝐚𝐝𝐚 𝐩𝐨𝐫 𝐞𝐬𝐩𝐞𝐜𝐭𝐫𝐨𝐬 𝐧𝐚𝐬 𝐬𝐨𝐦𝐛𝐫𝐚𝐬 𝐝𝐚 𝐧𝐨𝐢𝐭𝐞.
╰━━━━━━━━━━━━━━━━━━⬣`, fkontak,  m) 
try {
const dataF = await tiktok.v1(args[0])
conn.sendFile(m.chat, dataF.play, 'tiktok.mp4', `🕯️💀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊\n*${nickname}*\n${description ? `\n📜𝘿𝙀𝙎𝘾𝙍𝙄𝘾𝘼𝙊\n*${description}`: ''}\n${wm}`.trim(), m) 
} catch (e1) {
try {
const tTiktok = await tiktokdlF(args[0])
conn.sendFile(m.chat, tTiktok.video, 'tiktok.mp4', `🕯️💀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊\n*${nickname}*\n${description ? `\n📜𝘿𝙀𝙎𝘾𝙍𝙄𝘾𝘼𝙊\n*${description}`: ''}\n${wm}`.trim(), m) 
} catch (e2) {
try {
let p = await fg.tiktok(args[0]) 
conn.sendFile(m.chat, p.nowm, 'tiktok.mp4', `🕯️💀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊\n*${nickname}*\n${description ? `\n📜𝘿𝙀𝙎𝘾𝙍𝙄𝘾𝘼𝙊\n*${description}`: ''}\n${wm}`.trim(), m)
} catch (e3) {
try { 
const { author: { nickname }, video, description } = await tiktokdl(args[0])
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
conn.sendFile(m.chat, url, 'tiktok.mp4', `💀🕯️ 𝙐𝙎𝙐𝘼𝙍𝙄𝙊\n*${nickname}*\n${description ? `\n📜 𝘿𝙀𝙎𝘾𝙍𝙄𝘾𝘼𝙊 :\n*${description}*` : ''}\n${wm}`.trim(), m)
} catch {
await conn.reply(m.chat, `${langTOGGLE['smsAvisoFG']()} ╭━━━━━━━━━⬣
┃
┃ ❌✒️ 𝐀 𝐭𝐞𝐧𝐭𝐚𝐭𝐢𝐯𝐚 𝐝𝐞 𝐭𝐫𝐚𝐧𝐬𝐜𝐫𝐢𝐜𝐚𝐨
┃𝐟𝐚𝐥𝐡𝐨𝐮 𝐥𝐚𝐦𝐞𝐧𝐭𝐚𝐯𝐞𝐥𝐦𝐞𝐧𝐭𝐞.
┃
┃ 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐞 𝐫𝐞𝐭𝐨𝐫𝐧𝐞 
┃ 𝐟𝐮𝐭𝐮𝐫𝐚𝐦𝐞𝐧𝐭𝐞, 𝐩𝐚𝐫𝐚 𝐮𝐦 𝐟𝐮𝐭𝐮𝐫𝐨
┃ 𝐬𝐨𝐦𝐛𝐫𝐢𝐨 𝐪𝐮𝐞 𝐭𝐫𝐚𝐧𝐬𝐩𝐚𝐫𝐞𝐜𝐚
┃ 𝐞𝐱𝐢𝐭𝐨
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝙼𝚛. 𝚁𝚘𝚋𝚘𝚝 | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`, fkontak,  m) 
handler.limit = 0
}}}}}
handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = ['tt']
handler.level = 6
export default handler

async function tiktokdlF(url) {
if (!/tiktok/.test(url)) return `╭━━━━━━━━━⬣
┃
┃ ❌✒️ 𝐀 𝐭𝐞𝐧𝐭𝐚𝐭𝐢𝐯𝐚 𝐝𝐞 𝐭𝐫𝐚𝐧𝐬𝐜𝐫𝐢𝐜𝐚𝐨
┃𝐟𝐚𝐥𝐡𝐨𝐮 𝐥𝐚𝐦𝐞𝐧𝐭𝐚𝐯𝐞𝐥𝐦𝐞𝐧𝐭𝐞.
┃
┃ 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐞 𝐫𝐞𝐭𝐨𝐫𝐧𝐞 
┃ 𝐟𝐮𝐭𝐮𝐫𝐚𝐦𝐞𝐧𝐭𝐞, 𝐩𝐚𝐫𝐚 𝐮𝐦 𝐟𝐮𝐭𝐮𝐫𝐨
┃ 𝐬𝐨𝐦𝐛𝐫𝐢𝐨 𝐪𝐮𝐞 𝐭𝐫𝐚𝐧𝐬𝐩𝐚𝐫𝐞𝐜𝐚
┃ 𝐞𝐱𝐢𝐭𝐨
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝙼𝚛. 𝚁𝚘𝚋𝚘𝚝 | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`;
const gettoken = await axios.get("https://tikdown.org/id");
const $ = cheerio.load(gettoken.data);
const token = $("#download-form > input[type=hidden]:nth-child(2)").attr( "value" );
const param = { url: url, _token: token };
const { data } = await axios.request("https://tikdown.org/getAjax?", { method: "post", data: new URLSearchParams(Object.entries(param)), headers: { "content-type": "application/x-www-form-urlencoded; charset=UTF-8", "user-agent": "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36" }, });
var getdata = cheerio.load(data.html);
if (data.status) {
return { status: true, thumbnail: getdata("img").attr("src"), video: getdata("div.download-links > div:nth-child(1) > a").attr("href"), audio: getdata("div.download-links > div:nth-child(2) > a").attr("href"), }} else
return { status: false }}
