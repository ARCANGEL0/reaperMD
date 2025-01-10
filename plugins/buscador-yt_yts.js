
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import yts from 'yt-search';
import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix, command,isAdmin,isOwner }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].download===false){
   m.react("❌")
   
   return !0;
 } 
if (!text) return conn.reply(m.chat, `${langTOGGLE['smsAvisoMG']()}𝙉𝙤 𝙚𝙩𝙚𝙧 𝙙𝙤 𝙨𝙪𝙗𝙢𝙪𝙣𝙙𝙤 𝙫𝙞𝙧𝙩𝙪𝙖𝙡, 𝙨𝙪𝙨𝙨𝙪𝙧𝙧𝙖-𝙢𝙚 𝙤 𝙩í𝙩𝙪𝙡𝙤 𝙤𝙗𝙨𝙘𝙪𝙧𝙤 𝙙𝙚 𝙪𝙢 𝙫í𝙙𝙚𝙤, 𝙪𝙢 𝙨𝙚𝙜𝙧𝙚𝙙𝙤 𝙙𝙞𝙜𝙞𝙩𝙖𝙡 𝙖 𝙨𝙚𝙧 𝙙𝙚𝙨𝙫𝙚𝙡𝙖𝙙𝙤 𝙦𝙪𝙚 𝙥𝙖𝙧𝙩𝙞𝙧𝙚𝙞 𝙖 𝙗𝙪𝙨𝙘𝙖 𝙥𝙚𝙡𝙤 𝙚𝙨𝙦𝙪𝙚𝙘𝙞𝙙𝙤 𝙫𝙖𝙡𝙚 𝙖 𝙛𝙞𝙢 𝙙𝙚 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖 𝙡𝙤 𝙣𝙤 𝙔𝙤𝙪𝙏𝙪𝙗𝙚.`, fkontak,  m)
try {
let vids_ = { 
from: m.sender, 
urls: [] 
}
if (!global.videoList) {
global.videoList = [];
}
if (global.videoList[0]?.from == m.sender) {
delete global.videoList;
}
global.videoList = [];
let results = await yts(text);
let textoInfo = `${langTOGGLE['smsAvisoIIG']()}
╭━━━━━━━━━⬣
┃
┃ ${usedPrefix}video <numero> 
┃ ${usedPrefix}audio <numero> 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝗕𝗮𝗶𝘅𝗲 𝗼 𝘃í𝗱𝗲𝗼 𝗾𝘂𝗲 𝗱𝗲𝘀𝗲𝗷𝗮𝗿𝗲𝘀 ,
┃ 𝘀𝗲𝗴𝘂𝗶𝗻𝗱𝗼 𝗺𝗲𝘂𝘀 𝗽𝗮𝘀𝘀𝗼𝘀 𝗱𝗲
┃ 𝗲𝘅𝗲𝗺𝗽𝗹𝗼 𝗽𝗮𝗿𝗮 𝘀𝘂𝗮 𝗽𝗼𝗯𝗿𝗲 𝗮𝗹𝗺𝗮
┃ 𝗶𝗻𝗰𝗮𝗽𝗮𝘇
┃
┃ *${usedPrefix}video 2 
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`.trim()  
let teks = results.all.map((v, i) => {
let link = v.url;
vids_.urls.push(link);
return `[${i + 1}]\n🐦‍⬛༻ *TÍTULO:*  ${v.title}
🐈‍⬛༻ *LINK$* ${v.url}
🦇༻ *DATA:* ${v.ago}
✒️༻ *VISUALIZACOES* ${v.views}`}).join('\n\n••••••••••••••••••••••••••••••••••••\n\n')
conn.sendFile(m.chat, results.all[0].thumbnail, 'yts.jpeg', textoInfo + '\n\n' + teks, fkontak, m)
global.videoList.push(vids_);
} catch (e){ 
  console.log(e)
}}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = ['yts']
handler.exp = 0
handler.limit = 0
handler.level = 6
export default handler

