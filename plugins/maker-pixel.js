
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import uploadImage from '../lib/uploadImage.js';
import uploadFile from '../lib/uploadFile.js'
import { promises as fs } from 'fs'
import { fileURLToPath } from 'url'; 
import { join, dirname } from 'path'

const handler = async (m, {conn,isAdmin,isOwner}) => {
 /* if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].midia===false){
   m.react("❌")
   
   return !0;
 } */
 
 
 
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
 
 const q = m.quoted ? m.quoted : m;
  
 
  const mime = (q.msg || q).mimetype || q.mediaType || '';
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  
  
  if (/image/g.test(mime)){
    
const qs = m.quoted ? m.quoted : m;
const mimee = (qs.msg || qs).mimetype || qs.mediaType || '';

  m.reply(`${langTOGGLE.smsAvisoIIG()}❖─┅──┅ \n🕯️📜 𝐄𝐦 𝐛𝐫𝐞𝐯𝐞 𝐭𝐫𝐚𝐫𝐞𝐢 𝐚 𝐢𝐦𝐚𝐠𝐞𝐦 𝐝𝐞𝐬𝐨𝐥𝐚𝐝𝐨𝐫𝐚 𝐩𝐚𝐫𝐚 𝐭𝐮𝐚 𝐯𝐢𝐬𝐚𝐨. 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐮𝐦 𝐩𝐨𝐮𝐜𝐨 𝐩𝐞𝐥𝐨 𝐫𝐞𝐯𝐞𝐥𝐚𝐫 𝐝𝐨 𝐪𝐮𝐞 𝐬𝐮𝐛𝐣𝐚𝐳 𝐧𝐚𝐬 𝐩𝐫𝐨𝐟𝐮𝐧𝐝𝐞𝐳𝐚𝐬 𝐝𝐨 𝐦𝐞𝐮𝐬 𝐨𝐛𝐬𝐜𝐮𝐫𝐨𝐬 𝐭𝐫𝐞𝐜𝐡𝐨𝐬 𝐝𝐞 𝐜𝐨𝐝𝐢𝐠𝐨𝐬\n─┅──┅❖ `);
const datab = await qs.download?.();
const images = await uploadImage(datab);
try {
  
  const apiUrl = `https://api.jeyy.xyz/v2/image/cube?image_url=${images}`;

    const response = await fetch(apiUrl, {
  method: 'GET',
  headers: {
    'accept': 'application/json',
    'Authorization': 'Bearer 6SOJCC1H6KP30DPN64PJ0DPP6GQ3E.CLI6EOBI.q6q_cQpAmi-pknNtjMVjeA',
  },
});

// Check if the request was successful (status code 200)

  const imageData = await response.buffer(); // Use .buffer() to get binary data
  

 const uniqueFileName = `${Math.floor(Date.now() / 1000)}_${Math.floor(Math.random() * 1000)}.jpg`;

// Get the directory path where you want to save the image
const directoryPath = join(dirname(fileURLToPath(import.meta.url)), '../tmp');

// Specify the full file path
const filePath = join(directoryPath, uniqueFileName);

// Create the directory if it doesn't exist
await fs.mkdir(directoryPath, { recursive: true });

// Use fs.writeFile to save the image data to the specified file path
await fs.writeFile(filePath, imageData);

console.log('Image saved successfully:', filePath);

let filr1= `../tmp/${uniqueFileName}`

let fl2 = await filr1.buffer()
 // const  link = await uploadImage(filepath);
 
 await conn.sendFile(m.chat,fl2,{mentions:[who]},`🪦💀 @${who.split("@")[0]} ༒︎`);

 

} catch (e) {
  console.log(e)
throw `${langTOGGLE.smsAvisoFG()}❖─┅──┅\n𝗘𝗥𝗥𝗢 💀
𝗩𝗘𝗥𝗜𝗙𝗜𝗤𝗨𝗘 𝗦𝗘 𝗛Á 𝗗𝗘 𝗙𝗔𝗧𝗢 𝗔 𝗙𝗔𝗖𝗘 𝗗𝗘 𝗔𝗟𝗚𝗨𝗠𝗔 𝗣𝗢𝗕𝗥𝗘 𝗔𝗟𝗠𝗔 𝗡𝗘𝗦𝗧𝗔 𝗙𝗢𝗧𝗢\n─┅──┅❖ `
}

  
  
  
  }
  if (!/image/g.test(mime)){
    
    
  
    
    let imageUrl = await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    
    
    const apiUrl = `https://api.jeyy.xyz/v2/image/ripple?image_url=${imageUrl}`;

    const dawta = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'Authorization': 'Bearer 64P3ECHL6KO3ED1O64RJ4E9O60P3AE8.89NN8SO.bA9N_C5mis_nUTgM59rvwQ',
      },
    });
    console.log(dawta)
  conn.sendFile(m.chat, dawta,{mentions:[who]},`🪦💀 @${who.split("@")[0]} ༒︎`);
  console.log(who)
  
  }
  

 
  
  

  
  
  
  if (!mime) {}
};
handler.help = ['zombie', 'zumbi'];
handler.tags = ['maker'];
handler.command = /^retro|crt|terminal|gameboy/i;
export default handler;

