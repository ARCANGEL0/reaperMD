
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

import fs from "fs";
import FormData from "form-data";
import fetch from "node-fetch"
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { unlinkSync, readFileSync} from 'fs'
import { fileURLToPath } from 'url';
import { join, dirname } from 'path';

import { exec } from 'child_process'

const handler = async (m, {args,conn,isAdmin,isOwner}) => {
  if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].midia===false){
   m.react("❌")
   
   return !0;
 } 
 
 
 
      
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
 
 const q = m.quoted ? m.quoted : m;
  
 
  const mime = (q.msg || q).mimetype || q.mediaType || '';
  
  
  
    
   
   
 if(!args[0]){
   m.reply(`─┅──┅❖  ❖─┅──┅ 
   𝑪𝒐𝒎𝒂𝒏𝒅𝒐 𝒊𝒏𝒗𝒂𝒍𝒊𝒅𝒐. ❌👁️
   𝑷𝒂𝒓𝒂 𝒖𝒔𝒂𝒓 𝒐𝒔 𝒕𝒐𝒂𝒏𝒊𝒎𝒆𝒔..
   𝒖𝒔𝒆 .𝒆𝒇𝒆𝒊𝒕𝒐𝒗𝒊𝒅 [𝒆𝒇𝒆𝒊𝒕𝒐]
   
𝑬𝒔𝒕𝒊𝒍𝒐𝒔 𝒅𝒊𝒔𝒑𝒐𝒏í𝒗𝒆𝒊𝒔:
♱ 𝒇𝒊𝒓𝒆
♱ 𝒅𝒆𝒎𝒐𝒏
♱ 𝒔𝒕𝒖𝒅𝒊𝒐
♱ 𝒔𝒄𝒉𝒐𝒐𝒍
♱ 𝒕𝒓𝒂𝒅𝒊𝒕𝒊𝒐𝒏
♱ 𝒄𝒉𝒊𝒃𝒊
♱ 𝒗𝒊𝒏𝒕𝒂𝒈𝒆
♱ 𝒉𝒐𝒓𝒓𝒐𝒓
♱ 𝒇𝒍𝒂𝒎𝒆
♱ 𝒑𝒓𝒊𝒏𝒄𝒆
♱ 𝒚𝒖𝒌𝒊
♱ 𝒇𝒖𝒕𝒖𝒓𝒆
♱ 𝒊𝒔𝒆𝒌𝒂𝒊
♱ 𝒔𝒑𝒂𝒄𝒆
♱ 𝒎𝒂𝒏𝒈𝒂
♱ 𝒓𝒐𝒄𝒌𝒔𝒕𝒂𝒓
♱ 𝒈𝒉𝒐𝒔𝒕
♱ 𝒇𝒐𝒐𝒕𝒃𝒂𝒍𝒍
♱ 𝒕𝒆𝒄𝒉
♱ 𝒔𝒖𝒓𝒗𝒊𝒗𝒐𝒓
♱ 𝒑𝒂𝒍𝒂𝒅𝒊𝒏
♱ 𝒓𝒐𝒎𝒂𝒏𝒕𝒊𝒄
♱ 𝒄𝒚𝒃𝒆𝒓𝒑𝒖𝒏𝒌
♱ 𝒈𝒂𝒍𝒂𝒙𝒚
♱ 𝒔𝒉𝒊𝒏𝒐𝒃𝒊
♱ 𝒇𝒂𝒏𝒕𝒂𝒔𝒚
♱ 𝒕𝒐𝒌𝒚𝒐
♱ 𝒍𝒂𝒘𝒚𝒆𝒓
♱ 𝒃-𝒃𝒂𝒍𝒍♱ 𝒔𝒉𝒐𝒏𝒆𝒏
♱ 𝒃𝒂𝒕𝒕𝒍𝒆
♱ 𝒊𝒄𝒆
♱ 𝒂𝒒𝒖𝒂
♱ 𝒔𝒕𝒆𝒍𝒍𝒂𝒓
♱ 𝒇𝒖𝒓𝒚
♱ 𝒆𝒍𝒇
♱ 𝒔𝒐𝒓𝒄𝒆𝒓𝒆𝒓
♱ 𝒎𝒆𝒅𝒊𝒆𝒗𝒂𝒍
♱ 𝒗𝒂𝒎𝒑𝒊𝒓𝒆
♱ 𝒄𝒉𝒂𝒐𝒕𝒊𝒄
♱ 𝒗𝒊𝒍𝒍𝒂𝒊𝒏
♱ 𝒉𝒂𝒎𝒎𝒆𝒓
♱ 𝒕𝒐𝒙𝒊𝒄
♱ 𝒔𝒆𝒓𝒑𝒆𝒏𝒕
♱ 𝒄𝒍𝒐𝒘𝒏
♱ 𝒔𝒐𝒍𝒅𝒊𝒆𝒓
♱ 𝒄𝒐𝒃𝒓𝒂
♱ 𝒘𝒂𝒓𝒓𝒊𝒐𝒓
♱ 𝒏𝒊𝒏𝒋𝒂
♱ 𝒅𝒚𝒔𝒕𝒐𝒑𝒊𝒂
♱ 𝒏𝒐𝒃𝒍𝒆
♱ 𝒅𝒆𝒕𝒆𝒄𝒕𝒊𝒗𝒆
♱ 𝒔𝒕𝒆𝒂𝒎𝒑𝒖𝒏𝒌
♱ 𝒑𝒊𝒓𝒂𝒕𝒆
♱ 𝒄𝒂𝒗𝒆𝒎𝒂𝒏
♱ 𝒌𝒏𝒊𝒈𝒉𝒕
♱ 𝒔𝒕𝒖𝒅𝒆𝒏𝒕
♱ 𝒘𝒆𝒔𝒕𝒆𝒓𝒏
♱ 𝒆𝒙𝒑𝒍𝒐𝒓𝒆𝒓
♱ 𝒇𝒆𝒔𝒕𝒊𝒗𝒂𝒍
♱ 𝒄𝒐𝒓𝒑𝒔𝒆
♱ 𝒑𝒓𝒊𝒏𝒄𝒆𝒔𝒔
♱ 𝒊𝒏𝒗𝒆𝒏𝒕𝒐𝒓
♱ 𝒔𝒖𝒑𝒆𝒓𝒉𝒆𝒓𝒐
♱ 𝒐𝒄𝒆𝒂𝒏
♱ 𝒅𝒓𝒂𝒈𝒐𝒏
♱ 𝒔𝒑𝒆𝒍𝒍
♱ 𝒇𝒊𝒔𝒉𝒆𝒓𝒎𝒂𝒏
♱ 𝒇𝒓𝒐𝒔𝒕
♱ 𝒆𝒍𝒅𝒆𝒓
♱ 𝒉𝒖𝒍𝒂
♱ 𝒂𝒍𝒊𝒆𝒏
♱ 𝒐𝒇𝒇𝒊𝒄𝒆𝒓
♱ 𝒅𝒆𝒇𝒆𝒏𝒅𝒆𝒓
♱ 𝒔𝒌𝒆𝒍𝒆𝒕𝒐𝒏
♱ 𝒆𝒗𝒊𝒍
♱ 𝒔𝒕𝒐𝒏𝒆𝒂𝒈𝒆
─┅──┅❖ ִ𖤐 ❖─┅──┅   `)
return !0
 }
 let styleMappings = {
        'fire': 'fire',
        'demon': 'demon',
        'studio': 'studio',
        'school': 'school',
        'tradition': 'tradition',
        'chibi': 'chibi',
        'vintage': 'vintage',
        'horror': 'horror',
        'flame': 'flame',
        'prince': 'prince',
        'yuki': 'yuki',
        'future': 'future',
        'isekai': 'isekai',
        'space': 'space',
        'manga': 'manga',
        'rockstar': 'rockstar',
        'ghost': 'ghost',
        'football': 'football',
        'tech': 'tech',
        'survivor': 'survivor',
        'paladin': 'paladin',
        'romantic': 'romantic',
        'cyberpunk': 'cyberpunk',
        'galaxy': 'galaxy',
        'shinobi': 'shinobi',
        'fantasy': 'fantasy',
        'tokyo': 'tokyo',
        'lawyer': 'lawyer',
        'b-ball': 'b-ball',
        'shonen': 'shonen',
        'battle': 'battle',
        'ice': 'ice',
        'aqua': 'aqua',
        'stellar': 'stellar',
        'fury': 'fury',
        'elf': 'elf',
        'sorcerer': 'sorcerer',
        'medieval': 'medieval',
        'vampire': 'vampire',
        'chaotic': 'chaotic',
        'villain': 'villain',
        'hammer': 'hammer',
        'toxic': 'toxic',
        'serpent': 'serpent',
        'clown': 'clown',
        'soldier': 'soldier',
        'cobra': 'cobra',
        'warrior': 'warrior',
        'ninja': 'ninja',
        'dystopia': 'dystopia',
        'noble': 'noble',
        'detective': 'detective',
        'steampunk': 'steampunk',
        'pirate': 'pirate',
        'caveman': 'caveman',
        'knight': 'knight',
        'student': 'student',
        'western': 'western',
        'explorer': 'explorer',
        'festival': 'festival',
        'corpse': 'corpse',
        'princess': 'princess',
        'inventor': 'inventor',
        'superhero': 'superhero',
        'ocean': 'ocean',
        'dragon': 'dragon',
        'spell': 'spell',
        'fisherman': 'fisherman',
        'frost': 'frost',
        'elder': 'elder',
        'hula': 'hula',
        'alien': 'alien',
        'officer': 'officer',
        'defender': 'defender',
        'skeleton': 'skeleton',
        'evil': 'evil',
        'stoneage': 'stoneage'
    };

    let styleId = styleMappings[args[0]];

    if (!styleId) {
           m.reply(`─┅──┅❖  ❖─┅──┅ 
   𝑪𝒐𝒎𝒂𝒏𝒅𝒐 𝒊𝒏𝒗𝒂𝒍𝒊𝒅𝒐. ❌👁️
   𝑷𝒂𝒓𝒂 𝒖𝒔𝒂𝒓 𝒐𝒔 𝒕𝒐𝒂𝒏𝒊𝒎𝒆𝒔..
 𝒖𝒔𝒆 .𝒆𝒇𝒆𝒊𝒕𝒐𝒗𝒊𝒅 [𝒆𝒇𝒆𝒊𝒕𝒐]
   
𝑬𝒔𝒕𝒊𝒍𝒐𝒔 𝒅𝒊𝒔𝒑𝒐𝒏í𝒗𝒆𝒊𝒔:
♱ 𝒇𝒊𝒓𝒆
♱ 𝒅𝒆𝒎𝒐𝒏
♱ 𝒔𝒕𝒖𝒅𝒊𝒐
♱ 𝒔𝒄𝒉𝒐𝒐𝒍
♱ 𝒕𝒓𝒂𝒅𝒊𝒕𝒊𝒐𝒏
♱ 𝒄𝒉𝒊𝒃𝒊
♱ 𝒗𝒊𝒏𝒕𝒂𝒈𝒆
♱ 𝒉𝒐𝒓𝒓𝒐𝒓
♱ 𝒇𝒍𝒂𝒎𝒆
♱ 𝒑𝒓𝒊𝒏𝒄𝒆
♱ 𝒚𝒖𝒌𝒊
♱ 𝒇𝒖𝒕𝒖𝒓𝒆
♱ 𝒊𝒔𝒆𝒌𝒂𝒊
♱ 𝒔𝒑𝒂𝒄𝒆
♱ 𝒎𝒂𝒏𝒈𝒂
♱ 𝒓𝒐𝒄𝒌𝒔𝒕𝒂𝒓
♱ 𝒈𝒉𝒐𝒔𝒕
♱ 𝒇𝒐𝒐𝒕𝒃𝒂𝒍𝒍
♱ 𝒕𝒆𝒄𝒉
♱ 𝒔𝒖𝒓𝒗𝒊𝒗𝒐𝒓
♱ 𝒑𝒂𝒍𝒂𝒅𝒊𝒏
♱ 𝒓𝒐𝒎𝒂𝒏𝒕𝒊𝒄
♱ 𝒄𝒚𝒃𝒆𝒓𝒑𝒖𝒏𝒌
♱ 𝒈𝒂𝒍𝒂𝒙𝒚
♱ 𝒔𝒉𝒊𝒏𝒐𝒃𝒊
♱ 𝒇𝒂𝒏𝒕𝒂𝒔𝒚
♱ 𝒕𝒐𝒌𝒚𝒐
♱ 𝒍𝒂𝒘𝒚𝒆𝒓
♱ 𝒃-𝒃𝒂𝒍𝒍♱ 𝒔𝒉𝒐𝒏𝒆𝒏
♱ 𝒃𝒂𝒕𝒕𝒍𝒆
♱ 𝒊𝒄𝒆
♱ 𝒂𝒒𝒖𝒂
♱ 𝒔𝒕𝒆𝒍𝒍𝒂𝒓
♱ 𝒇𝒖𝒓𝒚
♱ 𝒆𝒍𝒇
♱ 𝒔𝒐𝒓𝒄𝒆𝒓𝒆𝒓
♱ 𝒎𝒆𝒅𝒊𝒆𝒗𝒂𝒍
♱ 𝒗𝒂𝒎𝒑𝒊𝒓𝒆
♱ 𝒄𝒉𝒂𝒐𝒕𝒊𝒄
♱ 𝒗𝒊𝒍𝒍𝒂𝒊𝒏
♱ 𝒉𝒂𝒎𝒎𝒆𝒓
♱ 𝒕𝒐𝒙𝒊𝒄
♱ 𝒔𝒆𝒓𝒑𝒆𝒏𝒕
♱ 𝒄𝒍𝒐𝒘𝒏
♱ 𝒔𝒐𝒍𝒅𝒊𝒆𝒓
♱ 𝒄𝒐𝒃𝒓𝒂
♱ 𝒘𝒂𝒓𝒓𝒊𝒐𝒓
♱ 𝒏𝒊𝒏𝒋𝒂
♱ 𝒅𝒚𝒔𝒕𝒐𝒑𝒊𝒂
♱ 𝒏𝒐𝒃𝒍𝒆
♱ 𝒅𝒆𝒕𝒆𝒄𝒕𝒊𝒗𝒆
♱ 𝒔𝒕𝒆𝒂𝒎𝒑𝒖𝒏𝒌
♱ 𝒑𝒊𝒓𝒂𝒕𝒆
♱ 𝒄𝒂𝒗𝒆𝒎𝒂𝒏
♱ 𝒌𝒏𝒊𝒈𝒉𝒕
♱ 𝒔𝒕𝒖𝒅𝒆𝒏𝒕
♱ 𝒘𝒆𝒔𝒕𝒆𝒓𝒏
♱ 𝒆𝒙𝒑𝒍𝒐𝒓𝒆𝒓
♱ 𝒇𝒆𝒔𝒕𝒊𝒗𝒂𝒍
♱ 𝒄𝒐𝒓𝒑𝒔𝒆
♱ 𝒑𝒓𝒊𝒏𝒄𝒆𝒔𝒔
♱ 𝒊𝒏𝒗𝒆𝒏𝒕𝒐𝒓
♱ 𝒔𝒖𝒑𝒆𝒓𝒉𝒆𝒓𝒐
♱ 𝒐𝒄𝒆𝒂𝒏
♱ 𝒅𝒓𝒂𝒈𝒐𝒏
♱ 𝒔𝒑𝒆𝒍𝒍
♱ 𝒇𝒊𝒔𝒉𝒆𝒓𝒎𝒂𝒏
♱ 𝒇𝒓𝒐𝒔𝒕
♱ 𝒆𝒍𝒅𝒆𝒓
♱ 𝒉𝒖𝒍𝒂
♱ 𝒂𝒍𝒊𝒆𝒏
♱ 𝒐𝒇𝒇𝒊𝒄𝒆𝒓
♱ 𝒅𝒆𝒇𝒆𝒏𝒅𝒆𝒓
♱ 𝒔𝒌𝒆𝒍𝒆𝒕𝒐𝒏
♱ 𝒆𝒗𝒊𝒍
♱ 𝒔𝒕𝒐𝒏𝒆𝒂𝒈𝒆
─┅──┅❖ ִ𖤐 ❖─┅──┅   `)
return !0
    } 
    
    
