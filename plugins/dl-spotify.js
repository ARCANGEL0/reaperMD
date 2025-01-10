
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch'
import Spotify from "spotifydl-x"
import fs from 'fs'

let handler = async (m, { conn,isAdmin,isOwner, command, usedPrefix ,text}) => {
  
  if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].download===false){
   m.react("❌")
   
   return !0;
 } 
 
let picture = './media/menus/Menu1.jpg'
let name = await conn.getName(m.sender)

const credentials = { clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3', clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009' }
const spotify = new Spotify.default(credentials)
async function spotifydl(url) {
const res = await spotify.getTrack(url).catch(() => {
return { error: '𝐀 𝐭𝐞𝐧𝐭𝐚𝐭𝐢𝐯𝐚 𝐝𝐞 𝐭𝐫𝐚𝐧𝐬𝐜𝐫𝐢𝐜𝐚𝐨 𝐟𝐚𝐥𝐡𝐨𝐮 𝐥𝐚𝐦𝐞𝐧𝐭𝐚𝐯𝐞𝐥𝐦𝐞𝐧𝐭𝐞. 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐞 𝐫𝐞𝐭𝐨𝐫𝐧𝐞 𝐟𝐮𝐭𝐮𝐫𝐚𝐦𝐞𝐧𝐭𝐞, 𝐩𝐚𝐫𝐚 𝐮𝐦 𝐟𝐮𝐭𝐮𝐫𝐨 𝐬𝐨𝐦𝐛𝐫𝐢𝐨 𝐪𝐮𝐞 𝐭𝐫𝐚𝐧𝐬𝐩𝐚𝐫𝐞𝐜𝐚 𝐞𝐱𝐢𝐭𝐨' }})
return { data: res, audio: await spotify.downloadTrack(url) }}


let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

if (!text) throw `${langTOGGLE['smsAvisoMG']()}╭━[𝙎𝙥𝙤𝙩𝙞𝙛𝙮]━⬣
┃
┃ ✒️📜 𝐃𝐢𝐠𝐚-𝐦𝐞 𝐪𝐮𝐚𝐥 𝐦í𝐝𝐢𝐚 
┃ 𝐚𝐬𝐬𝐨𝐦𝐛𝐫𝐚 𝐬𝐮𝐚 𝐦𝐞𝐧𝐭𝐞 𝐞 𝐞𝐮 𝐚 
┃ 𝐝𝐞𝐬𝐞𝐧𝐭𝐞𝐫𝐫𝐚𝐫𝐞𝐢 𝐩𝐚𝐫𝐚 
┃ 𝐬𝐚𝐭𝐢𝐬𝐟𝐚𝐳ê-𝐥𝐨 🎶🎵
┃
╰━━━❰ *𓃠 ${vs}* ❱━━⬣ 
 Exemplo:\n*${usedPrefix + command} Cat*` 
try {
 let resDL = await fetch(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${global.lolkeysapi}&query=${text}`)
let jsonDL = await resDL.json()
console.log(jsonDL)
let linkDL = jsonDL.result[0].link
let inff = jsonDL.result[0]
 console.log(linkDL)
console.log(inff)

m.react("⏳")
const getRandom = (ext) => {
  
return `${Math.floor(Math.random() * 10000)}${ext}`
  
}
let randomName = getRandom(".mp3")


let estado = `╭━━━━[ 🎶 *${inff.title}* 🎶 ]━━━━━⬣
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 🥀 *𝐀𝐑𝐓𝐈𝐒𝐓𝐀*:
┃ ➥ ${inff.artists}
┃
┃ 🪦 𝐔𝐑𝐋:
┃ ➥ ${linkDL}
┃
┃ 𝐀𝐠𝐮𝐚𝐫𝐝𝐞.. 𝐪𝐮𝐞 𝐧𝐨 𝐬𝐢𝐥𝐞𝐧𝐜𝐢𝐨 𝐝𝐚 
┃ 𝐩𝐞𝐧𝐮𝐦𝐛𝐫𝐚, 𝐞𝐧𝐯𝐢𝐚𝐫𝐞𝐢 𝐨 𝐪𝐮𝐚𝐧𝐭𝐨
┃ 𝐚𝐧𝐭𝐞𝐬 𝐬𝐮𝐚 𝐦𝐞𝐥𝐨𝐝𝐢𝐚 𝐚𝐭𝐫𝐚𝐯𝐞𝐬
┃𝐝𝐞𝐬𝐬𝐞 𝐢𝐧𝐟𝐨𝐫𝐭𝐮𝐧𝐢𝐨 𝐝𝐨 𝐦𝐮𝐧𝐝𝐨 𝐝𝐢𝐠𝐢𝐭𝐚𝐥 
┃ 
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝙼𝚛. 𝚁𝚘𝚋𝚘𝚝 | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`
let lolhuman = await fetch(`https://api.neoxr.eu/api/spotify?url=${linkDL}&apikey=${neoxr}`)    

let lolh = await lolhuman.json()
  console.log(lolh)
await conn.sendFile(m.chat, lolh.data.thumbnail, 'error.jpg', estado, fkontak, m)


conn.sendMessage(m.chat, { audio: { url: lolh.data.url }, fileName: 'ms' + '.mp3', mimetype: 'audio/mp4' }, { quoted: m })  

}
catch(e){
  await conn.reply(m.chat, `${langTOGGLE['smsAvisoFG']()}╭━━━━━━━━━⬣
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
╰━━━━━━━━━━━━━━━━━━⬣` ,m)}
  
}


handler.help = ['spotify']
handler.tags = ['internet']
handler.command = ['spotify']
handler.level=6
export default handler

