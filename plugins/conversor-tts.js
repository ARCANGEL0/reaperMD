
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────


import gtts from 'node-gtts'
// import 'say' from say
import { readFileSync, unlinkSync } from 'fs'
import { join } from 'path'
import fetch from 'node-fetch';
import fs from 'fs';
import { execSync } from 'child_process';
const defaultLang = 'pt-br'
let handler = async (m, { conn, __dirname,args,text, usedPrefix, command }) => {
  
  let abc
  
if (!text && m.quoted?.text) abc = m.quoted.text
if (text && !m.quoted?.text) abc = text
if (!text && !m.quoted?.text) throw `${langTOGGLE['smsAvisoMG']()}╭━━━━━━━━━⬣
┃
┃ 🥀🪦 𝐌𝐞 𝐬𝐮𝐬𝐬𝐮𝐫𝐫𝐞 𝐮𝐦 𝐬𝐞𝐠𝐫𝐞𝐝𝐨
┃ 𝐧𝐚𝐬 𝐬𝐨𝐦𝐛𝐫𝐚𝐬 𝐞 𝐥𝐡𝐞 𝐫𝐞𝐭𝐨𝐫𝐧𝐚𝐫𝐞𝐢
┃ 𝐚 𝐯𝐨𝐳 𝐝𝐨 𝐥𝐚𝐦𝐞𝐧𝐭𝐨 𝐧𝐚 𝐟𝐨𝐫𝐦𝐚 𝐝𝐞
┃ 𝐮𝐦 𝐚𝐮𝐝𝐢𝐨 𝐦𝐚𝐥𝐝𝐢𝐭𝐨
┃ _Suporte apenas para português_
┃ 𝙀𝙓𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Tudo
┃ que amei, amei sozinho
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣
*`
const url = `https://api.streamelements.com/kappa/v2/speech?voice=Ricardo&text=${abc}`




fetch(url)
  .then(response => response.arrayBuffer())
  .then(async (buffer) => {
   let ran = getRandom('.mp3');
let filename = join(__dirname, '../tmp/' + ran + '.wav'); // Ensure filename has .wav extension
const audioBuffer = Buffer.from(buffer);

fs.writeFileSync(filename, audioBuffer);

// Convert .wav to .mp3 using ffmpeg
const outputFilename = join(__dirname, '../tmp/' + ran);
execSync(`ffmpeg -i ${filename} ${outputFilename}`);

console.log(`MP3 file saved at ${outputFilename}`);
    let buff = await readFileSync(filename)
conn.sendFile(m.chat, buff, ran, null, m, true, {
type: 'audioMessage', 
ptt: true 
})
  })
  
.catch(e => {
  console.log(e)
  m.reply(`╭━━━━━━━━━⬣
┃
┃ ❌✒️ 𝐀 𝐭𝐞𝐧𝐭𝐚𝐭𝐢𝐯𝐚 
┃𝐟𝐚𝐥𝐡𝐨𝐮 𝐥𝐚𝐦𝐞𝐧𝐭𝐚𝐯𝐞𝐥𝐦𝐞𝐧𝐭𝐞.
┃
┃ 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐞 𝐫𝐞𝐭𝐨𝐫𝐧𝐞 
┃ 𝐟𝐮𝐭𝐮𝐫𝐚𝐦𝐞𝐧𝐭𝐞, 𝐩𝐚𝐫𝐚 𝐮𝐦 𝐟𝐮𝐭𝐮𝐫𝐨
┃ 𝐬𝐨𝐦𝐛𝐫𝐢𝐨 𝐪𝐮𝐞 𝐭𝐫𝐚𝐧𝐬𝐩𝐚𝐫𝐞𝐜𝐚
┃ 𝐞𝐱𝐢𝐭𝐨
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`)
})
}
handler.help = ['tts <lang> <teks>']
handler.tags = ['tools']
handler.level=7
handler.command = ['tts']
export default handler
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`}

function tts(text, lang = 'pt-br') {
console.log(lang, text)
return new Promise((resolve, reject) => {
try {
let tts = gtts(lang)
let filePath = join(global.__dirname(import.meta.url), '../tmp', (1 * new Date) + '.wav')
tts.save(filePath, text, () => {
resolve(readFileSync(filePath))
unlinkSync(filePath)
})
} catch (e) { reject(e) }
})}