const qs = m.quoted ? m.quoted : m;
const mimee = (qs.msg || qs).mimetype || qs.mediaType || '';

  m.reply(`${langTOGGLE.smsAvisoIIG()}❖─┅──┅ \n🕯️📜 𝐄𝐦 𝐛𝐫𝐞𝐯𝐞 𝐭𝐫𝐚𝐫𝐞𝐢 𝐚 𝐢𝐦𝐚𝐠𝐞𝐦 𝐝𝐞𝐬𝐨𝐥𝐚𝐝𝐨𝐫𝐚 𝐩𝐚𝐫𝐚 𝐭𝐮𝐚 𝐯𝐢𝐬𝐚𝐨. 𝐀𝐠𝐮𝐚𝐫𝐝𝐞 𝐮𝐦 𝐩𝐨𝐮𝐜𝐨 𝐩𝐞𝐥𝐨 𝐫𝐞𝐯𝐞𝐥𝐚𝐫 𝐝𝐨 𝐪𝐮𝐞 𝐬𝐮𝐛𝐣𝐚𝐳 𝐧𝐚𝐬 𝐩𝐫𝐨𝐟𝐮𝐧𝐝𝐞𝐳𝐚𝐬 𝐝𝐨 𝐦𝐞𝐮𝐬 𝐨𝐛𝐬𝐜𝐮𝐫𝐨𝐬 𝐭𝐫𝐞𝐜𝐡𝐨𝐬 𝐝𝐞 𝐜𝐨𝐝𝐢𝐠𝐨𝐬\n─┅──┅❖ `);
   
