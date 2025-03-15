
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────╯


import FormData from "form-data"; 
import fetch from "node-fetch"; 
import request from 'request'
import uploadFile from '../lib/uploadFile.js'; 
import uploadImage from '../lib/uploadImage.js'; 
import { unlinkSync, readFileSync, writeFile } from 'fs'; 
import { join } from 'path'; 
import { exec } from 'child_process'; 
import { promisify } from 'util'; 
import ffmpeg from 'fluent-ffmpeg';

let handler = async (m, { conn, __dirname, text, usedPrefix, command }) => {
  
  let q = m.quoted ? m.quoted : m; 
    let mime = ((m.quoted ? m.quoted : m.msg).mimetype || ''); 
    let isMedia = /(?:audio\/(mp3|wav|ogg|opus))|(?:video\/(mp4|avi|mov|wmv|flv))/i.test(mime);
    
  let ran = getRandom('.mp3'); 
    let filename = join(__dirname, '../tmp/' + ran);
    let media = await q.download(true); 
    let buff = await readFileSync(media);
    m.react("⏳")

await writeFile(filename, buff, 'binary', async (err) => { 
    if (err) { 
        console.error('Error saving MP3 file:', err); 
    } 
    else { 
        console.log('MP3 file saved successfully:', filename); 
        // Additional code for further processing if needed 
try{
     
       async function postData(url, data) {
       

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
          
          console.log(response)
    return response.text(); // Return response body as text
}

// Example WHOIS request
const audiodt = {
    filepath: filename,
};
console.log(filename)
// Make POST request to /whois endpoint
postData(`${global.arcangeloAPI}/transcribe`, audiodt)
    .then(async (data) => {
      m.react("✔️")
        console.log(data);
      
        m.reply(data)
    })
    .catch(async (error) => {
      await m.reply(`𝙴𝚛𝚛𝚘 𝚗𝚘 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚘 ❌`)
        console.error('Error:', error);
    });
   }
   catch(e){
      await m.reply(`𝙴𝚛𝚛𝚘 𝚗𝚘 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚘 ❌`)
     
     console.log(e)
   }
}
        
        
    


})
  
}

handler.help = ['audio']; 
handler.tags = ['maker']; 
handler.command = ['txt']
handler.level= 9
export default handler;

const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}