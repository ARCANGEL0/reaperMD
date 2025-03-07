
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────
import { igdl } from 'btch-downloader'
import fetch from 'node-fetch';
import axios from 'axios';
import instagramGetUrl from 'instagram-url-direct';
import {instagram} from '@xct007/frieren-scraper';
import {instagramdl} from '@bochilteam/scraper';
const handler = async (m, {conn,isAdmin,isOwner,text, args, command, usedPrefix}) => {
  
  if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].download===false){
   m.react("❌")
   
   return !0;
 } 
const fkontak = {
        "key": {
        "participants":"0@s.whatsapp.net",
            "remoteJid": "status@broadcast",
            "fromMe": false,
            "id": "Halo"    
        }, 
        "message": {
            "contactMessage": {
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        }, 
        "participant": "0@s.whatsapp.net"
    }



    const messageTxt = global.db.data.chats[m.chat].language == 'en' ? 
        `┌──[ BYΓΞSΞC ]─[~/instaloader] 
└─ $ instadl --help
> ‎
> ‎[!] 𝙸𝙽𝚂𝚃𝙰-𝙳𝙻
> - - - - - - - - - - - - - - - - 
> Sᴄʀɪᴘᴛ ᴅᴇ ᴅᴏᴡɴʟᴏᴀᴅ ᴘᴀʀᴀ ᴘᴏsᴛs ᴇ ʀᴇᴇʟs ᴅᴏ ɪɴsᴛᴀɢʀᴀᴍ. 

Usᴇ ᴏ ᴄᴏᴍᴀɴᴅᴏ ᴄᴏᴍᴏ ɴᴏ ᴇxᴇᴍᴘʟᴏ ᴀ sᴇɢᴜɪʀ: 
.𝑖𝑛𝑠𝑡𝑎𝑑𝑙 <𝑙𝑖𝑛𝑘>
` 
         : 
         `┌──[ BYΓΞSΞC ]─[~/instaloader] 
└─ $ instadl --help
> ‎
> ‎[!] 𝙸𝙽𝚂𝚃𝙰-𝙳𝙻
> - - - - - - - - - - - - - - - - 
> Dᴏᴡɴʟᴏᴀᴅᴇʀ sᴄʀɪᴘᴛ ꜰᴏʀ ʀᴇᴇʟs ᴀɴᴅ ᴘᴏsᴛs ᴏꜰ ɪɴsᴛᴀɢʀᴀᴍ. 

Usᴇ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ᴀs ɪɴ ᴛʜᴇ ᴇxᴀᴍᴘʟᴇ ʙᴇʟᴏᴡ:
.𝑖𝑛𝑠𝑡𝑎𝑑𝑙 <𝑙𝑖𝑛𝑘>
` 


if (!args[0]) throw messageTxt 

  const { key } = await conn.sendMessage(m.chat, {text: wait}, {quoted: fkontak});
// await delay(1000 * 2);
await conn.sendMessage(m.chat, {text: waitt, edit: key});
await conn.sendMessage(m.chat, {text: waittt, edit: key});
await conn.sendMessage(m.chat, {text: waitttt, edit: key});
    
    
    try{
      


const data = await igdl(text)
console.log(data) // JSON


await conn.sendFile(m.chat,data[0].url, 'err',null,m)
} 
catch(e) {
console.log('erro igs') 
console.log(e)
sendSystemErrorAlert(global.db.data.chats[m.chat].language || "en");

}
  
}
handler.help = ['instagram <link ig>']
handler.tags = ['downloader']
handler.command =['ig']
handler.limit = 0
handler.level = 6

export default handler
