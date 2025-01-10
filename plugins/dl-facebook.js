
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fg from 'api-dylux';
import fetch from 'node-fetch';
import {savefrom, facebookdl, facebookdlv2} from '@bochilteam/scraper';
import fbDownloader from 'fb-downloader-scrapper';
import {facebook} from '@xct007/frieren-scraper';
import axios from 'axios';
const handler = async (m, {conn, args,text, command, usedPrefix}) => {
  let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  


await conn.reply(m.chat, `${langTOGGLE['smsAvisoEG']()}╭━━━━━━━━━⬣
⌛ 𝐀𝐠𝐮𝐚𝐫𝐝𝐞... 𝐞𝐦 𝐛𝐫𝐞𝐯𝐞 𝐫𝐞𝐜𝐞𝐛𝐞𝐫á 𝐨 𝐚𝐫𝐪𝐮𝐢𝐯𝐨, 𝐜𝐨𝐦𝐨 𝐚 𝐩𝐫𝐨𝐦𝐞𝐬𝐬𝐚 𝐬𝐮𝐬𝐬𝐮𝐫𝐫𝐚𝐝𝐚 𝐩𝐨𝐫 𝐞𝐬𝐩𝐞𝐜𝐭𝐫𝐨𝐬 𝐧𝐚𝐬 𝐬𝐨𝐦𝐛𝐫𝐚𝐬 𝐝𝐚 𝐧𝐨𝐢𝐭𝐞.
╰━━━━━━━━━━━━━━━━━━⬣`, fkontak, m)


if (!args[0]) return conn.reply(m.chat, `${langTOGGLE['smsAvisoMG']()}╭━━━━━━━━━⬣
┃
┃ 🕯️💀 𝐑𝐞𝐯𝐞𝐥𝐚-𝐦𝐞 𝐨 𝐞𝐥𝐨 𝐩𝐚𝐫𝐚 𝐨 
┃ 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐣𝐚𝐢𝐬 𝐛𝐚𝐢𝐱𝐚𝐫, 𝐞 𝐚𝐬𝐬𝐢𝐦
┃ 𝐝𝐚𝐬  𝐩𝐫𝐨𝐟𝐮𝐧𝐝𝐞𝐳𝐚𝐬 𝐝𝐚 
┃ 𝐨𝐛𝐬𝐜𝐮𝐫𝐢𝐝𝐚𝐝𝐞  𝐯𝐢𝐫𝐭𝐮𝐚𝐥, 𝐭𝐫𝐚𝐫𝐞𝐢
┃ 𝐨 𝐚𝐫𝐪𝐮𝐢𝐯𝐨 𝐪𝐮𝐞 𝐚𝐧𝐬𝐞𝐢𝐚𝐬.
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:
┃ *${usedPrefix + command} link*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝙼𝚛. 𝚁𝚘𝚋𝚘𝚝 | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`, fkontak, m)
if (!args[0].match(/www.facebook.com|fb.watch/g)) return conn.reply(m.chat, `${langTOGGLE['smsAvisoMG']()}╭━━━━━━━━━⬣
┃
┃ 🕯️💀 𝐑𝐞𝐯𝐞𝐥𝐚-𝐦𝐞 𝐨 𝐞𝐥𝐨 𝐩𝐚𝐫𝐚 𝐨 
┃ 𝐪𝐮𝐞 𝐝𝐞𝐬𝐞𝐣𝐚𝐢𝐬 𝐛𝐚𝐢𝐱𝐚𝐫, 𝐞 𝐚𝐬𝐬𝐢𝐦
┃ 𝐝𝐚𝐬  𝐩𝐫𝐨𝐟𝐮𝐧𝐝𝐞𝐳𝐚𝐬 𝐝𝐚 
┃ 𝐨𝐛𝐬𝐜𝐮𝐫𝐢𝐝𝐚𝐝𝐞  𝐯𝐢𝐫𝐭𝐮𝐚𝐥, 𝐭𝐫𝐚𝐫𝐞𝐢
┃ 𝐨 𝐚𝐫𝐪𝐮𝐢𝐯𝐨 𝐪𝐮𝐞 𝐚𝐧𝐬𝐞𝐢𝐚𝐬.
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:
┃ *${usedPrefix + command} link*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝙼𝚛. 𝚁𝚘𝚋𝚘𝚝 | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`, fkontak, m)
try { 

const rsponse = await fetch(`https://api.neoxr.eu/api/fb?url=${text}&apikey=${global.neoxr}`)
let dataa = await rsponse.json()
console.log(dataa)
if (dataa.data.length>0) {
 
let r2es = `${dataa.data[1]?.url || dataa.data[0]?.url}`
  
conn.sendFile(m.chat, r2es, 'error.mp4', `✅
${wm}`, m)
}
else { throw 'err'}
} catch (err1) {
  console.log(err1)
  m.react("❌")
}
}
handler.command=['fb']
handler.level = 6
//handler.limit = 3 
export default handler

