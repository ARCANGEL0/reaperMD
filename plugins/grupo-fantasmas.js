
//⌬──────────────────────────────────────
//┃  ༒ 𝑫𝑬𝑽𝑬𝑳𝑶𝑷𝑬𝑫 𝑩𝒀 𝑯𝑬𝑵𝑹𝒀 𝑨𝑹𝑪𝑨𝑵𝑮𝑬𝑳𝑶  ༒
//┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
//┃ ✞ঔৣ 𝙿𝚕𝚎𝚊𝚜𝚎 𝚌𝚛𝚎𝚍𝚒𝚝 𝚒𝚏 𝚢𝚘𝚞 𝚞𝚜𝚎 𝚝𝚑𝚎 𝚌𝚘𝚍𝚎 ঔৣ✞
//┃ 𖤍 𝘾𝙤𝙣𝙩𝙖𝙘𝙩-𝙢𝙚 𝙛𝙤𝙧 𝙖𝙣𝙮 𝙙𝙤𝙪𝙗𝙩
// ╰─...⌬─────────────────────────────────

//import { areJidsSameUser } from '@adiwajshing/baileys'
let areJidsSameUser =  await import(global.baileys)


let handler = async (m, { conn, text, participants, args, command }) => {
let member = participants.map(u => u.id)
if(!text) {
var sum = member.length
} else {
var sum = text} 
var total = 0
var sider = []
for(let i = 0; i < sum; i++) {
let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
if((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
if (typeof global.db.data.users[member[i]] !== 'undefined'){
if(global.db.data.users[member[i]].whitelist == false){
total++
sider.push(member[i])}
}else {
total++
sider.push(member[i])}}}
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "fantasmas": 
  console.log(sider)
     if(total == 0) return conn.reply(m.chat, `╭━━━━━━━━━⬣ 𖤐
┃  𝙊 𝙂𝙍𝙐𝙋𝙊 𝙎𝙀 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝘼
┃ 𝘼𝙏𝙄𝙑𝙊 𝙎𝙀𝙈 𝙁𝘼𝙉𝙏𝘼𝙎𝙈𝘼𝙎 
╰━━━━━━━━━━━━━━━━━━⬣ 𖤐`, m) 
m.reply(`╭─┅──┅❖ ϯ ❖─┅──┅
┃ 𝔩𝔦𝔰𝔱𝔞 𝔡𝔢 𝔣𝔞𝔫𝔱𝔞𝔰𝔪𝔞𝔰 ♱
┃
${sider.map(v => '┃ 𖤐 @' + v.replace(/@.+/, '')).join('\n')}
┃
┃ Dɪɢɪᴛᴇ _*.apagarfantasmas*_ ᴘᴀʀᴀ
┃ ᴇxᴘᴜʀɢᴀʀ ᴇsᴛᴇs ᴍᴇᴍʙʀᴏs
*╰─┅──┅❖ ⸸ ❖─┅──┅*`, null, { mentions: sider }) 
  break  
  
  
case "apagarfantasmas":  
        if(total == 0) return conn.reply(m.chat, `╭━━━━━━━━━⬣ 𖤐
┃  𝙊 𝙂𝙍𝙐𝙋𝙊 𝙎𝙀 𝙀𝙉𝘾𝙊𝙉𝙏𝙍𝘼
┃ 𝘼𝙏𝙄𝙑𝙊 𝙎𝙀𝙈 𝙁𝘼𝙉𝙏𝘼𝙎𝙈𝘼𝙎 
╰━━━━━━━━━━━━━━━━━━⬣ 𖤐`, m) 
     
       await m.reply(`╭─┅──┅❖ ϯ ❖─┅──┅
┃ 𝔩𝔦𝔰𝔱𝔞 𝔡𝔢 𝔣𝔞𝔫𝔱𝔞𝔰𝔪𝔞𝔰 ♱
┃
┃ 𝑶𝒔 𝒎𝒆𝒎𝒃𝒓𝒐𝒔 𝒊𝒏𝒂𝒕𝒊𝒗𝒐𝒔 𝒂 𝒔𝒆𝒈𝒖𝒊𝒓 𝒔𝒆𝒓𝒂𝒐 𝒆𝒙𝒑𝒖𝒍𝒔𝒐𝒔 𝒅𝒐 𝒈𝒓𝒖𝒑𝒐!
┃ җ ᵒᵇˢ - ᵐᵉᵗᵒᵈᵒ ⁿᵃᵒ ᵉ ⁱⁿᵗᵉⁱʳᵃᵐᵉⁿᵗᵉ ᵍᵃʳᵃⁿᵗⁱᵈᵒ
┃
${sider.map(v => '┃ 𖤐 @' + v.replace(/@.+/, '')).join('\n')}
┃
*╰─┅──┅❖ ⸸ ❖─┅──┅*`, null, { mentions: sider }) 
       await delay(1 * 10000)
       let chat = global.db.data.chats[m.chat]
       chat.welcome = false
       try{
       
        
       for (let user of sider)
          await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
         
       } finally{
        chat.welcome = true
       }
       
       
break            
}}
handler.command = /^(fantasmas|apagarfantasmas)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


    //desarrollado por https://github.com/ReyEndymion
    //participa en desactivacion de despedida https://github.com/BrunoSobrino/


