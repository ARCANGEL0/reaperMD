
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
import { Buffer } from 'buffer';                     // Import axios for HTTP requests                  
import axios from 'axios';                           // Import TensorFlow.js for Node.js            
import * as tf from '@tensorflow/tfjs-node';         // Import the NSFW.js library                      
import * as nsfw from 'nsfwjs';

import uploadImage from '../lib/uploadImage.js'
import { join } from 'path'
import sharp from 'sharp'
let handler = m => m
handler.before = async function (m,{isCriadora,isAdmin,groupMetadata ,participants,__dirname , conn}) {
  if(!global.db.data.chats[m.chat].initialBoot) return !1

if (!m.isGroup) return !1


async function fn(imageUrl) {
  try {
    // Download the image as an array buffer
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });

    // Load the NSFWJS model
    const model = await nsfw.load("InceptionV3");

    // Decode the image
    let image = tf.node.decodeImage(new Uint8Array(response.data), 3);

    // Normalize pixel values
    // image = image.div(tf.scalar(255.0));

    // Resize the image to the required size
    const requiredSize = model.imageSize || 299;
    image = tf.image.resizeBilinear(image, [requiredSize, requiredSize]);
    image = image.expandDims(0); // Add batch dimension

    // Classify the image
    const predictions = await model.classify(image);
    console.log(predictions);

    // Dispose of the tensor to free memory
    image.dispose();

    // Define thresholds for each category
    const thresholds = {
      Porn: 0.7,
      Sexy: 0.6,
      Hentai: 0.65,
    };

    // Check if any category exceeds its threshold
    for (const prediction of predictions) {
      const { className, probability } = prediction;
      if (thresholds[className] && probability > thresholds[className]) {
        return true; // NSFW content detected
      }
    }

    return false; // Safe content
  } catch (err) {
    console.error('Error during processing:', err);
    return false;
  }
}




  
  function getDataAtual() {
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, '0');
    const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Mês começa do zero, então é necessário adicionar 1
    const ano = hoje.getFullYear();

    return `${dia}/${mes}/${ano}`;
}
function generateRandomCode() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let code = '';

    // Generate 4 random numbers
    for (let i = 0; i < 4; i++) {
        code += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    // Generate 1 random letter
    code += letters.charAt(Math.floor(Math.random() * letters.length));

    return code;
}

if(!global.db.data.chats[m.chat].ignored)
{
  global.db.data.chats[m.chat].ignored =[]
}

let user = global.db.data.chats[m.chat].users[m.sender]

const groupAdmins = participants.filter(p => p.admin)
 
  let admins =[]
  const listAdmin = groupAdmins.map((v, i) =>
  admins.push(v.id))
  
   let admcheck = admins.includes(m.sender)
	if(!global.db.data.chats[m.chat]){
  global.db.data.chats[m.chat]={}
}
if(!global.db.data.chats[m.chat].users){
  global.db.data.chats[m.chat].users={}
}
if(!global.db.data.chats[m.chat].users[m.sender]){
  global.db.data.chats[m.chat].users[m.sender]={
    exp: 0,
        limit:0,
        role:'⌥ 𝚜𝚌𝚛𝚒𝚙𝚝 𝚔𝚒𝚍𝚍𝚒𝚎',
        money:0,
        level:0,
        adm: admcheck,
        legendary: false,
        banned:false,
        nsfwAdv:0,
        adv:0,
  }
}
  const warningMessageOne = global.db.data.chats[m.chat].language === 'pt'
    ? `𓉘ⵑ𓉝 ᴄᴏɴᴛᴇᴜᴅᴏ +18 ɪᴅᴇɴᴛɪꜰɪᴄᴀᴅᴏ 
> ❯❯ ￭ `
    : `𓉘ⵑ𓉝 +18 ᴄᴏɴᴛᴇɴᴛ ᴅᴇᴛᴇᴄᴛᴇᴅ
> ❯❯ ￭ `
  const warningMessageTwo = global.db.data.chats[m.chat].language === 'pt'
    ?  `𓉘ⵑ𓉝 ᴄᴏɴᴛᴇᴜᴅᴏ +18 ɪᴅᴇɴᴛɪꜰɪᴄᴀᴅᴏ 
> ❯❯ ￭￭ 
> 𓉘⨻𓉝 𝘀𝘁𝗱𝗲𝗿𝗿: ᴜ́ʟᴛɪᴍᴏ ᴀᴠɪsᴏ!`

        : `𓉘ⵑ𓉝 +18 ᴄᴏɴᴛᴇɴᴛ ᴅᴇᴛᴇᴄᴛᴇᴅ
❯❯ ￭￭ 
> 𓉘⨻𓉝 𝘀𝘁𝗱𝗲𝗿𝗿: ʟᴀsᴛ ᴡᴀʀɴɪɴɢ!`
      const warningMessageThree = global.db.data.chats[m.chat].language === 'pt'
    ? 
