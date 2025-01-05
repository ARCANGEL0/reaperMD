
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import { createCanvas, loadImage } from 'canvas'
import fs from 'fs'
import translate from '@vitalets/google-translate-api' 
import fetch from "node-fetch"; 
import request from 'request'
import uploadFile from '../lib/uploadFile.js'; 
import uploadImage from '../lib/uploadImage.js'; 
import { unlinkSync, readFileSync, writeFile } from 'fs'; 

import { fileURLToPath } from 'url';
import {join } from 'path';
const handler = async (m, {args,command,usedPrefix,__dirname,conn,text,isAdmin,isOwner}) => {
try {
if(!text){
  return m.reply(`╭─┅──┅❖ ༒︎ ❖─┅──┅
𝑪𝒐𝒏𝒋𝒖𝒓𝒆 𝒂𝒔 𝒍𝒆𝒕𝒓𝒂𝒔 𝒔𝒐𝒎𝒃𝒓𝒊𝒂𝒔 𝒅𝒆 𝒖𝒎𝒂 𝒎𝒖𝒔𝒊𝒄𝒂, 𝒕𝒓𝒂𝒛𝒆𝒏𝒅𝒐 𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐 𝒑𝒂𝒓𝒂 𝒔𝒆𝒖 𝒄𝒉𝒂𝒕. 𝑫𝒆𝒊𝒙𝒆 𝒂𝒔 𝒑𝒂𝒍𝒂𝒗𝒓𝒂𝒔 𝒎𝒂𝒄𝒂𝒃𝒓𝒂𝒔 𝒆𝒄𝒐𝒂𝒓𝒆𝒎 𝒏𝒂 𝒏𝒐𝒊𝒕𝒆. 𝄞

𝑬𝒙𝒆𝒎𝒑𝒍𝒐: .letras Dance with the Devil - Breaking benjamin
*╰─┅──┅❖ ⸸ ❖─┅──┅*`)
}
m.react('🌒')
let dt = await fetch(`https://api.neoxr.eu/api/lyric?q=${text}&apikey=${global.neoxr}`)
let data1 = await dt.json()

if(data1.msg == "Can't find lyric!"){
  return m.reply(`⎔⎓─────────────.
  𝚂𝚎𝚖 𝚛𝚎𝚜𝚞𝚕𝚝𝚊𝚍𝚘𝚜. . . 𝄞
╰─...⎔⎓──────────`)
}
console.log(data1)
let url = data1.data[0].url

m.react('🌓')
let lyrics= await fetch(`https://api.neoxr.eu/api/lyric?q=${url}&apikey=${global.neoxr}`)

m.react('🌔')
let data2= await lyrics.json()
let dat2 = data2.data


let info = await fetch(`https://api.neoxr.eu/api/play?q=${dat2.title}&apikey=${global.neoxr}`)

let movinfo = await info.json()

console.log(movinfo)
let pub = await translate(`${movinfo.publish}`, { to: "pt", autoCorrect: true })
m.react('🌕')
conn.sendFile(m.chat, dat2.image, 'error.jpg',`╭─────────────── 𝄞...─╮
      ${dat2.title}
╰─...⚝───────────────╯
╭──────────────────── ⛦...─╮
    
 ${dat2.lyric}
    
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃ ${pub.text}
╰─...⌬────────────────────╯`)


if(global.db.data.chats[m.chat].autolevelup){
global.db.data.chats[m.chat].users[m.sender].money -= 180
await m.reply("༒︎ 180 җ ʙʏᴛᴇᴄᴏɪɴꜱ 𝙐𝙎𝘼𝘿𝙊𝙎")}

}
catch(e){
  console.log(e)
  m.react("💀")
  m.reply(`╭─❖ ❌ *Um erro inesperado ocorreu* ❖─
𝑵𝒂 𝒆𝒔𝒄𝒖𝒓𝒊𝒅𝒂𝒐 𝒔𝒆𝒑𝒖𝒍𝒄𝒓𝒂𝒍 𝒅𝒆 𝒎𝒆𝒖 𝒄𝒐𝒅𝒊𝒈𝒐, 𝒐 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒇𝒂𝒍𝒉𝒐𝒖 𝒄𝒐𝒎𝒐 𝒖𝒎𝒂 𝒑𝒓𝒆𝒄𝒆 𝒏𝒂𝒐 𝒂𝒕𝒆𝒏𝒅𝒊𝒅𝒂.

𝑼𝒔𝒆 *.report* 𝒑𝒂𝒓𝒂 𝒓𝒆𝒍𝒂𝒕𝒂𝒓 𝒆𝒔𝒕𝒂 𝒎𝒊𝒔𝒆𝒓𝒂𝒗𝒆𝒍 𝒇𝒂𝒍𝒉𝒂.
*╰┅─❖ ⸸ ❖─┅*`)
}
}

handler.help = ['letras', 'lyrics'];
handler.tags = ['maker']
handler.level =6
handler.command = ['lyrics']
export default handler

const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}
