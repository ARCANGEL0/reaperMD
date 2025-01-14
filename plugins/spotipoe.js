
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import axios from 'axios'
import {readFileSync, unlinkSync} from 'fs';
import {join} from 'path';

import NeoxrApi from '@neoxr/api'
var handler = async(m, { conn, text, __dirname }) => {

m.react("💿")

	
let img = ['https://telegra.ph/file/ece369d53a1e7c3b1e855.jpg','https://telegra.ph/file/0965392426f51d9d225f2.jpg','https://telegra.ph/file/4b4efafb8c0b4942e23df.jpg']
let play = `https://open.spotify.com/playlist/4CzeHjOIeq8hnHqDtZ6Iff?si=6mjpU5ynSuq2vwjfEdRGSA&pi=u-QgK_sMxKQ5et`

await conn.sendFile(m.chat, img.getRandom(), 'error.jpg',`╭────── 𝙋𝙤𝙚 𝙥𝙡𝙖𝙮𝙡𝙞𝙨𝙩 ⛦...─────╮
  ${play}
  
 ᬊᬁ   𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘 𝚞𝚖𝚊 𝚖𝚞𝚜𝚒𝚌𝚊. . .`,m)
 
 
 


 
 try{
   
   let urlply = `https://api.neoxr.eu/api/spotify?url=https://open.spotify.com/playlist/4CzeHjOIeq8hnHqDtZ6Iff?si=6mjpU5ynSuq2vwjfEdRGSA&pi=u-QgK_sMxKQ5et&apikey=u6MXRU`


const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36'
}
let datas = await fetch(urlply)
console.log(datas)
let respons = await datas.json()

  let tracks = respons.tracks
 
  console.log(tracks.length);
   
   
   const randomIndex = Math.floor(Math.random() * tracks.length);
const url = tracks[randomIndex].url;

fetch(`https://api.neoxr.eu/api/spotify?url=${url}&apikey=${global.neoxr}`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    fetch(data.data.url)
      .then(response => response.buffer())
      .then(buffer => {
        let ran = getRandom('.mp3'); 
    let fileName = join(__dirname, '../tmp/' + ran);
 
        fs.writeFile(fileName, buffer, async (err) => {
          if (err) {
            console.error('Error writing file:', err);
          } else {
            console.log(`${fileName} saved successfully.`);
            
          
        await conn.sendMessage(m.chat, { audio: { url: fileName }, mimetype: 'audio/mpeg', contextInfo: {
externalAdReply: {
title: data.data.title,
body: "",
thumbnailUrl: data.data.thumbnail, 
mediaType: 1,
showAdAttribution: true,
renderLargerThumbnail: true
}}} , { quoted: m }) 
          }
        });
      });
  })
  .catch(error => console.error('Error:', error));


 }
 catch(e){
   console.log(e)
   await m.reply(`*Erro ao enviar música* ཀ`)
 }
 
 
}

handler.tags = ['internet']
handler.level = 2
handler.command = ['spotipoe']

export default handler

const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}