`𓉘ⵑ𓉝 ᴄᴏɴᴛᴇᴜᴅᴏ +18 ɪᴅᴇɴᴛɪꜰɪᴄᴀᴅᴏ 
> ❯❯ ￭￭￭
> 𓉘⨻𓉝 𝘀𝘁𝗱𝗲𝗿𝗿: ᴜsᴜᴀ́ʀɪᴏ sᴇʀᴀ́ ʀᴇᴍᴏᴠɪᴅᴏ!`

: 
`𓉘ⵑ𓉝 +18 ᴄᴏɴᴛᴇɴᴛ ᴅᴇᴛᴇᴄᴛᴇᴅ
❯❯ ￭￭￭
> 𓉘⨻𓉝 𝘀𝘁𝗱𝗲𝗿𝗿: ᴜsᴇʀ ᴡɪʟʟ ʙᴇ ʀᴇᴍᴏᴠᴇᴅ!`


   let q =  m; 
    let mime = m?.msg?.mimetype || ''
    if(/sticker/.test(m.mediaType)){
      console.log("👀")
   
    if (global.db.data.chats[m.chat].nsfw){
      
 
        try {
            let media3 = await q.download();
            let pngBuffer = await sharp(media3).png().toBuffer();
          
            console.log('Sticker converted and saved as PNG');
            
            let linkST = await uploadImage(pngBuffer)
             console.log("👀")
             console.log(linkST)
             console.log("👀")

             const isNSFW = await fn(linkST);

console.log(`NSFW?: ${isNSFW}`)
if(isNSFW){
  console.log('nsfw detected')
  if(typeof global.db.data.chats[m.chat].users[m.sender].nsfwAdv
  =='undefined')global.db.data.chats[m.chat].users[m.sender].nsfwAdv =0

 global.db.data.chats[m.chat].users[m.sender].nsfwAdv += 1

let DELETEMESSAGEst = await conn.sendMessage(m.chat, { delete: m.key })
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGEst.message.protocolMessage.key.id)

if(global.db.data.chats[m.chat].users[m.sender].nsfwAdv == 1) {
 console.log("🌙")
  return conn.sendMessage(m.chat, {text: `${global.heading} uafw -m @${m.sender.split('@')[0]}
${warningMessageOne.getRandom()}
> ‎ 
`, mentions:
    [m.sender]}, {quoted: m})
}
if(global.db.data.chats[m.chat].users[m.sender].nsfwAdv == 2) {
  return conn.sendMessage(m.chat, {text: `${global.heading} uafw -m @${m.sender.split('@')[0]}
${warningMessageTwo.getRandom()}
> ‎ 
`, mentions:
    [m.sender]}, {quoted: m})
  
}
if(global.db.data.chats[m.chat].users[m.sender].nsfwAdv == 3) {
   await conn.sendMessage(m.chat, {text: `${global.heading} v@reaper:~# uafw -m @${m.sender.split('@')[0]}
${warningMessageThree.getRandom()}
> ‎ 
`, mentions:
    [m.sender]}, {quoted: m})
  await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
global.db.data.chats[m.chat].users[m.sender].advLink = 0 

return !0
}
  
  
}
     
}
            
         catch (error) {
            console.error('Error converting sticker to PNG:', error);
        }
    }
    
    
}
    else if (/image/g.test(mime)){
         if (global.db.data.chats[m.chat].nsfw){
       let media = await q.download()
let link = await uploadImage(media)
  console.log("🌙")

  const isNSFW = await fn(link);

  console.log(`NSFW?: ${isNSFW}`)


if(isNSFW){
  
 global.db.data.chats[m.chat].users[m.sender].nsfwAdv += 1

let DELETEMESSAGEst = await conn.sendMessage(m.chat, { delete: m.key })
global.db.data.chats[m.chat].ignored.push(DELETEMESSAGEst.message.protocolMessage.key.id)
if(global.db.data.chats[m.chat].users[m.sender].nsfwAdv == 1) {
  console('first')
  
  return conn.sendMessage(m.chat, {text: `${global.heading} uafw -m @${m.sender.split('@')[0]}
${warningMessageOne.getRandom()}
> ‎ 
`, mentions:
    [m.sender]}, {quoted: m})
    
}
if(global.db.data.chats[m.chat].users[m.sender].nsfwAdv == 2) {
   return conn.sendMessage(m.chat, {text: `${global.heading} uafw -m @${m.sender.split('@')[0]}
${warningMessageTwo.getRandom()}
> ‎ 
`, mentions:
    [m.sender]}, {quoted: m})
  
}
if(global.db.data.chats[m.chat].users[m.sender].nsfwAdv == 3) {
  await conn.sendMessage(m.chat, {text: `${global.heading} uafw -m @${m.sender.split('@')[0]} 
${warningMessageThree.getRandom()}
> ‎ 
`, mentions:
    [m.sender]}, {quoted: m}) 
    
    await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
global.db.data.chats[m.chat].users[m.sender].advLink = 0 

return !0
  
}
  
  
}

           
           
         }
   




}


}


export default handler
const getRandom = (ext) => { 
    return `${Math.floor(Math.random() * 10000)}${ext}`;
}