async function igeh(url_media) {
return new Promise(async (resolve, reject)=>{
const BASE_URL = 'https://instasupersave.com/';
try {
const resp = await axios(BASE_URL);
const cookie = resp.headers['set-cookie']; // get cookie from request
const session = cookie[0].split(';')[0].replace('XSRF-TOKEN=', '').replace('%3D', '');
const config = {method: 'post', url: `${BASE_URL}api/convert`, headers: {'origin': 'https://instasupersave.com', 'referer': 'https://instasupersave.com/pt/', 'sec-fetch-dest': 'empty', 'sec-fetch-mode': 'cors', 'sec-fetch-site': 'same-origin', 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.52', 'x-xsrf-token': session, 'Content-Type': 'application/json', 'Cookie': `XSRF-TOKEN=${session}; instasupersave_session=${session}`}, data: {url: url_media}};
axios(config).then(function(response) {
const ig = [];
if (Array.isArray(response.data)) {
response.data.forEach((post) => {
ig.push(post.sd === undefined ? post.thumb : post.sd.url);
 });
} else {
ig.push(response.data.url[0].url);
}
resolve({results_number: ig.length, url_list: ig});
}).catch(function(error) {
reject(error.message);
});
} catch (e) {
reject(e.message);
}})}

/*import fg from 'api-dylux' 
import fetch from 'node-fetch'
import { savefrom, facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fbDownloader from 'fb-downloader-scrapper'
let handler = async (m, { conn, args, command, usedPrefix }) => {
let user = global.db.data.users[m.sender]
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
if (!args[0]) return conn.reply(m.chat, `${langTOGGLE['smsAvisoMG']()}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} https://www.facebook.com/watch?v=636541475139`, fkontak, m)
if (!args[0].match(/www.facebook.com|fb.watch/g)) return conn.reply(m.chat, `${langTOGGLE['smsAvisoMG']()}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*`, fkontak, m)
try {
await conn.reply(m.chat, `${langTOGGLE['smsAvisoEG']()}𝙀𝙎𝙋𝙀𝙍𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊, 𝙎𝙀 𝙀𝙎𝙏𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙉𝘿𝙊 𝙎𝙐 𝙑𝙄𝘿𝙀𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆`, fkontak, m)
let Rres = await fetch(`https://api.lolhuman.xyz/api/facebook?apikey=${lolkeysapi}&url=${args[0]}`)
let Jjson = await Rres.json()
let VIDEO = Jjson.result[0]
if (VIDEO == '' || !VIDEO || VIDEO == null) VIDEO = Jjson.result[1]
conn.sendFile(m.chat, VIDEO, 'error.mp4', `✅ 𝙑𝙄𝘿𝙀𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆\n${wm}`, m)    
} catch (err1) {
console.log('1 ' + err1)    
try {
let ress = await fg.fbdl(args[0])
let urll = await ress.data[0].url    
await conn.sendFile(m.chat, urll, 'error.mp4', '✅ 𝙑𝙄𝘿𝙀𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆\n${wm}', m)     
} catch (err2) {
console.log('2 ' + err2)    
try {
let res = await fbDownloader(args[0])
for (let result of res.download) {
let ur = result.url    
await conn.sendFile(m.chat, ur, 'error.mp4', '✅ 𝙑𝙄𝘿𝙀𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆\n${wm}', m)}
} catch (err3) {
console.log('3 ' + err3)    
try { 
let vio = await fetch(`https://api.violetics.pw/api/downloader/facebook?apikey=beta&url=${args[0]}`)  
let vioo = await vio.json()
let videovio = `${vioo.result.hd.url || vioo.result.sd.url}`
await conn.sendFile(m.chat, videovio, `error.mp4`, '✅ 𝙑𝙄𝘿𝙀𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆\n${wm}', m)
} catch (err4) {
console.log('4 ' + err4)    
try {
let res3 = await fetch(`https://latam-api.vercel.app/api/facebookdl?apikey=brunosobrino&q=${args[0]}`)  
let json = await res3.json()
let url3 = await json.video
await conn.sendFile(m.chat, url3, 'error.mp4', '✅ 𝙑𝙄𝘿𝙀𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆\n${wm}', m)         
} catch (err5) {
console.log('5 ' + err5)    
try {
const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0])).catch(async _ => await savefrom(args[0]))
for (const { url, isVideo } of result.reverse()) await conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, '✅ 𝙑𝙄𝘿𝙀𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆\n${wm}', m)    
} catch (err6) {
console.log('6 ' + err6)    
await m.reply(`${langTOGGLE['smsAvisoFG']()}𝘼𝙇𝙂𝙊 𝙎𝘼𝙇𝙄𝙊 𝙈𝘼𝙇, 𝙍𝙀𝘾𝙐𝙀𝙍𝘿𝙀 𝙐𝙎𝘼𝙍 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙑𝘼𝙇𝙄𝘿𝙊 𝘿𝙀 𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆`)
}}}}}}}
handler.command = /^(facebook|fb|facebookdl|fbdl|facebook2|fb2|facebookdl2|fbdl2|facebook3|fb3|facebookdl3|fbdl3|facebook4|fb4|facebookdl4|fbdl4|facebook5|fb5|facebookdl5|fbdl5)$/i
handler.limit = 3
export default handler*/