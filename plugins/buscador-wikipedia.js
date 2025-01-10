
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import axios from "axios"
import fetch from "node-fetch"
import cheerio from "cheerio"
async function wikipedia(querry) {
try {
const link = await axios.get(`https://pt.wikipedia.org/wiki/${querry}`)
const $ = cheerio.load(link.data)
let judul = $('#firstHeading').text().trim()
let thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`
let isi = []
$('#mw-content-text > div.mw-parser-output').each(function (rayy, Ra) {
let penjelasan = $(Ra).find('p').text().trim() 
isi.push(penjelasan)})
for (let i of isi) {
const data = {
status: link.status,
result: {
judul: judul,
thumb: 'https:' + thumb,
isi: i}}
return data}
} catch (err) {
var notFond = {
status: link.status,
Pesan: eror}
return notFond}
  
  
}
let handler = async (m, { conn, text, usedPrefix, command,isAdmin,isOwner }) => {
  
  if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].busca===false){
   m.react("❌")
   
   return !0;
 } 
if (!text) throw `${langTOGGLE['smsAvisoMG']()}𝗗𝗶𝗴𝗶𝘁𝗲 𝗮 𝗽𝗮𝗹𝗮𝘃𝗿𝗮-𝗰𝗵𝗮𝘃𝗲 𝗽𝗮𝗿𝗮 𝗯𝘂𝘀𝗰𝗮𝗿. 🔎 \n𝗘𝘅𝗲𝗺𝗽𝗹𝗼\n*${usedPrefix + command} Universe*`
wikipedia(`${text}`).then(res => {
let info = `⎔⎓─────────────────
┃  𝑬𝒊𝒔 𝒕𝒖𝒂 𝒃𝒖𝒔𝒄𝒂, 𝒂𝒍𝒎𝒂 𝒊𝒏𝒒𝒖𝒊𝒆𝒕𝒂 ִ ࣪𖤐. . . 
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
${res.result.isi}
╰─...⎔⎓──────────────`
    m.reply(info)
  
}).catch(() => { m.reply(`𝙉𝙖𝙤 𝙛𝙤𝙞 𝙚𝙣𝙘𝙤𝙣𝙩𝙧𝙖𝙙𝙤 𝙣𝙚𝙣𝙝𝙪𝙢 𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙤... 𝙏𝙚𝙣𝙩𝙚 𝙪𝙨𝙖𝙧 𝙥𝙖𝙡𝙖𝙫𝙧𝙖𝙨-𝙘𝙝𝙖𝙫𝙚.`) })}
handler.help = ['wikipedia'].map(v => v + ' <apa>')
handler.tags = [ 'internet']
handler.command = ['wiki']
handler.exp = 0
handler.level = 25
export default handler