
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fs from 'fs'
import {exec} from 'child_process'
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if(!isOwner){
    return m.react("❌")
  }
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
await m.reply(`_*🗂️ Enviando base de dados. . .*_`)
try {

let database = await fs.readFileSync(`./code_database.json`)

const gitCommand = 'git add code_database.json -f && git commit -m "Backup database" && git push origin master -f';
  
  
await  exec(gitCommand, async (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    m.react("❌")
    return;
  }
  
  if(stderr){
  console.log(`Database salvo no github:
  ${stderr}`);
  console.log('Backup de dados feito com sucesso!.');
await conn.sendMessage(m.sender, {document: database, mimetype: 'application/json', fileName: `database.json`}, { quoted: m })
await m.reply(`╭────────────────────────────⌬...─╮
   𝐁𝐚𝐜𝐤𝐮𝐩 𝐫𝐞𝐚𝐥𝐢𝐳𝐚𝐝𝐨 𝐜𝐨𝐦 𝐬𝐮𝐜𝐞𝐬𝐬𝐨 𝐧𝐨 𝐆𝐢𝐭𝐡𝐮𝐛!
╰─...⌬────────────────────────────╯`);
}
})


} catch (e) {
await m.reply(`✒️ *Erro* `)
console.log(`❗❗ ${langTOGGLE['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(backup|bkp|copia)$/i


export default handler
