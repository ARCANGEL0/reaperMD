
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

/* Created by https://github.com/unptoadrih15 */

let handler = async (m, { conn,isAdmin,isOwner, text, usedPrefix, command }) => {
  
 if(!(isAdmin || isOwner) && global.db.data.chats[m.chat].busca===false){
   m.react("❌")
   
   return !0;
 } 
  
if (!text) throw `${langTOGGLE['smsAvisoMG']()}
╭━━━━━━━━━⬣
┃
┃ ✒️📜 𝘿𝙚𝙨𝙫𝙚𝙣𝙙𝙖-𝙢𝙚 𝙤𝙨 𝙧𝙚𝙘𝙚𝙨𝙨𝙤𝙨 
┃ 𝙙𝙤 𝙖𝙗𝙨𝙪𝙧𝙙𝙤 𝙙𝙚 𝙩𝙚 𝙙𝙚𝙨𝙚𝙟𝙤 𝙚 
┃ 𝙞𝙢𝙖𝙜𝙞𝙣𝙖𝙘𝙖𝙤, 𝙤𝙣𝙙𝙚 𝙨𝙤𝙢𝙗𝙧𝙖𝙨 
┃ 𝙚𝙩𝙚𝙧𝙚𝙖𝙨 𝙙𝙖𝙣𝙘𝙖𝙢 𝙣𝙖 𝙛𝙧𝙖𝙜𝙞𝙡 
┃ 𝙖𝙡𝙘𝙤𝙫𝙖 𝙙𝙚 𝙨𝙚𝙪𝙨 𝙫𝙞𝙨 
┃ 𝙥𝙚𝙣𝙨𝙖𝙢𝙚𝙣𝙩𝙤𝙨
┃
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝐄𝐱𝐞𝐦𝐩𝐥𝐨:
┃ ${usedPrefix + command} Gato preto*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
┃ 𝓔𝓭𝓰𝓪𝓻 𝓐𝓵𝓵𝓪𝓷 𝓑𝓸𝓽 🐈‍⬛ | ${vs}
╰━━━━━━━━━━━━━━━━━━⬣`
  
  
let url = `https://api.lolhuman.xyz/api/gimage2?apikey=${lolkeysapi}&query=${text}`

fetch(url)
  .then(response => response.json())
  .then(async (data) =>{  
  
 
 
 // Assuming 'result' is your variable containing the data

// Extract the 'data' array from the result
const imgArray = data.result;

// Get a random index within the length of the array
const randomIndex = Math.floor(Math.random() * imgArray.length);
const randomIndex2 = Math.floor(Math.random() * imgArray.length);
try{
  let check1 = await fetch(`https://itzpire.com/tools/nsfwcheck?url=${imgArray[randomIndex]}`)
  let res= await check1.json()
  console.log(`https://itzpire.com/tools/nsfwcheck?url=${imgArray[randomIndex]}`)
  let check2 = await fetch(`https://itzpire.com/tools/nsfwcheck?url=${imgArray[randomIndex2]}`)
  let res2= await check2.json()
  console.log(res2)
  
function isNSFW(res, thresh = 0.6) {
  const nsfw = res.data.find(e => e.label === 'nsfw');
  return nsfw && nsfw.score > thresh;
}

const result1 = isNSFW(res);
const result2 = isNSFW(res2);
console.log(`NSFW? 1: ${result1}`)
console.log(`NSFW? 2: ${result2}`)
if(result1 && !result2){
 
  conn.sendFile(m.chat, imgArray[randomIndex2], 'error.jpg', null, m)
  
}
else if(!result1 && result2)
{
  

  conn.sendFile(m.chat, imgArray[randomIndex], 'error.jpg', null, m)
}
else if (!result1 && !result2){
  conn.sendFile(m.chat, imgArray[randomIndex], 'error.jpg', null, m)
  conn.sendFile(m.chat, imgArray[randomIndex2], 'error.jpg', null, m)
}
else if(result1 && result2)
{
  m.react("🔞")
}
  }
    catch(e){
      m.react("❌")
    }
  } )
    
  
  .catch(error => console.error('Error:', error));
  
  
};
handler.level = 6
handler.command = ['img']
export default handler;