let ran = getRandom('.mp4');
  const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Your code using path.join
const filename = join(__dirname, '../tmp/', ran)
let media = await qs.download(true);

try {
  
  let buff = await readFileSync(media)
 await fs.writeFile(filename, buff, 'binary', (err) => {
  if (err) {
    console.error('Error saving MP4 file:', err);
  } else {
    console.log('MP3 file saved successfully:', filename);
    // Additional code for further processing if needed
  }
});
console.log(styleId)
const formData = new FormData();
formData.append('file', fs.createReadStream(filename), { filename: ran, contentType: 'video/mp4' });





const apiUrl = `https://api.itsrose.life/image/vid2vid?style=${styleId}`;
const authToken = '7fCXVAgj9bzXu6mxF1GSzkV6MBOfqx0vqKTvFtIwq9LTFKbcCSjreA3jzTYHjVyq';

let response = await fetch(apiUrl, {
  method: 'POST',
  headers: {
    'accept': '*/*',
    'Authorization': authToken,
  },
  body: formData
})
  .then(response => response.json())
  .then(data => {
    console.log(data)
    console.log(data.result.video)
    
     fetch(data.result.video)
          .then(response => response.buffer())
          .then(buffer => {
            // Send the buffer
            conn.sendFile(m.chat, buffer, 'error.mp4', null, m);
          })
          .catch(error => {
            console.error('Error fetching file:', error);
          });
  
  }
  )
  .catch(error => console.error('Error:', error));
    
    



} catch (e) {
  console.log(e)
throw `${langTOGGLE.smsAvisoFG()}❖─┅──┅\n𝗘𝗥𝗥𝗢 💀
𝗩𝗘𝗥𝗜𝗙𝗜𝗤𝗨𝗘 𝗦𝗘 𝗛Á 𝗗𝗘 𝗙𝗔𝗧𝗢 𝗔 𝗙𝗔𝗖𝗘 𝗗𝗘 𝗔𝗟𝗚𝗨𝗠𝗔 𝗣𝗢𝗕𝗥𝗘 𝗔𝗟𝗠𝗔 𝗡𝗘𝗦𝗧𝗔 𝗙𝗢𝗧𝗢\n─┅──┅❖ `
}

  
  
  
  
  
  

 
  
  

  
  
  
  
};

handler.tags = ['maker'];
handler.command = ['filtrovid']
handler.level= 23
export default handler;

const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`}
