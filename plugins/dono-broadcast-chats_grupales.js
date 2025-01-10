
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import { randomBytes } from 'crypto'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
let handler = async (m, { conn, command, participants, usedPrefix, text }) => {
 
if (!text && !m.quoted) return m.reply(langTOGGLE.smsBCMensaje(usedPrefix, command))        

let users = participants.map(u => conn.decodeJid(u.id))
let cc2 = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks2 = text ? text : cc2.text 
const q = m.quoted ? m.quoted : m;
  
 
  const mime = (q.msg || q).mimetype || q.mediaType || '';
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  
let d = new Date(new Date + 3600000)
let locale = langTOGGLE.lenguaje()
let dia = d.toLocaleDateString(locale, { weekday: 'long' })
let fecha = d.toLocaleDateString(langTOGGLE.lenguaje(), { day: 'numeric', month: 'numeric', year: 'numeric' })
let mes = d.toLocaleDateString(langTOGGLE.lenguaje(), { month: 'long' })
let año = d.toLocaleDateString(langTOGGLE.lenguaje(), { year: 'numeric' })


let tiempo = d.toLocaleString('pt-BR', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
let groups = Object.keys(await conn.groupFetchAllParticipating())
let usersTag = participants.map(u => conn.decodeJid(u.id))
let readMS = String.fromCharCode(8206).repeat(850)
await m.reply(langTOGGLE.smsChatGP1())  


 if (isTele)
  {
    const datab = await q.download?.();
const images = await uploadImage(datab);

   for (let i = 0; i < groups.length; i++) {
const id = groups[i];
const infoGP = langTOGGLE.smsChatGP2(readMS, dia, mes, año, fecha, tiempo)
const delay = i * 20000 //4 seg
setTimeout(async () => { 
  
 await conn.sendFile(id,images  , 'error.png',infoGP + teks2 ,null,{mentions: [m.sender], mentions: (await conn.groupMetadata(id)).participants.map(v => v.id) })
 
 
//await conn.reply(id, infoGP + teks2, { mentions: (await conn.groupMetadata(id)).participants.map(v => v.id) }, { quoted: fkontak });
}, delay)}         
let totalGP = groups.length
await m.reply(langTOGGLE.smsChatGP3(totalGP)) 
  }
  else{
for (let i = 0; i < groups.length; i++) {
const id = groups[i];
const infoGP = langTOGGLE.smsChatGP2(readMS, dia, mes, año, fecha, tiempo)
const delay = i * 20000 //4 seg
setTimeout(async () => { 
  
 
await conn.sendMessage(id, { text: infoGP + teks2, mentions: [m.sender], mentions: (await conn.groupMetadata(id)).participants.map(v => v.id) }) 
//await conn.reply(id, infoGP + teks2, { mentions: (await conn.groupMetadata(id)).participants.map(v => v.id) }, { quoted: fkontak });
}, delay)}         
let totalGP = groups.length
await m.reply(langTOGGLE.smsChatGP3(totalGP))

 
  }   
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.owner = true
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
const delay = time => new Promise(res => setTimeout(res, time))
