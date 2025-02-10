
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch';
import { Readable } from 'stream';
import handwritten from 'handwritten.js'
import fs from 'fs'
import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { exec } from 'child_process'; 
import { join } from 'path'; 
import path from 'path'

const handler = async (m, { conn,__dirname, command, text, args, usedPrefix, DevMode }) => {


if(!text && !m.quoted?.text){
  m.reply(`╭─┅──┅❖  ❖─┅──┅
🪶 𝑪𝒂𝒓𝒐 𝒊𝒏𝒕𝒆𝒓𝒍𝒐𝒄𝒖𝒕𝒐𝒓... 𝒅𝒊𝒈𝒂-𝒎𝒆 𝒒𝒖𝒂𝒍 𝒂 𝒑𝒓𝒐𝒔𝒂 𝒐𝒖 𝒕𝒆𝒙𝒕𝒐 𝒒𝒖𝒆 𝒅𝒆𝒔𝒑𝒆𝒓𝒕𝒂 𝒕𝒆𝒖 𝒊𝒏𝒕𝒆𝒓𝒆𝒔𝒔𝒆 𝒆 𝒆𝒖 𝒕𝒓𝒂𝒓𝒆𝒊 𝒆𝒏𝒕𝒂𝒐 𝒏𝒂 𝒆𝒔𝒄𝒓𝒊𝒕𝒂 𝒔𝒐𝒓𝒅𝒊𝒅𝒂 𝒆𝒎 𝒑𝒂𝒑𝒆𝒍 𝒆 𝒄𝒂𝒏𝒆𝒕𝒂

*╰─┅──┅❖ ⸸ ❖─┅──┅*`)

return !0
}
m.react("⏳")
let textFile = getRandom('.txt'); 
let imgOut = getRandom('.txt'); 
    let filename = join(__dirname, '../tmp/' + textFile);
    let outputFilename = join(__dirname, '../tmp/' + imgOut);
 


// Use the provided text or quoted text
let rawText = text || m.quoted?.text;

fs.writeFile(filename, rawText, (err) => {
  if (err) {
    console.error('Error writing to file', err);
  } else {
    console.log('File has been saved');




const command = `handwritten.js -f ${filename} -r -o ${outputFilename} -i png`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`stdout: ${stdout}`);
  console.log('Command executed successfully');
  
  




function sendFile(filePath) {
  console.log(`Sending file: ${filePath}`);
  conn.sendFile(m.chat, filePath, 'handwritting.png',null,m)
}

fs.readdir(outputFilename, (err, files) => {
  if (err) {
    console.error(`Unable to read directory: ${err.message}`);
    return;
  }

  files.forEach(file => {
    if (path.extname(file) === '.png') {
      const filePath = path.join(outputFilename, file);
      sendFile(filePath);
    }
  });
}); 
  
});
    
  }
});
//
   
}

handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.level = 9 
handler.command = ['escrever']

export default handler
const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}