/*import yts from "yt-search"
let handler = async (m, { text, conn, args, command, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!text) return conn.reply(m.chat, `${langTOGGLE['smsAvisoMG']()}𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙉 𝙑𝙄𝘿𝙀𝙊 𝙊 𝘾𝘼𝙉𝘼 𝘿𝙀 𝙔𝙊𝙐𝙏𝙐𝘽𝙀\n\n𝙒𝙍𝙄𝙏𝙀 𝙏𝙃𝙀 𝙉𝘼𝙈𝙀 𝙊𝙁 𝘼 𝙔𝙊𝙐𝙏𝙐𝘽𝙀 𝙑𝙄𝘿𝙀𝙊 𝙊𝙍 𝘾𝙃𝘼𝙉𝙉𝙀𝙇`, fkontak,  m)
try {
let search = await yts(args.join(" "))
let listAudio = []
let listVideo = []
let listAudioDoc = []
let listVideoDoc = []
let teskd = `𝘽𝙪𝙨𝙦𝙪𝙚𝙙𝙖 𝙙𝙚 *${args.join(" ")}*`

const sections = [{ title: comienzo + ' 𝗔 𝗨 𝗗 𝗜 𝗢 ' + fin, rows: listAudio },
{ title: comienzo + ' 𝗩 𝗜 𝗗 𝗘 𝗢 ' + fin, rows: listVideo },
{ title: comienzo + ' 𝗔 𝗨 𝗗 𝗜 𝗢   𝗗 𝗢 𝗖 ' + fin, rows: listAudioDoc },
{ title: comienzo + ' 𝗩 𝗜 𝗗 𝗘 𝗢   𝗗 𝗢 𝗖 ' + fin, rows: listVideoDoc }]

const listMessage = {
text: teskd,
footer: '𝙀𝙡𝙞𝙟𝙖 𝙨𝙪 𝘽𝙪𝙨𝙦𝙪𝙚𝙙𝙖 𝙥𝙖𝙧𝙖 𝙥𝙤𝙙𝙚𝙧 𝘿𝙚𝙨𝙘𝙖𝙧𝙜𝙖𝙧\n' + wm,
title: `${htki} *𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎* ${htka}`,
buttonText: "🔎 𝗕 𝗨 𝗦 𝗖 𝗔 𝗥",
sections}

if (m.isGroup) return m.reply('*✳️ 𝙃𝙊𝙇𝘼 𝙀𝙎𝙏𝙄𝙈𝘼𝘿𝙊 𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼), 𝙎𝙐 𝙋𝙀𝙍𝘿𝙄𝘿𝙊 𝙃𝘼 𝙎𝙄𝘿𝙊 𝙀𝙉𝙑𝙄𝘼𝘿𝙊 𝘼 𝙎𝙐 𝘾𝙃𝘼𝙏 𝙋𝙍𝙄𝙑𝘼𝘿𝙊, 𝙀𝙎𝙏𝙊 𝘾𝙊𝙈𝙊 𝙎𝙊𝙇𝙐𝘾𝙄𝙊𝙉 𝙏𝙀𝙈𝙋𝙊𝙍𝘼𝙇 𝘼 𝙀𝙍𝙍𝙊𝙍𝙀𝙎 𝘿𝙀 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝘾𝙊𝙉 𝘽𝙊𝙏𝙊𝙉𝙀𝙎 𝙏𝙄𝙋𝙊 𝙇𝙄𝙎𝙏𝘼𝙎 𝙌𝙐𝙀 𝙉𝙊 𝙎𝙊𝙉 𝙑𝙄𝙎𝙄𝘽𝙇𝙀𝙎 𝙀𝙉 𝙇𝘼𝙎 𝙑𝙀𝙍𝙎𝙄𝙊𝙉𝙀𝙎 𝙈𝘼𝙎 𝙍𝙀𝘾𝙄𝙀𝙉𝙏𝙀𝙎 𝘿𝙀 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋*')        
} catch {
try {     
for (let i of search.all) {
listAudio.push({title: i.title, description: `${i.author.name} | ${i.mp}`, rowId: `${usedPrefix}ytmp3 ${i.url}`})
listAudioDoc.push({title: i.title, description: `${i.author.name} | ${i.timestamp}`, rowId: `${usedPrefix}ytmp3doc ${i.url}`})
listVideo.push({title: i.title, description: `${i.author.name} | ${i.timestamp}`, rowId: `${usedPrefix}ytmp4 ${i.url}`})
listVideoDoc.push({title: i.title, description: `${i.author.name} | ${i.timestamp}`, rowId: `${usedPrefix}ytmp4doc ${i.url}`})}
conn.sendMessage(m.chat, listMessage, { quoted: fkontak })
if (m.isGroup) return m.reply('*✳️ 𝙃𝙊𝙇𝘼 𝙀𝙎𝙏𝙄𝙈𝘼𝘿𝙊 𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼), 𝙎𝙐 𝙋𝙀𝙍𝘿𝙄𝘿𝙊 𝙃𝘼 𝙎𝙄𝘿𝙊 𝙀𝙉𝙑𝙄𝘼𝘿𝙊 𝘼 𝙎𝙐 𝘾𝙃𝘼𝙏 𝙋𝙍𝙄𝙑𝘼𝘿𝙊, 𝙀𝙎𝙏𝙊 𝘾𝙊𝙈𝙊 𝙎𝙊𝙇𝙐𝘾𝙄𝙊𝙉 𝙏𝙀𝙈𝙋𝙊𝙍𝘼𝙇 𝘼 𝙀𝙍𝙍𝙊𝙍𝙀𝙎 𝘿𝙀 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝘾𝙊𝙉 𝘽𝙊𝙏𝙊𝙉𝙀𝙎 𝙏𝙄𝙋𝙊 𝙇𝙄𝙎𝙏𝘼𝙎 𝙌𝙐𝙀 𝙉𝙊 𝙎𝙊𝙉 𝙑𝙄𝙎𝙄𝘽𝙇𝙀𝙎 𝙀𝙉 𝙇𝘼𝙎 𝙑𝙀𝙍𝙎𝙄𝙊𝙉𝙀𝙎 𝙈𝘼𝙎 𝙍𝙀𝘾𝙄𝙀𝙉𝙏𝙀𝙎 𝘿𝙀 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋*')    
} catch {    
}}}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^playlist|ytbuscar|yts(earch)?$/i
handler.exp = 70
handler.limit = 1
handler.level = 4
export default handler
*/
