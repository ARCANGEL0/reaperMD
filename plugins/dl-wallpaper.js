
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command, isOwner,isAdmin }) => {
 if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].busca===false){
   m.react("❌")
   
   return !0;
 } 
 
if (!text) throw `${langTOGGLE['smsAvisoMG']()}❖─┅──┅ 𝗗𝗲𝘀𝗰𝗿𝗲𝘃𝗮-𝗺𝗲 𝗼 𝗴𝗲𝗻𝗲𝗿𝗼 𝗱𝗲 𝗳𝘂𝗻𝗱𝗼 𝗾𝘂𝗲 𝗽𝗿𝗼𝗰𝘂𝗿𝗮𝘀, 𝗰𝗼𝗺 𝗮𝘀 𝘀𝗼𝗺𝗯𝗿𝗮𝘀 𝘀𝘂𝘀𝘀𝘂𝗿𝗿𝗮𝗻𝘁𝗲𝘀 𝗱𝗲 𝘁𝘂𝗮 𝗽𝗿𝗲𝗳𝗲𝗿𝗲𝗻𝗰𝗶𝗮 𝗮 𝗱𝗮𝗻𝗰𝗮𝗿 𝗻𝗮𝘀 𝗽𝗮𝗿𝗲𝗱𝗲𝘀 𝗱𝗮 𝘀𝘂𝗮 𝗶𝗺𝗮𝗴𝗶𝗻𝗮𝗰𝗮𝗼 𝗹𝗮𝗺𝗲𝗻𝘁𝗮𝘃𝗲𝗹 🥀 ─┅──┅❖\n𝙀𝙓:\n*${usedPrefix + command} Cat*`
 
const apiUrl = 'https://aemt.me/wallpaper';
const apiKey = '7ce080bf8a37489c9dc2ef3a72a88f71';

const params = new URLSearchParams({
  
  query: text
  
});

const url = `${apiUrl}?${params.toString()}`;

fetch(url)
.then(response =>{ 
  if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.arrayBuffer();
  })
  .then(buffer => {
    let imgn = `data:image/jpeg;base64,${Buffer.from(buffer).toString('base64')}`;
    
    // Assuming you have a function to create an Object URL from the blob
  

 

 console.log(imgn)


  conn.sendFile(m.chat, imgn, 'error.jpg', `*🥀 𝙍𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 : ${text}*\n${wm}`, m)
  } )
  .catch(error => console.error('Error:', error));

};
handler.level=1
handler.command =['wallpaper']
export default handler;